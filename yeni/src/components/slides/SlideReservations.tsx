import { memo } from 'react'
import { BarsComparison } from '../charts/BarsComparison'

type Props = {
  data: {
    responseBeforeMin: number
    responseAfterMin: number
    conversionUpliftPct: number
  }
}

export const SlideReservations = memo(function SlideReservations({ data }: Props) {
  const barData = [
    { category: 'First response time (min)', Before: data.responseBeforeMin, After: data.responseAfterMin },
  ]
  return (
    <div className="grid grid-cols-1 gap-3">
      <BarsComparison data={barData} caption="Before vs. after: first response time (minutes)" />
      <div className="card-surface p-5 flex flex-col items-start justify-center gap-1.5">
        <div className="text-xs text-porcelain/70">More inquiries turning into bookings</div>
        <div className="text-3xl font-semibold text-mint">+{data.conversionUpliftPct}%</div>
        <div className="text-[11px] text-porcelain/60">Conversion to booking</div>
      </div>
    </div>
  )
})

