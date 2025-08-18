type Props = {
  onPrev: () => void
  onNext: () => void
}

export function Controls({ onPrev, onNext }: Props) {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-6 z-20 flex items-center justify-between px-6">
      <button
        onClick={onPrev}
        className="pointer-events-auto card-surface gold-edge hover:translate-y-[-1px] transition-transform px-4 py-2 text-sm"
      >
        Prev
      </button>
      <button
        onClick={onNext}
        className="pointer-events-auto card-surface gold-edge hover:translate-y-[-1px] transition-transform px-4 py-2 text-sm"
      >
        Next
      </button>
    </div>
  )
}

