import { memo } from 'react'
import { LineSimple } from '../charts/LineSimple'
import { BarsComparison } from '../charts/BarsComparison'
import { ChartContainer } from '../charts/ChartContainer'

type Props = {
  data: {
    roomReadyMinutesWeekly: { label: string; value: number }[]
    receptionProcessing: { before: number; after: number }
  }
  locale?: 'sq' | 'en'
}

export const SlideOperationsKPI = memo(function SlideOperationsKPI({ data, locale = 'sq' }: Props) {
  const barData = [
    {
      category: locale === 'sq' ? 'Përpunimi në recepsion (min)' : 'Reception processing (min)',
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
            locale === 'sq'
              ? 'Koha mesatare për gatishmërinë e dhomës (minuta) në javë'
              : 'Average room-ready time (minutes) per week'
          }
          yDomain={[0, 'auto'] as any}
          unit=" min"
          height={130}
        />
        <BarsComparison
          data={barData}
          caption={
            locale === 'sq'
              ? 'Përpunimi i recepsionit për ardhje (para vs pas)'
              : 'Reception processing per arrival (before vs after)'
          }
          beforeLabel={locale === 'sq' ? 'Para' : 'Before'}
          afterLabel={locale === 'sq' ? 'Pas' : 'After'}
        />
      </div>
    </ChartContainer>
  )
})

