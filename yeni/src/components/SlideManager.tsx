import { useCallback, useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion, cubicBezier } from 'framer-motion'
import { useToggle } from 'react-use'
import { slides } from '../content/slides'
import { SlideView } from './SlideView'
import { TopBar } from './TopBar'
import { ProgressDots } from './nav/ProgressDots'
import { Controls } from './nav/Controls'
import { AtlasModal } from './nav/AtlasModal'

export type Direction = 1 | -1

export function SlideManager() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState<Direction>(1)
  const [isAtlasOpen, toggleAtlas] = useToggle(false)
  const prefersReduced = useMemo(
    () => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false,
    []
  )

  const total = slides.length
  const clampIndex = useCallback((i: number) => Math.max(0, Math.min(total - 1, i)), [total])

  const go = useCallback(
    (dir: Direction) => {
      setDirection(dir)
      setIndex((i) => clampIndex(i + dir))
    },
    [clampIndex]
  )

  const goTo = useCallback(
    (i: number) => {
      const next = clampIndex(i)
      setDirection(next > index ? 1 : -1)
      setIndex(next)
    },
    [clampIndex, index]
  )

  // Keyboard nav
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') go(1)
      else if (e.key === 'ArrowLeft') go(-1)
      else if (e.key === 'Escape') toggleAtlas(true)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [go, toggleAtlas])

  // Touch swipe
  useEffect(() => {
    let startX = 0
    let active = false
    const threshold = 40
    const onStart = (e: TouchEvent) => {
      active = true
      startX = e.touches[0].clientX
    }
    const onMove = (e: TouchEvent) => {
      if (!active) return
      const dx = e.touches[0].clientX - startX
      if (Math.abs(dx) > threshold) {
        go(dx < 0 ? 1 : -1)
        active = false
      }
    }
    const onEnd = () => (active = false)
    window.addEventListener('touchstart', onStart)
    window.addEventListener('touchmove', onMove)
    window.addEventListener('touchend', onEnd)
    return () => {
      window.removeEventListener('touchstart', onStart)
      window.removeEventListener('touchmove', onMove)
      window.removeEventListener('touchend', onEnd)
    }
  }, [go])

  const pageVariants = useMemo(() => {
    const ease = cubicBezier(0.22, 1, 0.36, 1)
    return {
      enter: (dir: Direction) => ({ x: dir > 0 ? 40 : -40, opacity: 0 }),
      center: { x: 0, opacity: 1, transition: { duration: 0.54, ease } },
      exit: (dir: Direction) => ({ x: dir > 0 ? -40 : 40, opacity: 0, transition: { duration: 0.42, ease } }),
    }
  }, [])

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-night">
      <TopBar index={index} total={total} onOpenAtlas={() => toggleAtlas(true)} />

      <AnimatePresence custom={direction} initial={false} mode="popLayout">
        <motion.main
          key={slides[index].id}
          custom={direction}
          variants={pageVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          <SlideView
            slide={slides[index]}
            index={index}
            reducedMotion={prefersReduced}
            direction={direction}
            onPrev={() => go(-1)}
            onNext={() => go(1)}
          />
        </motion.main>
      </AnimatePresence>

      <ProgressDots
        index={index}
        titles={slides.map((s) => s.title)}
        total={total}
        onGoTo={goTo}
      />
      <Controls onPrev={() => go(-1)} onNext={() => go(1)} />

      <AtlasModal
        open={isAtlasOpen}
        onClose={() => toggleAtlas(false)}
        slides={slides}
        onSelect={(i) => {
          goTo(i)
          toggleAtlas(false)
        }}
      />
    </div>
  )
}

