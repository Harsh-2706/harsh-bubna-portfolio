import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, CheckCircle2, Phone } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './icons/BrandIcons'
import { profile } from '../data/profile'
import Container from './ui/Container'
import SectionHeading from './ui/SectionHeading'
import GlassCard from './ui/GlassCard'
import Button from './ui/Button'

const contactLinks = [
  { label: 'Email', value: profile.email, href: profile.socials.email, icon: Mail },
  { label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, '')}`, icon: Phone },
  { label: 'LinkedIn', value: 'linkedin.com/in/harsh-bubna', href: profile.socials.linkedin, icon: LinkedinIcon },
  { label: 'GitHub', value: 'github.com/Harsh-2706', href: profile.socials.github, icon: GithubIcon },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="relative py-28 sm:py-36">
      <Container>
        <SectionHeading
          index="06"
          eyebrow="Contact"
          title="Let's build something together"
          description="Have a role, project, or idea in mind? I'd love to hear about it."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="grid gap-4 lg:col-span-2"
          >
            {contactLinks.map(({ label, value, href, icon: Icon }) => (
              <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                <GlassCard className="flex items-center gap-4 p-5">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border-2 border-ink bg-accent text-[#0a0a0a]">
                    <Icon size={18} />
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono text-xs uppercase tracking-wide text-ink-faint">{label}</p>
                    <p className="truncate text-sm font-medium text-ink">{value}</p>
                  </div>
                </GlassCard>
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3"
          >
            <GlassCard className="p-6 sm:p-8" hover={false}>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-xs font-medium text-ink-dim">
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="w-full rounded-lg border-2 border-border-subtle bg-surface-2/40 px-4 py-3 text-sm text-ink placeholder:text-ink-faint outline-none transition-colors focus:border-accent-ink"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-xs font-medium text-ink-dim">
                      Your Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className="w-full rounded-lg border-2 border-border-subtle bg-surface-2/40 px-4 py-3 text-sm text-ink placeholder:text-ink-faint outline-none transition-colors focus:border-accent-ink"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-xs font-medium text-ink-dim">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about the role or project..."
                    className="w-full resize-none rounded-lg border-2 border-border-subtle bg-surface-2/40 px-4 py-3 text-sm text-ink placeholder:text-ink-faint outline-none transition-colors focus:border-accent-ink"
                  />
                </div>

                <Button type="submit" variant="primary" className="w-full sm:w-auto">
                  {sent ? <CheckCircle2 size={16} /> : <Send size={16} />}
                  {sent ? 'Opening your mail client…' : 'Send Message'}
                </Button>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
