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
    { category: 'Koha e përgjigjes së parë (min)', Before: data.responseBeforeMin, After: data.responseAfterMin },
  ]
  return (
    <div className="grid grid-cols-1 gap-3">
      <BarsComparison data={barData} caption="Para vs. pas: koha e përgjigjes së parë (minuta)" />
      <div className="card-surface p-5 flex flex-col items-start justify-center gap-1.5">
        <div className="text-xs text-porcelain/70">Më shumë kërkesa që kthehen në rezervime</div>
        <div className="text-3xl font-semibold text-mint">+{data.conversionUpliftPct}%</div>
        <div className="text-[11px] text-porcelain/60">Shndërrimi në rezervim</div>
      </div>
    </div>
  )
})

