import { cn } from '../../lib/utils'

export default function Container({ children, className }) {
  return <div className={cn('mx-auto w-full max-w-6xl px-6 sm:px-8', className)}>{children}</div>
}
