# VEX — Animated Landing Page

A React + TypeScript + Tailwind CSS landing page with:
- Full-screen video hero background
- Liquid glass navbar
- Character-by-character animated heading
- Scroll-triggered feature cards

---

## 🚀 Getting Started (step by step)

### Step 1 — Make sure Node.js is installed
Open your Terminal (Mac) or Command Prompt (Windows) and run:
```
node --version
```
You should see something like `v20.0.0`. If not, download Node.js from https://nodejs.org

### Step 2 — Open the project folder in your terminal
```
cd path/to/vex-site
```
(drag the folder onto your terminal window to auto-fill the path)

### Step 3 — Install dependencies
```
npm install
```
This downloads all the libraries the project needs. Takes about 30 seconds.

### Step 4 — Start the development server
```
npm run dev
```
Open your browser and go to: **http://localhost:5173**

You should see your site! 🎉

---

## 📁 Project structure explained

```
vex-site/
├── index.html                  ← The HTML entry point (loads fonts here)
├── src/
│   ├── main.tsx                ← Starts React (don't need to touch this)
│   ├── App.tsx                 ← Root: add/remove sections here
│   ├── index.css               ← Global styles + liquid glass CSS
│   └── components/
│       ├── Navbar.tsx          ← Top navigation bar
│       ├── HeroSection.tsx     ← Full-screen video hero
│       ├── AnimatedHeading.tsx ← Letter-by-letter heading animation
│       ├── FadeIn.tsx          ← Fade in any content after a delay
│       ├── ScrollReveal.tsx    ← Reveal content when scrolled into view
│       ├── FeaturesSection.tsx ← The 3-card section below the hero
│       └── FeatureCard.tsx     ← A single feature card
```

## ✏️ Common edits

**Change the heading text** → open `HeroSection.tsx`, find `lines={[...]}` and edit the strings.

**Change the video** → open `HeroSection.tsx`, change the `VIDEO_URL` at the top.

**Add a new feature card** → open `FeaturesSection.tsx`, add a new object to the `features` array.

**Change colors** → open `index.css` for global styles, or edit Tailwind classes directly in any component.

---

## 🏗️ Build for production (to deploy your site)
```
npm run build
```
This creates a `dist/` folder you can upload to Vercel, Netlify, or any web host.
