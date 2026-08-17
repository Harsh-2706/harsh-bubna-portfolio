import { cn } from '../../lib/utils'

export default function Badge({ children, className }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-md border-2 border-ink bg-surface px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-wide text-ink',
        className
      )}
    >
      {children}
    </span>
  )
}
