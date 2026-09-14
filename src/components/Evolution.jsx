import { useReveal } from "../hooks/useReveal.js"

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
      <div className="timeline-stage">Stage {step.stage}</div>
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
        <h2>Growth, one stage at a time.</h2>
      </div>

      <ul className="timeline">
        {STEPS.map((step) => (
          <TimelineItem key={step.stage} step={step} />
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
