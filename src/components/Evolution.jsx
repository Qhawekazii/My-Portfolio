import { useReveal } from "../hooks/useReveal.js"
import { useState } from "react"
import { Pause, Play } from "lucide-react"
import toolkit from "../data/toolkit.js"

const STEPS = [
  {
    stage: "01",
    title: "HTML / CSS",
    desc: "Learned the foundations of the web — structure, styling and how a page really comes together.",
  },
  {
    stage: "02",
    title: "JavaScript / Git / UI",
    desc: "Started bringing pages to life with logic and interaction, and learned to manage my work properly with Git.",
  },
  {
    stage: "03",
    title: "Kotlin / Android / Figma",
    desc: "Moved into mobile development and design tools, learning to design and build Android apps end to end.",
  },
  {
    stage: "04",
    title: "React / Full Stack / APIs / Databases",
    desc: "Currently building full stack applications — connecting React interfaces to real APIs and databases.",
  },
]

function TimelineItem({ step }) {
  const ref = useReveal({ threshold: 0.4 })
  return (
    <li className="timeline-item reveal" ref={ref}>
      <span className="timeline-node" />
      <div className="timeline-stage">Stage {step.stage}</div>
      <h3 className="timeline-title">{step.title}</h3>
      <p className="timeline-desc">{step.desc}</p>
    </li>
  )
}

function Evolution() {
  const [paused, setPaused] = useState(false)

  return (
    <section id="evolution">
      <span className="section-num">03 / 05</span>
      <div className="section-head">
        <span className="eyebrow">My Evolution</span>
        <h2>Growth, one stage at a time.</h2>
      </div>

      <ul className="timeline">
        {STEPS.map((step) => (
          <TimelineItem key={step.stage} step={step} />
        ))}
      </ul>

      <div className="toolkit-head">
        <div>
          <span className="eyebrow">My Toolkit</span>
          <p className="toolkit-sub">
            Every tool here is used in a project below. Hover over one to see where.
          </p>
        </div>
        <button
          type="button"
          className="toolkit-toggle"
          onClick={() => setPaused((p) => !p)}
          aria-pressed={paused}
          data-cursor="hover"
        >
          {paused ? <Play size={14} aria-hidden="true" /> : <Pause size={14} aria-hidden="true" />}
          {paused ? "Play" : "Pause"}
        </button>
      </div>

      {/* Screen readers get the plain list once; the moving strip is decorative */}
      <ul className="sr-only">
        {toolkit.map(({ label, usedIn }) => (
          <li key={label}>{label}: {usedIn}</li>
        ))}
      </ul>

      <div className={`tech-marquee${paused ? " is-paused" : ""}`} aria-hidden="true">
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

export default Evolution
