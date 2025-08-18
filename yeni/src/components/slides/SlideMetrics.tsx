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
    { category: 'Përgjigje', Before: data.kpis[0].before, After: data.kpis[0].after },
    { category: 'Gatishmëri', Before: data.kpis[1].before, After: data.kpis[1].after },
    { category: 'Zgjidhje', Before: data.kpis[2].before, After: data.kpis[2].after },
    { category: 'Të ardhura', Before: data.kpis[3].before, After: data.kpis[3].after },
  ]
  return (
    <div className="grid grid-cols-1 gap-3">
      <BarsComparison data={barData} caption="Përmirësime të qarta në KPI-t kryesore të shërbimit" />
      <DonutProgress value={data.donut.onTime} remainder={data.donut.late} caption="Gatishmëri në kohë" />
      <Sparkline values={data.satisfaction7d} caption="Tendenca e kënaqësisë (7 ditë)" yDomain={[0, 100]} />
    </div>
  )
}

