import { BarsComparison } from '../charts/BarsComparison'
import { DonutProgress } from '../charts/DonutProgress'
import { Sparkline } from '../charts/Sparkline'

type Props = {
  data: {
    kpis: { label: string; before: number; after: number }[]
    donut: { onTime: number; late: number }
    satisfaction7d: number[]
  }
  locale?: 'sq' | 'en'
}

export function SlideMetrics({ data, locale = 'sq' }: Props) {
  const barData = [
    {
      category: locale === 'sq' ? 'Përgjigje' : 'Response',
      Before: data.kpis[0].before,
      After: data.kpis[0].after,
    },
    {
      category: locale === 'sq' ? 'Gatishmëri' : 'Readiness',
      Before: data.kpis[1].before,
      After: data.kpis[1].after,
    },
    {
      category: locale === 'sq' ? 'Zgjidhje' : 'Resolution',
      Before: data.kpis[2].before,
      After: data.kpis[2].after,
    },
    {
      category: locale === 'sq' ? 'Të ardhura' : 'Revenue',
      Before: data.kpis[3].before,
      After: data.kpis[3].after,
    },
  ]
  return (
    <div className="grid grid-cols-1 gap-3">
      <BarsComparison
        data={barData}
        caption={
          locale === 'sq' ? 'Përmirësime të qarta në KPI-t kryesore të shërbimit' : 'Clear improvements across key service KPIs'
        }
        beforeLabel={locale === 'sq' ? 'Para' : 'Before'}
        afterLabel={locale === 'sq' ? 'Pas' : 'After'}
      />
      <DonutProgress
        value={data.donut.onTime}
        remainder={data.donut.late}
        caption={locale === 'sq' ? 'Gatishmëri në kohë' : 'On-time readiness'}
        labelOn={locale === 'sq' ? 'Në kohë' : 'On Time'}
        labelOff={locale === 'sq' ? 'Me vonesë' : 'Late'}
      />
      <Sparkline
        values={data.satisfaction7d}
        caption={locale === 'sq' ? 'Tendenca e kënaqësisë (7 ditë)' : 'Satisfaction trend (7 days)'}
        yDomain={[0, 100]}
      />
    </div>
  )
}

