import { useRef } from "react"

// Attach the returned ref + onMouseMove to any element with the "glow-hover"
// class. It tracks the pointer position as CSS custom properties (--mx, --my)
// so the pink glow in index.css can follow the cursor around inside the element.
export function useGlowHover() {
  const ref = useRef(null)

  const onMouseMove = (e) => {
    const el = ref.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    el.style.setProperty("--mx", `${((e.clientX - rect.left) / rect.width) * 100}%`)
    el.style.setProperty("--my", `${((e.clientY - rect.top) / rect.height) * 100}%`)
  }

  return { ref, onMouseMove }
}
