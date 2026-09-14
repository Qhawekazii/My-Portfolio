// PROJECT DATA
// ------------
// This is the only file you need to touch to add, remove or edit projects.
// Add a new object to the array below and it will automatically appear
// in the "Selected Work" section, in the order listed here.
//
// image        -> import the image at the top of the file, then reference it here
// tech         -> array of short tags shown under the project name
// live / github -> leave as "" (empty string) if a link doesn't exist yet,
//                   the button will simply be hidden

import kindernest from "../assets/kindernest.png"
import metube from "../assets/metube.jfif"
import netflip from "../assets/netflip.jfif"
import ihub from "../assets/iHubLogo.webp"

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
    image: null,
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
    name: "Netflip Clone",
    type: "WEB / UI DESIGN",
    tech: ["HTML", "CSS", "JavaScript"],
    image: netflip,
    description:
      "A Netflix-inspired landing page clone focused on polished visuals and a smooth, high-impact user experience.",
    problem:
      "Matching the visual feel of a streaming platform while making sure the layout stayed fully responsive.",
    learned:
      "Sharpened my UI design instincts and my responsive web development skills.",
    live: "https://netflip-clone.netlify.app/",
    github: "https://github.com/Qhawekazii/Netflip",
  },
  {
    number: "05",
    name: "MeTube Clone",
    type: "WEB / UI DESIGN",
    tech: ["HTML", "CSS", "JavaScript"],
    image: metube,
    description:
      "A YouTube-inspired clone built to practise layout structure, responsive design and media-focused UI patterns.",
    problem:
      "Recreating the styling and structure of a media-heavy interface while keeping every section responsive.",
    learned:
      "Improved my frontend layout skills and attention to detail on dense, content-heavy pages.",
    live: "",
    github: "https://github.com/Qhawekazii/MeTube-Clone.git",
  },
]

export default projects
