// CASE STUDIES
// Keyed by project name (must match `name` in projects.js).
// Each section is optional; leave one out and it simply won't render.

const caseStudies = {
  "iHub Comms": {
    role: "Product engineer: idea, product, all UI/UX and mockups, team lead, feature development",
    team: "CTRL + Create",
    problem:
      "iHub was paying subscriptions for several platforms that each covered one slice of what a cohort needs: courses, classes, attendance, announcements and task tracking. Information was spread across all of them, so learners missed deadlines and mentors had no single place to see who was falling behind.",
    approach: [
      "Spotted the gap and scoped one platform covering what a cohort uses every day, so iHub could stop paying for overlapping tools.",
      "Designed the whole experience: information architecture, the sidebar workspace layout, every screen's mockups and the interaction details.",
      "Put together a team, CTRL + Create, to build it the way real product teams work: feature branches, pull requests and reviews. I built features alongside them.",
      "Pitched the app to iHub for internal use.",
    ],
    technical: [
      "Permissions enforced in PostgreSQL with Row Level Security for learner, mentor and admin, not just hidden in the UI.",
      "Invite-only accounts: a security-definer accept_invite() function sets role and cohort, and a trigger stops non-admins changing their own role.",
      "Live updates for announcements, messages, task comments and notifications through Supabase Realtime subscriptions.",
      "Submissions and profile photos in Supabase Storage, with photos visible only to the learner's own cohort.",
      "One Postgres search function across tasks, announcements, messages, submissions, schedule and notes, still filtered by RLS.",
      "Edge Functions for invite emails (Resend), integration sync behind one adapter per platform, and an assistant that queries with the user's own token.",
    ],
    outcome: [
      "One invite-only platform covering announcements, chat, tasks, submissions, schedule, attendance, courses and notes",
      "Pitched to iHub for internal use",
    ],
    stack: ["React", "Vite", "Supabase", "PostgreSQL", "Row Level Security", "Realtime", "Edge Functions", "Vercel"],
  },

  "Un De Plus Tours": {
    role: "Solo: product, UI/UX and full-stack development for an existing client",
    problem:
      "The client's site looked finished but didn't work as a business tool. Booking and contact forms submitted nowhere, buttons were dead, contact details were placeholders, the translate option didn't translate, and broken structured data crashed the build. Every lost form was a lost booking from an international visitor.",
    approach: [
      "Audited every page for dead ends and fixed each one: real contact details, real photos, working buttons, one shared navbar.",
      "Wired every form to a database so no enquiry is lost, with an admin dashboard for staff.",
      "Designed a trip planner visitors can keep: save to an account, download as PDF, email it, or export to Google Docs.",
      "Opened the site to diverse visitors with a 19-language switcher and an accessibility widget (read aloud, text size, high contrast).",
      "Took it live on the client's own domain, with hosting in the client's name.",
    ],
    technical: [
      "Next.js 14 App Router with TypeScript and Tailwind CSS.",
      "Supabase Auth and Row Level Security: customers read only their own itineraries, anyone can submit an enquiry, only admins read them all.",
      "Re-runnable SQL migrations (drop-then-create, since Postgres has no CREATE POLICY IF NOT EXISTS).",
      "jsPDF loaded with a dynamic import, so the PDF library only downloads when someone exports.",
      "Google Docs export through Google Identity Services.",
      "Fixed the JSON-LD that crashed the build, added sitemap, robots and share metadata, and patched dependency vulnerabilities.",
    ],
    outcome: [
      "Booking and contact enquiries are captured instead of lost",
      "Live on the client's domain with one dashboard for every itinerary and enquiry",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "jsPDF", "Vercel"],
  },

  "St Frusquin Sporting": {
    role: "Solo: UI/UX design and frontend development for the club",
    problem:
      "A five-team community football club (Seniors, U15, U13 Boys, U13 Girls, U11) had no website. Parents relied on social media for fixtures and contacts, and most of them browse on phones with limited data.",
    approach: [
      "Organised the whole site around the five divisions, so a parent finds their child's team in one tap.",
      "Designed for limited data first, which meant fixing the photo gallery before anything else.",
      "Used honest \"coming soon\" states instead of inventing fixtures or names: wrong fixtures are worse than none.",
      "Started in plain HTML, CSS and JavaScript, then migrated to React once the content structure was clear.",
    ],
    technical: [
      "First load cut from 32 MB to 3.9 MB: small thumbnails in the grid, full resolution only in the lightbox.",
      "Lightbox built as an accessible dialog with a focus trap and focus restore.",
      "WCAG AA contrast, visible focus states, larger touch targets, and animation switched off for prefers-reduced-motion.",
      "Division tabs filter fixtures, squad and gallery from one data file.",
      "React 19 + Vite with CSS Modules and shared design tokens.",
      "Conditional Vite base path so one build deploys to both GitHub Pages (via GitHub Actions) and Vercel.",
    ],
    outcome: [
      "88% lighter first load",
      "Five divisions, 100+ photos, coaches and official league links in one place",
      "A handoff README so the club can keep it updated",
    ],
    stack: ["React", "Vite", "CSS Modules", "Formspree", "GitHub Actions", "Vercel"],
  },

  "Airbnb Clone": {
    role: "Solo: full-stack capstone",
    problem:
      "A booking platform has two sides that need different things from the same data. Guests browse and reserve; hosts create listings and see bookings. Each side must only change what's theirs.",
    approach: [
      "One REST API serving two separate frontends: a guest site and a host dashboard.",
    ],
    technical: [
      "Express 5 with routes, controllers and Mongoose models kept separate, plus central error-handling middleware.",
      "JWT authentication middleware, bcrypt password hashing in a Mongoose pre-save hook, and role checks (hosts edit only their own listings).",
      "Correct HTTP status codes (400, 401, 403, 404) so the frontends can explain what went wrong.",
      "43 API tests with Jest and Supertest against a separate test database.",
      "Express serves the API and both built React apps, so the whole platform deploys as one Heroku app.",
      "Fixed breaking changes after upgrades: Express 5 wildcard routes and Mongoose 9 save hooks.",
    ],
    outcome: [
      "Guest site, host dashboard and API working together",
      "Full API docs and a deployment guide",
    ],
    stack: ["React", "Vite", "Node.js", "Express", "MongoDB", "JWT", "Jest"],
  },

  "Tic-Tac-Toe · Neon Arena": {
    role: "Solo: frontend intern assignment",
    problem:
      "Board, turns, scores, mode, difficulty, names and move history all change together. Spread across many pieces of state, the screen and the rules start to disagree.",
    approach: [
      "Treated a small game like a real app: one source of truth, and components that only display what they're given.",
    ],
    technical: [
      "All game state in one useReducer with named actions (PLAY, JUMP_TO, RESTART, SET_MODE…).",
      "One getGameStatus() function decides win or draw, shared by the reducer and the UI.",
      "Hard mode uses the minimax algorithm, so the CPU can't be beaten.",
      "The CPU plays through the same PLAY action as a person, triggered from one useEffect.",
      "Time travel through move history; animations respect prefers-reduced-motion.",
    ],
    outcome: ["A small game built with the architecture you'd want in a larger app"],
    stack: ["React", "useReducer", "Vite"],
  },
}

export default caseStudies
