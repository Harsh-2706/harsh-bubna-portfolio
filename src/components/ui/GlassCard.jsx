import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'

export default function GlassCard({ children, className, hover = true, as: Comp = motion.div, ...props }) {
  return (
    <Comp
      className={cn(
        'glass relative rounded-xl shadow-[4px_4px_0_0_var(--color-border-subtle)]',
        hover &&
          'transition-all duration-200 ease-out hover:-translate-x-1 hover:-translate-y-1 hover:border-accent-ink hover:shadow-[8px_8px_0_0_var(--color-accent-ink)]',
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}
