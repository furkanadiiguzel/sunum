import { ChatBubbles } from './illustrations/ChatBubbles'
import { Timeline } from './illustrations/Timeline'
import { Toasts } from './illustrations/Toasts'
import { SlideMetrics } from './slides/SlideMetrics'
import type { Slide } from '../content/slides'

type Props = { slide: Slide }

export function SlideContentRouter({ slide }: Props) {
  if (slide.id === 'first-contact') return <ChatBubbles />
  if (slide.id === 'operations') return <Timeline />
  if (slide.id === 'team') return <Toasts />
  if (slide.id === 'metrics' && slide.charts) return <SlideMetrics data={slide.charts as any} />
  return null
}

