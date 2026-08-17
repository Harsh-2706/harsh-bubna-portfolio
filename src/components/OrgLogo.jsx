import { cn } from '../lib/utils'

// Lightweight brand-accurate badges for organizations that don't have a
// reliable public logo API (Clearbit's free endpoint has been discontinued).
const LOGOS = {
  zire: {
    bg: '#ffffff',
    render: () => (
      <span className="font-display text-[10px] font-extrabold tracking-tight text-[#1b2a63]">ZIRE</span>
    ),
  },
  dpchocolates: {
    bg: '#fdf6e9',
    render: () => (
      <span className="font-display text-sm font-bold text-[#b8863b]">
        2<span className="text-[10px] align-super">m</span>
      </span>
    ),
  },
  alexa: {
    bg: '#0b0e13',
    render: () => <span className="h-4 w-4 rounded-full border-[3px] border-[#33c5f2]" />,
  },
  ngo: {
    bg: '#ffffff',
    render: () => <span className="font-display text-xs font-bold text-emerald-600">MF</span>,
  },
}

export default function OrgLogo({ id, className }) {
  const logo = LOGOS[id]
  if (!logo) return null

  return (
    <span
      className={cn('grid h-10 w-10 shrink-0 place-items-center rounded-lg border-2 border-ink', className)}
      style={{ backgroundColor: logo.bg }}
    >
      {logo.render()}
    </span>
  )
}
