import { memo } from 'react'
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import { ChartTheme } from './ChartTheme'

type Props = { value: number; remainder: number }

export const DonutProgress = memo(function DonutProgress({ value, remainder }: Props) {
  const data = [
    { name: 'On Time', value },
    { name: 'Late', value: remainder },
  ]
  return (
    <figure aria-label="On-Time Readiness" className="card-surface p-4 flex flex-col items-center justify-center">
      <figcaption className="mb-2 text-sm text-porcelain/80">On-time room readiness</figcaption>
      <div className="w-full" style={{ height: 220 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie data={data} innerRadius={60} outerRadius={90} paddingAngle={2} dataKey="value">
              <Cell fill={ChartTheme.colors.accent} />
              <Cell fill={ChartTheme.colors.grid} />
            </Pie>
            <Tooltip contentStyle={{ background: 'rgba(20,24,36,0.9)', border: '1px solid rgba(255,255,255,0.10)', borderRadius: 12 }} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="-mt-28 text-center">
        <div className="text-3xl font-semibold">{value}%</div>
        <div className="text-xs text-porcelain/70">On Time</div>
      </div>
    </figure>
  )
})

