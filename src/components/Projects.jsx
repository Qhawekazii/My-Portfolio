import { useState } from "react"
import projects from "../data/projects.js"
import caseStudies from "../data/caseStudies.js"
import CaseStudy from "./CaseStudy.jsx"
import { useReveal } from "../hooks/useReveal.js"

function ProjectEntry({ project, onOpenCaseStudy }) {
  const ref = useReveal()
  const status = project.status

  return (
    <article className="project-card reveal" ref={ref} data-cursor="project">
      <div className="project-visual">
        {project.image ? (
          <img src={project.image} alt={project.name} loading="lazy" />
        ) : (
          <div className="project-visual placeholder">Visual coming soon</div>
        )}
        {status && <span className={`project-status status-${status.type}`}>{status.label}</span>}
      </div>

      <div className="project-info">
        <div className="project-top">
          <span className="project-index">{project.number}</span>
          <div className="project-type">{project.type}</div>
        </div>

        <h3 className="project-name">{project.name}</h3>

        <p className="project-desc">{project.description}</p>

        {project.problem && (
          <p className="project-problem"><strong>Problem solved:</strong> {project.problem}</p>
        )}

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
          {caseStudies[project.name] && (
            <button type="button" className="case-study-btn" onClick={onOpenCaseStudy} data-cursor="hover">
              Read case study →
            </button>
          )}
          {project.private && !project.github && (
            <span className="project-links-empty">Private repo · client work</span>
          )}
          {!project.live && !project.github && !caseStudies[project.name] && (
            <span className="project-links-empty">Coming soon</span>
          )}
        </div>
      </div>
    </article>
  )
}

function Projects() {
  const [openName, setOpenName] = useState(null)
  const openProject = projects.find((p) => p.name === openName)

  return (
    <section id="work">
      <span className="section-num">04 / 05</span>
      <div className="section-head">
        <span className="eyebrow">Projects</span>
        <h2>Selected Work.</h2>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <ProjectEntry
            key={project.number}
            project={project}
            onOpenCaseStudy={() => setOpenName(project.name)}
          />
        ))}
      </div>

      {openProject && (
        <CaseStudy
          project={openProject}
          study={caseStudies[openProject.name]}
          onClose={() => setOpenName(null)}
        />
      )}
    </section>
  )
}

export default Projects
