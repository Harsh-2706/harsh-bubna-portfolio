import { Mail, ArrowUp } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './icons/BrandIcons'
import { profile } from '../data/profile'
import Container from './ui/Container'

const socials = [
  { icon: GithubIcon, href: profile.socials.github, label: 'GitHub' },
  { icon: LinkedinIcon, href: profile.socials.linkedin, label: 'LinkedIn' },
  { icon: Mail, href: profile.socials.email, label: 'Email' },
]

export default function Footer() {
  const scrollTop = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t-2 border-ink py-10">
      <Container className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="font-mono text-xs text-ink-faint">
          &copy; {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind CSS.
        </p>

        <div className="flex items-center gap-3">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              aria-label={label}
              className="glass grid h-10 w-10 place-items-center rounded-lg text-ink-dim transition-colors hover:border-accent-ink hover:text-accent-ink"
            >
              <Icon size={15} />
            </a>
          ))}
          <a
            href="#hero"
            onClick={scrollTop}
            aria-label="Back to top"
            className="glass grid h-10 w-10 place-items-center rounded-lg text-ink-dim transition-colors hover:text-accent-ink"
          >
            <ArrowUp size={15} />
          </a>
        </div>
      </Container>
    </footer>
  )
}
