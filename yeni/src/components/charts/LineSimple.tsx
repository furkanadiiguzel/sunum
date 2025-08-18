import { memo } from 'react'
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid, Legend } from 'recharts'
import { ChartTheme } from './ChartTheme'

type Datum = { label: string; value: number }
type Props = { data: Datum[]; caption?: string; yDomain?: [number, number]; unit?: string; height?: number }

export const LineSimple = memo(function LineSimple({ data, caption, yDomain, unit, height }: Props) {
  return (
    <figure aria-label="Line chart" className="card-surface p-4">
      <figcaption className="mb-2 text-sm text-porcelain/80">{caption ?? 'Trend over time'}</figcaption>
      <div className="w-full" style={{ height: height ?? 160 }}>
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 10, right: 8, left: 8, bottom: 0 }}>
            <CartesianGrid stroke={ChartTheme.colors.grid} />
            <XAxis dataKey="label" stroke={ChartTheme.axis.stroke} tick={{ fill: ChartTheme.axis.tick, fontSize: ChartTheme.axis.fontSize }} />
            <YAxis stroke={ChartTheme.axis.stroke} domain={yDomain ?? [0, 'auto']} tick={{ fill: ChartTheme.axis.tick, fontSize: ChartTheme.axis.fontSize }} unit={unit} />
            <Tooltip contentStyle={{ background: 'rgba(20,24,36,0.9)', border: '1px solid rgba(255,255,255,0.10)', borderRadius: 12 }} />
            <Legend />
            <Line type="monotone" dataKey="value" stroke={ChartTheme.colors.primary} strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </figure>
  )
})

