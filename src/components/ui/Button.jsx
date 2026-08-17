import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'

const variants = {
  primary:
    'bg-accent text-[#0a0a0a] border-2 border-accent-ink font-bold shadow-[4px_4px_0_0_var(--color-ink)] hover:shadow-[6px_6px_0_0_var(--color-ink)] hover:-translate-x-0.5 hover:-translate-y-0.5',
  outline:
    'bg-transparent text-ink border-2 border-ink shadow-[4px_4px_0_0_var(--color-border-subtle)] hover:bg-ink hover:text-canvas hover:shadow-[6px_6px_0_0_var(--color-accent-ink)] hover:-translate-x-0.5 hover:-translate-y-0.5',
  ghost: 'text-ink-dim hover:text-ink underline decoration-2 underline-offset-4 decoration-transparent hover:decoration-accent-ink',
}

export default function Button({ as = 'button', variant = 'primary', className, children, ...props }) {
  const Comp = motion[as] || motion.button
  return (
    <Comp
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-medium transition-all duration-200 ease-out',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}
