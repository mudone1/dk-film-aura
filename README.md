# DK Film Aura — Portfolio Site

Next.js 15 (App Router) + TypeScript + Tailwind + Framer Motion.

## Run locally
```
npm install
npm run dev
```
Open http://localhost:3000

## Deploy to Vercel
```
npm i -g vercel
vercel
```
Or connect the repo at vercel.com/new — it auto-detects Next.js, no config needed.

## What's real vs. placeholder
- **Real:** logo (`public/logo.png`, plus an inverted `public/assets/logo-white.png` for dark sections), founder headshot (`public/founder.jpeg`), and the full rate card copy in `data/site-content.ts` — transcribed exactly from your rate card image (packages, add-ons, delivery timeline, contact details).
- **Placeholder:** the gallery in `components/Gallery.tsx` and `data/projects.json` use generated gradient tiles for the three categories (Weddings, Short Content, Social Graphics). I couldn't open your Google Drive links (they need your account login), so drop your actual wedding/event photos, short-content clips or thumbnails, and social graphics into `public/gallery/` and update `data/projects.json` with the real filenames — the layout and filmstrip-scroll animation are already built to take them.

## Content management (Phase 1 backend)
`app/api/projects` is a working GET/POST API route reading/writing `data/projects.json`. Note: **Vercel's filesystem is read-only in production**, so POST-ing updates will work in `next dev` but won't persist on Vercel. Two paths from here:
1. Keep editing `data/projects.json` directly in the repo and redeploy (simplest, no DB needed).
2. Swap the API route for Firestore or another DB if you want to update content from a live admin UI without redeploying — happy to wire that up.

## Still needed from you
- Actual portfolio photos/videos for the gallery
- Resume content (link wasn't accessible) if you want a downloadable CV on the site
- Confirm brand color usage — currently pulling gold/black/cream straight from the rate card
