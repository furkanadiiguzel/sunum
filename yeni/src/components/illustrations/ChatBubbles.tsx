export function ChatBubbles() {
  return (
    <div className="space-y-3">
      <div className="card-surface w-[320px] p-3">
        <div className="text-sm">Hi! Is a late check-in possible?</div>
      </div>
      <div className="flex justify-end">
        <div className="card-surface w-[320px] bg-white/10 p-3">
          <div className="text-sm">Absolutely. We’ll be ready anytime—just let us know your ETA.</div>
        </div>
      </div>
      <div className="card-surface w-[320px] p-3">
        <div className="text-sm">Is breakfast included?</div>
      </div>
    </div>
  )
}

