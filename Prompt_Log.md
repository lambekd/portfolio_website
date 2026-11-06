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

## 2026-11-06 02:06 UTC
**Prompt:** @src/pages/Projects.jsx Rename the title to Project Portfolio. Rename the text underneath it to say "Here are a few of the highlights of my career in Design Technology and Information Systems."

**What was changed:** `src/pages/Projects.jsx`, `Prompt_Log.md`

**Changes made:** Changed the Projects page heading to "Project Portfolio" and the subtitle to "Here are a few of the highlights of my career in Design Technology and Information Systems." The bottom "Projects" button and the filter buttons are unchanged.

## 2026-11-06 02:09 UTC
**Prompt:** @src/pages/Projects.jsx @src/pages/Skills.jsx @src/pages/Contact.jsx Have a red Home button appear to the left of Projects on the selected pages for easy navigation to the home page.

**What was changed:** `src/pages/Projects.jsx`, `src/pages/Skills.jsx`, `src/pages/Contact.jsx`, `Prompt_Log.md`

**Changes made:** Added a red Home button (Bootstrap `btn-danger`, linking to `/`) as the first button in the bottom row of the Projects, Skills and Contact pages, to the left of Projects. It uses the same size and layout as the other buttons through the shared `SectionButtons` component. The Home page is unchanged.

