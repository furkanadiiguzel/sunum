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
          caption="Monthly funnel: visits → inquiries → bookings → add-ons"
          labels={{ a: 'Visits/Inquiries', b: 'Bookings/Add-ons' }}
          height={140}
        />
        <BarsComparison data={data.bookingsByCampaign} caption="Bookings gained by campaign (MoM)" />
      </div>
    </ChartContainer>
  )
})

