import { memo } from 'react'
import { LineSimple } from '../charts/LineSimple'
import { BarsComparison } from '../charts/BarsComparison'
import { ChartContainer } from '../charts/ChartContainer'

type Props = {
  data: {
    roomReadyMinutesWeekly: { label: string; value: number }[]
    receptionProcessing: { before: number; after: number }
  }
  locale?: 'tr' | 'en'
}

export const SlideOperationsKPI = memo(function SlideOperationsKPI({ data, locale = 'tr' }: Props) {
  const barData = [
    {
      category: locale === 'tr' ? 'Resepsiyon işlemi (dk)' : 'Reception processing (min)',
      Before: data.receptionProcessing.before,
      After: data.receptionProcessing.after,
    },
  ]
  return (
    <ChartContainer>
      <div className="grid grid-cols-1 gap-3">
        <LineSimple
          data={data.roomReadyMinutesWeekly}
          caption={
            locale === 'tr'
              ? 'Haftalık oda hazır olma süresi (dakika)'
              : 'Average room-ready time (minutes) per week'
          }
          yDomain={[0, 'auto'] as any}
          unit=" min"
          height={130}
        />
        <BarsComparison
          data={barData}
          caption={
            locale === 'tr'
              ? 'Gelişe göre resepsiyon işlemi (önce vs sonra)'
              : 'Reception processing per arrival (before vs after)'
          }
          beforeLabel={locale === 'tr' ? 'Önce' : 'Before'}
          afterLabel={locale === 'tr' ? 'Sonra' : 'After'}
        />
      </div>
    </ChartContainer>
  )
})

