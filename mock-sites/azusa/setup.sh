#!/usr/bin/env bash
# AZUSA — あずさ会計事務所 / WordPress 一発プロビジョニング (Docker / colima)
# Usage:  ./setup.sh
set -euo pipefail

export PATH="/opt/homebrew/bin:$PATH"
cd "$(dirname "$0")"

SITE_URL="http://localhost:8082"
TITLE="あずさ会計事務所"
ADMIN_USER="admin"
ADMIN_PASS="admin12345"
ADMIN_EMAIL="admin@example.com"

echo "==> 1/6 Docker エンジンを確認"
docker info >/dev/null 2>&1 || { echo "Docker が起動していません。'colima start' を実行してください。"; exit 1; }

echo "==> 2/6 コンテナ起動"
docker compose up -d

wp() { docker compose exec -T wpcli wp "$@"; }

echo "==> 3/6 DB / WordPress 待機（コア展開まで）"
for i in $(seq 1 60); do
  # wp-cli がコアを認識できるまで待つ（wp-load.php だけだと展開途中で進んでしまう）
  if wp core version >/dev/null 2>&1; then break; fi
  sleep 2
done

echo "==> 4/6 WordPress インストール"
if ! wp core is-installed 2>/dev/null; then
  wp core install \
    --url="$SITE_URL" \
    --title="$TITLE" \
    --admin_user="$ADMIN_USER" \
    --admin_password="$ADMIN_PASS" \
    --admin_email="$ADMIN_EMAIL" \
    --skip-email
fi
wp option update siteurl "$SITE_URL"
wp option update home "$SITE_URL"
wp option update blogdescription "東京・渋谷の税理士事務所｜税務顧問・創業支援・クラウド会計・経営支援"
wp option update timezone_string "Asia/Tokyo"
wp rewrite structure '/%postname%/' --hard
wp option update blogname "$TITLE"

echo "==> 5/6 テーマ有効化（有効化時に固定ページを自動生成）"
wp theme activate azusa
# 念のためシードを明示実行（冪等）
wp eval 'if (function_exists("az_run_seed")) { az_run_seed(); }'

echo "==> 6/6 パーマリンク再構築"
wp rewrite flush --hard

echo
echo "✅ 完了"
echo "  サイト   : $SITE_URL/"
echo "  管理画面 : $SITE_URL/wp-admin/  ($ADMIN_USER / $ADMIN_PASS)"
