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

## 2026-11-05 23:58 UTC
**Prompt:** @src/pages/Home.jsx Change "Your Name" to "Kevin Lambert". Replace the TODO sentence with the following sentence: an experienced hybrid professional working at the intersection of manufacturing, computer-aided design and digital transformation. Replace "Design Technology and Information Systems" with "Experienced CAD Professional with Digital Transformation Experience".

**What was changed:** `src/data/portfolio.js`, `Prompt_Log.md`

**Changes made:** Updated the `profile` values that Home.jsx displays, which live in `src/data/portfolio.js` rather than in Home.jsx itself.
- `name`: "Kevin Lambert". This also updates the navbar brand on the other pages.
- `tagline`: the new sentence, with its first letter capitalized.
- `title`: "Experienced CAD Professional with Digital Transformation Experience".

Left the "Design Technology and Information Systems" wording on the Projects page and in the `index.html` meta description unchanged, since the request was about the home page.

## 2026-11-06 00:06 UTC
**Prompt:** @src/pages/Projects.jsx Add the following text to the Projects page. (Followed by three projects, each with a title, a description and "Tools and Technologies Used":
- Take Back The Night: an Ivy Tech event poster, spring 2014; Adobe Illustrator, InDesign.
- Wabash CAD Schedule: engineering sales order tracking; Microsoft Power Apps, SharePoint, Power Automate, Power BI.
- Lafayette Urban Ministry Food Rescue Weighing System: food donation weighing app; Brecknell GP100, Devin & Cursor AI, LibreOffice Calc & Base.)

**What was changed:** No changes. A plan was written, and the user interrupted it to add years.

**Changes made:** None at this step. Implemented in the next entry.

## 2026-11-06 00:08 UTC
**Prompt:** For the Wabash CAD Schedule, give it the year 2024. For the LUM Food Rescue Weighing System, give it the year 2026.

**What was changed:** `src/data/portfolio.js`, `src/components/ProjectCard.jsx`, `src/pages/Projects.jsx`, `README.md`, `Prompt_Log.md`

**Changes made:**
- Replaced the 4 placeholder projects with the user's 3, using their wording verbatim.
  - Take Back The Night: Design Technology, 2014.
  - Wabash CAD Schedule: Information Systems, 2024.
  - Lafayette Urban Ministry Food Rescue Weighing System: Information Systems, 2026.
- Each card shows the first sentence as its summary, and the "View details" popup shows the full paragraph.
- Cards now list the tools under "Tools and Technologies Used:", and the popup heading uses the same wording.
- The year is hidden when empty.
- Noted the optional `year` and `link` fields in the README.
- Verified that `npm run build` succeeds and `/projects` returns 200.

## 2026-11-06 00:12 UTC
**Prompt:** @src/pages/Skills.jsx Under the Design Technology card, add SolidWorks as a skill in place of TODO: Skill one. Place it at 87%. For Design Technology TODO: Skill two, replace it with Parametric Solid Modeling at place it at 80%. For TODO: Skill Three, replace it with AutoCAD and place it at 75%.

**What was changed:** `src/data/portfolio.js`, `Prompt_Log.md`

**Changes made:** Replaced the three Design Technology placeholder skills in `skillGroups`, which Skills.jsx displays: SolidWorks (87%), Parametric Solid Modeling (80%) and AutoCAD (75%). The Information Systems and Tools & Platforms placeholders are unchanged.

## 2026-11-06 00:15 UTC
**Prompt:** @src/pages/Skills.jsx Under the Information Systems card, replace TODO: Skill One with Business Process Mapping at 80%. Replace TODO: Skill two with Project Management at 85%. Replace TODO: Skill three with Requirements Gathering at 87%.

**What was changed:** `src/data/portfolio.js`, `Prompt_Log.md`

**Changes made:** Replaced the three Information Systems placeholder skills in `skillGroups`: Business Process Mapping (80%), Project Management (85%) and Requirements Gathering (87%). The Tools & Platforms placeholders are unchanged.

## 2026-11-06 00:23 UTC
**Prompt:** @src/pages/Skills.jsx Change the page background to match that of the homepage. Place the Projects, Skills and Contact buttons at the bottom of the page with the same formatting as the Home page for consistency.

**What was changed:** New: `src/components/SectionButtons.jsx`. Updated: `src/pages/Skills.jsx`, `src/pages/Home.jsx`, `src/index.css`, `README.md`, `Prompt_Log.md`

**Changes made:**
- Moved Home's bottom button row into a shared `SectionButtons` component, so both pages use identical formatting. Home looks the same as before.
- The Skills page now uses the Home background (the `.hero` class) and fills the screen below the navbar (new `.page-fill` class).
- Skills shows Projects, Skills and Contact buttons along the bottom. Skills, the current page, is the solid button and is marked with `aria-current`.
- The Skills heading and subtitle are now white for contrast. The skill cards stay white.
- Added the new component to the README's project structure.

## 2026-11-06 00:26 UTC
**Prompt:** Modify the Projects and Contacts pages to match the background formatting of the Home Page and the Skills Page. Remove the Projects, Skills and Contact text links from the tops of the pages that they're on.

Clarification chosen: remove all three top-bar links and keep only "Kevin Lambert", which links Home. Navigation moves to the bottom buttons on every page.

**What was changed:** `src/components/NavBar.jsx`, `src/pages/Projects.jsx`, `src/pages/Contact.jsx`, `README.md`, `Prompt_Log.md`

