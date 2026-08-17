import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'

export default function SectionHeading({ index, eyebrow, title, description, align = 'left', className }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn('relative mb-16 max-w-3xl', align === 'center' && 'mx-auto text-center', className)}
    >
      {index && (
        <span
          aria-hidden
          className="pointer-events-none absolute -top-10 right-0 hidden select-none font-poster text-[9rem] leading-none text-transparent sm:block lg:text-[12rem]"
          style={{ WebkitTextStroke: '1.5px var(--color-border-subtle)' }}
        >
          {index}
        </span>
      )}

      {eyebrow && (
        <div className={cn('mb-4 flex items-center gap-3', align === 'center' && 'justify-center')}>
          {index && (
            <span className="border-2 border-ink px-2 py-0.5 font-mono text-xs font-bold text-ink">{index}</span>
          )}
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-accent-ink">{eyebrow}</span>
        </div>
      )}
      <h2 className="font-poster text-4xl uppercase leading-[0.95] tracking-tight text-ink sm:text-6xl lg:text-7xl">
        {title}
      </h2>
      {description && <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-dim">{description}</p>}
    </motion.div>
  )
}
