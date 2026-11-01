import { useReveal } from "../hooks/useReveal.js"
import processSteps from "../data/process.js"
import toolkit from "../data/toolkit.js"

function Step({ step }) {
  const ref = useReveal({ threshold: 0.2 })
  return (
    <li className="process-step reveal" ref={ref}>
      <div className="process-step-head">
        <span className="process-num">{step.step}</span>
        <h3>{step.title}</h3>
      </div>

      <p className="process-principle">{step.principle}</p>
      <p className="process-what">{step.what}</p>

      <div className="process-proof">
        <span className="process-label">In practice</span>
        <ul>
          {step.proof.map((p) => (
            <li key={p.project + p.text}>
              <span className="process-project">{p.project}</span>
              {p.text}
            </li>
          ))}
        </ul>
      </div>

      <p className="process-question">
        <span className="process-label">The question I ask</span>
        “{step.question}”
      </p>
    </li>
  )
}

function HowIWork() {
  return (
    <section id="process">
      <span className="section-num">03 / 05</span>
      <div className="section-head">
        <span className="eyebrow">How I Work</span>
        <h2>From the gap to the shipped product.</h2>
      </div>

      <ol className="process-grid">
        {processSteps.map((step) => (
          <Step key={step.step} step={step} />
        ))}
      </ol>

      <div className="toolkit-head">
        <span className="eyebrow">My Toolkit</span>
        <p className="toolkit-sub">
          Every tool here is used in a project below. Hover over one to see where.
        </p>
      </div>

      {/* Screen readers get the plain list once; the moving strip is decorative */}
      <ul className="sr-only">
        {toolkit.map(({ label, usedIn }) => (
          <li key={label}>{label}: {usedIn}</li>
        ))}
      </ul>

      <div className="tech-marquee" aria-hidden="true">
        <div className="tech-marquee-track">
          {[...toolkit, ...toolkit].map(({ label, Icon, color, usedIn }, i) => (
            <div
              className={`tech-icon-wrap${i >= toolkit.length ? " is-dup" : ""}`}
              style={color ? { "--brand": color } : undefined}
              key={`${label}-${i}`}
            >
              <span className="tech-icon">
                <Icon size={28} />
              </span>
              <span className="tech-label">{label}</span>
              <span className="tech-tooltip">{usedIn}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowIWork
