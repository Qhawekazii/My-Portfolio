import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import { ArrowUp } from "lucide-react"
import { CV_PATH } from "../data/cv.js"
import { CONTACT } from "../data/contact.js"

const NAV = [
  { label: "Home", href: "#home" },
  { label: "My Story", href: "#story" },
  { label: "How I Work", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
]

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <p className="footer-name">Emily Qhawekazi Maramani</p>
          <p className="footer-role">Product Engineer · UI/UX · Full-Stack</p>
          <p className="footer-status">
            <span className="dot" aria-hidden="true" />
            Open to roles, freelance and remote work
          </p>
        </div>

        <nav className="footer-col" aria-label="Footer">
          <h3>Explore</h3>
          <ul>
            {NAV.map(({ label, href }) => (
              <li key={href}><a href={href}>{label}</a></li>
            ))}
          </ul>
        </nav>

        <div className="footer-col">
          <h3>Connect</h3>
          <ul>
            <li><a href={`mailto:${CONTACT.email}`}><FaEnvelope aria-hidden="true" /> Email</a></li>
            <li><a href={CONTACT.linkedin} target="_blank" rel="noreferrer"><FaLinkedin aria-hidden="true" /> LinkedIn</a></li>
            <li><a href={CONTACT.github} target="_blank" rel="noreferrer"><FaGithub aria-hidden="true" /> GitHub</a></li>
            <li><a href={CV_PATH} target="_blank" rel="noreferrer">CV (PDF)</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bar">
        <span>© {new Date().getFullYear()} Emily Qhawekazi Maramani · Designed &amp; built by me</span>
        <a className="footer-top" href="#home" data-cursor="hover">
          Back to top <ArrowUp size={14} aria-hidden="true" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
