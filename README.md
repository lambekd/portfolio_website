# Portfolio Website

A personal portfolio website showcasing professional projects in Design Technology and Information Systems. It is built with React and Bootstrap and has four pages: Home, Projects, Skills and Contact (which includes a contact form).

## Stack

- React (with React Router for pages)
- HTML, CSS, JavaScript
- Bootstrap 5 (styles, plus its JavaScript for the project popups)
- Vite (development server and build tool)

## Prerequisites

- Git
- Node.js LTS with npm, installed **inside WSL/Linux** with [nvm](https://github.com/nvm-sh/nvm). Avoid the Windows npm: it runs poorly against WSL paths.

To install Node with nvm, see the [nvm install guide](https://github.com/nvm-sh/nvm#installing-and-updating). Then:

```bash
nvm install --lts
node -v      # check Node is available
which npm    # should point to ~/.nvm/..., not /mnt/c/...
```

## Install and Run

```bash
npm install                # install dependencies
npm run dev                # start the dev server at http://localhost:5173
```

| Command | What it does |
|---|---|
| `npm run dev` | Starts the development server with live reload |
| `npm run build` | Builds the production site into `dist/` |
| `npm run preview` | Serves the built `dist/` folder locally to check it |

### Troubleshooting: `ERR_CONNECTION_REFUSED` at localhost:5173

The site is only available while the dev server is running. This error means nothing is listening on that port.

1. In a WSL terminal, `cd` into the project folder and run `npm run dev`. Keep that terminal open; closing it or pressing Ctrl+C stops the site.
2. Wait for the `Local: http://localhost:5173/` line, then open that address in your Windows browser.
3. If `npm run dev` fails, run `which npm`. If it shows `/mnt/c/...`, open a new terminal or run `source ~/.bashrc` so nvm's Node is used.
4. If Vite reports the port is in use, it's probably already running in another terminal. Use that one, or stop it and start again.

## Editing Content

All text content lives in **`src/data/portfolio.js`**: your name and tagline, projects, skills and contact details (LinkedIn, GitHub, location). The Home bio paragraphs are in `src/pages/Home.jsx`.

- **Projects:** each project's `category` must exactly match an entry in `categories` (`Design Technology` or `Information Systems`). The Projects page builds its filter buttons from that list. `summary` shows on the card and `details` in the "View details" popup. `year` and `link` are optional: leave them empty to hide them.
- **Skills:** give a skill a `level` (0–100) to show a progress bar, or leave `level` out to show a badge. Each skill group has a `column` (1–3) that sets its column on wide screens; groups in the same column stack top-to-bottom in the order they appear in the file. Cards grow to show every skill and stretch to line up with the tallest column; add `fitContent: true` to a group to make its card only as tall as its skills (Skills Under Development uses this).
- **Contact:** leave a field empty (`''`) to hide it.

## Project Structure

```
index.html                 Page shell
vite.config.js             Vite + React plugin config
src/
  main.jsx                 Entry point: loads Bootstrap, router and styles
  App.jsx                  Routes, navbar, scroll handling and page transitions
  index.css                Custom styles on top of Bootstrap, including the page transition keyframes
                           (on first open the content rises and fades in over 1000ms; on navigation it fades
                           out 1000ms, then in 1000ms. If you change the fade-out time, update EXIT_MS in App.jsx too)
  data/portfolio.js        All site content (edit this)
  components/
    NavBar.jsx             Top bar with the name linking Home (all pages except Home)
    ProjectCard.jsx        A single project card
    SectionButtons.jsx     Row of large section buttons along the bottom of every page
  pages/
    Home.jsx               Full-screen intro with section buttons along the bottom
    Projects.jsx           Filterable project grid with detail popups
    Skills.jsx             Skill groups with progress bars and badges
    Contact.jsx            Contact details (LinkedIn, GitHub, location)
                           (All four pages share the circuit background: the .hero class in index.css)
    NotFound.jsx           Shown for unknown URLs
```

## Deployment

Run `npm run build` and host the `dist/` folder on any static host (e.g. Netlify, Vercel, GitHub Pages). The site uses client-side routes (`/projects`, `/skills`, `/contact`), so set the host to serve `index.html` for unknown paths. Otherwise refreshing a page other than Home returns a 404.

## Maintaining the Project

- **Branches:** Make changes on a branch rather than on `main`.
- **Prompt log:** Record every IDE prompt in [Prompt_Log.md](Prompt_Log.md), with its date/time, what was changed and what changes were made.
- **README:** Update this file whenever setup or maintenance steps change.
- **Packages:** Add a package only when the project needs it. Current dependencies: `react`, `react-dom`, `react-router-dom`, `bootstrap`; dev: `vite`, `@vitejs/plugin-react`.
- **Secrets:** Never put API keys or other secrets in the code or in any committed file. If the site ever needs such values, keep them in a local `.env`, which `.gitignore` excludes. Remember that any `VITE_` variable ends up in the public browser bundle.
