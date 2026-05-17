// ── Element refs ──────────────────────────────────────────────────────────────
const resultEl      = document.getElementById('result');
const dishNameGuEl  = document.getElementById('dish-name-gu');
const dishNameEnEl  = document.getElementById('dish-name-en');
const dishNoteEl    = document.getElementById('dish-note');
const festBannerEl  = document.getElementById('festival-banner');
const festNameEl    = document.getElementById('festival-name');
const pressHintEl   = document.getElementById('press-hint');
const contextLineEl = document.getElementById('context-line');

// ── Gujarati labels ───────────────────────────────────────────────────────────
const SEASON_GU = { summer:'ઉનાળો', monsoon:'ચોમાસો', autumn:'શરદ', winter:'શિયાળો' };
const MEAL_GU   = { morning:'સવાર', lunch:'બપોર', snack:'સાંજ', dinner:'રાત' };

// ── Initialise palette and context on page load ───────────────────────────────
(function initUI() {
  const ctx  = getOccasion();
  const meal = getMealTime();

  applyPalette(ctx.palette, meal);

  // Festival banner
  if (ctx.festival) {
    festNameEl.textContent = `${ctx.festival.nameGu}  ·  ${ctx.festival.nameEn}`;
    festBannerEl.classList.add('visible');
  }

  // Context line — season · occasion · meal
  if (contextLineEl) {
    const parts = [];
    if (ctx.isEkadashi)   parts.push('એકાદશી');
    else if (ctx.isPurnima) parts.push('પૂર્ણિમા');
    else if (ctx.isShravan) parts.push('શ્રાવણ');
    else if (ctx.isAdhikMaas) parts.push('અધિક માસ');
    if (SEASON_GU[ctx.season]) parts.push(SEASON_GU[ctx.season]);
    if (MEAL_GU[meal])          parts.push(MEAL_GU[meal]);
    contextLineEl.textContent = parts.join('  ·  ');
  }
})();

// ── Render a dish ─────────────────────────────────────────────────────────────
function renderDish() {
  const result = getNextDish();
  if (!result || !result.dish) return;

  const { dish } = result;
  dishNameGuEl.textContent = dish.names.gu;
  dishNameEnEl.textContent = dish.names.en;
  dishNoteEl.textContent   = dish.note;
  resultEl.classList.add('visible');
}

// ── Button handler ────────────────────────────────────────────────────────────
let hintDismissed = false;

document.getElementById('main-btn').addEventListener('click', function () {
  // Dismiss the press hint on first tap
  if (!hintDismissed) {
    pressHintEl.classList.add('hidden');
    hintDismissed = true;
  }

  if (resultEl.classList.contains('visible')) {
    resultEl.classList.remove('visible');
    setTimeout(renderDish, 240);
  } else {
    renderDish();
  }
});
