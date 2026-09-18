<<<<<<< HEAD
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
=======
# 🎬 MovieExplorer

A responsive movie/show explorer built with React, where you can browse shows, search by title, and view details in a modal — powered by the [TVMaze API](https://www.tvmaze.com/api).

## 🔗 Live Demo:  movie-explorer-murex-omega.vercel.app



## ✨ Features

- Home page: with a hero banner and a CTA into the movie listing page
- Search: type a movie title and the grid updates automatically 
- Responsive grid of movie cards: 1 column on mobile, 2 on tablet, 4 on desktop
- Details modal: backdrop image, rating, release year, genres and overview, closable via the ✕ button or by clicking outside

## 🛠️ Tech Stack

- JavaScript, React.JS & vite
- React Router
- HTML & Tailwind CSS v4
- Lucide Icons
- TVMaze API
>>>>>>> 6d89cd773e1f628e82f5958c4b3b06e5bd7a650a
