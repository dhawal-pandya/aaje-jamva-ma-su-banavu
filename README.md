# આજે જમવામાં શું બનાવું?
### *What shall we cook today?*

This started as a small thing for my mother. She cooks every day without fail, and every day, before she walks into the kitchen, the same quiet question comes up. This tries to answer it.

Open it on your phone, press the rangoli, get a suggestion. Press again if you'd like a different one.

---

## How it works

The suggestions aren't random. The app knows what time of day it is, what season it is, and what the Panchang says about today, and it tries to suggest something that actually makes sense for right now.

In practice that means:

- **Morning, lunch, snack, dinner** each get a different pool of dishes
- **Winter** brings up warming things, bajra rotla, undhiyu, adadiya pak. Summer brings cooling ones, dahi chawal, amrakhand (only when the mangoes are actually in season)
- **Ekadashi** removes all grains and pulses. **Shani vaar** removes chana. **Shravan** rotates which pulse is suggested each day of the week, moong on Monday, toor on Wednesday, and so on
- **Festivals** are hardcoded, Navratri, Diwali, Uttarayan, Ganesh Chaturthi, Holi, Paryushana, and a few others. On those days, the rangoli changes colour and the suggestions shift accordingly
- The **tithi** is calculated from the Jean Meeus lunar formula, no external API, just a small piece of astronomy math baked in

Each time you load the page, the app quietly ranks all 138 dishes against today's context and gives you the best fit first. Keep pressing to walk through the rest of the list.

---

## The dish list

Only Gujarati vegetarian dishes. The usuals are all there, thepla, dhokla, dal dhokli, kadhi khichdi, undhiyu, along with plenty of seasonal and festive ones.

Some are only suggested in certain months. Methi paratha appears only when fresh methi is in the market. Ponk vada only during ponk season in Surat. Amrakhand only when Alphonso mangoes are around.

If a dish is missing, or a tag is wrong, it is probably because everything was entered by hand and something slipped through. Corrections are welcome.

---

## Running it

Just open `index.html` in a browser. No server, no install, no build step.

```
open index.html
```

---

## Files

```
index.html    the whole UI, one page
data.js       138 dishes, each with meal times, seasonal months, and tags
panchang.js   tithi calculation, festival calendar, Shravan and Adhik Maas ranges
scoring.js    ranks dishes against today's context
session.js    remembers your place in the list within a session
palette.js    changes the rangoli colours per season and festival
app.js        ties everything together
```

---

*Made with love for my mumma. May she never have to wonder what to cook.*
