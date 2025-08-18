export function Timeline() {
  const steps = ['Check-in', 'Clean', 'Inspect', 'Ready']
  return (
    <div className="card-surface p-4">
      <div className="flex items-center gap-3">
        {steps.map((s, i) => (
          <div key={s} className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-mint" />
            <div className="text-xs text-porcelain/80">{s}</div>
            {i < steps.length - 1 ? <div className="h-px w-16 bg-white/20" /> : null}
          </div>
        ))}
      </div>
    </div>
  )
}

