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
  locale?: 'tr' | 'en'
}

export const SlideReputation = memo(function SlideReputation({ data, locale = 'tr' }: Props) {
  const bars = [
    {
      category:
        locale === 'tr' ? '24 saatte yanıtlanan incelemeler (%)' : 'Reviews answered <24h (%)',
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
            locale === 'tr'
              ? 'Öncesi/Sonrası: 24 saat içinde yanıt oranı'
              : 'Before/After: 24h review response rate'
          }
          beforeLabel={locale === 'tr' ? 'Önce' : 'Before'}
          afterLabel={locale === 'tr' ? 'Sonra' : 'After'}
        />
        <LineSimple
          data={data.starByQuarter}
          caption={
            locale === 'tr'
              ? 'Çeyreğe göre ortalama yıldız puanı'
              : 'Average star rating by quarter'
          }
          seriesName={locale === 'tr' ? 'Puan' : 'Rating'}
          yDomain={[0, 5]}
          height={130}
        />
      </div>
    </ChartContainer>
  )
})

