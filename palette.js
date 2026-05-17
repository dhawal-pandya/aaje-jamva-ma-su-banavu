// ── Rangoli & UI palette definitions ─────────────────────────────────────────
// Each palette overrides the five CSS vars used by the SVG and UI chrome.

const PALETTES = {
  // Default — warm saffron/gold/maroon (all year fallback)
  default: {
    "--r-outer":   "#FF6B00",   // outer large petals
    "--r-mid":     "#8B1A1A",   // medium petals
    "--r-inner":   "#E8A020",   // inner petals
    "--r-dot":     "#C8860A",   // dot rings
    "--r-frame":   "#4A0E0E",   // dashed outer frame + outer dots
    "--c-saffron": "#FF6B00",
    "--c-gold":    "#C8860A",
    "--c-maroon":  "#4A0E0E",
    "--c-bg":      "#FDF0D5",
    "--c-grid":    "#C8860A30",
  },
  // Seasonal
  summer: {
    "--r-outer":   "#FF8C00",
    "--r-mid":     "#D2691E",
    "--r-inner":   "#FFD700",
    "--r-dot":     "#FFA500",
    "--r-frame":   "#8B4513",
    "--c-saffron": "#FF8C00",
    "--c-gold":    "#FFA500",
    "--c-maroon":  "#8B4513",
    "--c-bg":      "#FEF0D0",
    "--c-grid":    "#FFA50032",
  },
  monsoon: {
    "--r-outer":   "#2E7D32",
    "--r-mid":     "#1B5E20",
    "--r-inner":   "#66BB6A",
    "--r-dot":     "#388E3C",
    "--r-frame":   "#1B5E20",
    "--c-saffron": "#388E3C",
    "--c-gold":    "#66BB6A",
    "--c-maroon":  "#1B5E20",
    "--c-bg":      "#D8EED8",
    "--c-grid":    "#388E3C32",
  },
  autumn: {
    "--r-outer":   "#E65100",
    "--r-mid":     "#BF360C",
    "--r-inner":   "#FF8F00",
    "--r-dot":     "#F57C00",
    "--r-frame":   "#4E342E",
    "--c-saffron": "#E65100",
    "--c-gold":    "#F57C00",
    "--c-maroon":  "#4E342E",
    "--c-bg":      "#FCE5C8",
    "--c-grid":    "#F57C0032",
  },
  winter: {
    "--r-outer":   "#1565C0",
    "--r-mid":     "#0D47A1",
    "--r-inner":   "#42A5F5",
    "--r-dot":     "#1976D2",
    "--r-frame":   "#0D47A1",
    "--c-saffron": "#1565C0",
    "--c-gold":    "#42A5F5",
    "--c-maroon":  "#0D47A1",
    "--c-bg":      "#CDDFF5",
    "--c-grid":    "#1976D232",
  },
  // Festival palettes
  navratri: {
    "--r-outer":   "#C62828",   // deep red — Navratri's aarti red
    "--r-mid":     "#AD1457",   // magenta
    "--r-inner":   "#F48FB1",   // rose gold
    "--r-dot":     "#E91E63",
    "--r-frame":   "#880E4F",
    "--c-saffron": "#C62828",
    "--c-gold":    "#E91E63",
    "--c-maroon":  "#880E4F",
    "--c-bg":      "#F9D0DF",
    "--c-grid":    "#E91E6332",
  },
  diwali: {
    "--r-outer":   "#FF6F00",   // deep amber
    "--r-mid":     "#E65100",
    "--r-inner":   "#FFD54F",   // gold flame
    "--r-dot":     "#FFA000",
    "--r-frame":   "#BF360C",
    "--c-saffron": "#FF6F00",
    "--c-gold":    "#FFA000",
    "--c-maroon":  "#BF360C",
    "--c-bg":      "#FDEFC0",
    "--c-grid":    "#FFA00032",
  },
  uttarayan: {
    "--r-outer":   "#0288D1",   // kite blue sky
    "--r-mid":     "#01579B",
    "--r-inner":   "#80D8FF",
    "--r-dot":     "#039BE5",
    "--r-frame":   "#01579B",
    "--c-saffron": "#0288D1",
    "--c-gold":    "#80D8FF",
    "--c-maroon":  "#01579B",
    "--c-bg":      "#C8E8FA",
    "--c-grid":    "#039BE532",
  },
  ganesh: {
    "--r-outer":   "#F57F17",   // turmeric orange
    "--r-mid":     "#E65100",
    "--r-inner":   "#FFEE58",   // marigold
    "--r-dot":     "#FB8C00",
    "--r-frame":   "#E65100",
    "--c-saffron": "#F57F17",
    "--c-gold":    "#FB8C00",
    "--c-maroon":  "#E65100",
    "--c-bg":      "#FEF5B0",
    "--c-grid":    "#FB8C0032",
  },
  holi: {
    "--r-outer":   "#E040FB",   // festival purple
    "--r-mid":     "#00BCD4",   // cyan
    "--r-inner":   "#FFEB3B",   // yellow
    "--r-dot":     "#FF4081",
    "--r-frame":   "#6A1B9A",
    "--c-saffron": "#E040FB",
    "--c-gold":    "#FFEB3B",
    "--c-maroon":  "#6A1B9A",
    "--c-bg":      "#EAD0F5",
    "--c-grid":    "#E040FB32",
  },
  ekadashi: {
    "--r-outer":   "#B0BEC5",   // silver-white calm
    "--r-mid":     "#78909C",
    "--r-inner":   "#ECEFF1",
    "--r-dot":     "#90A4AE",
    "--r-frame":   "#546E7A",
    "--c-saffron": "#78909C",
    "--c-gold":    "#90A4AE",
    "--c-maroon":  "#546E7A",
    "--c-bg":      "#E8ECEE",
    "--c-grid":    "#90A4AE32",
  },
  purnima: {
    "--r-outer":   "#E1BEE7",   // moonlight lavender
    "--r-mid":     "#9C27B0",
    "--r-inner":   "#F3E5F5",
    "--r-dot":     "#AB47BC",
    "--r-frame":   "#6A1B9A",
    "--c-saffron": "#9C27B0",
    "--c-gold":    "#AB47BC",
    "--c-maroon":  "#6A1B9A",
    "--c-bg":      "#E5D0F0",
    "--c-grid":    "#AB47BC32",
  },
  paryushana: {
    "--r-outer":   "#A5D6A7",   // gentle green — ahimsa
    "--r-mid":     "#388E3C",
    "--r-inner":   "#C8E6C9",
    "--r-dot":     "#4CAF50",
    "--r-frame":   "#1B5E20",
    "--c-saffron": "#388E3C",
    "--c-gold":    "#4CAF50",
    "--c-maroon":  "#1B5E20",
    "--c-bg":      "#D0EBD2",
    "--c-grid":    "#4CAF5032",
  },
  adhikmaas: {
    "--r-outer":   "#7E57C2",   // deep violet — extra auspicious month
    "--r-mid":     "#512DA8",
    "--r-inner":   "#B39DDB",
    "--r-dot":     "#9575CD",
    "--r-frame":   "#311B92",
    "--c-saffron": "#7E57C2",
    "--c-gold":    "#9575CD",
    "--c-maroon":  "#311B92",
    "--c-bg":      "#DDD0F5",
    "--c-grid":    "#9575CD32",
  },
};

