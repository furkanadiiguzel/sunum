import { BarsComparison } from '../charts/BarsComparison'
import { DonutProgress } from '../charts/DonutProgress'
import { Sparkline } from '../charts/Sparkline'

type Props = {
  data: {
    kpis: { label: string; before: number; after: number }[]
    donut: { onTime: number; late: number }
    satisfaction7d: number[]
  }
  locale?: 'tr' | 'en'
}

export function SlideMetrics({ data, locale = 'tr' }: Props) {
  const barData = [
    {
      category: locale === 'tr' ? 'Yanıt' : 'Response',
      Before: data.kpis[0].before,
      After: data.kpis[0].after,
    },
    {
      category: locale === 'tr' ? 'Hazırlık' : 'Readiness',
      Before: data.kpis[1].before,
      After: data.kpis[1].after,
    },
    {
      category: locale === 'tr' ? 'Çözüm' : 'Resolution',
      Before: data.kpis[2].before,
      After: data.kpis[2].after,
    },
    {
      category: locale === 'tr' ? 'Gelir' : 'Revenue',
      Before: data.kpis[3].before,
      After: data.kpis[3].after,
    },
  ]
  return (
    <div className="grid grid-cols-1 gap-3">
      <BarsComparison
        data={barData}
        caption={
          locale === 'tr' ? 'Hizmetin temel KPI’larında net iyileşmeler' : 'Clear improvements across key service KPIs'
        }
        beforeLabel={locale === 'tr' ? 'Önce' : 'Before'}
        afterLabel={locale === 'tr' ? 'Sonra' : 'After'}
      />
      <DonutProgress
        value={data.donut.onTime}
        remainder={data.donut.late}
        caption={locale === 'tr' ? 'Zamanında hazırlık' : 'On-time readiness'}
        labelOn={locale === 'tr' ? 'Zamanında' : 'On Time'}
        labelOff={locale === 'tr' ? 'Gecikmeli' : 'Late'}
      />
      <Sparkline
        values={data.satisfaction7d}
        caption={locale === 'tr' ? 'Memnuniyet eğilimi (7 gün)' : 'Satisfaction trend (7 days)'}
        yDomain={[0, 100]}
      />
    </div>
  )
}

