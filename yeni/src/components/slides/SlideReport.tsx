import { memo } from 'react'
import { HeatmapGrid } from '../charts/HeatmapGrid'
import { BarSimple } from '../charts/BarSimple'
import { LineTwoSeries } from '../charts/LineTwoSeries'
import { ChartContainer } from '../charts/ChartContainer'

type Props = {
  data: {
    advanceDaysHeatmap: number[][]
    shareByRegion: { label: string; value: number }[]
    occupancyVsCancels: { label: string; a: number; b: number }[]
  }
  locale?: 'tr' | 'en'
}

export const SlideReport = memo(function SlideReport({ data, locale = 'tr' }: Props) {
  return (
    <ChartContainer>
      <div className="grid grid-cols-1 gap-3">
        <HeatmapGrid
          values={data.advanceDaysHeatmap}
          caption={
            locale === 'tr' ? 'Misafirler kaç gün önceden rezervasyon yapıyor' : 'How many days in advance guests book'
          }
        />
        <BarSimple
          data={data.shareByRegion.map((d) => ({
            label: d.label,
            value: d.value,
          }))}
          caption={
            locale === 'tr' ? 'Ülke/bölgeye göre geceleme payı' : 'Share of nights by country/region'
          }
          height={110}
        />
        <LineTwoSeries
          data={data.occupancyVsCancels}
          caption={
            locale === 'tr' ? 'Aylara göre doluluk ve iptaller' : 'Occupancy & cancellations by month'
          }
          labels={locale === 'tr' ? { a: 'Doluluk %', b: 'İptaller %' } : { a: 'Occupancy %', b: 'Cancellations %' }}
          yDomain={[0, 100]}
          unit=" %"
          height={130}
        />
      </div>
    </ChartContainer>
  )
})

