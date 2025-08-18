import { memo } from 'react'
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid, Legend } from 'recharts'
import { ChartTheme } from './ChartTheme'

type Datum = { label: string; a: number; b: number }
type Props = { data: Datum[]; caption?: string; labels?: { a: string; b: string }; yDomain?: [number, number]; unit?: string; height?: number }

export const LineTwoSeries = memo(function LineTwoSeries({ data, caption, labels, yDomain, unit, height }: Props) {
  const labelA = labels?.a ?? 'Seria A'
  const labelB = labels?.b ?? 'Seria B'
  return (
    <figure aria-label="Tendencë me dy seri" className="card-surface p-4">
      <figcaption className="mb-2 text-sm text-porcelain/80">{caption ?? 'Tendenca me kalimin e kohës'}</figcaption>
      <div className="w-full" style={{ height: height ?? 160 }}>
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 10, right: 8, left: 8, bottom: 0 }}>
            <CartesianGrid stroke={ChartTheme.colors.grid} />
            <XAxis dataKey="label" stroke={ChartTheme.axis.stroke} tick={{ fill: ChartTheme.axis.tick, fontSize: ChartTheme.axis.fontSize }} />
            <YAxis stroke={ChartTheme.axis.stroke} domain={yDomain ?? [0, 'auto']} tick={{ fill: ChartTheme.axis.tick, fontSize: ChartTheme.axis.fontSize }} unit={unit} />
            <Tooltip contentStyle={{ background: 'rgba(20,24,36,0.9)', border: '1px solid rgba(255,255,255,0.10)', borderRadius: 12 }} />
            <Legend />
            <Line type="monotone" dataKey="a" name={labelA} stroke={ChartTheme.colors.primary} strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="b" name={labelB} stroke={ChartTheme.colors.accent} strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </figure>
  )
})

