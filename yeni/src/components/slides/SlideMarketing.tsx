import { memo } from 'react'
import { LineTwoSeries } from '../charts/LineTwoSeries'
import { BarsComparison } from '../charts/BarsComparison'
import { ChartContainer } from '../charts/ChartContainer'

type Props = {
  data: {
    funnel: { label: string; a: number; b: number }[]
    bookingsByCampaign: { category: string; Before: number; After: number }[]
  }
}

export const SlideMarketing = memo(function SlideMarketing({ data }: Props) {
  return (
    <ChartContainer>
      <div className="grid grid-cols-1 gap-3">
        <LineTwoSeries
          data={data.funnel}
          caption="Gyp mujor: vizita → kërkesa → rezervime → shtesa"
          labels={{ a: 'Vizita/Kërkesa', b: 'Rezervime/Shtesa' }}
          height={140}
        />
        <BarsComparison data={data.bookingsByCampaign} caption="Rezervime të fituara nga fushatat (muaj pas muaji)" />
      </div>
    </ChartContainer>
  )
})

