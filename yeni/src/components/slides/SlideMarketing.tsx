import { memo } from 'react'
import { LineTwoSeries } from '../charts/LineTwoSeries'
import { BarsComparison } from '../charts/BarsComparison'
import { ChartContainer } from '../charts/ChartContainer'

type Props = {
  data: {
    funnel: { label: string; a: number; b: number }[]
    bookingsByCampaign: { category: string; Before: number; After: number }[]
  }
  locale?: 'tr' | 'en'
}

export const SlideMarketing = memo(function SlideMarketing({ data, locale = 'tr' }: Props) {
  return (
    <ChartContainer>
      <div className="grid grid-cols-1 gap-3">
        <LineTwoSeries
          data={data.funnel}
          caption={
            locale === 'tr'
              ? 'Aylık hunisi: ziyaretler → talepler → rezervasyonlar → ek satış'
              : 'Monthly funnel: visits → inquiries → bookings → add-ons'
          }
          labels={
            locale === 'tr'
              ? { a: 'Ziyaretler/Talepler', b: 'Rezervasyonlar/Ek satış' }
              : { a: 'Visits/Inquiries', b: 'Bookings/Add-ons' }
          }
          height={140}
        />
        <BarsComparison
          data={data.bookingsByCampaign}
          caption={
            locale === 'tr'
              ? 'Kampanyaya göre kazanılan rezervasyonlar (Ay/Ay)'
              : 'Bookings gained by campaign (MoM)'
          }
          beforeLabel={locale === 'tr' ? 'Önce' : 'Before'}
          afterLabel={locale === 'tr' ? 'Sonra' : 'After'}
        />
      </div>
    </ChartContainer>
  )
})

