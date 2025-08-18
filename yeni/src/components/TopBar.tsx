type Props = {
  index: number
  total: number
  onOpenAtlas: () => void
  locale: 'sq' | 'en'
  onToggleLocale: () => void
}

export function TopBar({ index, total, onOpenAtlas, locale, onToggleLocale }: Props) {
  return (
    <header className="pointer-events-none absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 py-4 relative">
      <div className="pointer-events-auto select-none font-display text-porcelain/90">
        <span className="inline-flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-mint shadow-[0_0_12px_rgba(16,185,129,.7)]" />
          IgnitOS
        </span>
      </div>
      <div className="pointer-events-auto absolute left-1/2 -translate-x-1/2">
        <button
          type="button"
          aria-pressed={locale === 'en'}
          onClick={onToggleLocale}
          className="relative h-8 w-28 rounded-full border border-white/15 bg-white/10 backdrop-blur px-1 flex items-center shadow-[0_2px_10px_rgba(0,0,0,0.35)]"
        >
          <span className="absolute inset-0 flex items-center justify-between text-[11px] font-medium px-3 select-none">
            <span className={locale === 'sq' ? 'text-porcelain' : 'text-porcelain/60'}>AL</span>
            <span className={locale === 'en' ? 'text-porcelain' : 'text-porcelain/60'}>EN</span>
          </span>
          <span
            className={
              'transition-transform duration-200 ease-out h-6 w-14 rounded-full bg-mint/20 border border-mint/30 shadow-[0_0_12px_rgba(34,211,238,0.35)] ' +
              (locale === 'sq' ? 'translate-x-0' : 'translate-x-[52px]')
            }
          />
        </button>
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

