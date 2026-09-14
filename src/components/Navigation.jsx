import { useEffect, useState } from "react"
import { Home, User, TrendingUp, Briefcase, Mail } from "lucide-react"

const LINKS = [
  { label: "Home", id: "home", Icon: Home },
  { label: "My Story", id: "story", Icon: User },
  { label: "My Evolution", id: "evolution", Icon: TrendingUp },
  { label: "Work", id: "work", Icon: Briefcase },
  { label: "Contact", id: "contact", Icon: Mail },
]

function Navigation() {
  const [active, setActive] = useState("home")

  // highlight whichever section is most in view as the user scrolls
  useEffect(() => {
    const sections = LINKS.map((link) => document.getElementById(link.id)).filter(Boolean)
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (mostVisible) setActive(mostVisible.target.id)
      },
      { threshold: [0.3, 0.5, 0.7] }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav className="side-nav" aria-label="Section navigation">
      {LINKS.map(({ label, id, Icon }) => (
        <div className="side-nav-item-wrap" key={id}>
          <button
            type="button"
            className={`side-nav-item ${active === id ? "active" : ""}`}
            onClick={() => goTo(id)}
            aria-label={label}
            aria-current={active === id ? "true" : undefined}
            data-cursor="hover"
          >
            <Icon size={19} strokeWidth={1.75} />
          </button>
          <span className="side-nav-label" aria-hidden="true">{label}</span>
        </div>
      ))}
    </nav>
  )
}

export default Navigation
