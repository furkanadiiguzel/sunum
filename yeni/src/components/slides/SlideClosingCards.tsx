import { memo } from 'react'

type Props = { items: string[] }

export const SlideClosingCards = memo(function SlideClosingCards({ items }: Props) {
  return (
    <div className="grid grid-cols-1 gap-3">
      {items.map((text, i) => (
        <div key={i} className="card-surface p-4">
          <div className="flex items-start gap-3">
            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-mint shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
            <p className="text-sm text-porcelain/90 leading-5">{text}</p>
          </div>
        </div>
      ))}
    </div>
  )
})

