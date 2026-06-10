#!/bin/bash
# =============================================================================
#  build-zip.sh
#  株式会社MITシステム研究所 サイト一式を、納品用ZIPとして書き出すスクリプト。
#
#  使い方:  bash build-zip.sh
#
#  方針（デグレ防止）:
#   - 正本は常にローカルの mock-sites/mitsys-renewal/ 配下のみ。
#   - このスクリプトは「正本 → 納品ZIP」を決定的に変換するだけ（毎回同じ結果）。
#   - 修正が入ったら mitsys-renewal/ を直して、このスクリプトを再実行するだけ。
#   - 除外対象（開発物・未参照画像）はこのスクリプトに集約。手作業の選別はしない。
# =============================================================================
set -euo pipefail

# --- 設定 ---------------------------------------------------------------
HERE="$(cd "$(dirname "$0")" && pwd)"
SRC="$(cd "$HERE/../mitsys-renewal" && pwd)"     # 正本（サイト本体）
README="$HERE/お読みください_デプロイ手順.txt"     # 同梱する手順書
OUTDIR="$HOME/Downloads"                          # ZIP出力先
STAMP="$(date +%Y%m%d)"
PKGNAME="mitsys-website"
ZIPPATH="$OUTDIR/${PKGNAME}_${STAMP}.zip"

# --- 作業ディレクトリ ---------------------------------------------------
WORK="$(mktemp -d)"
trap 'rm -rf "$WORK"' EXIT
PKG="$WORK/$PKGNAME"
SITE="$PKG/site"
mkdir -p "$SITE"

echo "正本: $SRC"
echo "出力: $ZIPPATH"
echo "------------------------------------------------------------"

# --- 1) サイト本体をコピー（開発物・未配信CSSを除外） -------------------
rsync -a \
  --exclude='.DS_Store' \
  --exclude='proposal-renewal/' \
  --exclude='index-b-carousel.html' \
  --exclude='index-no-tweaks.html' \
  --exclude='quickcrm-renewal/README.md' \
  --exclude='quickcrm-renewal/tweaks.jsx' \
  --exclude='quickcrm-renewal/tweaks-panel.jsx' \
  --exclude='quickcrm-renewal/index-no-tweaks.html' \
  --exclude='assets/service-banners/generated-drafts/' \
  --exclude='page-style.css' \
  "$SRC"/ "$SITE"/

# --- 2) 配信ファイルから参照されている画像名を収集 ----------------------
#     （page-style.css と開発物は既に除外済みなので、ここでは配信分のみ対象）
( cd "$SITE" && grep -rhoE '[A-Za-z0-9._/-]+\.(webp|png|jpg|jpeg|svg|ico|pdf|gif)' \
    --include='*.html' --include='*.css' --include='*.js' . ) \
  | sed 's#.*/##' | sort -u > "$WORK/keep.txt"

# --- 3) 参照されていない画像/PDFを削除（未使用の重複PNG等） --------------
DROPPED=0
while IFS= read -r -d '' f; do
  base="${f##*/}"
  if ! grep -qxF "$base" "$WORK/keep.txt"; then
    echo "  除外(未使用): ${f#$SITE/}"
    rm -f "$f"
    DROPPED=$((DROPPED+1))
  fi
done < <(find "$SITE" -type f \( -name '*.webp' -o -name '*.png' -o -name '*.jpg' \
            -o -name '*.jpeg' -o -name '*.svg' -o -name '*.ico' -o -name '*.pdf' -o -name '*.gif' \) -print0)

# 空になったディレクトリを掃除
find "$SITE" -type d -empty -delete

# --- 4) 手順書を同梱 ----------------------------------------------------
cp "$README" "$PKG/"

# --- 5) ZIP化（macOSの余分なメタを含めない） ---------------------------
mkdir -p "$OUTDIR"
rm -f "$ZIPPATH"
( cd "$WORK" && zip -r -X -q "$ZIPPATH" "$PKGNAME" -x '*.DS_Store' )

# --- 6) 結果サマリ ------------------------------------------------------
echo "------------------------------------------------------------"
echo "未使用画像の除外: ${DROPPED}件"
echo "同梱HTML:"
find "$SITE" -name '*.html' | sed "s#$SITE#  site#" | sort
echo "同梱サイズ(展開後): $(du -sh "$SITE" | cut -f1)"
echo "ZIPサイズ: $(du -h "$ZIPPATH" | cut -f1)"
echo "完成: $ZIPPATH"
