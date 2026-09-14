// PROJECT DATA
// image        -> import the image at the top of the file, then reference it here
// tech         -> array of short tags shown under the project name
// live / github -> leave as "" (empty string) if a link doesn't exist yet,
//                   the button will simply be hidden

import kindernest from "../assets/kindernest.png"
import ihub from "../assets/iHubLogo.webp"
import pawfinder from "../assets/pawfinder-paw.svg"
import urbanThreads from "../assets/UrbanThreads.png"

const projects = [
  {
    number: "01",
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
    number: "02",
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
    number: "03",
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
    number: "04",
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
    number: "05",
    name: "Firestone",
    type: "BACKEND",
    tech: [],
    image: "",
    description: "A backend project. Full description and tech stack coming soon.",
    live: "",
    github: "",
    status: { type: "progress", label: "Details Coming Soon" },
  },
  // TODO: rename once you give me the real project name, and fill in details when live
  {
    number: "06",
    name: "Football Project",
    type: "CLIENT PROJECT",
    tech: [],
    image: "",
    description: "A client project currently in progress.",
    live: "",
    github: "",
    status: { type: "progress", label: "In Progress" },
  },
]

export default projects
