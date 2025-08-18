export function Toasts() {
  const items = [
    { title: 'Arrival today: 12 guests', by: 'Front Desk' },
    { title: 'Room 305 ready for check-in', by: 'Housekeeping' },
    { title: 'Maintenance ticket resolved', by: 'Maintenance' },
  ]
  return (
    <div className="space-y-2">
      {items.map((t) => (
        <div key={t.title} className="card-surface p-3 text-sm">
          <div>{t.title}</div>
          <div className="text-xs text-porcelain/60">{t.by}</div>
        </div>
      ))}
    </div>
  )
}

