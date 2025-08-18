import { memo } from 'react'
import { BarsComparison } from '../charts/BarsComparison'

type Props = {
  data: {
    responseBeforeMin: number
    responseAfterMin: number
    conversionUpliftPct: number
  }
  locale?: 'sq' | 'en'
}

export const SlideReservations = memo(function SlideReservations({ data, locale = 'sq' }: Props) {
  const barData = [
    {
      category:
        locale === 'sq' ? 'Koha e përgjigjes së parë (min)' : 'First response time (min)',
      Before: data.responseBeforeMin,
      After: data.responseAfterMin,
    },
  ]
  return (
    <div className="grid grid-cols-1 gap-3">
      <BarsComparison
        data={barData}
        caption={
          locale === 'sq'
            ? 'Para vs. pas: koha e përgjigjes së parë (minuta)'
            : 'Before vs. after: first response time (minutes)'
        }
        beforeLabel={locale === 'sq' ? 'Para' : 'Before'}
        afterLabel={locale === 'sq' ? 'Pas' : 'After'}
      />
      <div className="card-surface p-5 flex flex-col items-start justify-center gap-1.5">
        <div className="text-xs text-porcelain/70">
          {locale === 'sq' ? 'Më shumë kërkesa që kthehen në rezervime' : 'More inquiries turning into bookings'}
        </div>
        <div className="text-3xl font-semibold text-mint">+{data.conversionUpliftPct}%</div>
        <div className="text-[11px] text-porcelain/60">
          {locale === 'sq' ? 'Shndërrimi në rezervim' : 'Conversion to booking'}
        </div>
      </div>
    </div>
  )
})

