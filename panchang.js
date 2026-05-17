// ── Tithi via Jean Meeus mean elongation (±1-3hr accuracy, no deps) ──────────

function getTithi() {
  const now = new Date();
  const jd = now / 86400000 + 2440587.5; // Julian Day (UT)
  const T = (jd - 2451545.0) / 36525; // Julian centuries from J2000

  // Mean elongation of the Moon (degrees)
  const D =
    297.85036 + 445267.11148 * T - 0.0019142 * T * T + (T * T * T) / 189474;

  const elongation = ((D % 360) + 360) % 360;
  return Math.floor(elongation / 12) + 1; // 1–30 tithi
}

// ── Festival/observance table ──────────────────────────────────────────────

const FESTIVALS = [
  // Ekadashi — skipped; calculated live below

  // Navratri (Sharad) — Oct 2–11
  {
    date: "2025-10-02",
    id: "navratri",
    nameGu: "નવરાત્રિ",
    nameEn: "Navratri",
    palette: "navratri",
    isFasting: true,
    isShravan: false,
  },
  {
    date: "2025-10-03",
    id: "navratri",
    nameGu: "નવરાત્રિ",
    nameEn: "Navratri",
    palette: "navratri",
    isFasting: true,
    isShravan: false,
  },
  {
    date: "2025-10-04",
    id: "navratri",
    nameGu: "નવરાત્રિ",
    nameEn: "Navratri",
    palette: "navratri",
    isFasting: true,
    isShravan: false,
  },
  {
    date: "2025-10-05",
    id: "navratri",
    nameGu: "નવરાત્રિ",
    nameEn: "Navratri",
    palette: "navratri",
    isFasting: true,
    isShravan: false,
  },
  {
    date: "2025-10-06",
    id: "navratri",
    nameGu: "નવરાત્રિ",
    nameEn: "Navratri",
    palette: "navratri",
    isFasting: true,
    isShravan: false,
  },
  {
    date: "2025-10-07",
    id: "navratri",
    nameGu: "નવરાત્રિ",
    nameEn: "Navratri",
    palette: "navratri",
    isFasting: true,
    isShravan: false,
  },
  {
    date: "2025-10-08",
    id: "navratri",
    nameGu: "નવરાત્રિ",
    nameEn: "Navratri",
    palette: "navratri",
    isFasting: true,
    isShravan: false,
  },
  {
    date: "2025-10-09",
    id: "navratri",
    nameGu: "નવરાત્રિ",
    nameEn: "Navratri",
    palette: "navratri",
    isFasting: true,
    isShravan: false,
  },
  {
    date: "2025-10-10",
    id: "navratri",
    nameGu: "નવરાત્રિ",
    nameEn: "Navratri",
    palette: "navratri",
    isFasting: true,
    isShravan: false,
  },
  {
    date: "2025-10-11",
    id: "navratri",
    nameGu: "નવરાત્રિ",
    nameEn: "Navratri",
    palette: "navratri",
    isFasting: true,
    isShravan: false,
  },
  {
    date: "2025-10-13",
    id: "dussehra",
    nameGu: "દશેરા",
    nameEn: "Dussehra",
    palette: "navratri",
    isFasting: false,
    isShravan: false,
  },
  {
    date: "2025-10-20",
    id: "diwali",
    nameGu: "દિવાળી",
    nameEn: "Diwali",
    palette: "diwali",
    isFasting: false,
    isShravan: false,
  },
  {
    date: "2025-10-21",
    id: "diwali",
    nameGu: "દિવાળી",
    nameEn: "Diwali",
    palette: "diwali",
    isFasting: false,
    isShravan: false,
  },
  {
    date: "2025-10-22",
    id: "diwali",
    nameGu: "દિવાળી",
    nameEn: "Diwali",
    palette: "diwali",
    isFasting: false,
    isShravan: false,
  },
  {
    date: "2025-10-23",
    id: "diwali",
    nameGu: "નૂતન વર્ષ",
    nameEn: "Gujarati New Year",
    palette: "diwali",
    isFasting: false,
    isShravan: false,
  },
  {
    date: "2025-10-24",
    id: "diwali",
    nameGu: "ભાઈ બીજ",
    nameEn: "Bhai Bij",
    palette: "diwali",
    isFasting: false,
    isShravan: false,
  },
  {
    date: "2025-01-14",
    id: "uttarayan",
    nameGu: "ઉત્તરાયણ",
    nameEn: "Makar Sankranti",
    palette: "uttarayan",
    isFasting: false,
    isShravan: false,
  },

  // Ganesh Chaturthi
  {
    date: "2025-08-27",
    id: "ganesh",
    nameGu: "ગણેશ ચતુર્થી",
    nameEn: "Ganesh Chaturthi",
    palette: "ganesh",
    isFasting: false,
    isShravan: false,
  },
  {
    date: "2026-08-17",
    id: "ganesh",
    nameGu: "ગણેશ ચતુર્થી",
    nameEn: "Ganesh Chaturthi",
    palette: "ganesh",
    isFasting: false,
    isShravan: false,
  },
  {
    date: "2027-09-06",
    id: "ganesh",
    nameGu: "ગણેશ ચતુર્થી",
    nameEn: "Ganesh Chaturthi",
    palette: "ganesh",
    isFasting: false,
    isShravan: false,
  },
  {
    date: "2028-08-25",
    id: "ganesh",
    nameGu: "ગણેશ ચતુર્થી",
    nameEn: "Ganesh Chaturthi",
    palette: "ganesh",
    isFasting: false,
    isShravan: false,
  },
  {
    date: "2029-09-14",
    id: "ganesh",
    nameGu: "ગણેશ ચતુર્થી",
    nameEn: "Ganesh Chaturthi",
    palette: "ganesh",
    isFasting: false,
    isShravan: false,
  },
  {
    date: "2030-09-03",
    id: "ganesh",
    nameGu: "ગણેશ ચતુર્થી",
    nameEn: "Ganesh Chaturthi",
    palette: "ganesh",
    isFasting: false,
    isShravan: false,
  },

  // Paryushana (Jain) — 8 days, usually Aug–Sep
  {
    date: "2025-08-19",
    id: "paryushana",
    nameGu: "પર્યુષણ",
    nameEn: "Paryushana",
    palette: "paryushana",
    isFasting: true,
    isShravan: false,
  },
  {
    date: "2025-08-20",
    id: "paryushana",
    nameGu: "પર્યુષણ",
    nameEn: "Paryushana",
    palette: "paryushana",
    isFasting: true,
    isShravan: false,
  },
  {
    date: "2025-08-21",
    id: "paryushana",
    nameGu: "પર્યુષણ",
    nameEn: "Paryushana",
    palette: "paryushana",
    isFasting: true,
    isShravan: false,
  },
  {
    date: "2025-08-22",
    id: "paryushana",
    nameGu: "પર્યુષણ",
    nameEn: "Paryushana",
    palette: "paryushana",
    isFasting: true,
    isShravan: false,
  },
  {
    date: "2025-08-23",
    id: "paryushana",
    nameGu: "સંવત્સરી",
    nameEn: "Samvatsari",
    palette: "paryushana",
    isFasting: true,
    isShravan: false,
  },
  {
    date: "2026-09-07",
    id: "paryushana",
    nameGu: "પર્યુષણ",
    nameEn: "Paryushana",
    palette: "paryushana",
    isFasting: true,
    isShravan: false,
  },
  {
    date: "2026-09-08",
    id: "paryushana",
    nameGu: "પર્યુષણ",
    nameEn: "Paryushana",
    palette: "paryushana",
    isFasting: true,
    isShravan: false,
  },
  {
    date: "2026-09-09",
    id: "paryushana",
    nameGu: "પર્યુષણ",
    nameEn: "Paryushana",
    palette: "paryushana",
    isFasting: true,
    isShravan: false,
  },
  {
    date: "2026-09-10",
    id: "paryushana",
    nameGu: "પર્યુષણ",
    nameEn: "Paryushana",
    palette: "paryushana",
    isFasting: true,
    isShravan: false,
  },
  {
    date: "2026-09-11",
    id: "paryushana",
    nameGu: "સંવત્સરી",
    nameEn: "Samvatsari",
    palette: "paryushana",
    isFasting: true,
    isShravan: false,
  },

  // Navratri (Chaitra — spring) 2025
  {
    date: "2025-03-30",
    id: "navratri",
    nameGu: "ચૈત્ર નવરાત્રિ",
    nameEn: "Chaitra Navratri",
    palette: "navratri",
    isFasting: true,
    isShravan: false,
  },
  {
    date: "2025-03-31",
    id: "navratri",
    nameGu: "ચૈત્ર નવરાત્રિ",
    nameEn: "Chaitra Navratri",
    palette: "navratri",
    isFasting: true,
    isShravan: false,
  },
  {
    date: "2025-04-01",
    id: "navratri",
    nameGu: "ચૈત્ર નવરાત્રિ",
    nameEn: "Chaitra Navratri",
    palette: "navratri",
    isFasting: true,
    isShravan: false,
  },
  {
    date: "2025-04-02",
    id: "navratri",
    nameGu: "ચૈત્ર નવરાત્રિ",
    nameEn: "Chaitra Navratri",
    palette: "navratri",
    isFasting: true,
    isShravan: false,
  },
  {
    date: "2025-04-03",
    id: "navratri",
    nameGu: "ચૈત્ર નવરાત્રિ",
    nameEn: "Chaitra Navratri",
    palette: "navratri",
    isFasting: true,
    isShravan: false,
  },
  {
    date: "2025-04-04",
    id: "navratri",
    nameGu: "ચૈત્ર નવરાત્રિ",
    nameEn: "Chaitra Navratri",
    palette: "navratri",
    isFasting: true,
    isShravan: false,
  },
  {
    date: "2025-04-05",
    id: "navratri",
    nameGu: "ચૈત્ર નવરાત્રિ",
    nameEn: "Chaitra Navratri",
    palette: "navratri",
    isFasting: true,
    isShravan: false,
  },
  {
    date: "2025-04-06",
    id: "navratri",
    nameGu: "ચૈત્ર નવરાત્રિ",
    nameEn: "Chaitra Navratri",
    palette: "navratri",
    isFasting: true,
    isShravan: false,
  },
  {
    date: "2025-04-07",
    id: "navratri",
    nameGu: "ચૈત્ર નવરાત્રિ",
    nameEn: "Chaitra Navratri",
    palette: "navratri",
    isFasting: true,
    isShravan: false,
  },

  // Navratri (Chaitra) 2026
  {
    date: "2026-03-19",
    id: "navratri",
    nameGu: "ચૈત્ર નવરાત્રિ",
    nameEn: "Chaitra Navratri",
    palette: "navratri",
    isFasting: true,
    isShravan: false,
  },
  {
    date: "2026-03-20",
    id: "navratri",
    nameGu: "ચૈત્ર નવરાત્રિ",
    nameEn: "Chaitra Navratri",
    palette: "navratri",
    isFasting: true,
    isShravan: false,
  },
  {
    date: "2026-03-21",
    id: "navratri",
    nameGu: "ચૈત્ર નવરાત્રિ",
    nameEn: "Chaitra Navratri",
    palette: "navratri",
    isFasting: true,
    isShravan: false,
  },
  {
    date: "2026-03-22",
    id: "navratri",
    nameGu: "ચૈત્ર નવરાત્રિ",
    nameEn: "Chaitra Navratri",
    palette: "navratri",
    isFasting: true,
    isShravan: false,
  },
  {
    date: "2026-03-23",
    id: "navratri",
    nameGu: "ચૈત્ર નવરાત્રિ",
    nameEn: "Chaitra Navratri",
    palette: "navratri",
    isFasting: true,
    isShravan: false,
  },
  {
    date: "2026-03-24",
    id: "navratri",
    nameGu: "ચૈત્ર નવરાત્રિ",
    nameEn: "Chaitra Navratri",
    palette: "navratri",
    isFasting: true,
    isShravan: false,
  },
  {
    date: "2026-03-25",
    id: "navratri",
    nameGu: "ચૈત્ર નવરાત્રિ",
    nameEn: "Chaitra Navratri",
    palette: "navratri",
    isFasting: true,
    isShravan: false,
  },
  {
    date: "2026-03-26",
    id: "navratri",
    nameGu: "ચૈત્ર નવરાત્રિ",
    nameEn: "Chaitra Navratri",
    palette: "navratri",
    isFasting: true,
    isShravan: false,
  },
  {
    date: "2026-03-27",
    id: "navratri",
    nameGu: "ચૈત્ર નવરાત્રિ",
    nameEn: "Chaitra Navratri",
    palette: "navratri",
    isFasting: true,
    isShravan: false,
  },

  // Navratri (Sharad) 2026
  {
    date: "2026-10-21",
    id: "navratri",
    nameGu: "નવરાત્રિ",
    nameEn: "Navratri",
    palette: "navratri",
    isFasting: true,
    isShravan: false,
  },
  {
    date: "2026-10-22",
    id: "navratri",
    nameGu: "નવરાત્રિ",
    nameEn: "Navratri",
    palette: "navratri",
    isFasting: true,
    isShravan: false,
  },
  {
    date: "2026-10-23",
    id: "navratri",
    nameGu: "નવરાત્રિ",
    nameEn: "Navratri",
    palette: "navratri",
    isFasting: true,
    isShravan: false,
  },
  {
    date: "2026-10-24",
    id: "navratri",
    nameGu: "નવરાત્રિ",
    nameEn: "Navratri",
    palette: "navratri",
    isFasting: true,
    isShravan: false,
  },
  {
    date: "2026-10-25",
    id: "navratri",
    nameGu: "નવરાત્રિ",
    nameEn: "Navratri",
    palette: "navratri",
    isFasting: true,
    isShravan: false,
  },
  {
    date: "2026-10-26",
    id: "navratri",
    nameGu: "નવરાત્રિ",
    nameEn: "Navratri",
    palette: "navratri",
    isFasting: true,
    isShravan: false,
  },
  {
    date: "2026-10-27",
    id: "navratri",
    nameGu: "નવરાત્રિ",
    nameEn: "Navratri",
    palette: "navratri",
    isFasting: true,
    isShravan: false,
  },
  {
    date: "2026-10-28",
    id: "navratri",
    nameGu: "નવરાત્રિ",
    nameEn: "Navratri",
    palette: "navratri",
    isFasting: true,
    isShravan: false,
  },
  {
    date: "2026-10-29",
    id: "navratri",
    nameGu: "નવરાત્રિ",
    nameEn: "Navratri",
    palette: "navratri",
    isFasting: true,
    isShravan: false,
  },
  {
    date: "2026-10-30",
    id: "navratri",
    nameGu: "નવરાત્રિ",
    nameEn: "Navratri",
    palette: "navratri",
    isFasting: true,
    isShravan: false,
  },
  {
    date: "2026-11-01",
    id: "dussehra",
    nameGu: "દશેરા",
    nameEn: "Dussehra",
    palette: "navratri",
    isFasting: false,
    isShravan: false,
  },

  // Diwali 2026
  {
    date: "2026-11-08",
    id: "diwali",
    nameGu: "ધનતેરસ",
    nameEn: "Dhanteras",
    palette: "diwali",
    isFasting: false,
    isShravan: false,
  },
  {
    date: "2026-11-09",
    id: "diwali",
    nameGu: "કાલી ચૌદસ",
    nameEn: "Kali Chaudas",
    palette: "diwali",
    isFasting: false,
    isShravan: false,
  },
  {
    date: "2026-11-10",
    id: "diwali",
    nameGu: "દિવાળી",
    nameEn: "Diwali",
    palette: "diwali",
    isFasting: false,
    isShravan: false,
  },
  {
    date: "2026-11-11",
    id: "diwali",
    nameGu: "નૂતન વર્ષ",
    nameEn: "Gujarati New Year",
    palette: "diwali",
    isFasting: false,
    isShravan: false,
  },
  {
    date: "2026-11-12",
    id: "diwali",
    nameGu: "ભાઈ બીજ",
    nameEn: "Bhai Bij",
    palette: "diwali",
    isFasting: false,
    isShravan: false,
  },

  // Uttarayan (fixed Jan 14)
  {
    date: "2026-01-14",
    id: "uttarayan",
    nameGu: "ઉત્તરાયણ",
    nameEn: "Makar Sankranti",
    palette: "uttarayan",
    isFasting: false,
    isShravan: false,
  },
  {
    date: "2027-01-14",
    id: "uttarayan",
    nameGu: "ઉત્તરાયણ",
    nameEn: "Makar Sankranti",
    palette: "uttarayan",
    isFasting: false,
    isShravan: false,
  },
  {
    date: "2028-01-14",
    id: "uttarayan",
    nameGu: "ઉત્તરાયણ",
    nameEn: "Makar Sankranti",
    palette: "uttarayan",
    isFasting: false,
    isShravan: false,
  },
  {
    date: "2029-01-14",
    id: "uttarayan",
    nameGu: "ઉત્તરાયણ",
    nameEn: "Makar Sankranti",
    palette: "uttarayan",
    isFasting: false,
    isShravan: false,
  },
  {
    date: "2030-01-14",
    id: "uttarayan",
    nameGu: "ઉત્તરાયણ",
    nameEn: "Makar Sankranti",
    palette: "uttarayan",
    isFasting: false,
    isShravan: false,
  },
  {
    date: "2031-01-14",
    id: "uttarayan",
    nameGu: "ઉત્તરાયણ",
    nameEn: "Makar Sankranti",
    palette: "uttarayan",
    isFasting: false,
    isShravan: false,
  },
  {
    date: "2032-01-14",
    id: "uttarayan",
    nameGu: "ઉત્તરાયણ",
    nameEn: "Makar Sankranti",
    palette: "uttarayan",
    isFasting: false,
    isShravan: false,
  },
  {
    date: "2033-01-14",
    id: "uttarayan",
    nameGu: "ઉત્તરાયણ",
    nameEn: "Makar Sankranti",
    palette: "uttarayan",
    isFasting: false,
    isShravan: false,
  },
  {
    date: "2034-01-14",
    id: "uttarayan",
    nameGu: "ઉત્તરાયણ",
    nameEn: "Makar Sankranti",
    palette: "uttarayan",
    isFasting: false,
    isShravan: false,
  },
  {
    date: "2035-01-14",
    id: "uttarayan",
    nameGu: "ઉત્તરાયણ",
    nameEn: "Makar Sankranti",
    palette: "uttarayan",
    isFasting: false,
    isShravan: false,
  },

  // Holi
  {
    date: "2025-03-14",
    id: "holi",
    nameGu: "હોળી",
    nameEn: "Holi",
    palette: "holi",
    isFasting: false,
    isShravan: false,
  },
  {
    date: "2026-03-03",
    id: "holi",
    nameGu: "હોળી",
    nameEn: "Holi",
    palette: "holi",
    isFasting: false,
    isShravan: false,
  },
  {
    date: "2027-03-22",
    id: "holi",
    nameGu: "હોળી",
    nameEn: "Holi",
    palette: "holi",
    isFasting: false,
    isShravan: false,
  },
  {
    date: "2028-03-11",
    id: "holi",
    nameGu: "હોળી",
    nameEn: "Holi",
    palette: "holi",
    isFasting: false,
    isShravan: false,
  },
  {
    date: "2029-03-01",
    id: "holi",
    nameGu: "હોળી",
    nameEn: "Holi",
    palette: "holi",
    isFasting: false,
    isShravan: false,
  },
  {
    date: "2030-03-20",
    id: "holi",
    nameGu: "હોળી",
    nameEn: "Holi",
    palette: "holi",
    isFasting: false,
    isShravan: false,
  },

  // Adhik Maas (leap lunar month) — no new dishes, just note for scoring
  {
    date: "2023-07-18",
    id: "adhikmaas",
    nameGu: "અધિક માસ",
    nameEn: "Adhik Maas",
    palette: "adhikmaas",
    isFasting: true,
    isShravan: false,
  },
  // next Adhik Maas approx 2026-04-17 to 2026-05-16
  {
    date: "2026-04-17",
    id: "adhikmaas",
    nameGu: "અધિક માસ",
    nameEn: "Adhik Maas",
    palette: "adhikmaas",
    isFasting: true,
    isShravan: false,
  },
];

