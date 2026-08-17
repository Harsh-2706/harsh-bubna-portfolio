import { motion } from 'framer-motion'
import { skillGroups } from '../data/skills'
import Container from './ui/Container'
import SectionHeading from './ui/SectionHeading'
import GlassCard from './ui/GlassCard'

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}
const cardVariant = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
}

const spanClass = {
  'ai-ml': 'lg:col-span-2',
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 sm:py-36">
      <Container>
        <SectionHeading
          index="02"
          eyebrow="Skills"
          title="Tools I Reach For"
          description="A toolkit spanning applied machine learning, generative AI, and full-stack product engineering."
        />

        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skillGroups.map((group) => {
            const Icon = group.icon
            return (
              <motion.div key={group.id} variants={cardVariant} className={spanClass[group.id] || ''}>
                <GlassCard className="h-full p-6">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-lg border-2 border-ink bg-accent text-[#0a0a0a]">
                      <Icon size={19} strokeWidth={2} />
                    </div>
                    <h3 className="font-display text-base font-bold uppercase tracking-wide text-ink">{group.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-border-subtle bg-surface-2/50 px-2.5 py-1.5 font-mono text-xs font-medium text-ink-dim transition-colors duration-200 hover:border-accent-ink hover:text-ink"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </section>
  )
}
