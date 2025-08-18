type Props = {
  index: number
  total: number
  onOpenAtlas: () => void
}

export function TopBar({ index, total, onOpenAtlas }: Props) {
  return (
    <header className="pointer-events-none absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 py-4">
      <div className="pointer-events-auto select-none font-display text-porcelain/90">
        <span className="inline-flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-mint shadow-[0_0_12px_rgba(16,185,129,.7)]" />
          IgnitOS
        </span>
      </div>
      <div className="pointer-events-auto text-sm text-porcelain/70">
        {index + 1} / {total}
        <button
          className="ml-4 rounded-md px-3 py-1.5 text-porcelain/80 hover:text-porcelain/100 focus-ring"
          onClick={onOpenAtlas}
        >
          Atlas
        </button>
      </div>
    </header>
  )
}

