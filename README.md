# MovieExplorer

A responsive movie/show explorer built with React, React Router, Tailwind CSS, and the [TVMaze API](https://www.tvmaze.com/api). Browse shows, search by title, and view details in a modal.

## Tech stack

- React 19 + Vite
- React Router (data router / `createBrowserRouter`)
- Tailwind CSS v4
- lucide-react icons
- TVMaze API (no key required)

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

## Project structure

```
src/
  assets/          static images (none required — everything comes from the API)
  components/      Navbar, Footer, MovieCard, MovieModal
  hooks/           useDebounce (debounces the search input)
  layouts/         MainLayout (navbar + outlet + footer)
  pages/           Home, Movies
  services/        get-shows.js, search-shows.js (fetch calls to TVMaze)
  utils/           format-show.js (normalizes raw API data)
```

## Features

- **Home page** — hero banner with a CTA into the movie listing page.
- **Movie listing page** — search bar (debounced) backed by `GET /search/shows?q=`, falling back to `GET /shows` when the search box is empty. Responsive grid: 1 column on mobile, 2 on tablet, 4 on desktop.
- **Details modal** — backdrop image, rating, release year, genres, and overview. Closable via the ✕ button or by clicking outside the modal.

## Deployment

Build with `npm run build`, then deploy the `dist/` folder to Vercel, Netlify, or GitHub Pages.
