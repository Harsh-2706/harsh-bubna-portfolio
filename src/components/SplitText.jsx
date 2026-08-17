import { motion } from 'framer-motion'

export default function SplitText({ text, className, delay = 0, stagger = 0.055 }) {
  const words = text.split(' ')

  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.15em] align-bottom">
          <motion.span
            initial={{ y: '115%', rotate: 4 }}
            animate={{ y: '0%', rotate: 0 }}
            transition={{ duration: 0.75, delay: delay + i * stagger, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block"
          >
            {word}
            {i < words.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </span>
  )
}
