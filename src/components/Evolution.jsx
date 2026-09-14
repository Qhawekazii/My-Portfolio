import { useReveal } from "../hooks/useReveal.js"

const STEPS = [
  {
    year: "2023",
    title: "HTML / CSS",
    desc: "Learned the foundations of the web — structure, styling and how a page really comes together.",
  },
  {
    year: "2024",
    title: "JavaScript / Git / UI",
    desc: "Started bringing pages to life with logic and interaction, and learned to manage my work properly with Git.",
  },
  {
    year: "2025",
    title: "Kotlin / Android / Figma",
    desc: "Moved into mobile development and design tools, learning to design and build Android apps end to end.",
  },
  {
    year: "2026",
    title: "React / Full Stack / APIs / Databases",
    desc: "Currently building full stack applications — connecting React interfaces to real APIs and databases.",
  },
]

const LEARNING = [
  "React",
  "JavaScript",
  "APIs",
  "Node.js",
  "Express.js",
  "MongoDB",
  "UI/UX",
  "Full Stack Development",
]

function TimelineItem({ step }) {
  const ref = useReveal({ threshold: 0.4 })
  return (
    <li className="timeline-item reveal" ref={ref}>
      <span className="timeline-node" />
      <div className="timeline-year">{step.year}</div>
      <h3 className="timeline-title">{step.title}</h3>
      <p className="timeline-desc">{step.desc}</p>
    </li>
  )
}

function Evolution() {
  return (
    <section id="evolution">
      <span className="section-num">03 / 05</span>
      <div className="section-head">
        <span className="eyebrow">My Evolution</span>
        <h2>Growth, one year at a time.</h2>
      </div>

      <ul className="timeline">
        {STEPS.map((step) => (
          <TimelineItem key={step.year} step={step} />
        ))}
      </ul>

      <div className="section-head" style={{ marginTop: 90, marginBottom: 0 }}>
        <span className="eyebrow">Currently Learning</span>
      </div>
      <div className="learning-grid">
        {LEARNING.map((item) => (
          <span className="learning-pill" key={item}>{item}</span>
        ))}
      </div>
    </section>
  )
}

export default Evolution
