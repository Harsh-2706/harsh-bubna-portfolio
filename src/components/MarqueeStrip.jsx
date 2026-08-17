import { skillGroups } from '../data/skills'

const items = skillGroups.flatMap((g) => g.skills)
const track = [...items, ...items]

export default function MarqueeStrip() {
  return (
    <div className="relative overflow-hidden border-y-2 border-ink bg-accent py-3.5">
      <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap">
        {track.map((item, i) => (
          <span key={i} className="flex items-center gap-10 font-mono text-sm font-bold uppercase tracking-wide text-[#0a0a0a]">
            {item}
            <span aria-hidden className="h-1.5 w-1.5 shrink-0 bg-[#0a0a0a]" />
          </span>
        ))}
      </div>
    </div>
  )
}
