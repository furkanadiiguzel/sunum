import { memo } from 'react'
import { LineSimple } from '../charts/LineSimple'
import { BarsComparison } from '../charts/BarsComparison'
import { ChartContainer } from '../charts/ChartContainer'

type Props = {
  data: {
    roomReadyMinutesWeekly: { label: string; value: number }[]
    receptionProcessing: { before: number; after: number }
  }
}

export const SlideOperationsKPI = memo(function SlideOperationsKPI({ data }: Props) {
  const barData = [
    { category: 'Përpunimi në recepsion (min)', Before: data.receptionProcessing.before, After: data.receptionProcessing.after },
  ]
  return (
    <ChartContainer>
      <div className="grid grid-cols-1 gap-3">
        <LineSimple
          data={data.roomReadyMinutesWeekly}
          caption="Koha mesatare për gatishmërinë e dhomës (minuta) në javë"
          yDomain={[0, 'auto'] as any}
          unit=" min"
          height={130}
        />
        <BarsComparison data={barData} caption="Përpunimi i recepsionit për ardhje (para vs pas)" />
      </div>
    </ChartContainer>
  )
})

