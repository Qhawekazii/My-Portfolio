import { useEffect, useState } from "react"

function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [mode, setMode] = useState("default") // default | hover | project
  const [isTouch] = useState(() => window.matchMedia("(pointer: coarse)").matches)

  useEffect(() => {
    if (isTouch) return

    const move = (e) => setPos({ x: e.clientX, y: e.clientY })

    const over = (e) => {
      const projectEl = e.target.closest("[data-cursor='project']")
      const hoverEl = e.target.closest("a, button, [data-cursor='hover']")

      if (projectEl) setMode("project")
      else if (hoverEl) setMode("hover")
    }

    const out = (e) => {
      if (!e.relatedTarget || !e.relatedTarget.closest?.("a, button, [data-cursor]")) {
        setMode("default")
      }
    }

    window.addEventListener("mousemove", move)
    document.addEventListener("mouseover", over)
    document.addEventListener("mouseout", out)

    return () => {
      window.removeEventListener("mousemove", move)
      document.removeEventListener("mouseover", over)
      document.removeEventListener("mouseout", out)
    }
  }, [isTouch])

  if (isTouch) return null

  return (
    <>
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
