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
}

export const SlideReport = memo(function SlideReport({ data }: Props) {
  return (
    <ChartContainer>
      <div className="grid grid-cols-1 gap-3">
        <HeatmapGrid values={data.advanceDaysHeatmap} caption="How many days in advance guests book" />
        <BarSimple data={data.shareByRegion} caption="Share of nights by country/region" height={110} />
        <LineTwoSeries
          data={data.occupancyVsCancels}
          caption="Occupancy & cancellations by month"
          labels={{ a: 'Occupancy %', b: 'Cancellations %' }}
          yDomain={[0, 100]}
          unit=" %"
          height={130}
        />
      </div>
    </ChartContainer>
  )
})

