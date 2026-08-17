import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [hovered, setHovered] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const ringX = useSpring(x, { stiffness: 280, damping: 28, mass: 0.5 })
  const ringY = useSpring(y, { stiffness: 280, damping: 28, mass: 0.5 })

  useEffect(() => {
    const isFine = window.matchMedia('(pointer: fine)').matches
    setEnabled(isFine)
    if (!isFine) return

    document.documentElement.classList.add('custom-cursor-enabled')

    const handleMove = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    const handleOver = (e) => {
      setHovered(!!e.target.closest('a, button, [data-cursor-hover]'))
    }

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mouseover', handleOver)
    return () => {
      document.documentElement.classList.remove('custom-cursor-enabled')
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseover', handleOver)
    }
  }, [x, y])

  if (!enabled) return null

  return (
    <>
      <motion.div
        style={{ x, y }}
        className="pointer-events-none fixed left-0 top-0 z-[90] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent"
      />
      <motion.div
        style={{ x: ringX, y: ringY }}
        animate={{ scale: hovered ? 1.9 : 1, opacity: hovered ? 0.7 : 0.35 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="pointer-events-none fixed left-0 top-0 z-[90] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent-ink"
      />
    </>
  )
}
