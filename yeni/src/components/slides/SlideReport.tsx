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
  locale?: 'sq' | 'en'
}

export const SlideReport = memo(function SlideReport({ data, locale = 'sq' }: Props) {
  return (
    <ChartContainer>
      <div className="grid grid-cols-1 gap-3">
        <HeatmapGrid
          values={data.advanceDaysHeatmap}
          caption={
            locale === 'sq' ? 'Sa ditë përpara rezervojnë mysafirët' : 'How many days in advance guests book'
          }
        />
        <BarSimple
          data={data.shareByRegion.map((d) => ({
            label: d.label,
            value: d.value,
          }))}
          caption={
            locale === 'sq' ? 'Pjesa e netëve sipas vendit/rajonit' : 'Share of nights by country/region'
          }
          height={110}
        />
        <LineTwoSeries
          data={data.occupancyVsCancels}
          caption={
            locale === 'sq' ? 'Shfrytëzimi & anulimet sipas muajit' : 'Occupancy & cancellations by month'
          }
          labels={locale === 'sq' ? { a: 'Shfrytëzim %', b: 'Anulime %' } : { a: 'Occupancy %', b: 'Cancellations %' }}
          yDomain={[0, 100]}
          unit=" %"
          height={130}
        />
      </div>
    </ChartContainer>
  )
})

