import { useEffect, useState } from "react"

const BAR_COUNT = 18

function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    const start = performance.now()
    const duration = 1500 // ~1.5s, per the brief

    let frame
    const tick = (now) => {
      const pct = Math.min(100, Math.round(((now - start) / duration) * 100))
      setProgress(pct)

      if (pct < 100) {
        frame = requestAnimationFrame(tick)
      } else {
        setLeaving(true)
        setTimeout(onComplete, 500)
      }
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [onComplete])

  const litBars = Math.round((progress / 100) * BAR_COUNT)

  return (
    <div className={`loader ${leaving ? "leaving" : ""}`} role="status" aria-live="polite">
      <div className="loader-inner">
        <div className="loader-top">
          <span className="loader-mark">EQ</span>
          <span className="loader-label">Initialising Experience</span>
        </div>

        <div className="loader-bars" aria-hidden="true">
          {Array.from({ length: BAR_COUNT }).map((_, i) => (
            <span
              key={i}
              className={i < litBars ? "lit" : ""}
              style={{ height: `${18 + ((i * 37) % 42)}%` }}
            />
          ))}
        </div>

        <div className="loader-bottom">
          <span className="name">QHAWEKAZI</span>
          <span className="pct">{progress}%</span>
        </div>
      </div>
    </div>
  )
}

export default Loader
