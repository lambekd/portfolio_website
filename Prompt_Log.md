# Prompt Log

A history of the prompts made in the IDE over the life of this project. New entries go at the bottom. Anything secret-like in a prompt is replaced with `[REDACTED]`.

## 2026-11-05 02:18 UTC
**Prompt:** Standing project rules:
- Prompt Log: If it doesn't exist already, create a markdown file called Prompt_Log.md that tracks all prompts that were created over the project's history. Every time a prompt is made in the IDE, log that entry into the Prompt_Log.md file along with its date/time, what was changed and what changes were made.
- Git: Before changing anything in the project, confirm that we're on a different branch than the main one or create one if one hasn't been made yet. Do not commit, push, merge or open pull requests. I'll handle those myself.
- Project Rules: React, HTML, CSS, JavaScript, Bootstrap. Maintain a "README.md" file that shows the user how to install and maintain the app; update when something changes. Exclude unnecessary packages for the project. Don't put any API keys or other secret information in the code or any of the files to commit.

**What was changed:** `CLAUDE.md`, `Prompt_Log.md`, `README.md`, `.gitignore` (all new); new branch `setup/project-foundation`

**Changes made:** Created the branch before any file changes. Added the project rules to `CLAUDE.md` so they apply in future sessions, started this log, added a README with prerequisites and maintenance steps, and added a `.gitignore` covering dependencies, build output and environment files. The app itself has not been scaffolded.

## 2026-11-05 23:31 UTC
**Prompt:** Create a web application that showcases my professional projects that I have for my career in Design Technology and Information Systems. Have it use React and Boostrap to make the website more interactive with buttons along the bottom of the home page's screen that point to the projects page, the skills page, a contact page and a contact information form link.

Clarifications chosen: install Node with nvm, send the contact form through Formspree, start with placeholder content in one data file, and put Contact and the form on one page (the form button jumps to the form section).

**What was changed:** New: `package.json`, `package-lock.json`, `vite.config.js`, `index.html`, `.env.example`, `src/main.jsx`, `src/App.jsx`, `src/index.css`, `src/data/portfolio.js`, `src/components/NavBar.jsx`, `src/components/ProjectCard.jsx`, `src/pages/Home.jsx`, `src/pages/Projects.jsx`, `src/pages/Skills.jsx`, `src/pages/Contact.jsx`, `src/pages/NotFound.jsx`. Updated: `README.md`, `Prompt_Log.md`. Outside the repo: installed nvm and Node v26.13.0 LTS in WSL, which added nvm lines to `~/.bashrc`.

**Changes made:** Built a React + Bootstrap site with Vite and React Router.
- Home: a full-screen intro with Projects, Skills, Contact and Contact Form buttons along the bottom of the screen.
- Projects: category filter buttons and a detail popup for each project.
- Skills: grouped progress bars and badges.
- Contact: contact details and a validated form that posts to Formspree. The form ID is read from a git-ignored `.env`, and the form shows a notice until the ID is set.

All content is placeholder `TODO` text in `src/data/portfolio.js`. Dependencies are limited to react, react-dom, react-router-dom and bootstrap, plus vite and @vitejs/plugin-react for development. Rewrote the README with setup, run, form setup, content editing, structure and deployment notes. Verified that `npm run build` succeeds and that all routes return 200 on the dev server.

## 2026-11-05 23:35 UTC (approximate)
**Prompt:** Where can I view the website to ensure it meets requirements?

**What was changed:** No changes.

**Changes made:** None. Answered that `npm run dev` serves the site at http://localhost:5173, which the Windows browser can open through WSL2, and gave a checklist for reviewing it. The plan to start the server was declined.

## 2026-11-05 23:41 UTC
**Prompt:** On the Home.jsx file, add the following text and add a space between the paragraphs. Place it in white text and give the background a faded neon blue background with silver circuits running across it to give it a technology-related vibe. (Followed by three bio paragraphs: an introduction as Kevin Lambert, business technologist; CAD Designer work since 2015 and the 2024 Information Systems degree; and how to make contact.)

**What was changed:** `src/pages/Home.jsx`, `src/index.css`, `Prompt_Log.md`

**Changes made:** Added the three bio paragraphs to the Home hero in white text, with spacing between paragraphs and a readable line length. Replaced the hero's dark blue gradient with a faded neon blue gradient and soft neon glows, overlaid with a repeating inline SVG tile of silver circuit traces, pads and a chip outline. The background adds no image files or packages.

## 2026-11-05 23:44 UTC
**Prompt:** When I clicked the link to see it, I got an error code saying ERR_CONNECTION_REFUSED (-102) and it failed to load the page. Please troubleshoot what went wrong and fix the necessary connections.

**What was changed:** `README.md`, `Prompt_Log.md`. No code or config changes.

**Changes made:** Diagnosed that nothing was listening on port 5173, because the dev server had never been started. Node and nvm were set up correctly, and WSL is in NAT mode with localhost forwarding. Started the Vite dev server in the background on `127.0.0.1:5173`. Confirmed it returns 200 from inside WSL and from Windows (`curl.exe` on `localhost` and `127.0.0.1`, including `/contact`). Added a troubleshooting section to the README explaining that the dev server must be running and how to start it.
