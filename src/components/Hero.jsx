import heroBg from "../assets/hero.jpg"
import { useTypewriter } from "../hooks/useTypewriter.js"
import { CV_PATH } from "../data/cv.js"

const ROLES = ["UI/UX Designer", "Fullstack Developer"]

function Hero() {
  const typed = useTypewriter(ROLES)

  return (
    <section id="home" className="hero">
      <div className="hero-bg" aria-hidden="true">
        <img src={heroBg} alt="" />
      </div>

      <div className="hero-content">
        <div className="hero-status">
          <span className="dot" />
          Available to build
        </div>

        <h1 className="hero-name">
          Emily
          <span>Qhawekazi</span>
        </h1>

        <div className="hero-roles" aria-hidden="true">
          <span className="typewriter">
            {typed}
            <span className="caret" />
          </span>
        </div>
        <p className="sr-only">I am a UI/UX Designer and Fullstack Developer.</p>

        <p className="hero-tagline">
          I design, build and continuously evolve through technology.
        </p>

        <div className="hero-actions">
          <a
            className="cv-btn primary"
            href={CV_PATH}
            target="_blank"
            rel="noreferrer"
            data-cursor="hover"
          >
            View CV ↗
          </a>
          <a
            className="cv-btn secondary"
            href={CV_PATH}
            download="Emily_Qhawekazi_Maramani_CV.pdf"
            data-cursor="hover"
          >
            Download ↓
          </a>
        </div>
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
