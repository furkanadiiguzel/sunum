import { memo } from 'react'
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { ChartTheme } from './ChartTheme'

type Datum = { label: string; value: number }
type Props = { data: Datum[]; caption?: string; unit?: string; height?: number }

export const BarSimple = memo(function BarSimple({ data, caption, unit, height }: Props) {
  return (
    <figure aria-label="Bar chart" className="card-surface p-4">
      <figcaption className="mb-2 text-sm text-porcelain/80">{caption ?? 'Values by period'}</figcaption>
      <ResponsiveContainer width="100%" height={height ?? 180}>
        <BarChart data={data} margin={{ top: 4, right: 8, left: 8, bottom: 0 }}>
          <CartesianGrid stroke={ChartTheme.colors.grid} vertical={false} />
          <XAxis dataKey="label" stroke={ChartTheme.axis.stroke} tick={{ fill: ChartTheme.axis.tick, fontSize: ChartTheme.axis.fontSize }} />
          <YAxis stroke={ChartTheme.axis.stroke} tick={{ fill: ChartTheme.axis.tick, fontSize: ChartTheme.axis.fontSize }} unit={unit} />
          <Tooltip contentStyle={{ background: 'rgba(20,24,36,0.9)', border: '1px solid rgba(255,255,255,0.10)', borderRadius: 12 }} />
          <Bar dataKey="value" fill={ChartTheme.colors.accent} radius={ChartTheme.barRadius} />
        </BarChart>
      </ResponsiveContainer>
    </figure>
  )
})

