import { useCallback, useState } from "react"
import Loader from "./components/Loader.jsx"
import Cursor from "./components/Cursor.jsx"
import Navigation from "./components/Navigation.jsx"
import ThemeToggle from "./components/ThemeToggle.jsx"
import Hero from "./components/Hero.jsx"
import Story from "./components/Story.jsx"
import HowIWork from "./components/HowIWork.jsx"
import Projects from "./components/Projects.jsx"
import Contact from "./components/Contact.jsx"

function App() {
  // The intro animation plays once per visit; returning in the same
  // session (e.g. a recruiter comparing candidates) skips straight in.
  const [loading, setLoading] = useState(() => {
    try {
      return sessionStorage.getItem("intro-seen") !== "1"
    } catch {
      return true
    }
  })

  const finishIntro = useCallback(() => {
    try {
      sessionStorage.setItem("intro-seen", "1")
    } catch {
      // storage unavailable (private mode): the intro just plays again next time
    }
    setLoading(false)
  }, [])

  return (
    <>
      {loading && <Loader onComplete={finishIntro} />}

      <Cursor />
      <ThemeToggle />
      <Navigation />

      <main>
        <Hero />
        <Story />
        <HowIWork />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default App
