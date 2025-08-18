import CountUp from 'react-countup'

type Props = {
  label: string
  value: number
  suffix?: string
  trend?: string
}

export function MetricKPI({ label, value, suffix = '', trend }: Props) {
  return (
    <div className="card-surface p-4">
      <div className="text-xs text-porcelain/70">{label}</div>
      <div className="mt-1 font-mono text-3xl font-semibold">
        <CountUp end={value} duration={1.2} decimals={suffix.includes('%') ? 0 : 2} />{suffix}
      </div>
      {trend ? <div className="mt-1 text-xs text-green">{trend}</div> : null}
    </div>
  )
}

