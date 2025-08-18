import { memo } from 'react'
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { ChartTheme } from './ChartTheme'

type Props = { values: number[]; caption?: string; yDomain?: [number, number] }

export const Sparkline = memo(function Sparkline({ values, caption, yDomain }: Props) {
  const data = values.map((v, i) => ({ x: i + 1, y: v }))
  return (
    <figure aria-label="Tendenca 7-ditore e kënaqësisë" className="card-surface p-3">
      <figcaption className="mb-1.5 text-xs text-porcelain/80">{caption ?? 'Kënaqësia e mysafirëve është në rritje gjatë javës së fundit'}</figcaption>
      <div className="w-full" style={{ height: 110 }}>
        <ResponsiveContainer>
          <AreaChart data={data} margin={{ top: 10, right: 8, left: 8, bottom: 0 }}>
            <defs>
              <linearGradient id="spark" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={ChartTheme.colors.primary} stopOpacity={0.6} />
                <stop offset="100%" stopColor={ChartTheme.colors.primary} stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <XAxis dataKey="x" hide />
            <YAxis hide domain={yDomain ?? [0, 100]} />
            <Tooltip contentStyle={{ background: 'rgba(20,24,36,0.9)', border: '1px solid rgba(255,255,255,0.10)', borderRadius: 12 }} />
            <Area type="monotone" dataKey="y" stroke={ChartTheme.colors.primary} fill="url(#spark)" strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </figure>
  )
})

