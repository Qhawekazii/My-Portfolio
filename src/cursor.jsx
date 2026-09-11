import { useEffect, useState } from "react"

function Cursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  })

  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const moveCursor = event => {
      setPosition({
        x: event.clientX,
        y: event.clientY
      })
    }

    const addHover = event => {
      if (
        event.target.closest("a") ||
        event.target.closest("button") ||
        event.target.closest(".project-card")
      ) {
        setHovering(true)
      }
    }

    const removeHover = () => {
      setHovering(false)
    }

    window.addEventListener("mousemove", moveCursor)
    document.addEventListener("mouseover", addHover)
    document.addEventListener("mouseout", removeHover)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      document.removeEventListener("mouseover", addHover)
      document.removeEventListener("mouseout", removeHover)
    }
  }, [])

  return (
    <>
      <div
        className={`cursor ${hovering ? "cursor-hover" : ""}`}
        style={{
          left: position.x,
          top: position.y
        }}
      >
        <span></span>
      </div>

      <div
        className="cursor-crosshair"
        style={{
          left: position.x,
          top: position.y
        }}
      />
    </>
  )
}

export default Cursor