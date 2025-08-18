import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import { useMemo, useState } from 'react'
import type { Slide } from '../../content/slides'

type Props = {
  open: boolean
  onClose: () => void
  slides: Slide[]
  onSelect: (index: number) => void
}

export function AtlasModal({ open, onClose, slides, onSelect }: Props) {
  const [query, setQuery] = useState('')
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return slides
    return slides.filter((s) => s.title.toLowerCase().includes(q))
  }, [query, slides])

  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">
      <DialogBackdrop className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
      <div className="fixed inset-0 overflow-y-auto p-6">
        <div className="mx-auto max-w-5xl">
          <DialogPanel className="card-surface p-4">
            <div className="flex items-center gap-3">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search slides…"
                className="w-full rounded-md bg-black/20 px-3 py-2 outline-none ring-1 ring-white/10 focus:ring-mint"
              />
              <button className="rounded-md px-3 py-2 text-sm hover:bg-white/5" onClick={onClose}>Close</button>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-5">
              {filtered.map((s) => (
                <button
                  key={s.id}
                  onClick={() => onSelect(slides.findIndex((x) => x.id === s.id))}
                  className="group overflow-hidden rounded-xl ring-1 ring-white/10 hover:ring-mint focus-ring"
                >
                  <img
                    src={s.visual.src}
                    srcSet={s.visual.srcSet}
                    sizes={s.visual.sizes}
                    alt={s.visual.alt}
                    className="h-28 w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="p-2 text-xs text-left text-porcelain/80">{s.title}</div>
                </button>
              ))}
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}

