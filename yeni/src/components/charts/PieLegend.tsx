import { memo } from 'react'
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import { ChartTheme } from './ChartTheme'

type Datum = { name: string; value: number }
type Props = { data: Datum[]; caption?: string; height?: number }

const COLORS = [ChartTheme.colors.accent, ChartTheme.colors.primary, '#7DD3FC', '#FBAE17', '#A78BFA']

export const PieLegend = memo(function PieLegend({ data, caption, height }: Props) {
  const total = data.reduce((sum, d) => sum + d.value, 0)
  return (
    <figure aria-label="Shpërndarje me tortë" className="card-surface p-3">
      <figcaption className="mb-1.5 text-xs text-porcelain/80">{caption ?? 'Shpërndarja'}</figcaption>
      <div className="w-full" style={{ height: height ?? 140 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie data={data} innerRadius={42} outerRadius={66} paddingAngle={2} dataKey="value" nameKey="name">
              {data.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip contentStyle={{ background: 'rgba(20,24,36,0.9)', border: '1px solid rgba(255,255,255,0.10)', borderRadius: 12 }} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1.5 text-[11px] text-porcelain/80">
        {data.map((d, i) => {
          const pct = total > 0 ? Math.round((d.value / total) * 100) : 0
          return (
            <div key={i} className="inline-flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full" style={{ background: COLORS[i % COLORS.length] }} />
              <span>{d.name} ({pct}%)</span>
            </div>
          )
        })}
      </div>
    </figure>
  )
})

