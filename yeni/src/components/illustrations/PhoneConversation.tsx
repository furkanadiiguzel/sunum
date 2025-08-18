import { memo, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Message = { id: string; from: 'guest' | 'ai'; text: string }

const MESSAGES: Message[] = [
  { id: 'm1', from: 'guest', text: 'Vijmë në 23:30—a mund të bëjmë ende check-in?' },
  {
    id: 'm2',
    from: 'ai',
    text:
      'Patjetër. Recepsioni është i hapur; nëse dëshironi, mund t’ju dërgoj tani udhëzimet për derën. Udhëtim të mbarë!',
  },
  { id: 'm3', from: 'guest', text: 'Është përvjetori ynë.' },
  {
    id: 'm4',
    from: 'ai',
    text:
      'Urime! Dëshironi një surprizë të vogël në dhomë? Mund të organizoj një pjatë me ëmbëlsira ose lule.',
  },
]

export const PhoneConversation = memo(function PhoneConversation() {
  const [visible, setVisible] = useState<string[]>([])
  const [typing, setTyping] = useState(false)

  useEffect(() => {
    let timeout = 0
    const schedule = async () => {
      for (const msg of MESSAGES) {
        if (msg.from === 'ai') {
          setTyping(true)
          await new Promise((r) => setTimeout(r, 650))
          setTyping(false)
        }
        setVisible((v) => [...v, msg.id])
        await new Promise((r) => setTimeout(r, 400))
      }
    }
    // slight initial delay for polish
    timeout = window.setTimeout(() => {
      schedule()
    }, 300)
    return () => window.clearTimeout(timeout)
  }, [])

  return (
    <div className="mx-auto w-full flex justify-center">
      <div className="relative" style={{ width: 'min(92vw, 320px)' }}>
        {/* Shimmering purple glow ring */}
        <div className="pointer-events-none absolute -inset-[4px] rounded-[2.6rem] opacity-70 blur-md"
             style={{ background: 'conic-gradient(from 0deg, rgba(108,92,231,0.35), rgba(34,211,238,0.25), rgba(108,92,231,0.35))' }} />

        {/* iPhone-like frame with gradient rim */}
        <div className="relative rounded-[2.4rem] p-[10px] shadow-[0_20px_60px_rgba(0,0,0,0.6),0_0_30px_rgba(108,92,231,0.25)] bg-gradient-to-br from-white/12 via-white/7 to-white/5 border border-white/15">
          {/* Side buttons (left) */}
          <div className="absolute -left-1 top-24 h-10 w-1.5 rounded-full bg-white/20" />
          <div className="absolute -left-1 top-40 h-6 w-1.5 rounded-full bg-white/20" />
          <div className="absolute -left-1 top-50 h-6 w-1.5 rounded-full bg-white/20" />
          {/* Power button (right) */}
          <div className="absolute -right-1 top-36 h-16 w-1.5 rounded-full bg-white/20" />

          {/* Screen */}
          <div className="relative rounded-[1.85rem] overflow-hidden bg-night ring-1 ring-white/8" style={{ height: 'min(70vh, 560px)' }}>
            {/* Notch with speaker and camera */}
            <div className="absolute left-1/2 top-0 z-20 flex -translate-x-1/2 items-center justify-center gap-2 rounded-b-[1.2rem] bg-black/85 px-6 py-2 shadow-[0_6px_12px_rgba(0,0,0,0.45)]" style={{ width: 190 }}>
              <div className="h-1.5 w-14 rounded-full bg-white/40" />
              <div className="h-2 w-2 rounded-full bg-white/60" />
            </div>

            {/* Subtle glass glare */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_40%_at_10%_-10%,rgba(255,255,255,0.06),transparent)]" />

            {/* Conversation area */}
            <div className="pt-10 px-3 pb-4 space-y-2 overflow-hidden">
              <AnimatePresence initial={false}>
                {MESSAGES.filter((m) => visible.includes(m.id)).map((m) => (
                  <motion.div
                    key={m.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className={`max-w-[80%] ${
                      m.from === 'guest' ? 'self-start' : 'self-end'
                    } flex`}
                  >
                    <div
                      className={
                        'px-3 py-2 rounded-2xl text-[13px] leading-5 shadow-[0_2px_8px_rgba(0,0,0,0.25)] ' +
                        (m.from === 'guest'
                          ? 'bg-white/10 text-porcelain rounded-tl-sm'
                          : 'bg-mint/20 text-porcelain border border-mint/30 rounded-tr-sm')
                      }
                    >
                      {m.text}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              <AnimatePresence>
                {typing ? (
                  <motion.div
                    key="typing"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.2 }}
                    className="self-end flex"
                  >
                    <div className="px-3 py-2 rounded-2xl bg-mint/15 border border-mint/25 rounded-tr-sm shadow-[0_2px_8px_rgba(0,0,0,0.25)]">
                      <span className="inline-flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-porcelain/70 animate-pulse" />
                        <span className="h-1.5 w-1.5 rounded-full bg-porcelain/70 animate-pulse [animation-delay:150ms]" />
                        <span className="h-1.5 w-1.5 rounded-full bg-porcelain/70 animate-pulse [animation-delay:300ms]" />
                      </span>
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>

              {/* Home indicator */}
              <div className="mt-3 flex justify-center">
                <div className="h-1 w-24 rounded-full bg-white/25" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

