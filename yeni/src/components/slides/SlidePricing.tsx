import { memo } from 'react'
import { Check } from 'lucide-react'

type Plan = {
  name: string
  price: string
  period?: string
  features: string[]
  cta?: string
}

type Props = {
  data: {
    plans: Plan[]
  }
}

export const SlidePricing = memo(function SlidePricing({ data }: Props) {
  const plans = data.plans
  return (
    <div className="grid grid-cols-1 gap-3">
      {plans.map((p, i) => (
        <div key={i} className="card-surface p-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="text-sm font-semibold text-porcelain/95">{p.name}</div>
              <div className="mt-1 text-xs text-porcelain/70">{p.price}{p.period ? ` / ${p.period}` : ''}</div>
            </div>
            {p.cta ? (
              <button className="rounded-md bg-mint/20 border border-mint/30 px-3 py-1.5 text-xs text-porcelain hover:bg-mint/25 focus-ring">
                {p.cta}
              </button>
            ) : null}
          </div>
          <ul className="mt-3 space-y-1.5">
            {p.features.map((f, idx) => (
              <li key={idx} className="flex items-start gap-2 text-[13px] text-porcelain/90">
                <Check className="mt-0.5 h-3.5 w-3.5 text-mint" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
})

