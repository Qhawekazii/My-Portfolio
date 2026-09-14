import projects from "../data/projects.js"
import { useReveal } from "../hooks/useReveal.js"

function ProjectEntry({ project }) {
  const ref = useReveal()

  return (
    <article className="project-entry reveal" ref={ref} data-cursor="project">
      <div className="project-visual">
        {project.image ? (
          <img src={project.image} alt={project.name} loading="lazy" />
        ) : (
          <div className="project-visual placeholder">Visual coming soon</div>
        )}
      </div>

      <div className="project-info">
        <span className="project-index">{project.number}</span>
        <h3 className="project-name">{project.name}</h3>
        <div className="project-rule" />
        <div className="project-type">{project.type}</div>

        <p className="project-desc">{project.description}</p>

        <div className="project-meta">
          <div><b>The gap I saw:</b> {project.problem}</div>
          <div><b>The shift I made:</b> {project.learned}</div>
        </div>

        <div className="project-tech">
          {project.tech.map((t) => <span key={t}>{t}</span>)}
        </div>

        <div className="project-links">
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer">Live ↗</a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          )}
        </div>
      </div>
    </article>
  )
}

function Projects() {
  return (
    <section id="work">
      <span className="section-num">04 / 06</span>
      <div className="section-head">
        <span className="eyebrow">Selected Work</span>
        <h2>What I've built.</h2>
      </div>

      {projects.map((project) => (
        <ProjectEntry key={project.number} project={project} />
      ))}
    </section>
  )
}

export default Projects
