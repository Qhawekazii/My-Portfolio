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
      "Deployed on Render: the guest site and the host dashboard as separate live apps talking to the same API.",
      "Fixed breaking changes after upgrades: Express 5 wildcard routes and Mongoose 9 save hooks.",
    ],
    outcome: [
      "Guest site and host dashboard live on Render, sharing one API",
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

  "KinderNest": {
    role: "Solo: UI design and frontend development (Rosebank College web development module)",
    problem:
      "A preschool website has one real job: help a parent feel confident enough to get in touch. Many childcare sites read as cold and corporate, and are hard to use on the phone a busy parent is holding.",
    approach: [
      "Planned the sitemap around what parents look for: about, programmes, admissions, gallery and contact.",
      "Built it in two stages: semantic HTML first so the content structure was right, then a full CSS and responsive layer.",
      "Used a warm, calm visual style so it feels welcoming rather than corporate.",
      "Made enquiring easy: an admissions enquiry form, plus email, phone, WhatsApp and an embedded map on the contact page.",
    ],
    technical: [
      "Six pages of semantic HTML with consistent navigation and alt text on every image.",
      "One stylesheet with a CSS reset, colour variables and a rem-based type scale.",
      "Flexbox layouts with media queries at 1024px, 768px and 480px.",
      "Keyboard focus styles on navigation links and hover states on buttons and images.",
      "No JavaScript needed: the brief was HTML and CSS only.",
    ],
    outcome: [
      "A responsive six-page site that works from phone to desktop",
      "Responsive layouts checked and documented at each breakpoint",
    ],
    stack: ["HTML", "CSS", "Flexbox", "Responsive Design"],
  },

  "iHub Prototype": {
    role: "Designer on a six-person team (Sprint 5 capstone)",
    team: "iHub Sprint 5 capstone team",
    problem:
      "iHub Africa needed a website that clearly explains its mission, programmes and impact to young people looking for careers in the digital economy, and gives them an easy way to get in touch.",
    approach: [
      "Owned the design: the mockups in Figma that the team built from.",
      "Designed mobile-first, so the site works on the phones most of iHub's audience uses.",
      "Worked inside a real team structure: project lead, frontend, JavaScript, design, QA and Git manager, with work merged through GitHub.",
    ],
    technical: [
      "Four pages (Home, About, Programs, Contact) in semantic HTML and CSS.",
      "JavaScript for the hamburger menu, contact form validation and scroll animations.",
      "Mobile-first responsive layouts with flexible images.",
      "Accessibility basics: semantic structure, alt text and keyboard-friendly navigation.",
    ],
    outcome: [
      "A responsive prototype presented as the Sprint 5 capstone",
      "Experience turning design mockups into a team-built site",
    ],
    stack: ["Figma", "HTML", "CSS", "JavaScript", "Git"],
  },

  "PawFinder": {
    role: "UI, features, QA and presenter on a four-person team",
    team: "PawFinder team",
    problem:
      "Apps that load data from an API often go quiet while loading, or fail without telling the user why. That silence breaks trust fast, especially for people who aren't confident online.",
    approach: [
      "Owned the favourites feature, so people can save the breeds they like and come back to them.",
      "Built reusable UI pieces, including the loading state, so waiting never looks like a broken page.",
      "Ran QA across the app and checked it on different screen sizes, then presented the finished product.",
    ],
    technical: [
      "React with the Context API (DogProvider / useDogContext) sharing search, results, favourites, loading and error state.",
      "Favourites saved to localStorage so they survive a refresh.",
      "Data from The Dog API through a dedicated service module.",
      "Custom hooks, plus separate loading and error components so every state is visible to the user.",
      "Built with feature branches and pull requests against a shared testing checklist.",
    ],
    outcome: [
      "A responsive dog breed explorer with search, details and favourites",
      "Every loading and error state shown clearly to the user",
    ],
    stack: ["React", "Context API", "Custom Hooks", "REST API", "Vite"],
  },

  "Urban Threads": {
    role: "Solo: UI design and full-stack development (Firebase e-commerce assignment)",
    problem:
      "A small streetwear brand needs more than a pretty catalogue: shoppers have to find products quickly, and their cart has to stay private and still be there when they come back.",
    approach: [
      "Designed four clear pages: home, shop, login and cart, with the same navigation everywhere.",
      "Made products easy to find with search, category filters and sorting.",
      "Kept each shopper's cart private to their own account, with clear states when it's empty or they're logged out.",
      "Gave the brand a playful pink-and-black identity with a dark mode that keeps it.",
    ],
    technical: [
      "Firebase Authentication with email and password, plus persistent sign-in.",
      "Product catalogue loaded live from Cloud Firestore, with loading and error states.",
      "Firestore security rules: products are read-only from the browser, and each user can only read or change their own profile and cart.",
      "The rules also validate every cart item: only allowed fields, correct types, and a quantity from 1 to 99.",
      "Plain JavaScript modules for auth, products and cart; theme choice saved in localStorage.",
      "Toast messages for feedback, keyboard focus indicators and labelled cart controls.",
    ],
    outcome: [
      "A working storefront with accounts, live products and a private cart",
      "Data protected by database rules, not just by the page",
    ],
    stack: ["HTML", "CSS", "JavaScript", "Firebase Auth", "Cloud Firestore"],
  },
}

export default caseStudies
