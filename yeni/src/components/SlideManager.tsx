import { useCallback, useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion, cubicBezier } from 'framer-motion'
import { useToggle } from 'react-use'
import { SlideView } from './SlideView'
import { TopBar } from './TopBar'
import { ProgressDots } from './nav/ProgressDots'
import { Controls } from './nav/Controls'
import { AtlasModal } from './nav/AtlasModal'
import { useContent } from '../content/ContentProvider'

export type Direction = 1 | -1

export function SlideManager() {
  const [index, setIndex] = useState(0)
  const [locale, setLocale] = useState<'tr' | 'en'>('tr')
  const [direction, setDirection] = useState<Direction>(1)
  const [isAtlasOpen, toggleAtlas] = useToggle(false)
  const prefersReduced = useMemo(
    () => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false,
    []
  )
  const { slidesTr, slidesEn } = useContent()

  const slides = useMemo(() => (locale === 'tr' ? slidesTr : slidesEn), [locale, slidesTr, slidesEn])
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
    const onTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0]
      const startX = touch.clientX
      const startY = touch.clientY

      const onTouchMove = (e: TouchEvent) => {
        const touch = e.touches[0]
        const dx = touch.clientX - startX
        const dy = touch.clientY - startY

        if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 30) {
          if (dx > 0) go(-1)
          else go(1)
          window.removeEventListener('touchmove', onTouchMove)
        }
      }

      window.addEventListener('touchmove', onTouchMove)
      window.addEventListener('touchend', () => {
        window.removeEventListener('touchmove', onTouchMove)
      }, { once: true })
    }

    window.addEventListener('touchstart', onTouchStart)
    return () => window.removeEventListener('touchstart', onTouchStart)
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
      <TopBar index={index} total={total} onOpenAtlas={() => toggleAtlas(true)} locale={locale} onToggleLocale={() => setLocale((l) => (l === 'tr' ? 'en' : 'tr'))} />

      <AnimatePresence custom={direction} initial={false} mode="popLayout">
        <motion.main
          key={`${locale}-${slides[index]?.id}`}
          custom={direction}
          variants={pageVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          {slides[index] ? (
            <SlideView
              slide={slides[index]}
              index={index}
              reducedMotion={prefersReduced}
              direction={direction}
              locale={locale}
              onPrev={() => go(-1)}
              onNext={() => go(1)}
            />
          ) : null}
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

