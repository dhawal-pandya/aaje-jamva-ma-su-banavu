// ── Scoring engine ────────────────────────────────────────────────────────────
// scoreDish() returns a numeric score (higher = better fit for right now).
// buildChain() returns the full sorted array once per session.

function scoreDish(dish, ctx) {
  const t = dish.tags;

  // ── Hard gates (return -Infinity to exclude entirely) ─────────────────────

  // Fasting days: only sabudana, makhana, fruits, dairy, satvic-light dishes
  if (ctx.isFasting) {
    const fastingOk = t.includes("fasting")
      || t.includes("sabudana")
      || t.includes("dairy")
      || (t.includes("satvic") && t.includes("light") && !t.includes("grain") && !t.includes("pulse"));
    if (!fastingOk) return -Infinity;
  }

  // Saturday: no chana-based dishes (Shani vaar rule)
  if (ctx.dow === 6 && t.includes("chana")) return -Infinity;

  // Shravan: no onion, no root vegetables (strict)
  if (ctx.isShravan && t.includes("onion")) return -Infinity;

  // Ekadashi: no grains, no pulses
  if (ctx.isEkadashi) {
    if (t.includes("grain") || t.includes("moong") || t.includes("toor")
        || t.includes("chana") || t.includes("urad") || t.includes("vaal")
        || t.includes("chola") || t.includes("matki") || t.includes("masoor")
        || t.includes("rajma")) {
      return -Infinity;
    }
  }

  // Amavasya: no fried, no tamasic, prefer satvic only
  if (ctx.isAmavasya && (t.includes("fried") || t.includes("rajasic"))) return -Infinity;

  // Month gate: if dish declares months, current month must be included
  if (dish.months && !dish.months.includes(ctx.month)) return -Infinity;

  // ExcludeDays gate: already handled upstream in getEligibleDishes but belt-and-suspenders
  if (dish.excludeDays && dish.excludeDays.includes(ctx.dow)) return -Infinity;

  // ── Additive scoring ──────────────────────────────────────────────────────

  let score = 0;

  // Season bonuses
  if (ctx.season === "winter") {
    if (t.includes("warming"))  score += 20;
    if (t.includes("ghee"))     score += 8;
    if (t.includes("jaggery"))  score += 8;
    if (t.includes("heavy"))    score += 5;
    if (t.includes("cooling"))  score -= 10;
  }
  if (ctx.season === "summer") {
    if (t.includes("cooling"))  score += 20;
    if (t.includes("curd"))     score += 12;
    if (t.includes("mango"))    score += 15;
    if (t.includes("light"))    score += 8;
    if (t.includes("warming"))  score -= 8;
    if (t.includes("heavy"))    score -= 5;
  }
  if (ctx.season === "monsoon") {
    if (t.includes("steamed"))  score += 15;
    if (t.includes("fermented")) score += 10;
    if (t.includes("warming"))  score += 10;
    if (t.includes("leafy"))    score -= 8;  // Ayurveda warns against leafy in monsoon
    if (t.includes("fried"))    score += 5;  // pakodas are beloved in rain
  }
  if (ctx.season === "autumn") {
    if (t.includes("light"))    score += 10;
    if (t.includes("satvic"))   score += 8;
  }

  // Tithi bonuses
  if (ctx.isPurnima) {
    if (t.includes("satvic"))   score += 15;
    if (t.includes("dairy"))    score += 10;
    if (t.includes("light"))    score += 10;
    if (t.includes("fried"))    score -= 10;
  }
  if (ctx.isEkadashi) {
    // Already gated above; reaching here means dish is fasting-eligible
    if (t.includes("sabudana")) score += 25;
    if (t.includes("fasting"))  score += 20;
    if (t.includes("dairy"))    score += 10;
  }
  if (ctx.isChaturthi) {
    // Ganesh's day — modak/sheero/festive sweets get a nudge
    if (t.includes("festive"))  score += 10;
    if (t.includes("ghee"))     score += 5;
  }

  // Shravan bonuses
  if (ctx.isShravan) {
    if (t.includes("satvic"))   score += 15;
    if (t.includes("light"))    score += 10;
    if (t.includes("steamed"))  score += 8;
    // Kathol rotation bonus
    if (ctx.shravanKathol && t.includes(ctx.shravanKathol)) score += 30;
    if (t.includes("rajasic"))  score -= 15;
  }

  // Adhik Maas — extra satvic emphasis
  if (ctx.isAdhikMaas) {
    if (t.includes("satvic"))   score += 20;
    if (t.includes("festive"))  score += 10;
    if (t.includes("fried"))    score -= 10;
  }

  // Festival bonuses
  if (ctx.festival) {
    const fid = ctx.festival.id;
    if (fid === "navratri") {
      if (t.includes("sabudana")) score += 25;
      if (t.includes("fasting"))  score += 20;
      if (t.includes("dairy"))    score += 10;
    }
    if (fid === "diwali") {
      if (t.includes("festive"))  score += 20;
      if (t.includes("ghee"))     score += 10;
      if (t.includes("jaggery"))  score += 8;
    }
    if (fid === "uttarayan") {
      // Tilgul, Undhiyu season
      if (dish.id === "undhiyu")  score += 40;
      if (t.includes("festive"))  score += 15;
      if (t.includes("warming"))  score += 10;
    }
    if (fid === "ganesh") {
      if (t.includes("festive"))  score += 15;
      if (t.includes("steamed"))  score += 10;
      if (t.includes("satvic"))   score += 8;
    }
    if (fid === "holi") {
      if (t.includes("festive"))  score += 15;
      if (t.includes("fried"))    score += 10;
      if (t.includes("dairy"))    score += 8;
    }
    if (fid === "paryushana") {
      if (t.includes("satvic"))   score += 25;
      if (t.includes("light"))    score += 15;
      // No root vegetables during Paryushana
      if (t.includes("root"))     score -= 20;
    }
  }

  // Ayurvedic guna bonuses (satvic always preferred)
  if (t.includes("satvic"))     score += 5;
  if (t.includes("rajasic"))    score -= 3;

  // Preparation preference: lighter always gets a small nudge
  if (t.includes("light"))      score += 3;

  // Cooking time of day: heavy dishes suit lunch, light suit dinner
  const meal = ctx.meal;
  if (meal === "dinner") {
    if (t.includes("heavy"))    score -= 8;
    if (t.includes("fried"))    score -= 5;
    if (t.includes("light"))    score += 5;
  }
  if (meal === "morning") {
    if (t.includes("steamed"))  score += 5;
    if (t.includes("fermented")) score += 5;
    if (t.includes("light"))    score += 3;
    if (t.includes("heavy"))    score -= 3;
  }

  // Small randomisation so the chain isn't deterministically identical every session
  score += Math.random() * 4 - 2;

  return score;
}

// ── Meal time helper ──────────────────────────────────────────────────────────

function getMealTime() {
  const h = new Date().getHours();
  if (h >= 6  && h < 10) return "morning";
  if (h >= 10 && h < 14) return "lunch";
  if (h >= 14 && h < 17) return "snack";
  return "dinner";
}

// ── Build sorted dish chain for this session ──────────────────────────────────

function buildChain() {
  const occasion = getOccasion();
  const meal     = getMealTime();
  const ctx      = { ...occasion, meal };

  const eligible = DISHES.filter(d =>
    d.mealTime.includes(meal) &&
    !d.excludeDays.includes(ctx.dow) &&
    (!d.months || d.months.includes(ctx.month))
  );

  const scored = eligible
    .map(d => ({ dish: d, score: scoreDish(d, ctx) }))
    .filter(x => x.score > -Infinity)
    .sort((a, b) => b.score - a.score);

  return { chain: scored.map(x => x.dish), ctx };
}
