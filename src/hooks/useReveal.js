import { useEffect, useRef } from "react"

// Attach the returned ref to any element and give it the "reveal" class.
// Once it scrolls into view, "in-view" is added and the CSS transition runs.
export function useReveal(options = { threshold: 0.15 }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add("in-view")
        observer.disconnect()
      }
    }, options)

    observer.observe(el)
    return () => observer.disconnect()
  }, [options])

  return ref
}
