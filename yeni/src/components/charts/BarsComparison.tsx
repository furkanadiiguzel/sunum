import { memo } from 'react'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { ChartTheme } from './ChartTheme'

type Datum = { category: string; Before: number; After: number }
type Props = {
  data: Datum[]
  caption?: string
}

export const BarsComparison = memo(function BarsComparison({ data, caption }: Props) {
  return (
    <figure aria-label="Before vs After by KPI" className="card-surface p-3">
      <figcaption className="mb-1.5 text-xs text-porcelain/80">{caption ?? 'Clear uplift across response, readiness, resolution, and revenue.'}</figcaption>
      <ResponsiveContainer width="100%" height={160}>
        <BarChart data={data} barCategoryGap={10} margin={{ top: 2, right: 6, left: 6, bottom: 0 }}>
          <CartesianGrid stroke={ChartTheme.colors.grid} vertical={false} />
          <XAxis dataKey="category" stroke={ChartTheme.axis.stroke} tick={{ fill: ChartTheme.axis.tick, fontSize: ChartTheme.axis.fontSize }} />
          <YAxis stroke={ChartTheme.axis.stroke} tick={{ fill: ChartTheme.axis.tick, fontSize: ChartTheme.axis.fontSize }} />
          <Tooltip contentStyle={{ background: 'rgba(20,24,36,0.9)', border: '1px solid rgba(255,255,255,0.10)', borderRadius: 12 }} />
          <Legend />
          <Bar dataKey="Before" fill={ChartTheme.colors.primary} radius={ChartTheme.barRadius} />
          <Bar dataKey="After" fill={ChartTheme.colors.accent} radius={ChartTheme.barRadius} />
        </BarChart>
      </ResponsiveContainer>
    </figure>
  )
})

