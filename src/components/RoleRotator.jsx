import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function RoleRotator({ roles, interval = 2400 }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % roles.length), interval)
    return () => clearInterval(id)
  }, [roles.length, interval])

  return (
    <span className="relative inline-flex h-[1.2em] max-w-full items-center justify-center overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-gradient"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
