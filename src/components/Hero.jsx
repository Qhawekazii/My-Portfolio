import heroBg from "../assets/hero.jpg"
import { CV_PATH } from "../data/cv.js"

// Three numbers a recruiter can check against the projects further down.
const PROOF = [
  { value: "3", label: "client projects" },
  { value: "9", label: "projects with case studies" },
  { value: "88%", label: "lighter page load for a client" },
]

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg" aria-hidden="true">
        <img src={heroBg} alt="" />
      </div>

      <div className="hero-content">
        <p className="hero-status">
          <span className="dot" aria-hidden="true" />
          Open to work · Junior roles · Freelance · Remote
        </p>

        <h1 className="hero-name">
          Hi, I'm
          <span>Qhawekazi</span>
        </h1>

        <p className="hero-role">
          Product Engineer
          <span>UI/UX Designer · Full-Stack Developer · Johannesburg</span>
        </p>

        <p className="hero-tagline">
          I design and build products that work for everyone who uses them —
          from the first sketch to the live site.
        </p>

        <div className="hero-actions">
          <a className="cv-btn primary" href="#work" data-cursor="hover">
            See my work ↓
          </a>
          <a
            className="cv-btn secondary"
            href={CV_PATH}
            target="_blank"
            rel="noreferrer"
            data-cursor="hover"
          >
            View CV ↗
          </a>
        </div>

        <ul className="hero-proof">
          {PROOF.map(({ value, label }) => (
            <li key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="hero-foot">
        <span>01 / 05</span>
        <span className="scroll-cue">
          Scroll to explore
          <span className="line" />
        </span>
      </div>
    </section>
  )
}

export default Hero
