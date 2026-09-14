import { CV_PATH } from "../data/cv.js"

function CV() {
  return (
    <section id="cv" className="cv-section">
      <div>
        <span className="eyebrow">CV</span>
        <p className="cv-desc">
          Explore my experience, technical skills, projects and professional journey.
        </p>
      </div>

      <div className="cv-actions">
        <a
          className="cv-btn primary"
          href={CV_PATH}
          target="_blank"
          rel="noreferrer"
          data-cursor="hover"
        >
          View CV ↗
        </a>
        <a
          className="cv-btn secondary"
          href={CV_PATH}
          download="Emily_Qhawekazi_Maramani_CV.pdf"
          data-cursor="hover"
        >
          Download ↓
        </a>
      </div>
    </section>
  )
}

export default CV
