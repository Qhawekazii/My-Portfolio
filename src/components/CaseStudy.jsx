import { useEffect, useRef } from "react"

function List({ items }) {
  return (
    <ul>
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  )
}

// Native <dialog> opened with showModal(): focus is trapped inside,
// Escape closes it, and focus returns to the button that opened it.
function CaseStudy({ project, study, onClose }) {
  const dialogRef = useRef(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (dialog && !dialog.open) dialog.showModal()
    document.body.style.overflow = "hidden"
    return () => { document.body.style.overflow = "" }
  }, [])

  // Clicking the dimmed backdrop (the dialog element itself) closes it
  const onBackdropClick = (e) => {
    if (e.target === dialogRef.current) dialogRef.current.close()
  }

  return (
    <dialog
      ref={dialogRef}
      className="case-study"
      aria-labelledby="case-study-title"
      onClose={onClose}
      onClick={onBackdropClick}
    >
      <article className="case-study-body">
        <header className="case-study-head">
          <span className="eyebrow">Case study</span>
          <h3 id="case-study-title">{project.name}</h3>
          <p className="case-study-role">
            <strong>My role:</strong> {study.role}
            {study.team && <> · <strong>Team:</strong> {study.team}</>}
          </p>
          <button
            type="button"
            className="case-study-close"
            onClick={() => dialogRef.current.close()}
            aria-label="Close case study"
            data-cursor="hover"
          >
            ✕
          </button>
        </header>

        <section>
          <h4>The gap</h4>
          <p>{study.problem}</p>
        </section>

        {study.approach && (
          <section>
            <h4>How I filled it</h4>
            <List items={study.approach} />
          </section>
        )}

        {study.technical && (
          <section>
            <h4>Under the hood</h4>
            <List items={study.technical} />
          </section>
        )}

        {study.outcome && (
          <section>
            <h4>Outcome</h4>
            <List items={study.outcome} />
          </section>
        )}

        <div className="project-tech">
          {study.stack.map((t) => <span key={t}>{t}</span>)}
        </div>

        <div className="project-links">
          {project.live && <a href={project.live} target="_blank" rel="noreferrer">Live ↗</a>}
          {project.github && <a href={project.github} target="_blank" rel="noreferrer">GitHub ↗</a>}
          {project.private && !project.github && (
            <span className="project-links-empty">Private repo · client work</span>
          )}
        </div>
      </article>
    </dialog>
  )
}

export default CaseStudy
