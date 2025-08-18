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
  locale?: 'sq' | 'en'
}

export const SlideReputation = memo(function SlideReputation({ data, locale = 'sq' }: Props) {
  const bars = [
    {
      category:
        locale === 'sq' ? 'Vlerësime të përgjigjura <24h (%)' : 'Reviews answered <24h (%)',
      Before: data.answeredWithin24Before,
      After: data.answeredWithin24After,
    },
  ]
  return (
    <ChartContainer>
      <div className="grid grid-cols-1 gap-3">
        <BarsComparison
          data={bars}
          caption={
            locale === 'sq'
              ? 'Para/Pas: norma e përgjigjes brenda 24 orëve'
              : 'Before/After: 24h review response rate'
          }
          beforeLabel={locale === 'sq' ? 'Para' : 'Before'}
          afterLabel={locale === 'sq' ? 'Pas' : 'After'}
        />
        <LineSimple
          data={data.starByQuarter}
          caption={
            locale === 'sq'
              ? 'Vlerësim mesatar me yje sipas tremujorit'
              : 'Average star rating by quarter'
          }
          seriesName={locale === 'sq' ? 'Vlerësim' : 'Rating'}
          yDomain={[0, 5]}
          height={130}
        />
      </div>
    </ChartContainer>
  )
})

