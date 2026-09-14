import { useEffect, useState } from "react"

const LINKS = [
  { idx: "01", label: "Home", id: "home" },
  { idx: "02", label: "My Story", id: "story" },
  { idx: "03", label: "My Evolution", id: "evolution" },
  { idx: "04", label: "Work", id: "work" },
  { idx: "05", label: "Contact", id: "contact" },
]

function Navigation() {
  const [open, setOpen] = useState(false)

  // lock background scroll while the overlay is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  const goTo = (id) => {
    setOpen(false)
    const el = document.getElementById(id)
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 250)
    }
  }

  return (
    <>
      <div className="nav-toggle-wrap">
        <span className="nav-toggle-label">{open ? "Close" : "Menu"}</span>
        <button
          className={`nav-toggle ${open ? "open" : ""}`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
        >
          <span className="mark">Q</span>
          <span className="close-mark" aria-hidden="true">×</span>
        </button>
      </div>

      <nav className={`nav-overlay ${open ? "open" : ""}`} aria-hidden={!open}>
        <ul className="nav-list">
          {LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                tabIndex={open ? 0 : -1}
                onClick={(e) => {
                  e.preventDefault()
                  goTo(link.id)
                }}
              >
                <span className="idx">{link.idx}</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-overlay-footer">
          <a href="mailto:emilym01@gmail.com">emilym01@gmail.com</a>
          <a href="https://github.com/Qhawekazii" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </nav>
    </>
  )
}

export default Navigation
