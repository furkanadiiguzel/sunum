import { memo } from 'react'
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip, Legend } from 'recharts'
import { ChartTheme } from './ChartTheme'

type Datum = { name: string; value: number }
type Props = { data: Datum[]; caption?: string; height?: number }

const COLORS = [ChartTheme.colors.accent, ChartTheme.colors.primary, '#7DD3FC', '#FBAE17', '#A78BFA']

export const PieLegend = memo(function PieLegend({ data, caption, height }: Props) {
  return (
    <figure aria-label="Pie breakdown" className="card-surface p-4">
      <figcaption className="mb-2 text-sm text-porcelain/80">{caption ?? 'Distribution'}</figcaption>
      <div className="w-full" style={{ height: height ?? 160 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie data={data} innerRadius={45} outerRadius={70} paddingAngle={2} dataKey="value" nameKey="name">
              {data.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip contentStyle={{ background: 'rgba(20,24,36,0.9)', border: '1px solid rgba(255,255,255,0.10)', borderRadius: 12 }} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </figure>
  )
})

