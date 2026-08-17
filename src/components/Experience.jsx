import { motion } from 'framer-motion'
import { MapPin, Sparkles } from 'lucide-react'
import { experience, leadership } from '../data/experience'
import Container from './ui/Container'
import SectionHeading from './ui/SectionHeading'
import GlassCard from './ui/GlassCard'
import OrgLogo from './OrgLogo'

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 sm:py-36">
      <Container>
        <SectionHeading index="03" eyebrow="Experience" title="Where I've worked" description="Hands-on roles across AI-driven products and B2B web platforms." />

        <div className="relative">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/60 via-border-subtle to-transparent sm:left-6" />

          <div className="space-y-10">
            {experience.map((job, i) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative pl-12 sm:pl-20"
              >
                <div className="absolute left-0 top-0 sm:left-2">
                  <OrgLogo id={job.logo} />
                </div>

                <GlassCard className="p-6 sm:p-7" hover={false}>
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-ink">{job.role}</h3>
                      <p className="mt-0.5 text-sm font-medium text-accent-ink">{job.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-xs text-ink-faint">{job.period}</p>
                      <p className="mt-1 flex items-center justify-end gap-1 text-xs text-ink-faint">
                        <MapPin size={11} />
                        {job.location}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-sm italic leading-relaxed text-ink-faint">{job.blurb}</p>

                  <ul className="mt-4 space-y-2.5">
                    {job.points.map((point, idx) => (
                      <li key={idx} className="flex gap-2.5 text-sm leading-relaxed text-ink-dim">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>

        {leadership.length > 0 && (
          <div className="mt-16">
            <div className="mb-6 flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wide text-ink">
              <Sparkles size={17} className="text-accent-ink" />
              Leadership & Activities
            </div>

            <div className="space-y-6">
              {leadership.map((org, i) => (
                <motion.div
                  key={org.org}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <GlassCard className="p-6 sm:p-7" hover={false}>
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <OrgLogo id={org.logo} />
                        <div>
                          <h3 className="font-display text-base font-semibold text-ink">{org.org}</h3>
                          <p className="mt-0.5 flex items-center gap-1 text-xs text-ink-faint">
                            <MapPin size={11} />
                            {org.location}
                          </p>
                        </div>
                      </div>
                      <span className="font-mono text-xs text-ink-faint">{org.totalDuration}</span>
                    </div>

                    <div className="mt-5 space-y-5 border-l-2 border-border-subtle pl-5">
                      {org.roles.map((role, idx) => (
                        <div key={idx} className="relative">
                          <span className="absolute -left-[23px] top-1 h-2 w-2 rounded-sm border-2 border-accent-ink bg-canvas" />
                          <div className="flex flex-wrap items-baseline justify-between gap-2">
                            <h4 className="text-sm font-semibold text-ink">{role.title}</h4>
                            <span className="font-mono text-xs text-ink-faint">
                              {role.period} · {role.duration}
                            </span>
                          </div>
                          <ul className="mt-2 space-y-1.5">
                            {role.points.map((point, pIdx) => (
                              <li key={pIdx} className="flex gap-2 text-sm leading-relaxed text-ink-dim">
                                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  )
}
