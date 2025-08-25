import { memo } from 'react'

const Dot = () => <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-mint" />

type Props = { items: string[] }

export const SlideExamples = memo(function SlideExamples({ items }: Props) {
  return (
    <div className="grid grid-cols-1 gap-3">
      {items.map((text, i) => (
        <div key={i} className="card-surface p-4">
          <div className="flex items-start gap-3">
            <Dot />
            <p className="text-sm text-porcelain/90 leading-5">{text}</p>
          </div>
          <div className="mt-3">
            <div className="h-[90px] w-full rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-xs text-porcelain/60">
              Görsel/Şema alanı
            </div>
          </div>
        </div>
      ))}
    </div>
  )
})