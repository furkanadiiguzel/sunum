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
        <div className="mx-auto flex h-full max-w-6xl items-center px-6">
          <div className="card-surface p-8 md:p-10 max-w-3xl">
            {slide.lead ? (
              <div className="mb-4 text-sm text-porcelain/80 tracking-wide">
                {slide.lead}
              </div>
            ) : null}
            <h1 className="font-display font-semibold text-3xl md:text-5xl tracking-tight">
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
          </div>
          <div className="ml-8 hidden md:block">
            <SlideContentRouter slide={slide} />
          </div>
        </div>
      </div>
    </div>
  )
})

