import { memo } from 'react'

type Props = { values: number[][]; caption?: string }

function valueToColor(v: number): string {
  const clamped = Math.max(0, Math.min(100, v))
  const alpha = 0.15 + (clamped / 100) * 0.65
  return `rgba(16, 185, 129, ${alpha})`
}

export const HeatmapGrid = memo(function HeatmapGrid({ values, caption }: Props) {
  return (
    <figure aria-label="Heatmap" className="card-surface p-4">
      <figcaption className="mb-2 text-sm text-porcelain/80">{caption ?? 'Distribution heatmap'}</figcaption>
      <div className="grid grid-cols-10 gap-1">
        {values.flatMap((row, ri) =>
          row.map((v, ci) => (
            <div
              key={`${ri}-${ci}`}
              className="h-5 w-5 rounded"
              style={{ backgroundColor: valueToColor(v) }}
              title={`r${ri + 1} c${ci + 1}: ${v}`}
            />
          )),
        )}
      </div>
    </figure>
  )
})

