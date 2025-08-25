import { memo } from 'react'
import { BarsComparison } from '../charts/BarsComparison'

type Props = {
  data: {
    responseBeforeMin: number
    responseAfterMin: number
    conversionUpliftPct: number
  }
  locale?: 'tr' | 'en'
}

export const SlideReservations = memo(function SlideReservations({ data, locale = 'tr' }: Props) {
  const barData = [
    {
      category:
        locale === 'tr' ? 'İlk yanıt süresi (dk)' : 'First response time (min)',
      Before: data.responseBeforeMin,
      After: data.responseAfterMin,
    },
  ]
  return (
    <div className="grid grid-cols-1 gap-3">
      <BarsComparison
        data={barData}
        caption={
          locale === 'tr'
            ? 'Önce vs sonra: ilk yanıt süresi (dakika)'
            : 'Before vs. after: first response time (minutes)'
        }
        beforeLabel={locale === 'tr' ? 'Önce' : 'Before'}
        afterLabel={locale === 'tr' ? 'Sonra' : 'After'}
      />
      <div className="card-surface p-5 flex flex-col items-start justify-center gap-1.5">
        <div className="text-xs text-porcelain/70">
          {locale === 'tr' ? 'Daha fazla talep rezervasyona dönüyor' : 'More inquiries turning into bookings'}
        </div>
        <div className="text-3xl font-semibold text-mint">+{data.conversionUpliftPct}%</div>
        <div className="text-[11px] text-porcelain/60">
          {locale === 'tr' ? 'Rezervasyona dönüşüm' : 'Conversion to booking'}
        </div>
      </div>
    </div>
  )
})

