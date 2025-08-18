import { BarsComparison } from '../charts/BarsComparison'
import { DonutProgress } from '../charts/DonutProgress'
import { Sparkline } from '../charts/Sparkline'

type Props = {
  data: {
    kpis: { label: string; before: number; after: number }[]
    donut: { onTime: number; late: number }
    satisfaction7d: number[]
  }
}

export function SlideMetrics({ data }: Props) {
  const barData = [
    { category: 'Response', Before: data.kpis[0].before, After: data.kpis[0].after },
    { category: 'Readiness', Before: data.kpis[1].before, After: data.kpis[1].after },
    { category: 'Resolution', Before: data.kpis[2].before, After: data.kpis[2].after },
    { category: 'Revenue', Before: data.kpis[3].before, After: data.kpis[3].after },
  ]
  return (
    <div className="grid grid-cols-1 gap-3">
      <BarsComparison data={barData} caption="Clear improvements across key service KPIs" />
      <DonutProgress value={data.donut.onTime} remainder={data.donut.late} caption="On-time readiness" />
      <Sparkline values={data.satisfaction7d} caption="Satisfaction trend (7 days)" yDomain={[0, 100]} />
    </div>
  )
}

