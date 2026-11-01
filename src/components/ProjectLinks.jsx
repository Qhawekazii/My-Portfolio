import { ExternalLink, Lock, BookOpen } from "lucide-react"
import { FaGithub } from "react-icons/fa6"

// The same buttons, in the same place, on every project card:
// Live and Repo side by side, Read case study full width below. A link that can't be public (a private client
// repo) keeps the same button shape so the row never changes size, but is
// shown as locked and isn't clickable.
function ProjectLinks({ project, onOpenCaseStudy }) {
  return (
    <div className={`project-links${onOpenCaseStudy ? "" : " project-links--two"}`}>
      {project.live ? (
        <a className="project-btn" href={project.live} target="_blank" rel="noreferrer" data-cursor="hover">
          <ExternalLink size={15} strokeWidth={2} aria-hidden="true" />
          Live
        </a>
      ) : (
        <span className="project-btn project-btn--locked" aria-disabled="true">
          <Lock size={15} strokeWidth={2} aria-hidden="true" />
          Not live
        </span>
      )}

      {project.github ? (
        <a className="project-btn" href={project.github} target="_blank" rel="noreferrer" data-cursor="hover">
          <FaGithub size={15} aria-hidden="true" />
          Repo
        </a>
      ) : (
        <span
          className="project-btn project-btn--locked"
          aria-disabled="true"
          title="Private repository: client work"
        >
          <Lock size={15} strokeWidth={2} aria-hidden="true" />
          Private
        </span>
      )}

      {onOpenCaseStudy && (
        <button type="button" className="project-btn project-btn--wide" onClick={onOpenCaseStudy} data-cursor="hover">
          <BookOpen size={15} strokeWidth={2} aria-hidden="true" />
          Read case study
        </button>
      )}
    </div>
  )
}

export default ProjectLinks
