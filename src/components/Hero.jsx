import heroBg from "../assets/hero.jpg"
import { useTypewriter } from "../hooks/useTypewriter.js"

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
            href="#story"
            className="btn-enter"
            data-cursor="hover"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById("story")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Enter Portfolio ↗
          </a>
        </div>
      </div>

      <div className="hero-foot">
        <span>01 / 06</span>
        <span className="scroll-cue">
          Scroll to explore
          <span className="line" />
        </span>
      </div>
    </section>
  )
}

export default Hero
