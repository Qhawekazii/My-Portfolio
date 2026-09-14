import { useReveal } from "../hooks/useReveal.js"
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
} from "react-icons/si"

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
  { label: "HTML5", Icon: SiHtml5, color: "#E34F26" },
  { label: "CSS3", Icon: SiCss, color: "#1572B6" },
  { label: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { label: "React", Icon: SiReact, color: "#61DAFB" },
  { label: "Node.js", Icon: SiNodedotjs, color: "#339933" },
  { label: "Express.js", Icon: SiExpress, color: "#9CA3AF" },
  { label: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { label: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
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
      <div className="tech-marquee">
        <div className="tech-marquee-track">
          {[...LEARNING, ...LEARNING].map(({ label, Icon, color }, i) => (
            <div className="tech-icon-wrap" style={{ "--brand": color }} key={`${label}-${i}`}>
              <span className="tech-icon" data-cursor="hover">
                <Icon size={26} />
              </span>
              <span className="tech-tooltip">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Evolution