// Subtle time-of-day overlays — applied on top of the season palette only.
// Festival/tithi palettes are left untouched (they carry their own mood).
const MEAL_OVERLAYS = {
  morning: {
    "--c-bg":      "#FFF4E8",   // sunrise cream — slightly pinkish
    "--c-grid":    "#FF8C0028",
    "--r-outer":   "#FF8C42",   // dawn orange
  },
  lunch: {},                    // midday — let the season palette speak
  snack: {
    "--c-bg":      "#FFFBF0",   // golden afternoon
    "--c-grid":    "#FFA50022",
  },
  dinner: {
    "--c-bg":      "#FFF0E0",   // candlelit evening
    "--c-grid":    "#C0602022",
    "--r-outer":   "#C8520A",   // deeper, warmer
  },
};

const SEASON_PALETTES = new Set(["summer","monsoon","autumn","winter"]);

function applyPalette(name, meal) {
  const base = { ...(PALETTES[name] || PALETTES.default) };

  // Only blend meal overlay for plain season palettes, not festivals/tithis
  if (meal && SEASON_PALETTES.has(name) && MEAL_OVERLAYS[meal]) {
    Object.assign(base, MEAL_OVERLAYS[meal]);
  }

  const root = document.documentElement;
  for (const [prop, val] of Object.entries(base)) {
    root.style.setProperty(prop, val);
  }
}
