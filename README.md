# Thread & Tailor (Modular E‑commerce Skeleton)

Modular HTML/CSS/JS frontend with a Node.js + Express API and optional MongoDB.

## Quickstart

1. Install deps: `npm install`
2. (Optional) Set `MONGODB_URI` in `.env` to enable database.
3. Dev server: `npm run dev`
4. Open: http://localhost:3000

If `MONGODB_URI` is not provided, the API serves demo in-memory data so the UI works.

## Structure

- `server/`: Express API, models, routes, middleware
- `frontend/`: Static HTML, CSS, JS (components + pages), PWA assets

## Env

- `PORT` (default 3000)
- `MONGODB_URI` (optional)
- `GTAG_ID` (optional GA4)
- `GTM_ID` (optional GTM)

## Scripts

- `npm run dev` – start server with nodemon
- `npm start` – start server in production

## Notes

- Accessible, performant by default with PWA, lazy-loading hooks, and structured data utilities.
- AI Try-On stub uses camera access; prompts for permission on PDP.