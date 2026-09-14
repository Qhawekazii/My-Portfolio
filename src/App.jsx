import { useState } from "react"
import Loader from "./components/Loader.jsx"
import Cursor from "./components/Cursor.jsx"
import Navigation from "./components/Navigation.jsx"
import ThemeToggle from "./components/ThemeToggle.jsx"
import Hero from "./components/Hero.jsx"
import Story from "./components/Story.jsx"
import Evolution from "./components/Evolution.jsx"
import Projects from "./components/Projects.jsx"
import Contact from "./components/Contact.jsx"

function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}

      <Cursor />
      <ThemeToggle />
      <Navigation />

      <main>
        <Hero />
        <Story />
        <Evolution />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default App
