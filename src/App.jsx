import { useEffect, useState } from 'react'
import { useTheme } from './hooks/useTheme'
import BackgroundFX from './components/ui/BackgroundFX'
import ScrollProgress from './components/ui/ScrollProgress'
import Loader from './components/ui/Loader'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MarqueeStrip from './components/MarqueeStrip'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const { theme, toggleTheme } = useTheme()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <Loader show={loading} />
      <BackgroundFX />
      <ScrollProgress />
      <CustomCursor />
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        <Hero />
        <MarqueeStrip />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App