## 2026-11-06 02:25 UTC
**Prompt:** @src/pages/Home.jsx Revise the text body of the professional summary to say the following below: (Followed by three revised paragraphs: an introduction as a business technologist whose interest in technology was fostered by their father's IT career; CAD designer work since 2015 and the 2024 Information Systems degree; and an invitation to collaborate through the Contact button and LinkedIn.)

**What was changed:** `src/pages/Home.jsx`, `Prompt_Log.md`

**Changes made:** Replaced the three Home page bio paragraphs with the user's revised wording, keeping the existing white text and paragraph spacing. One typo was corrected, with the user's approval in the plan: "I am enjoy meeting" became "I enjoy meeting". Otherwise the text is verbatim.

## 2026-11-06 04:29 UTC
**Prompt:** Modify the app so that when the user clicks on the navigation buttons (i.e., projects, skills, etc.), the current objects on that page move upward and fade away. The target page's objects fade in and move in from the bottom. This gives the app a more animated and organic feel as opposed to just a static website.

**What was changed:** `src/App.jsx`, `src/index.css`, `src/pages/NotFound.jsx`, `README.md`, `Prompt_Log.md`

**Changes made:**
- Added page transitions with no new packages.
- `App.jsx` keeps the page on screen separate from the page being navigated to. On navigation, the current content rises 40px and fades out over 300ms. The new page then mounts and its content rises in from 40px below over 450ms, with the bottom button row following 80ms later.
- Only the content moves; the circuit background stays still.
- The navbar swaps along with the content, and the scroll-to-top waits until the new page is shown.
- Rapid clicks end on the last page clicked. Clicking the current page's button does nothing.
- Visitors with "reduce motion" turned on in their operating system get instant page swaps.
- The enter animation ends on `transform: none`, so the Projects popup still centres on the screen.
- The Not Found page now uses the same background, so it matches and animates too.
- Added notes on the transition files and timings to the README.
- Verified that `npm run build` succeeds and all routes return 200. The animation itself was not checked visually.

## 2026-11-06 04:34 UTC
**Prompt:** Modify the app so that when the user clicks on the navigation buttons on the bottom of the screen, the objects on the previous screen fade away and the objects on the destination screen fade into the view.

Clarification chosen: fade only, no sliding. Remove the up/down movement from the previous transition.

**What was changed:** `src/index.css`, `src/App.jsx` (comment only), `Prompt_Log.md`

**Changes made:**
- The page transition keyframes now animate opacity only. The old page's content fades out over 300ms, then the new page's content fades in over 450ms, with the button row 80ms behind. The upward and downward movement is removed.
- The transition logic in `App.jsx` is unchanged, apart from its comment.
- The reduced-motion override still applies.
- The README needed no change.
- Verified that `npm run build` succeeds and all routes return 200.

## 2026-11-06 04:39 UTC
**Prompt:** The transition effect is still instantaneous. Let's prolong the fading effect to two seconds for each screen.

**What was changed:** `src/index.css`, `src/App.jsx`, `README.md`, `Prompt_Log.md`

**Changes made:**
- Set the page fade-out and fade-in to 2000ms each (`ease-in-out`), and set `EXIT_MS` in `App.jsx` to 2000 to match. Updated the timing note in the README.
- Diagnosed the "instant" report:
  - The dev server was serving the current transition code.
  - The Windows visual-effects registry value is the default (effects on).
  - A headless Chrome test, run with a temporary script outside the repo, clicked the Home page's Projects button. It measured content opacity falling from 1.00 to 0.02 over about 2s, the switch to Project Portfolio, then opacity rising from 0.00 to 1.00 over about 2s.
  - Headless Chrome reported `prefers-reduced-motion: false`.
- The transitions work in the browser. If they still look instant to the user, the likely cause is their browser reporting reduce motion (the site skips animations then), or a tab that hasn't reloaded.

## 2026-11-06 04:45 UTC
**Prompt:** I just pased the URL into Chrome and the fading effect works. Let's shorten it down to one second per transition and have the main page rise up and fade into place upon the user opening the web app.

**What was changed:** `src/index.css`, `src/App.jsx`, `README.md`, `Prompt_Log.md`

**Changes made:**
- Navigation fades are now 1000ms out and 1000ms in, with `EXIT_MS` set to 1000.
- Added an opening "intro" animation (new `page-intro` keyframes, with `App.jsx` starting at stage `intro`). When the app is first opened, the content rises 40px and fades into place over 1000ms, with the button row 80ms behind.
- Fixed the same-page branch in `App.jsx` so it no longer resets the stage on first render, which would have cancelled the intro.
- The intro uses `backwards` fill, so no transform is left on the content afterwards. A headless Chrome test found that `both` fill left a zero transform, which would have pushed the Projects popup out of place when `/projects` was opened directly.
- Added the intro to the reduced-motion override, and updated the README timing note.
- Verified in headless Chrome:
  - The intro rises from 40px to 0 while opacity goes from 0 to 1 over about 1s.
  - Clicking Projects fades out over about 1s (0.96 to 0.01), swaps, then fades in over about 1s (0.00 to 1.00).
  - Afterwards the content transform is `none`, and the popup on a directly opened `/projects` is centred.
  - `npm run build` succeeds and all routes return 200.

## 2026-11-06 17:54 UTC
**Prompt:** @src/pages/Skills.jsx Under the Tools & Platforms card, break down Microsoft Power Suite into sections for Power Apps, Power BI and Power Automate like Design Technology and Information Systems. Assign the following percentages to the tools: Power Apps has 80%, Power BI has 90% and Power Automate has 70%.

**What was changed:** `src/data/portfolio.js`, `Prompt_Log.md`

**Changes made:** In the Tools & Platforms group, replaced the "Microsoft Power Suite" tag with three progress-bar entries: Power Apps (80%), Power BI (90%) and Power Automate (70%), shown first in that order. SharePoint, Devin AI and Cursor AI stay below as tags, since they have no percentages. Skills.jsx needed no change.

## 2026-11-06 17:56 UTC
**Prompt:** @src/pages/Skills.jsx Move Power Apps, Power BI and Power Automate to the Information Systems skill card. Assign a scroll bar off to the right of the card to make scrolling easier for the viewer.

**What was changed:** `src/data/portfolio.js`, `src/pages/Skills.jsx`, `src/index.css`, `Prompt_Log.md`

**Changes made:**
- Moved Power Apps (80%), Power BI (90%) and Power Automate (70%) from Tools & Platforms to the end of Information Systems, which now has 9 skills. Tools & Platforms keeps SharePoint, Devin AI and Cursor AI.
- Added a `.skill-scroll` class to every skill list. Lists are capped at 20rem tall and scroll inside the card, with a thin blue scroll bar on the right that appears only when needed.
- Added padding so the percentages don't touch the scroll bar.
- Each list can be focused with the keyboard (`tabIndex`, `aria-label`) and shows a focus outline.
- Verified in headless Chrome at 1280×900:
  - Design Technology (8 skills) and Information Systems (9 skills) both scroll, at 320px visible of 392px and 441px total, with a 10px scroll bar.
  - Tools & Platforms (3 tags) does not scroll.
  - `npm run build` succeeds and `/skills` returns 200.

## 2026-11-06 18:05 UTC
**Prompt:** @src/pages/Skills.jsx Move SharePoint from Tools and Platforms to Information Systems. Assign it a value of 85%. Change Tools and Platforms to Skills Under Development. Keep Cursor AI and Devin AI on that card. Assign Devin AI a value of 56% and Cursor AI a value of 45%.

**What was changed:** `src/data/portfolio.js`, `Prompt_Log.md`

**Changes made:**
- Moved SharePoint to the end of Information Systems at 85%. That card now has 10 skills and scrolls.
- Renamed the "Tools & Platforms" group to "Skills Under Development", with Devin AI (56%) and Cursor AI (45%) as progress bars.
- Skills.jsx needed no change, since the card heading and the list label come from the group name.

## 2026-11-06 18:24 UTC
**Prompt:** @src/pages/Skills.jsx On the Information Systems card, add the following skills with the respective values: Python with a value of 75% and SQL with a value of 75%.

**What was changed:** `src/data/portfolio.js`, `Prompt_Log.md`

**Changes made:** Added Python (75%) and SQL (75%) to the end of the Information Systems group, after SharePoint. The card now has 12 skills and scrolls. Skills.jsx needed no change.

## 2026-11-06 18:32 UTC
**Prompt:** @src/pages/Skills.jsx Move Skills Under Development underneath the Design Technology. Create a third card to the right of the Information Systems Card titled "Software Tools". Move the following items from their original card to this new one along with their respective values: SolidWorks, AutoCAD, Inventor, Revit, Photoshop, Illustrator, InDesign, Power Apps and SharePoint.

**What was changed:** `src/data/portfolio.js`, `src/pages/Skills.jsx`, `README.md`, `Prompt_Log.md`

**Changes made:**
- Created a "Software Tools" group with SolidWorks 87, AutoCAD 75, Inventor 70, Revit 60, Photoshop 68, Illustrator 65 and InDesign 76 (from Design Technology), plus Power Apps 80 and SharePoint 85 (from Information Systems), in that order.
- Design Technology now has only Parametric Solid Modeling (80%), since it wasn't in the move list.
- Information Systems keeps 10 skills, including Power BI and Power Automate, which weren't in the move list.
- Added a `column` field to each skill group. Skills.jsx now renders 3 columns, with the card markup moved into a local `SkillCard` component:
  - Column 1: Design Technology, with Skills Under Development below it.
  - Column 2: Information Systems.
  - Column 3: Software Tools.
  - The last card in each column stretches so the bottoms line up.
- Documented `column` in the README.
- Verified in headless Chrome at 1280×900:
  - Design Technology is at x=71, y=208 and Skills Under Development directly below at x=71, y=353.
  - Information Systems is at x=451 and Software Tools at x=831, both at y=208.
  - All three columns end at the same bottom.
  - Information Systems (10) and Software Tools (9) scroll.
  - `npm run build` succeeds and `/skills` returns 200.

## 2026-11-06 18:36 UTC
**Prompt:** @src/pages/Skills.jsx Move Power BI and Power Automate from Infromation Systems to Software Tools. Under Design Technology, add the following skills and their respective values: Engineering Drawings at 90% and GD&T at 90%. Place Power BI and Power Automate between Power Apps and SharePoint.

**What was changed:** `src/data/portfolio.js`, `Prompt_Log.md`

**Changes made:**
- Moved Power BI (90%) and Power Automate (70%) from Information Systems to Software Tools, between Power Apps and SharePoint.
- Information Systems now has 8 skills and Software Tools 11.
- Added Engineering Drawings (90%) and GD&T (90%) to Design Technology, after Parametric Solid Modeling, giving it 3 skills.

## 2026-11-06 18:43 UTC
**Prompt:** @src/pages/Skills.jsx Under Design Technology, add the following skills and their respective values: Graphic Design at 85% and Architectural Layouts at 72%. Under Information Systems, add Use Cases/User Stories at 85% after Requirements Gathering.

**What was changed:** `src/data/portfolio.js`, `Prompt_Log.md`

**Changes made:**
- Added Graphic Design (85%) and Architectural Layouts (72%) to the end of Design Technology, which now has 5 skills.
- Inserted Use Cases/User Stories (85%) in Information Systems right after Requirements Gathering, giving 9 skills.

## 2026-11-06 18:46 UTC
**Prompt:** @src/pages/Skills.jsx Modify the Information Systems and Software Tools to show all values in their columns without the need of a scroll bar.

**What was changed:** `src/pages/Skills.jsx`, `src/index.css`, `README.md`, `Prompt_Log.md`

**Changes made:**
- Removed the scrolling skill-list setup, since no card needs it now. Cards grow to show every skill.
  - From the list in `SkillCard`: the `skill-scroll` class, `tabIndex` and `aria-label`.
  - From `index.css`: the `.skill-scroll` rules (20rem height cap, overflow, scroll bar colours, focus outline).
- Updated the README note.
- Verified in headless Chrome at 1280×900:
  - No list scrolls (scrollHeight equals clientHeight on all 4 cards), with overflow `visible`.
  - Information Systems shows all 9 skills and Software Tools all 11, both at 611px tall.
  - Column 1 (Design Technology above Skills Under Development) ends at the same bottom.
  - `npm run build` succeeds and `/skills` returns 200.

## 2026-11-06 18:59 UTC
**Prompt:** @src/pages/Skills.jsx Under Design Technology, add STEP files at 78%. Under Skills Under Development, add Git, DevOps and GitHub. Place Git at 40%, DevOps at 45% and GitHub at 48%.

**What was changed:** `src/data/portfolio.js`, `Prompt_Log.md`

**Changes made:**
- Added STEP files (78%) to the end of Design Technology, which now has 6 skills.
- Added Git (40%), DevOps (45%) and GitHub (48%) to the end of Skills Under Development, which now has 5 skills.

## 2026-11-06 19:01 UTC
**Prompt:** Show me the current sizes for the Information Systems and Software Tools cards.

**What was changed:** No project changes, apart from this log entry.

**Changes made:** None. Measured the Skills page in headless Chrome, using a temporary script outside the repo whose browser profile was deleted.

| Window width | Information Systems | Software Tools |
|---|---|---|
| 1280px | 356 × 707 px | 356 × 707 px |
| 1440px | 416 × 707 px | 416 × 707 px |
| 768px (tablet, 2 columns) | 336 × 707 px | 336 × 611 px (wraps below Design Technology) |

- At 1280 and 1440, both cards stretch to match column 1 (Design Technology 366px + 24px gap + Skills Under Development 317px = 707px).
- Their own content needs about 513px (Information Systems) and 611px (Software Tools).

## 2026-11-06 19:11 UTC
**Prompt:** @src/pages/Skills.jsx Under the Software Tools column, move the following items and their respective values back to Design Technology: SolidWorks, AutoCAD, Inventor, Revit, Photoshop, Illustrator and InDesign. Move Power Apps, Power BI, Power Automate and SharePoint back to Information Systems along with those items' respective values.

Clarifications chosen: remove the now-empty Software Tools card and use 3 columns with one card each (Design Technology | Information Systems | Skills Under Development). Place the software first, then the skills.

**What was changed:** `src/data/portfolio.js`, `Prompt_Log.md`

**Changes made:**
- Moved SolidWorks 87, AutoCAD 75, Inventor 70, Revit 60, Photoshop 68, Illustrator 65 and InDesign 76 to the top of Design Technology, which now has 13 skills.
- Moved Power Apps 80, Power BI 90, Power Automate 70 and SharePoint 85 into Information Systems after Entity Relational Diagrams, which now has 13 skills.
- Deleted the empty Software Tools group and moved Skills Under Development to column 3 (5 skills).
- Skills.jsx and the README needed no change.
- Verified:
  - 31 skills in total, as before.
  - `npm run build` succeeds and `/skills` returns 200.
  - Headless Chrome at 1280×900 shows three cards side by side at y=208 (x=75, 455, 835), each 356 × 709 px.
  - Skills Under Development's content needs only about 317px and is stretched to match.

## 2026-11-06 19:17 UTC
**Prompt:** @src/pages/Skills.jsx Modify the Skills Under Development card to remove the empty space, yet leave it flexible to allow skills to be added, so that it can stretch as needed.

**What was changed:** `src/data/portfolio.js`, `src/pages/Skills.jsx`, `README.md`, `Prompt_Log.md`

**Changes made:**
- Added an optional `fitContent` setting for skill groups and set it on Skills Under Development. Skills.jsx only stretches the last card in a column when its group doesn't have `fitContent`.
- Skills Under Development is now only as tall as its skills and grows as skills are added. Design Technology and Information Systems still line up.
- Documented `fitContent` in the data comment and the README.
- Verified in headless Chrome at 1280×900:
  - Skills Under Development is 356 × 317 px, down from 709px.
  - Design Technology and Information Systems stay 356 × 709 px, and all three share the same top.
  - Adding 2 rows in the browser only (no project data changed) grew the card from 317px to 415px (+98px, about 49px per skill).
  - `npm run build` succeeds and `/skills` returns 200.

## 2026-11-06 19:30 UTC
**Prompt:** @src/pages/Projects.jsx Add a project card next to Take Back the Night titled "TARA Hamfest Postcard." Have the description read: "A postcard advertising the 2014 Hamfest for a local ham radio club." Tools and Technologies used were Adobe Photoshop and Adobe InDesign. Have this project fall under Design Technology.

**What was changed:** `src/data/portfolio.js`, `Prompt_Log.md`

**Changes made:**
- Added the "TARA Hamfest Postcard" project as the 2nd entry, right after Take Back The Night:
  - Design Technology, 2014.
  - The given description is used for both the card and the popup.
  - Tools: Adobe Photoshop and Adobe InDesign.
- Projects.jsx needed no change. The desktop grid row 1 is now Take Back The Night | TARA Hamfest Postcard | Wabash CAD Schedule.

## 2026-11-06 19:33 UTC
**Prompt:** @src/pages/Projects.jsx Under the TARA Hamfest postcard, add the following information when the user clicks View Details: A postcard advertising the 2014 Hamfest for a local ham radio club. The card used a QR code to show people information about the event such as its date, time and location.

**What was changed:** `src/data/portfolio.js`, `Prompt_Log.md`

**Changes made:**
- Set the TARA Hamfest Postcard's `details`, which the "View details" popup shows, to the user's two-sentence text, verbatim.
- The card's one-sentence `summary`, the tools, the category and the year are unchanged. Projects.jsx needed no change.

## 2026-11-06 20:16 UTC
**Prompt:** Create the following three files in the project root - same as package.json and vite.config.js. (Followed by the contents of `Dockerfile`, a multi-stage `node:20-alpine` build served by `nginx:alpine` on port 8080; `nginx.conf`, listening on 8080 with an `index.html` fallback; and `.dockerignore` with node_modules, dist and .git.)

Clarifications chosen: use `node:24-alpine` instead of `node:20-alpine` (Node 20 is end-of-life), and also exclude `.env` / `.env.*` in `.dockerignore`.

**What was changed:** New branch `feature/cloud-run-docker`, created from `main`, which was the current branch. New: `Dockerfile`, `nginx.conf`, `.dockerignore`. Updated: `README.md`, `Prompt_Log.md`.

**Changes made:**
- Created the three files in the project root with the user's content.
  - `Dockerfile`: only the build-stage base image changed, to `node:24-alpine`.
  - `nginx.conf`: as provided.
  - `.dockerignore`: adds `.env` and `.env.*`.
- Replaced the README's generic Deployment section with "Deploy to Google Cloud Run":
  - what each file does
  - an optional local Docker test
  - the `gcloud run deploy --source .` steps
  - that the home page is the root of the printed Service URL
  - The new files are also added to Project Structure.
- Verified that `npm run build` still succeeds.
- Docker Desktop wasn't running, so the local container test was skipped. Nothing was built, pushed or deployed.
