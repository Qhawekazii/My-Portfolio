// PROJECT DATA
// image        -> import the image at the top of the file, then reference it here
// tech         -> array of short tags shown under the project name
// live / github -> leave as "" (empty string) if a link doesn't exist yet,
//                   the button will simply be hidden
// caseStudy     -> link to the written case study (shown as a "Case study" button)
// private       -> true for client repos: shows "Private repo" instead of a GitHub link

import kindernest from "../assets/kindernest.png"
import ihub from "../assets/iHubLogo.webp"
import pawfinder from "../assets/pawfinder-paw.svg"
import urbanThreads from "../assets/UrbanThreads.png"
import undeplus from "../assets/undeplus.jpg"
import stFrusquin from "../assets/stfrusquin-crest.jpeg"

const projects = [
  {
    name: "iHub Comms",
    type: "PRODUCT ENGINEERING / UI/UX / TEAM",
    tech: ["Product Design", "UI/UX", "React", "Supabase", "Row Level Security"],
    image: ihub,
    description:
      "My idea and my design: one invite-only platform for iHub covering announcements, chat, tasks, submissions, schedule, attendance, courses and notes. I owned the product and all UI/UX, then built it with my team, CTRL + Create, and pitched it to iHub for internal use.",
    problem:
      "iHub was paying subscriptions for several platforms that each covered one slice of a cohort's needs, and learners missed deadlines because information was spread across all of them.",
    live: "",
    github: "",
    private: true,
    caseStudy: "https://github.com/Qhawekazii/Qhawekazii/blob/main/case-studies/ihub-comms.md",
  },
  {
    name: "Un De Plus Tours",
    type: "EXISTING CLIENT / SOLO / FULL-STACK",
    tech: ["Next.js", "TypeScript", "Tailwind", "Supabase", "jsPDF"],
    image: undeplus,
    description:
      "Turned a broken template site into one that takes bookings: every form saved to a database with an admin dashboard, a trip planner with PDF / email / Google Docs export, 19 languages and an accessibility widget.",
    problem:
      "Booking and contact forms submitted nowhere, so every enquiry from an international visitor was silently lost.",
    live: "https://unde-plus.co.za",
    github: "",
    private: true,
    caseStudy: "https://github.com/Qhawekazii/Qhawekazii/blob/main/case-studies/un-de-plus.md",
  },
  {
    name: "St Frusquin Sporting",
    type: "CLIENT / SOLO / FRONTEND",
    tech: ["React", "Vite", "CSS Modules", "Formspree", "Accessibility"],
    image: stFrusquin,
    description:
      "Website for a five-division community football club: fixtures, squads and gallery by division, official league links, and a working contact form.",
    problem:
      "Parents browse on limited mobile data, so I cut the first load from 32 MB to 3.9 MB and met WCAG AA contrast.",
    live: "https://st-frusquin-sporting.vercel.app",
    github: "",
    private: true,
    caseStudy: "https://github.com/Qhawekazii/Qhawekazii/blob/main/case-studies/st-frusquin-sporting.md",
  },
  {
    name: "KinderNest",
    type: "WEB / UI DESIGN",
    tech: ["HTML", "CSS", "JavaScript"],
    image: kindernest,
    description:
      "A childcare platform concept designed with a clean layout and a responsive, welcoming user experience for parents.",
    problem:
      "Childcare sites like this often read as corporate and cold at the exact moment a parent needs to feel reassured.",
    learned:
      "Strengthened my understanding of responsive web design and user experience principles.",
    live: "https://kindernest-five.vercel.app/",
    github: "https://github.com/St10482946/kindernest",
  },
  {
    name: "iHub Prototype",
    type: "WEB / TEAM PROJECT",
    tech: ["HTML", "CSS", "JavaScript", "Collaboration"],
    image: ihub,
    description:
      "A collaborative website prototype built with team members to showcase iHub's services and community features.",
    problem:
      "Coordinating design and development responsibilities across the team while keeping the prototype cohesive and user-centred.",
    learned:
      "Strengthened my teamwork skills and gave me experience delivering a polished, real-world group prototype.",
    live: "https://kmukendi10.github.io/Client-Website-Prototype-iHub/",
    github: "https://github.com/kmukendi10/Client-Website-Prototype-iHub",
  },
  {
    name: "PawFinder",
    type: "WEB / REACT",
    tech: ["React", "REST API", "Context API", "Custom Hooks"],
    image: pawfinder,
    description:
      "A React dog breed explorer built with Context API, custom hooks, REST API data, and a responsive interface.",
    problem:
      "Data-driven apps like this often go silent while loading or fail without telling the user why — that gap breaks trust fast.",
    learned:
      "Strengthened my React skills, particularly around shared state and building an accessible, considered loading experience.",
    live: "https://react-dog-search-app.vercel.app/",
    github: "https://github.com/hlatsiboy113-png/react-dog-search-app.git",
  },
  {
    name: "Urban Threads",
    type: "WEB / E-COMMERCE",
    tech: ["HTML", "CSS", "JavaScript", "Firebase Firestore", "Firebase Auth"],
    image: urbanThreads,
    description:
      "My first e-commerce build: a streetwear storefront with dynamic product browsing, account sign-up/login, and a shopping cart with live totals — all backed by Firebase Firestore and Firebase Authentication.",
    live: "https://qhawekazii.github.io/Q-s-Urban-Threads/",
    github: "https://github.com/Qhawekazii/Q-s-Urban-Threads.git",
  },
  // TODO: fill in real description, tech, image, and links once available
  {
    name: "Firestone",
    type: "BACKEND",
    tech: [],
    image: "",
    description: "A backend project. Full description and tech stack coming soon.",
    live: "",
    github: "",
    status: { type: "progress", label: "Details Coming Soon" },
  },

]

export default projects.map((p, i) => ({ ...p, number: String(i + 1).padStart(2, "0") }))
