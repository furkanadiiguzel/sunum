type Props = {
  index: number
  total: number
  titles: string[]
  onGoTo: (i: number) => void
}

export function ProgressDots({ index, total, titles, onGoTo }: Props) {
  return (
    <nav aria-label="Slide navigation" className="absolute right-4 top-1/2 z-20 -translate-y-1/2">
      <ol className="flex flex-col gap-3">
        {Array.from({ length: total }).map((_, i) => {
          const active = i === index
          return (
            <li key={i}>
              <button
                aria-current={active ? 'step' : undefined}
                aria-label={titles[i]}
                title={titles[i]}
                onClick={() => onGoTo(i)}
                className={`group relative block h-3 w-3 rounded-full border transition-colors focus-ring ${
                  active ? 'border-mint bg-mint/80 animate-pulseRing' : 'border-porcelain/30 bg-porcelain/20 hover:bg-porcelain/40'
                }`}
              >
                <span className="pointer-events-none absolute -left-2 -top-2 hidden rounded bg-night/80 px-2 py-1 text-xs text-porcelain shadow-goldGlow ring-1 ring-white/10 group-hover:block">
                  {titles[i]}
                </span>
              </button>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

