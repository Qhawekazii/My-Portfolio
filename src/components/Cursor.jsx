import { useEffect, useRef, useState } from "react"

// Anything the pointer should visibly "touch" with the pink glow.
// Matching this broadly (rather than tagging every element by hand) means
// new buttons/links/cards automatically pick up the reaction for free.
const TOUCH_SELECTOR =
  "a, button, input, textarea, .project-visual, .learning-pill, .project-tech span, [data-cursor='hover']"

function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [mode, setMode] = useState("default") // default | hover | project
  const [isTouch] = useState(() => window.matchMedia("(pointer: coarse)").matches)
  const touchedRef = useRef(null)

  useEffect(() => {
    if (isTouch) return

    const clearTouched = () => {
      touchedRef.current?.classList.remove("touch-glow-active")
      touchedRef.current = null
    }

    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY })

      const el = touchedRef.current
      if (el) {
        const rect = el.getBoundingClientRect()
        el.style.setProperty("--mx", `${((e.clientX - rect.left) / rect.width) * 100}%`)
        el.style.setProperty("--my", `${((e.clientY - rect.top) / rect.height) * 100}%`)
      }
    }

    const over = (e) => {
      const projectEl = e.target.closest("[data-cursor='project']")
      const hoverEl = e.target.closest("a, button, [data-cursor='hover']")
      const touchEl = e.target.closest(TOUCH_SELECTOR)

      if (projectEl) setMode("project")
      else if (hoverEl) setMode("hover")

      if (touchEl && touchEl !== touchedRef.current) {
        clearTouched()
        touchEl.classList.add("touch-glow-active")
        touchedRef.current = touchEl
      }
    }

    const out = (e) => {
      if (!e.relatedTarget || !e.relatedTarget.closest?.("a, button, [data-cursor]")) {
        setMode("default")
      }

      if (touchedRef.current && !touchedRef.current.contains(e.relatedTarget)) {
        clearTouched()
      }
    }

    window.addEventListener("mousemove", move)
    document.addEventListener("mouseover", over)
    document.addEventListener("mouseout", out)

    return () => {
      window.removeEventListener("mousemove", move)
      document.removeEventListener("mouseover", over)
      document.removeEventListener("mouseout", out)
      clearTouched()
    }
  }, [isTouch])

  if (isTouch) return null

  return (
    <>
      <div className={`page-glow ${mode !== "default" ? "active" : ""}`} style={{ left: pos.x, top: pos.y }} />
      <div className="cursor-dot" style={{ left: pos.x, top: pos.y }} />
      <div
        className={`cursor-ring ${mode === "hover" ? "hover" : ""} ${mode === "project" ? "project" : ""}`}
        style={{ left: pos.x, top: pos.y }}
      >
        {mode === "project" && (
          <span className="cursor-label">
            VIEW<br />PROJECT
          </span>
        )}
      </div>
    </>
  )
}

export default Cursor
