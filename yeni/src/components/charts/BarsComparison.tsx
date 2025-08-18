import { memo } from 'react'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { ChartTheme } from './ChartTheme'

type Datum = { category: string; Before: number; After: number }
type Props = {
  data: Datum[]
}

export const BarsComparison = memo(function BarsComparison({ data }: Props) {
  return (
    <figure aria-label="Before vs After by KPI" className="card-surface p-4">
      <figcaption className="mb-2 text-sm text-porcelain/80">Clear uplift across response, readiness, resolution, and revenue.</figcaption>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={data} barCategoryGap={24} margin={{ top: 4, right: 8, left: 8, bottom: 0 }}>
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