**Changes made:**
- The top bar now shows only the "Kevin Lambert" link to Home. Removed the Projects/Skills/Contact links, the mobile menu toggle and its state.
- Projects and Contact now use the Home/Skills circuit background (`.hero` and `.page-fill`), with the shared `SectionButtons` row along the bottom. The current page's button is solid.
- Page headings are white, and the subtitles are lighter white instead of grey.
- The Projects filter buttons switched to light styles so they're readable on blue.
- Cards, the project popup and the contact form keep their white backgrounds and dark text. Bootstrap sets their text color, so they stay readable.
- Updated the README structure notes.
- Verified that `npm run build` succeeds and all four routes return 200.

## 2026-11-06 00:45 UTC
**Prompt:** @src/pages/Skills.jsx Revise the Title to say "Skills & Software". Under the Tools and Platforms card, replace TODO: Tool with Microsoft Power Suite, SharePoint, Devin AI and Cursor AI.

**What was changed:** `src/pages/Skills.jsx`, `src/data/portfolio.js`, `Prompt_Log.md`

**Changes made:**
- Changed the Skills page heading to "Skills & Software". The bottom "Skills" button label is unchanged.
- Replaced the 3 `TODO: Tool` placeholders in the Tools & Platforms group with 4 tags: Microsoft Power Suite, SharePoint, Devin AI and Cursor AI.

## 2026-11-06 00:50 UTC
**Prompt:** @src/pages/Contact.jsx Replace the email "you@example.com" with "klambertinfosystems400@gmail.com". Replace the location with West Lafayette, IN. Insert a link to GitHub with the following URL: https://github.com/lambekd. Insert a link to LinkedIn with the following URL: https://www.linkedin.com/in/kevinlambert1993/.

**What was changed:** `src/data/portfolio.js`, `Prompt_Log.md`

**Changes made:** Set the `contact` values that Contact.jsx displays and removed their `TODO`s. Contact.jsx itself needed no changes, since it already renders the email as a mailto link and LinkedIn/GitHub as new-tab links once they're set.
- email: klambertinfosystems400@gmail.com
- LinkedIn: https://www.linkedin.com/in/kevinlambert1993/
- GitHub: https://github.com/lambekd
- location: West Lafayette, IN

## 2026-11-06 01:05 UTC (approximate)
**Prompt:** If I deploy this to Google Cloud Console for Cloud Run, which link should I start with for the main page?

**What was changed:** No changes.

**Changes made:** None. Answered that the main page is the root of the Cloud Run service URL (`https://<service>-<id>.<region>.run.app/`), not `localhost:5173` or `/index.html`. Noted that the repo needs a container setup (a Dockerfile with nginx and an `index.html` fallback, and the Formspree ID passed at build time) before it can run on Cloud Run. The plan to add that setup was declined.

## 2026-11-06 01:12 UTC
**Prompt:** @src/pages/Home.jsx Remove the Contact button and keep the Contact Form button.

**What was changed:** `src/pages/Home.jsx`, `Prompt_Log.md`

**Changes made:** Removed the Contact button from the Home page's bottom row. Home now shows Projects, Skills and Contact Form, and Contact Form still goes to `/contact#contact-form`. The Contact buttons on the other pages are unchanged.

## 2026-11-06 01:40 UTC
**Prompt:** @src/pages/Skills.jsx Under the Information Systems skill card, add the following: Data Visualization at 85%, Database Design at 85%, Entity Relational Diagrams at 80%.

**What was changed:** `src/data/portfolio.js`, `Prompt_Log.md`

**Changes made:** Added three skills to the end of the Information Systems group, which Skills.jsx displays: Data Visualization (85%), Database Design (85%) and Entity Relational Diagrams (80%). The card now lists six skills.

## 2026-11-06 01:42 UTC
**Prompt:** @src/pages/Skills.jsx Under the Design Technology skill card, add Inventor at 70%, Revit at 60%, Photoshop at 68%, Illustrator at 65% and InDesign at 76%.

**What was changed:** `src/data/portfolio.js`, `Prompt_Log.md`

**Changes made:** Added five skills to the end of the Design Technology group, in the order given: Inventor (70%), Revit (60%), Photoshop (68%), Illustrator (65%) and InDesign (76%). The card now lists eight skills.

## 2026-11-06 01:53 UTC
**Prompt:** @src/pages/Contact.jsx Remove the Send a message contact form along with the email address.

Clarifications chosen: rename the Home "Contact Form" button to "Contact" (pointing to `/contact`), and change the bio's closing sentence to mention LinkedIn only.

**What was changed:** `src/pages/Contact.jsx`, `src/data/portfolio.js`, `src/pages/Home.jsx`, `src/index.css`, `README.md`, `Prompt_Log.md`. Deleted `.env.example`.

**Changes made:**
- Removed the "Send a message" form and all of its logic (Formspree submission, validation, alerts, honeypot) from the Contact page. Also removed the Email row.
- The Contact information card (LinkedIn, GitHub, Location) now stands alone at a wider width.
- Removed `email` from `src/data/portfolio.js`, so the address isn't in the built site.
- On Home, the "Contact Form" button is now "Contact", and the last bio sentence reads "If you wish to contact me, feel free to reach out to me on LinkedIn."
- Deleted the unused `#contact-form` CSS rule and `.env.example`, which only held the Formspree ID. The `.env` rules in `.gitignore` stay as a safeguard.
- Removed the Formspree setup, the `.env` install step and the deployment note from the README.
