import { motion } from 'framer-motion'
import { GraduationCap, MapPin } from 'lucide-react'
import { profile, education } from '../data/profile'
import Container from './ui/Container'
import SectionHeading from './ui/SectionHeading'
import GlassCard from './ui/GlassCard'

export default function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <Container>
        <SectionHeading index="01" eyebrow="About Me" title="A little about who I am" />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3"
          >
            <div className="space-y-5 text-base leading-relaxed text-ink-dim">
              {profile.about.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-2 text-sm text-ink-faint">
              <MapPin size={15} />
              <span>{profile.location}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2"
          >
            <div className="mb-4 flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wide text-ink">
              <GraduationCap size={17} className="text-accent-ink" />
              Education
            </div>

            <div className="relative space-y-6 border-l-2 border-border-subtle pl-6">
              {education.map((edu, i) => (
                <div key={i} className="relative">
                  <span className="absolute -left-[27px] top-1 h-2.5 w-2.5 rounded-sm border-2 border-accent-ink bg-canvas" />
                  <GlassCard className="p-4" hover={false}>
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="font-display text-sm font-semibold text-ink">{edu.school}</h4>
                      <span className="shrink-0 font-mono text-xs text-ink-faint">{edu.period}</span>
                    </div>
                    <p className="mt-1.5 text-sm text-ink-dim">{edu.degree}</p>
                    <p className="mt-1 text-xs text-ink-faint">{edu.detail}</p>
                  </GlassCard>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
