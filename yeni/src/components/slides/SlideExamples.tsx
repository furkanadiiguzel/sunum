import { memo } from 'react'
import { motion } from 'framer-motion'

const Bullet = () => <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-mint" />

type Props = { items: string[] }

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.3, delay: i * 0.05 } }),
}

export const SlideExamples = memo(function SlideExamples({ items }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {items.map((text, i) => (
        <motion.div
          key={i}
          className="card-surface p-4"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          custom={i}
        >
          <div className="flex items-start gap-3">
            <Bullet />
            <p className="text-sm text-porcelain/90 leading-5">{text}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
})