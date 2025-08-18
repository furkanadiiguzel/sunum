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
        <div className="h-full w-full bg-night" aria-hidden="true" />
        {/* Animated blobs for visible purple/green motion */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <motion.div
            initial={{ x: -120, y: -140, scale: 1 }}
            animate={{ x: 40, y: -60, scale: 1.06 }}
            transition={{ duration: 18, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '60vmax',
              height: '60vmax',
              borderRadius: '50%',
              filter: 'blur(48px)',
              background: 'radial-gradient(circle at 50% 50%, rgba(108,92,231,0.35), rgba(108,92,231,0) 60%)',
              zIndex: 5,
            }}
          />
          <motion.div
            initial={{ x: 120, y: 140, scale: 1 }}
            animate={{ x: -40, y: 60, scale: 1.05 }}
            transition={{ duration: 20, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              width: '60vmax',
              height: '60vmax',
              borderRadius: '50%',
              filter: 'blur(48px)',
              background: 'radial-gradient(circle at 50% 50%, rgba(34,211,238,0.28), rgba(34,211,238,0) 60%)',
              zIndex: 5,
            }}
          />
        </div>
        {vignette}
        {particles}
        <div className="absolute inset-0 bg-gradient-overlay pointer-events-none z-10" aria-hidden="true" />
      </div>

      <div className="relative z-10 h-full w-full">
        <div className="mx-auto h-full max-w-7xl px-4 md:px-6 py-6 md:py-10 grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_420px] items-start md:items-center gap-4 md:gap-8">
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
            {slide.id !== 'intro' && slide.id !== 'closing' ? (
              <h1 className="font-display font-semibold text-2xl md:text-4xl tracking-tight">
                {slide.title}
              </h1>
            ) : (
              <h1 className="font-display font-semibold text-2xl md:text-4xl tracking-tight">
                {slide.title}
              </h1>
            )}
            {slide.body ? (
              <p className="mt-5 text-porcelain/90 leading-7">
                {slide.body}
              </p>
            ) : null}
            {slide.bullets && slide.id !== 'closing' ? (
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
            className="block w-full md:max-w-[420px]"
            initial={reducedMotion ? false : { opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          >
            <div className="w-full">
              <SlideContentRouter slide={slide} />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
})

