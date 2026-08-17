import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Moon, Sun, ArrowDownToLine } from 'lucide-react'
import { profile } from '../data/profile'
import { useActiveSection } from '../hooks/useActiveSection'
import { cn } from '../lib/utils'
import Button from './ui/Button'

const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const active = useActiveSection(NAV_LINKS.map((l) => l.id))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleNavClick = (e, id) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMenuOpen(false)
  }

  return (
    <header className={cn('fixed inset-x-0 top-0 z-50 transition-all duration-300', scrolled ? 'py-3' : 'py-5')}>
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 sm:px-8">
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, 'hero')}
          className="font-poster text-base uppercase tracking-tight text-ink"
        >
          Harsh<span className="text-gradient">.</span>Bubna
        </a>

        <nav className="glass hidden items-center gap-1 rounded-lg px-2 py-2 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className={cn(
                'relative rounded-md px-4 py-2 font-mono text-xs font-bold uppercase tracking-wide transition-colors duration-200',
                active === link.id ? 'text-[#0a0a0a]' : 'text-ink-dim hover:text-ink'
              )}
            >
              {active === link.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-md bg-accent"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="glass grid h-10 w-10 place-items-center rounded-lg text-ink-dim transition-colors hover:text-ink"
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <Button as="a" href={profile.resumeUrl} download variant="outline" className="!px-5 !py-2.5 text-sm">
            <ArrowDownToLine size={15} />
            Resume
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="glass grid h-10 w-10 place-items-center rounded-lg text-ink-dim"
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            className="glass grid h-10 w-10 place-items-center rounded-lg text-ink"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="glass mx-6 mt-3 flex flex-col gap-1 rounded-lg p-3 lg:hidden"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={cn(
                  'rounded-md px-4 py-3 font-mono text-xs font-bold uppercase tracking-wide transition-colors',
                  active === link.id ? 'bg-accent text-[#0a0a0a]' : 'text-ink-dim hover:text-ink'
                )}
              >
                {link.label}
              </a>
            ))}
            <Button
              as="a"
              href={profile.resumeUrl}
              download
              variant="outline"
              className="mt-2 !py-2.5 text-sm"
              onClick={() => setMenuOpen(false)}
            >
              <ArrowDownToLine size={15} />
              Download Resume
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
