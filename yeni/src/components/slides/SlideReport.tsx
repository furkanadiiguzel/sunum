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
        <HeatmapGrid values={data.advanceDaysHeatmap} caption="Sa ditë përpara rezervojnë mysafirët" />
        <BarSimple data={data.shareByRegion} caption="Pjesa e netëve sipas vendit/rajonit" height={110} />
        <LineTwoSeries
          data={data.occupancyVsCancels}
          caption="Shfrytëzimi & anulimet sipas muajit"
          labels={{ a: 'Shfrytëzim %', b: 'Anulime %' }}
          yDomain={[0, 100]}
          unit=" %"
          height={130}
        />
      </div>
    </ChartContainer>
  )
})

