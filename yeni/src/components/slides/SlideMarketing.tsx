import { memo } from 'react'
import { LineTwoSeries } from '../charts/LineTwoSeries'
import { BarsComparison } from '../charts/BarsComparison'
import { ChartContainer } from '../charts/ChartContainer'

type Props = {
  data: {
    funnel: { label: string; a: number; b: number }[]
    bookingsByCampaign: { category: string; Before: number; After: number }[]
  }
  locale?: 'sq' | 'en'
}

export const SlideMarketing = memo(function SlideMarketing({ data, locale = 'sq' }: Props) {
  return (
    <ChartContainer>
      <div className="grid grid-cols-1 gap-3">
        <LineTwoSeries
          data={data.funnel}
          caption={
            locale === 'sq'
              ? 'Gyp mujor: vizita → kërkesa → rezervime → shtesa'
              : 'Monthly funnel: visits → inquiries → bookings → add-ons'
          }
          labels={
            locale === 'sq'
              ? { a: 'Vizita/Kërkesa', b: 'Rezervime/Shtesa' }
              : { a: 'Visits/Inquiries', b: 'Bookings/Add-ons' }
          }
          height={140}
        />
        <BarsComparison
          data={data.bookingsByCampaign}
          caption={
            locale === 'sq'
              ? 'Rezervime të fituara nga fushatat (muaj pas muaji)'
              : 'Bookings gained by campaign (MoM)'
          }
          beforeLabel={locale === 'sq' ? 'Para' : 'Before'}
          afterLabel={locale === 'sq' ? 'Pas' : 'After'}
        />
      </div>
    </ChartContainer>
  )
})

