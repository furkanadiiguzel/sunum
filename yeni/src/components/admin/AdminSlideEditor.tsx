import { useState } from 'react'
import type { Slide } from '../../content/slides'

type Props = {
  slide: Slide
  onChange: (next: Slide) => void
}

export default function AdminSlideEditor({ slide, onChange }: Props) {
  const [editLead, setEditLead] = useState(false)
  const [editTitle, setEditTitle] = useState(false)
  const [editBody, setEditBody] = useState(false)
  const [editBullets, setEditBullets] = useState(false)
  const [editVisual, setEditVisual] = useState(false)
  const [editCharts, setEditCharts] = useState(false)

  return (
    <div className="card-surface p-5 space-y-4">
      <div className="flex items-start justify-between gap-3">
        <div className="text-xs text-porcelain/60">id: {slide.id}</div>
      </div>

      {/* Lead */}
      <div>
        <div className="flex items-center justify-between gap-3">
          <div className="text-xs font-semibold text-porcelain/80">Lead</div>
          <button className="text-[11px] px-2 py-0.5 rounded bg-white/10 border border-white/15" onClick={() => setEditLead((v) => !v)}>{editLead ? 'Done' : 'Edit'}</button>
        </div>
        {editLead ? (
          <textarea
            value={slide.lead ?? ''}
            onChange={(e) => onChange({ ...slide, lead: e.target.value })}
            rows={3}
            className="mt-2 w-full rounded-md bg-white/10 border border-white/20 p-2 text-sm"
          />
        ) : slide.lead ? (
          <div className="mt-2 text-sm text-porcelain/80">{slide.lead}</div>
        ) : (
          <div className="mt-2 text-sm text-porcelain/50">(empty)</div>
        )}
      </div>

      {/* Title */}
      <div>
        <div className="flex items-center justify-between gap-3">
          <div className="text-xs font-semibold text-porcelain/80">Title</div>
          <button className="text-[11px] px-2 py-0.5 rounded bg-white/10 border border-white/15" onClick={() => setEditTitle((v) => !v)}>{editTitle ? 'Done' : 'Edit'}</button>
        </div>
        {editTitle ? (
          <input
            value={slide.title}
            onChange={(e) => onChange({ ...slide, title: e.target.value })}
            className="mt-2 w-full rounded-md bg-white/10 border border-white/20 p-2 text-sm"
          />
        ) : (
          <div className="mt-2 font-display text-xl text-porcelain/95">{slide.title}</div>
        )}
      </div>

      {/* Body */}
      <div>
        <div className="flex items-center justify-between gap-3">
          <div className="text-xs font-semibold text-porcelain/80">Body</div>
          <button className="text-[11px] px-2 py-0.5 rounded bg-white/10 border border-white/15" onClick={() => setEditBody((v) => !v)}>{editBody ? 'Done' : 'Edit'}</button>
        </div>
        {editBody ? (
          <textarea
            value={slide.body ?? ''}
            onChange={(e) => onChange({ ...slide, body: e.target.value })}
            rows={4}
            className="mt-2 w-full rounded-md bg-white/10 border border-white/20 p-2 text-sm"
          />
        ) : slide.body ? (
          <div className="mt-2 text-sm text-porcelain/85 leading-6">{slide.body}</div>
        ) : (
          <div className="mt-2 text-sm text-porcelain/50">(empty)</div>
        )}
      </div>

      {/* Bullets */}
      <div>
        <div className="flex items-center justify-between gap-3">
          <div className="text-xs font-semibold text-porcelain/80">Bullets</div>
          <button className="text-[11px] px-2 py-0.5 rounded bg-white/10 border border-white/15" onClick={() => setEditBullets((v) => !v)}>{editBullets ? 'Done' : 'Edit'}</button>
        </div>
        {editBullets ? (
          <div className="mt-2 space-y-2">
            {(slide.bullets ?? []).map((b, i) => (
              <div key={i} className="flex items-center gap-2">
                <input
                  value={b}
                  onChange={(e) => {
                    const next = [...(slide.bullets ?? [])]
                    next[i] = e.target.value
                    onChange({ ...slide, bullets: next })
                  }}
                  className="w-full rounded-md bg-white/10 border border-white/20 p-2 text-sm"
                />
                <button
                  className="text-[11px] px-2 py-1 rounded bg-white/10 border border-white/15"
                  onClick={() => onChange({ ...slide, bullets: (slide.bullets ?? []).filter((_, idx) => idx !== i) })}
                >Remove</button>
              </div>
            ))}
            <button
              className="text-[12px] mt-1 rounded bg-white/10 border border-white/15 px-2 py-1"
              onClick={() => onChange({ ...slide, bullets: [...(slide.bullets ?? []), ''] })}
            >+ Add bullet</button>
          </div>
        ) : (
          <ul className="mt-2 space-y-1.5">
            {(slide.bullets ?? []).map((b, i) => (
              <li key={i} className="flex gap-2 text-sm text-porcelain/85">
                <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-mint" />
                <span>{b}</span>
              </li>
            ))}
            {(!slide.bullets || slide.bullets.length === 0) && (
              <div className="text-sm text-porcelain/50">(none)</div>
            )}
          </ul>
        )}
      </div>

      {/* Visual */}
      <div>
        <div className="flex items-center justify-between gap-3">
          <div className="text-xs font-semibold text-porcelain/80">Visual</div>
          <button className="text-[11px] px-2 py-0.5 rounded bg-white/10 border border-white/15" onClick={() => setEditVisual((v) => !v)}>{editVisual ? 'Done' : 'Edit'}</button>
        </div>
        {editVisual ? (
          <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2">
            <input
              placeholder="src"
              value={slide.visual?.src ?? ''}
              onChange={(e) => onChange({ ...slide, visual: { ...(slide.visual as any), src: e.target.value } as any })}
              className="rounded-md bg-white/10 border border-white/20 p-2 text-sm"
            />
            <input
              placeholder="alt"
              value={slide.visual?.alt ?? ''}
              onChange={(e) => onChange({ ...slide, visual: { ...(slide.visual as any), alt: e.target.value } as any })}
              className="rounded-md bg-white/10 border border-white/20 p-2 text-sm"
            />
          </div>
        ) : slide.visual ? (
          <div className="mt-2 text-sm text-porcelain/80">{slide.visual.alt}</div>
        ) : (
          <div className="mt-2 text-sm text-porcelain/50">(empty)</div>
        )}
      </div>

      {/* Charts */}
      <div>
        <div className="flex items-center justify-between gap-3">
          <div className="text-xs font-semibold text-porcelain/80">Charts</div>
          <button className="text-[11px] px-2 py-0.5 rounded bg-white/10 border border-white/15" onClick={() => setEditCharts((v) => !v)}>{editCharts ? 'Done' : 'Edit'}</button>
        </div>
        {editCharts ? (
          <textarea
            value={JSON.stringify(slide.charts ?? {}, null, 2)}
            onChange={(e) => {
              try {
                const obj = JSON.parse(e.target.value)
                onChange({ ...slide, charts: obj })
              } catch {
                // ignore until valid
              }
            }}
            rows={8}
            className="mt-2 w-full rounded-md bg-white/10 border border-white/20 p-2 font-mono text-[12px]"
          />
        ) : (
          <div className="mt-2 text-sm text-porcelain/60">{slide.charts ? 'Configured' : '(none)'}</div>
        )}
      </div>
    </div>
  )
}