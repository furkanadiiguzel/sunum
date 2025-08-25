import { memo } from 'react'
import { PieLegend } from '../charts/PieLegend'
import { BarSimple } from '../charts/BarSimple'
import { ChartContainer } from '../charts/ChartContainer'

type Props = {
  data: {
    topAddons: { name: string; value: number }[]
    revPerRoomByMonth: { label: string; value: number }[]
  }
  locale?: 'tr' | 'en'
}

export const SlideUpsell = memo(function SlideUpsell({ data, locale = 'tr' }: Props) {
  return (
    <ChartContainer>
      <div className="grid grid-cols-1 gap-3">
        <PieLegend
          data={data.topAddons}
          caption={locale === 'tr' ? 'En çok seçilen ek hizmetler' : 'Top add-ons chosen'}
          height={130}
        />
        <BarSimple
          data={data.revPerRoomByMonth}
          caption={
            locale === 'tr'
              ? 'Aylara göre dolu oda başına ek gelir (€)'
              : 'Extra revenue per occupied room (€) by month'
          }
          unit=" €"
          height={130}
        />
      </div>
    </ChartContainer>
  )
})

