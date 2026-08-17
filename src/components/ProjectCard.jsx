import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowUpRight, Lock, Sparkles } from 'lucide-react'
import { GithubIcon } from './icons/BrandIcons'
import GlassCard from './ui/GlassCard'

export default function ProjectCard({ project, featured = false }) {
  const ref = useRef(null)
  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)
  const rotateX = useSpring(useTransform(my, [0, 1], [4, -4]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(mx, [0, 1], [-4, 4]), { stiffness: 300, damping: 30 })

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    mx.set((e.clientX - rect.left) / rect.width)
    my.set((e.clientY - rect.top) / rect.height)
  }
  const handleMouseLeave = () => {
    mx.set(0.5)
    my.set(0.5)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="h-full"
    >
      <GlassCard className={`group flex h-full flex-col overflow-hidden ${featured ? 'lg:flex-row' : ''}`}>
        <div
          className={`relative flex items-center justify-center overflow-hidden border-b-2 border-ink bg-surface-2 ${
            featured ? 'h-48 border-b-2 lg:h-auto lg:w-2/5 lg:border-b-0 lg:border-r-2' : 'h-40'
          }`}
        >
          <div className="bg-grid absolute inset-0 opacity-40" />
          <motion.div
            whileHover={{ scale: 1.08, rotate: 3 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="relative grid h-16 w-16 place-items-center rounded-lg border-2 border-ink bg-accent shadow-[4px_4px_0_0_var(--color-ink)]"
          >
            <Sparkles size={26} className="text-[#0a0a0a]" strokeWidth={2} />
          </motion.div>
          {featured && (
            <span className="absolute left-4 top-4 inline-flex items-center rounded-md border-2 border-ink bg-accent px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-wide text-[#0a0a0a]">
              Featured
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-accent-ink">{project.subtitle}</p>
          <h3 className="mt-1.5 font-display text-xl font-bold text-ink">{project.name}</h3>
          <p className="mt-3 text-sm leading-relaxed text-ink-dim">{project.description}</p>

          {featured && (
            <ul className="mt-4 space-y-2">
              {project.features.map((f, i) => (
                <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-ink-dim">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {f}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="rounded-md border border-border-subtle bg-surface-2/50 px-2 py-1 font-mono text-[11px] text-ink-faint">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-3 pt-1">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border-2 border-ink px-4 py-2 text-xs font-bold text-ink transition-colors hover:bg-ink hover:text-canvas"
            >
              <GithubIcon size={14} />
              Code
            </a>
            {project.demo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border-2 border-accent-ink bg-accent px-4 py-2 text-xs font-bold text-[#0a0a0a] transition-colors hover:bg-transparent hover:text-accent-ink"
              >
                <ArrowUpRight size={14} />
                Live Demo
              </a>
            ) : (
              <span
                title="Not publicly deployed"
                className="inline-flex cursor-not-allowed items-center gap-1.5 rounded-lg border-2 border-border-subtle px-4 py-2 text-xs font-bold text-ink-faint"
              >
                <Lock size={12} />
                Private
              </span>
            )}
          </div>
        </div>
      </GlassCard>
    </motion.div>
  )
}
