// ── Session manager ───────────────────────────────────────────────────────────
// Builds the scored chain once per page-load and walks down it on each tap.
// Chain + pointer stored in sessionStorage so a reload re-scores fresh.

const SESSION_KEY = "ajbs_session";

function initSession() {
  const { chain, ctx } = buildChain();

  const data = {
    ids:  chain.map(d => d.id),
    ctx:  { ...ctx, festival: ctx.festival ? ctx.festival.id : null },
    ptr:  0,
    meal: ctx.meal,
    date: ctx.date,
  };

  sessionStorage.setItem(SESSION_KEY, JSON.stringify(data));
  return { chain, ctx, ptr: 0 };
}

function loadSession() {
  const raw = sessionStorage.getItem(SESSION_KEY);
  if (!raw) return null;

  try {
    const data = JSON.parse(raw);
    // Invalidate if date or meal has changed since session was built
    const nowCtx  = getOccasion();
    const nowMeal = getMealTime();
    if (data.date !== nowCtx.date || data.meal !== nowMeal) return null;
    return data;
  } catch (_) {
    return null;
  }
}

function getNextDish() {
  let session = loadSession();

  if (!session) {
    const fresh = initSession();
    session = {
      ids:  fresh.chain.map(d => d.id),
      ptr:  0,
      date: fresh.ctx.date,
      meal: fresh.ctx.meal,
      ctx:  fresh.ctx,
    };
  }

  // Walk to next, wrapping around so user can never get stuck
  const ids = session.ids;
  if (!ids.length) return null;

  const idx  = session.ptr % ids.length;
  const id   = ids[idx];
  const dish = DISHES.find(d => d.id === id) || null;

  // Advance pointer and persist
  session.ptr = (idx + 1) % ids.length;
  sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));

  return { dish, ctx: session.ctx };
}

// Expose occasion so app.js can read it without re-computing
function getSessionCtx() {
  const raw = sessionStorage.getItem(SESSION_KEY);
  if (!raw) return getOccasion();
  try {
    return JSON.parse(raw).ctx;
  } catch (_) {
    return getOccasion();
  }
}
