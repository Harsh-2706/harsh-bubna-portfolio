import { motion } from 'framer-motion'
import { Trophy, Award, BadgeCheck } from 'lucide-react'
import { achievements, certifications, stats } from '../data/achievements'
import Container from './ui/Container'
import SectionHeading from './ui/SectionHeading'
import GlassCard from './ui/GlassCard'

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}
const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
}

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-28 sm:py-36">
      <Container>
        <SectionHeading index="05" eyebrow="Achievements" title="Recognition along the way" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-14 grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {stats.map((s) => (
            <GlassCard key={s.label} className="p-5 text-center" hover={false}>
              <p className="font-poster text-3xl text-accent-ink sm:text-4xl">{s.value}</p>
              <p className="mt-1 font-mono text-xs uppercase tracking-wide text-ink-faint">{s.label}</p>
            </GlassCard>
          ))}
        </motion.div>

        <motion.div variants={grid} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {achievements.map((a) => (
            <motion.div key={a.title} variants={cardVariant}>
              <GlassCard className="h-full p-6">
                <div className="mb-4 flex items-center justify-between">
                  <div className="grid h-10 w-10 place-items-center rounded-lg border-2 border-ink bg-accent">
                    <Trophy size={18} className="text-[#0a0a0a]" />
                  </div>
                  <span className="font-mono text-xs text-ink-faint">{a.date}</span>
                </div>
                <h3 className="font-display text-base font-semibold text-ink">{a.title}</h3>
                <p className="mt-1 text-xs font-medium text-accent-ink">{a.result}</p>
                <p className="mt-0.5 text-xs text-ink-faint">{a.org}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-dim">{a.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mt-14"
        >
          <div className="mb-5 flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wide text-ink">
            <Award size={17} className="text-accent-ink" />
            Certifications
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((c) => (
              <div
                key={c.name}
                className="glass flex items-start gap-2.5 rounded-lg p-3.5 transition-colors hover:border-accent-ink"
              >
                <BadgeCheck size={16} className="mt-0.5 shrink-0 text-accent-ink" />
                <div className="min-w-0">
                  <p className="truncate text-xs font-medium text-ink" title={c.id ? `${c.name} — ID: ${c.id}` : c.name}>
                    {c.name}
                  </p>
                  <p className="mt-0.5 text-[11px] text-ink-faint">
                    {c.issuer} · {c.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
