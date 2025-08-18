import { memo } from 'react'
import { PieLegend } from '../charts/PieLegend'
import { BarSimple } from '../charts/BarSimple'
import { ChartContainer } from '../charts/ChartContainer'

type Props = {
  data: {
    topAddons: { name: string; value: number }[]
    revPerRoomByMonth: { label: string; value: number }[]
  }
}

export const SlideUpsell = memo(function SlideUpsell({ data }: Props) {
  return (
    <ChartContainer>
      <div className="grid grid-cols-1 gap-3">
        <PieLegend data={data.topAddons} caption="Shtesat më të zgjedhura" height={130} />
        <BarSimple data={data.revPerRoomByMonth} caption="Të ardhura shtesë për dhomë të zënë (€) sipas muajit" unit=" €" height={130} />
      </div>
    </ChartContainer>
  )
})

