# Emily Qhawekazi Maramani — Portfolio

**Full-Stack Web Developer · Android Developer · UI/UX Designer**

A React + Vite portfolio built from scratch — no template, no theme, every animation and interaction hand-built to show both sides of the work: the interface and the code behind it.

🔗 **Live site:** [qhawekazii.github.io/My-Portfolio](https://qhawekazii.github.io/My-Portfolio/)
📄 **CV:** available to view/download straight from the site

---

##  What's actually in it

This isn't just a static "about me" page — it's built to *feel* like a product:

- **Custom cursor with a pink "touch glow"** — every button, link, card, icon, and form field reacts when the pointer touches it, with the glow tracking pointer position inside the element. A soft ambient glow also trails the cursor across the whole page.
- **Dark / light theme toggle** — full re-tuned color system for both modes (not just an inverted filter), persisted across visits, with a few intentionally-always-dark surfaces (the loader, the hero photo backdrop) that don't flip since they sit on fixed dark imagery.
- **A vertical icon-dock navigation** instead of a generic hamburger menu — hover an icon to see its label, and the active section highlights itself automatically as you scroll (via `IntersectionObserver`).
- **An animated boot-up loader** on first load, with a progress readout and a staggered bar animation.
- **A typewriter hero** cycling through role titles, backed by a darkened photo and layered gradient glow.
- **An auto-scrolling tech marquee** — the "currently learning" stack rendered as real brand icons (HTML5, CSS3, JavaScript, React, Node.js, Express.js, MongoDB, Firebase) that go from greyscale to full color on hover.
- **A working contact form** — posts straight to Gmail via FormSubmit, with a `mailto:` fallback if the network request fails, plus a live success/error status message. Social icons (Email, GitHub, LinkedIn, Discord) sit right alongside it — Discord copies the username to your clipboard since Discord doesn't expose a public profile link from a username alone.
- **A responsive project grid** pulling from a single data file (`src/data/projects.js`) — add a project by editing one array, no touching the UI code.
- Fully responsive, keyboard-accessible (visible focus states, `aria-label`s throughout), and respects `prefers-reduced-motion`.

## Tech Stack

| Layer | Tools |
|---|---|
| Framework | [React 19](https://react.dev/) + [Vite](https://vitejs.dev/) |
| Icons | [lucide-react](https://lucide.dev/) (UI icons), [react-icons](https://react-icons.github.io/react-icons/) (brand/social icons) |
| Styling | Hand-written CSS with custom properties for full theming — no CSS framework |
| Forms | [FormSubmit](https://formsubmit.co/) (no backend required) |
| Linting | ESLint 10 + `eslint-plugin-react-hooks` |

## Getting Started

```bash
git clone https://github.com/Qhawekazii/My-Portfolio.git
cd My-Portfolio
npm install
npm run dev
```

The dev server prints a local URL (usually `http://localhost:5173`) — open it in a browser.

### Available scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the Vite dev server with hot-reload |
| `npm run build` | Build the production bundle to `dist/` |
| `npm run preview` | Serve the production build locally to sanity-check it |
| `npm run lint` | Run ESLint across the project |

##  Project Structure

```
src/
├── components/       # One file per section (Hero, Story, Evolution, Projects, Contact, ...)
├── hooks/            # useReveal (scroll-in animations), useTheme, useTypewriter
├── data/             # projects.js (edit this to add/update a project) and cv.js
├── assets/           # Images used across the site
├── index.css         # The entire design system: tokens, theming, every component's styles
└── main.jsx          # Entry point
public/               # Static files served as-is (favicon, the CV PDF)
```

##  Featured Projects

| Project | Stack | Links |
|---|---|---|
| **Urban Threads** — streetwear e-commerce storefront with a live cart and Firebase-backed auth/catalogue | HTML, CSS, JS, Firebase Firestore, Firebase Auth | [Live](https://qhawekazii.github.io/Q-s-Urban-Threads/) · [Code](https://github.com/Qhawekazii/Q-s-Urban-Threads) |
| **PawFinder** — dog breed explorer with shared state and a considered loading experience | React, Context API, Custom Hooks, REST API | [Live](https://react-dog-search-app.vercel.app/) · [Code](https://github.com/hlatsiboy113-png/react-dog-search-app) |
| **KinderNest** — childcare platform concept, designed to feel warm rather than corporate | HTML, CSS, JavaScript | [Live](https://kindernest-five.vercel.app/) · [Code](https://github.com/St10482946/kindernest) |
| **iHub Prototype** — collaborative client website prototype built with a team | HTML, CSS, JavaScript | [Live](https://kmukendi10.github.io/Client-Website-Prototype-iHub/) · [Code](https://github.com/kmukendi10/Client-Website-Prototype-iHub) |

*(A couple more are in progress and marked accordingly on the site.)*

##  Get in Touch

- **Email:** emilyqm01@gmail.com
- **GitHub:** [@Qhawekazii](https://github.com/Qhawekazii)
- **LinkedIn:** [emily-maramani](https://www.linkedin.com/in/emily-maramani-ab0765320)

---

<sub>This is a personal portfolio — feel free to browse the code for inspiration, but please don't reuse the content or branding as your own.</sub>
