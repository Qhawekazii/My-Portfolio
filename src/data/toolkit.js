// TOOLKIT
// Compiled from the repos of the projects shown in Selected Work.
// `color` is the brand colour; brands that are black or near-black use
// `null` so the icon follows the theme's text colour instead of vanishing
// on the dark background. `usedIn` shows on hover and to screen readers.

import {
  SiHtml5, SiCss, SiJavascript, SiTypescript, SiPostgresql,
  SiReact, SiNextdotjs, SiVite, SiTailwindcss, SiReactrouter,
  SiNodedotjs, SiExpress, SiMongodb, SiSupabase, SiFirebase,
  SiJest, SiGit, SiGithubactions, SiFigma, SiVercel, SiRender,
} from "react-icons/si"

const toolkit = [
  // Languages
  { label: "HTML", Icon: SiHtml5, color: "#E34F26", usedIn: "Every project" },
  { label: "CSS", Icon: SiCss, color: "#2965F1", usedIn: "Every project" },
  { label: "JavaScript", Icon: SiJavascript, color: "#F7DF1E", usedIn: "Every project" },
  { label: "TypeScript", Icon: SiTypescript, color: "#3178C6", usedIn: "Un De Plus, iHub Comms" },

  // Frontend
  { label: "React", Icon: SiReact, color: "#61DAFB", usedIn: "iHub Comms, St Frusquin, Airbnb, PawFinder, Tic-Tac-Toe" },
  { label: "Next.js", Icon: SiNextdotjs, color: null, usedIn: "Un De Plus" },
  { label: "Vite", Icon: SiVite, color: "#A855F7", usedIn: "iHub Comms, St Frusquin, Airbnb, PawFinder, Tic-Tac-Toe" },
  { label: "Tailwind", Icon: SiTailwindcss, color: "#38BDF8", usedIn: "Un De Plus" },
  { label: "React Router", Icon: SiReactrouter, color: "#F44250", usedIn: "iHub Comms, Airbnb, PawFinder" },

  // Backend & data
  { label: "Node.js", Icon: SiNodedotjs, color: "#5FA04E", usedIn: "Airbnb" },
  { label: "Express", Icon: SiExpress, color: null, usedIn: "Airbnb" },
  { label: "MongoDB", Icon: SiMongodb, color: "#47A248", usedIn: "Airbnb" },
  { label: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1", usedIn: "iHub Comms, Un De Plus" },
  { label: "Supabase", Icon: SiSupabase, color: "#3ECF8E", usedIn: "iHub Comms, Un De Plus" },
  { label: "Firebase", Icon: SiFirebase, color: "#FFCA28", usedIn: "Urban Threads" },

  // Testing, design & shipping
  { label: "Jest", Icon: SiJest, color: "#C21325", usedIn: "Airbnb (43 API tests)" },
  { label: "Figma", Icon: SiFigma, color: "#F24E1E", usedIn: "UI design and mockups" },
  { label: "Git", Icon: SiGit, color: "#F05032", usedIn: "Every project" },
  { label: "GitHub Actions", Icon: SiGithubactions, color: "#2088FF", usedIn: "St Frusquin" },
  { label: "Vercel", Icon: SiVercel, color: null, usedIn: "iHub Comms, Un De Plus, St Frusquin, Tic-Tac-Toe" },
  { label: "Render", Icon: SiRender, color: null, usedIn: "Airbnb" },
]

export default toolkit
