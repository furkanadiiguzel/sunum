import { createContext, useContext, useMemo, useState, useEffect } from 'react'
import { slides as defaultTr } from './slides'
import { slidesEn as defaultEn } from './slides_en'
import type { Slide } from './slides'

type ContentContextValue = {
  slidesTr: Slide[]
  slidesEn: Slide[]
  setSlidesTr: (s: Slide[]) => void
  setSlidesEn: (s: Slide[]) => void
  reset: () => Promise<void>
  save: () => Promise<void>
}

const ContentContext = createContext<ContentContextValue | null>(null)

export function ContentProvider({ children }: { children: React.ReactNode }) {
  const [slidesTr, setSlidesTr] = useState<Slide[]>(defaultTr)
  const [slidesEn, setSlidesEn] = useState<Slide[]>(defaultEn)

  const refetch = async () => {
    try {
      const [trRes, enRes] = await Promise.all([
        fetch('/api/slides?locale=tr'),
        fetch('/api/slides?locale=en'),
      ])
      if (trRes.ok) {
        const trJson = await trRes.json()
        if (Array.isArray(trJson?.slides) && trJson.slides.length > 0) setSlidesTr(trJson.slides)
      }
      if (enRes.ok) {
        const enJson = await enRes.json()
        if (Array.isArray(enJson?.slides) && enJson.slides.length > 0) setSlidesEn(enJson.slides)
      }
    } catch {}
  }

  useEffect(() => {
    refetch()
  }, [])

  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === 'orwen_slides_version') {
        refetch()
      }
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  const save = async () => {
    await Promise.all([
      fetch('/api/slides?locale=tr', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ slides: slidesTr }) }),
      fetch('/api/slides?locale=en', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ slides: slidesEn }) }),
    ])
    try {
      localStorage.setItem('orwen_slides_version', Date.now().toString())
    } catch {}
  }

  const reset = async () => {
    setSlidesTr(defaultTr)
    setSlidesEn(defaultEn)
    await Promise.all([
      fetch('/api/slides?locale=tr', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ slides: defaultTr }) }),
      fetch('/api/slides?locale=en', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ slides: defaultEn }) }),
    ])
    try {
      localStorage.setItem('orwen_slides_version', Date.now().toString())
    } catch {}
  }

  const value = useMemo<ContentContextValue>(() => ({ slidesTr, slidesEn, setSlidesTr, setSlidesEn, reset, save }), [slidesTr, slidesEn])

  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
}

export function useContent(): ContentContextValue {
  const ctx = useContext(ContentContext)
  if (!ctx) throw new Error('useContent must be used within ContentProvider')
  return ctx
}