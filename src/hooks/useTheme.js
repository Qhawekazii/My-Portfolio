import { useEffect, useState } from "react"

const STORAGE_KEY = "portfolio-theme"

function getInitialTheme() {
  const stored = window.localStorage.getItem(STORAGE_KEY)
  return stored === "light" ? "light" : "dark"
}

// Reads/writes the "data-theme" attribute on <html> and persists the choice.
export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
    window.localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"))

  return [theme, toggleTheme]
}
