# 😄 LOLift — Carpooling Web App (Front‑End)

LOLift is a lightweight, responsive **carpooling UI** built with **HTML, CSS, and vanilla JavaScript**.  
It lets users **offer a ride**, **search rides**, **view & edit profile**, and **toggle dark/light theme** with a clean, mobile‑first design.

---

## 🗂 Project Structure
```
/htmlpages
  ├─ home.html         # Landing page with hero video + feature cards
  ├─ login.html        # Sign‑in UI
  ├─ register.html     # Sign‑up UI
  ├─ profile.html      # Profile dashboard
  ├─ editprof.html     # Edit profile form
  ├─ offerride.html    # List/offer a ride
  ├─ searchride.html   # Find a ride (Places autocomplete + fallback)
  └─ contectus.html    # About / Contact

/js
  ├─ btnscript.js      # Button kinetic hover effect
  ├─ nevscript.js      # Active nav highlighting, route helpers
  └─ theme-toggle.js   # Persisted dark/light theme (localStorage)

/style
  ├─ generalstyle.css  # Global tokens (layout, colors, utilities)
  ├─ nevstyle.css      # Navbar
  ├─ home.css          # Home page sections
  ├─ offer.css         # Offer ride UI
  ├─ search.css        # Search ride UI
  ├─ profile.css       # Profile & cards
  ├─ editprofile.css   # Edit form
  ├─ loginstyle.css    # Auth screens
  ├─ footer.css        # Footer layout
  ├─ btnstyle.css      # Buttons & micro‑interactions
  ├─ common-popup.css  # Reusable popups/modals
  └─ theme-toggle.css  # Theme switch styling

/other
  ├─ 152184-802335622_small.mp4   # Hero background video
  ├─ images / icons (PNG/JPG/SVG) # App branding assets
  └─ (project docs, if any)
```
> Total files detected: **8 HTML**, **3 JS**, **13 CSS**, plus media assets.

---

## ✨ Core Features
- **Offer a Ride** (`offerride.html`) – animated form and modern UI.
- **Search Rides** (`searchride.html`) – origin/destination inputs, *Google Places* autocomplete with a built‑in **graceful fallback** if Maps fails to load.
- **User Profile** (`profile.html`, `editprof.html`) – view & edit personal details.
- **Auth Screens** (`login.html`, `register.html`) – clean forms (front‑end only).
- **Theme Toggle** (`theme-toggle.js`) – dark/light mode persisted via `localStorage`.
- **Delightful UI** – background hero **video**, glassy cards, button kinetic effects (`btnscript.js`), Font Awesome & Ionicons icons.
- **Smart Navbar** – active‑link highlighting + route helpers (`nevscript.js`).

---

## 🔧 Tech Stack
- **HTML5** for semantic structure
- **CSS3** (custom, no framework) for responsive UI
- **Vanilla JavaScript** for interactions
- **Font Awesome** & **Ionicons** for icons
- **(Optional)** Google Maps **Places API** on Search page

---

## ▶️ Run Locally
No build step needed.
1. Download the folder and open: `htmlpages/home.html` in your browser.
2. Navigate via the navbar to try **Offer Ride**, **Search**, **Profile**, etc.
3. Toggle 🌙/☀️ with the theme switch (state is saved).

> Tip: If you run from `file://`, some browsers restrict fonts/video autoplay. Using a small local server avoids that:
```bash
# any one of these
python -m http.server 8000
npx serve .
```

Then open: `http://localhost:8000/htmlpages/home.html`

---

## 🔑 Maps API (optional)
`searchride.html` attempts to load Google Maps Places for autocomplete.  
If it fails (offline / invalid key), it **falls back automatically** to a simple form.

**Recommended:** replace the inline key with an environment‑based include when you deploy (or keep the fallback only).

---

## 📦 What’s NOT included (on purpose)
- No backend / database
- No real auth/session
- No actual ride matching or persistence

This repository is the **front‑end UI** only — perfect to connect later to any backend (Node/Express, Spring, Django, etc.).

---

## 🧭 File Highlights
- `js/theme-toggle.js` — safe `localStorage` access, auto‑init, accessible toggle.
- `js/nevscript.js` — computes current path and marks the active link.
- `js/btnscript.js` — micro interaction for buttons (kinetic effect).

---

## 🖼 Branding
- **App Name:** **LOLift** 🙂
- Logo assets live under `/other`. Update favicon / logo across pages if needed.

---

## 🙌 Author
**Jeel Dobariya** • B.Tech CSE (Semester 3)  
Darshan University

---

## 📜 License
Educational use only. Media assets remain property of their respective owners.
