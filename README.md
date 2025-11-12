# Repeating Image Transition — React + Tailwind + GSAP

Exact behaviour of Codrops demo, built with React + Tailwind + GSAP.

## Run locally
```bash
npm i
npm run dev
```

## Use the SAME images
This project looks in `public/assets/` for `01.jpg ... 14.jpg`.
I've created empty placeholders with those filenames. Replace them with the images from the Codrops repo (`/assets` folder) without renaming.

Alternatively, you can point to remote URLs by editing `DEFAULT_IMAGES` in `src/RepeatingImageTransition.jsx`.

## Deploy
- **Vercel**: import this repo; build command not needed; framework = Vite.
- **Netlify**: build with `npm run build`, publish `dist/`.

## Files
- `src/RepeatingImageTransition.jsx` — the effect (canvas + GSAP)
- `src/App.jsx` — page layout with heading + thumbnails
- `tailwind.config.js`, `postcss.config.js`, `index.css` — Tailwind setup