// ── Shravan month ranges (IST) ────────────────────────────────────────────────
const SHRAVAN_RANGES = [
  ["2025-07-27", "2025-08-23"],
  ["2026-08-15", "2026-09-12"],
  ["2027-08-05", "2027-09-02"],
  ["2028-07-24", "2028-08-21"],
  ["2029-08-12", "2029-09-09"],
  ["2030-08-02", "2030-08-30"],
];

// ── Adhik Maas ranges ─────────────────────────────────────────────────────────
const ADHIKMAAS_RANGES = [
  ["2026-04-17", "2026-05-16"],
  ["2029-07-28", "2029-08-26"],
  ["2032-06-15", "2032-07-13"],
];

// ── Season from month ─────────────────────────────────────────────────────────
function getSeason(month) {
  if (month >= 3 && month <= 5) return "summer"; // Grishma
  if (month >= 6 && month <= 9) return "monsoon"; // Varsha
  if (month >= 10 && month <= 11) return "autumn"; // Sharad
  if (month >= 12 || month <= 2) return "winter"; // Hemant/Shishir
}

// ── Main context builder ──────────────────────────────────────────────────────

function getOccasion() {
  const now = new Date();
  const y = now.getFullYear();
  const m = now.getMonth() + 1;
  const d = now.getDate();
  const dow = now.getDay(); // 0=Sun
  const dateStr = `${y}-${String(m).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
  const tithi = getTithi();
  const season = getSeason(m);

  // Tithi-based flags
  const isEkadashi = tithi === 11 || tithi === 26;
  const isPurnima = tithi === 15 || tithi === 30;
  const isAmavasya = tithi === 30 && tithi !== 15; // 30th tithi = Amavasya
  const isChaturthi = tithi === 4 || tithi === 19;

  // Shravan check
  let isShravan = false;
  for (const [start, end] of SHRAVAN_RANGES) {
    if (dateStr >= start && dateStr <= end) {
      isShravan = true;
      break;
    }
  }

  // Adhik Maas check
  let isAdhikMaas = false;
  for (const [start, end] of ADHIKMAAS_RANGES) {
    if (dateStr >= start && dateStr <= end) {
      isAdhikMaas = true;
      break;
    }
  }

  // Hardcoded festival check (exact date)
  const festivalToday = FESTIVALS.find((f) => f.date === dateStr) || null;

  // Determine palette
  let palette = season; // default = season palette
  if (festivalToday) palette = festivalToday.palette;
  else if (isEkadashi) palette = "ekadashi";
  else if (isPurnima) palette = "purnima";
  else if (isAdhikMaas) palette = "adhikmaas";

  // Determine fasting
  const isFasting =
    isEkadashi ||
    isAmavasya ||
    (festivalToday && festivalToday.isFasting) ||
    isAdhikMaas;

  // Shravan kathol rotation: Mon=moong, Tue=moong, Wed=toor, Thu=chana,
  // Fri=vaal, Sat=avoid kathol, Sun=moong (light, satvic sunday)
  const shravanKathol = isShravan
    ? ["moong", "moong", "toor", "chana", "vaal", null, "moong"][dow]
    : null;

  return {
    date: dateStr,
    tithi,
    season,
    isEkadashi,
    isPurnima,
    isAmavasya,
    isChaturthi,
    isShravan,
    isAdhikMaas,
    isFasting,
    shravanKathol,
    festival: festivalToday,
    palette,
    month: m,
    dow,
  };
}
