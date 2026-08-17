import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-canvas"
        >
          <div className="flex flex-col items-center gap-4">
            <motion.span
              initial={{ opacity: 0, letterSpacing: '0.1em' }}
              animate={{ opacity: 1, letterSpacing: '0.3em' }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="font-poster text-lg text-gradient"
            >
              HB
            </motion.span>
            <div className="h-px w-24 overflow-hidden bg-border-subtle">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
                className="h-full w-1/2 bg-[linear-gradient(90deg,transparent,var(--color-accent-ink),transparent)]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
