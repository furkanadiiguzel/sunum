import { memo } from 'react'
import { BarsComparison } from '../charts/BarsComparison'
import { LineSimple } from '../charts/LineSimple'
import { ChartContainer } from '../charts/ChartContainer'

type Props = {
  data: {
    answeredWithin24Before: number
    answeredWithin24After: number
    starByQuarter: { label: string; value: number }[]
  }
}

export const SlideReputation = memo(function SlideReputation({ data }: Props) {
  const bars = [
    { category: 'Vlerësime të përgjigjura <24h (%)', Before: data.answeredWithin24Before, After: data.answeredWithin24After },
  ]
  return (
    <ChartContainer>
      <div className="grid grid-cols-1 gap-3">
        <BarsComparison data={bars} caption="Para/Pas: norma e përgjigjes brenda 24 orëve" />
        <LineSimple data={data.starByQuarter} caption="Vlerësim mesatar me yje sipas tremujorit" yDomain={[0, 5]} height={130} />
      </div>
    </ChartContainer>
  )
})

