// QuickCRM — Tweaks
// 3 expressive controls that reshape the feel of the page.

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": 0,
  "mood": "modern",
  "dark": false
}/*EDITMODE-END*/;

// ─── Curated palettes ───
// Each is [brand-dark, brand-mid, brand-light, accent]
const PALETTES = [
  { id: "trust",   name: "Trust Blue",    colors: ["#0b3b8c", "#1e5bd6", "#3b82f6", "#06b6a4"] },
  { id: "teal",    name: "Quiet Teal",    colors: ["#0f766e", "#0d9488", "#06b6a4", "#f59e0b"] },
  { id: "indigo",  name: "Tech Indigo",   colors: ["#3730a3", "#4f46e5", "#8b5cf6", "#22d3ee"] },
  { id: "slate",   name: "Mono Slate",    colors: ["#0f172a", "#334155", "#64748b", "#0ea5e9"] },
  { id: "amber",   name: "Warm Amber",    colors: ["#7c2d12", "#c2410c", "#f59e0b", "#0d9488"] }
];

// ─── Moods — bundle radius + weight + button shape + hero treatment ───
const MOODS = {
  classic: {
    label: "Classic",
    radius: 6,
    headingWeight: 700,
    btnPill: false,
    heroBg: "subtle",
    fontHeading: '"Noto Sans JP","Hiragino Sans","Yu Gothic UI",system-ui,sans-serif',
    letter: "0.005em"
  },
  modern: {
    label: "Modern",
    radius: 14,
    headingWeight: 800,
    btnPill: true,
    heroBg: "gradient",
    fontHeading: '"Inter","Noto Sans JP",system-ui,sans-serif',
    letter: "-0.01em"
  },
  bold: {
    label: "Bold",
    radius: 22,
    headingWeight: 800,
    btnPill: true,
    heroBg: "blob",
    fontHeading: '"Inter","Noto Sans JP",system-ui,sans-serif',
    letter: "-0.02em"
  }
};

function softTint(hex, alpha) {
  const m = hex.replace("#", "");
  const r = parseInt(m.substring(0, 2), 16);
  const g = parseInt(m.substring(2, 4), 16);
  const b = parseInt(m.substring(4, 6), 16);
  const mix = (c) => Math.round(c * alpha + 255 * (1 - alpha));
  return `rgb(${mix(r)},${mix(g)},${mix(b)})`;
}

function applyTweaks(t) {
  const root = document.documentElement;
  const body = document.body;

  // Palette
  const pal = PALETTES[t.palette] || PALETTES[0];
  const [brand, brand2, brand3, accent] = pal.colors;
  root.style.setProperty("--brand", brand);
  root.style.setProperty("--brand-2", brand2);
  root.style.setProperty("--brand-3", brand3);
  root.style.setProperty("--brand-soft", softTint(brand2, 0.10));
  root.style.setProperty("--accent", accent);

  // Mood
  const mood = MOODS[t.mood] || MOODS.modern;
  root.style.setProperty("--radius", mood.radius + "px");
  root.style.setProperty("--radius-lg", (mood.radius + 8) + "px");
  root.style.setProperty("--radius-xl", (mood.radius + 14) + "px");
  root.style.setProperty("--btn-radius", mood.btnPill ? "999px" : (mood.radius + "px"));
  root.style.setProperty("--heading-weight", String(mood.headingWeight));
  root.style.setProperty("--heading-letter", mood.letter);
  root.style.setProperty("--font-heading", mood.fontHeading);

  // Mood class on body (drives hero background variants)
  body.classList.remove("mood-classic", "mood-modern", "mood-bold");
  body.classList.add("mood-" + t.mood);

  // Theme
  body.classList.toggle("theme-dark", !!t.dark);
}

function TweaksApp() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => { applyTweaks(t); }, [t]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Palette" />
      <TweakColor
        label="ブランド配色"
        value={PALETTES[t.palette].colors.slice(0, 3)}
        options={PALETTES.map(p => p.colors.slice(0, 3))}
        onChange={(v) => {
          const idx = PALETTES.findIndex(p => p.colors[0] === v[0]);
          setTweak("palette", idx >= 0 ? idx : 0);
        }}
      />

      <TweakSection label="Mood" />
      <TweakRadio
        label="トーン"
        value={t.mood}
        options={[
          { value: "classic", label: "Classic" },
          { value: "modern",  label: "Modern" },
          { value: "bold",    label: "Bold" }
        ]}
        onChange={(v) => setTweak("mood", v)}
      />

      <TweakSection label="Theme" />
      <TweakToggle
        label="ダークモード"
        value={t.dark}
        onChange={(v) => setTweak("dark", v)}
      />
    </TweaksPanel>
  );
}

applyTweaks(TWEAK_DEFAULTS);

const mount = document.getElementById("tweaks-root");
if (mount) {
  ReactDOM.createRoot(mount).render(<TweaksApp />);
}
