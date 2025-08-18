import { memo } from 'react'
import { motion } from 'framer-motion'
import type { Direction } from './SlideManager'
import type { Slide } from '../content/slides'
import { SlideContentRouter } from './SlideContentRouter'

type Props = {
  slide: Slide
  index: number
  reducedMotion: boolean
  direction: Direction
  onPrev: () => void
  onNext: () => void
}

export const SlideView = memo(function SlideView({ slide, reducedMotion }: Props) {
  const overlay = (
    <div className="absolute inset-0 bg-gradient-overlay pointer-events-none" aria-hidden="true" />
  )
  const vignette = <div className="vignette absolute inset-0" aria-hidden="true" />
  const particles = (
    <svg className="particles" aria-hidden="true">
      <defs>
        <radialGradient id="g" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="0.35" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="12%" cy="22%" r="1.5" fill="url(#g)" />
      <circle cx="78%" cy="18%" r="1.2" fill="url(#g)" />
      <circle cx="86%" cy="72%" r="1.4" fill="url(#g)" />
      <circle cx="32%" cy="68%" r="1.1" fill="url(#g)" />
    </svg>
  )

  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 overflow-hidden">
        <motion.img
          src={slide.visual.src}
          srcSet={slide.visual.srcSet}
          sizes={slide.visual.sizes}
          alt={slide.visual.alt}
          className="h-full w-full object-cover will-change-transform"
          initial={reducedMotion ? false : { scale: 1.06 }}
          animate={reducedMotion ? { scale: 1 } : { scale: 1 }}
          transition={{ duration: 12, ease: 'easeOut' }}
        />
        {overlay}
        {vignette}
        {particles}
      </div>

      <div className="relative z-10 h-full w-full">
        <div className="mx-auto h-full max-w-7xl px-6 py-10 grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_420px] items-center gap-8">
          <motion.div
            className="card-surface p-8 md:p-10 max-w-3xl"
            initial={reducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {slide.lead ? (
              <div className="mb-4 text-sm text-porcelain/80 tracking-wide">
                {slide.lead}
              </div>
            ) : null}
            <h1 className="font-display font-semibold text-2xl md:text-4xl tracking-tight">
              {slide.title}
            </h1>
            {slide.body ? (
              <p className="mt-5 text-porcelain/90 leading-7">
                {slide.body}
              </p>
            ) : null}
            {slide.bullets ? (
              <ul className="mt-6 space-y-3">
                {slide.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-mint" />
                    <span className="text-porcelain/90">{b}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </motion.div>
          <motion.div
            className="hidden md:block w-full"
            initial={reducedMotion ? false : { opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          >
            <div className="w-full" style={{ maxWidth: 420 }}>
              <SlideContentRouter slide={slide} />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
})

