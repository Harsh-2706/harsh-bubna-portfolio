import { motion } from 'framer-motion'
import { ArrowRight, ArrowDownToLine, Mail, ChevronDown } from 'lucide-react'
import { profile } from '../data/profile'
import profileImg from '../assets/profile.jpg'
import Container from './ui/Container'
import Button from './ui/Button'
import Badge from './ui/Badge'
import RoleRotator from './RoleRotator'
import SplitText from './SplitText'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

export default function Hero() {
  const scrollTo = (id) => (e) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="hero" className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16">
      <Container>
        <motion.div variants={container} initial="hidden" animate="show" className="mx-auto max-w-5xl text-center">
          <motion.div variants={item} className="mb-6 flex justify-center">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative h-36 w-36 sm:h-44 sm:w-44"
            >
              <img
                src={profileImg}
                alt="Harsh Nilesh Bubna"
                className="h-full w-full rounded-xl border-4 border-ink object-cover shadow-[6px_6px_0_0_var(--color-accent-ink)]"
              />
            </motion.div>
          </motion.div>

          <motion.div variants={item}>
            <Badge className="mb-6">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
              Open to Internships & AI/ML Roles
            </Badge>
          </motion.div>

          <h1 className="font-poster uppercase leading-[0.95] tracking-tight text-ink">
            <SplitText
              text={`Hi, I'm ${profile.firstName} —`}
              className="block text-5xl sm:text-7xl lg:text-8xl"
              delay={0.15}
            />
            <span className="mt-4 block text-lg sm:text-4xl lg:text-6xl">
              <RoleRotator roles={profile.roles} />
            </span>
          </h1>

          <motion.p variants={item} className="mx-auto mt-8 max-w-xl text-balance text-base leading-relaxed text-ink-dim sm:text-lg">
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button as="a" href="#projects" onClick={scrollTo('projects')} variant="primary">
              View Projects
              <ArrowRight size={16} />
            </Button>
            <Button as="a" href={profile.resumeUrl} download variant="outline">
              <ArrowDownToLine size={16} />
              Download Resume
            </Button>
            <Button as="a" href="#contact" onClick={scrollTo('contact')} variant="ghost">
              <Mail size={16} />
              Contact Me
            </Button>
          </motion.div>

          <motion.div variants={item} className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-ink-faint">
            {profile.focusAreas.map((f) => (
              <span key={f} className="font-mono uppercase tracking-wider">
                {f}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </Container>

      <motion.a
        href="#about"
        onClick={scrollTo('about')}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-faint transition-colors hover:text-ink"
        aria-label="Scroll to About section"
      >
        <ChevronDown size={22} />
      </motion.a>
    </section>
  )
}
