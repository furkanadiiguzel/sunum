import { ChatBubbles } from './illustrations/ChatBubbles'
import { Timeline } from './illustrations/Timeline'
import { Toasts } from './illustrations/Toasts'
import { SlideMetrics } from './slides/SlideMetrics'
import { SlideReservations } from './slides/SlideReservations'
import { SlideOperationsKPI } from './slides/SlideOperationsKPI'
import { SlideUpsell } from './slides/SlideUpsell'
import { SlideReputation } from './slides/SlideReputation'
import { SlideReport } from './slides/SlideReport'
import { SlideMarketing } from './slides/SlideMarketing'
import { PhoneConversation } from './illustrations/PhoneConversation'
import { SlideClosingCards } from './slides/SlideClosingCards'
import { SlidePricing } from './slides/SlidePricing'
import { SlideServicesCards } from './slides/SlideServicesCards'
import { SlideExamples } from './slides/SlideExamples'
import type { Slide } from '../content/slides'

type Props = { slide: Slide; locale?: 'tr' | 'en' }

export function SlideContentRouter({ slide, locale = 'tr' }: Props) {
  if (slide.id === 'first-contact') return <ChatBubbles />
  if (slide.id === 'reservations')
    return (
      <SlideReservations
        data={(slide.charts as any) || { responseBeforeMin: 12, responseAfterMin: 3, conversionUpliftPct: 18 }}
        locale={locale}
      />
    )
  if (slide.id === 'operations') return <Timeline />
  if (slide.id === 'operations-kpi') return (
    <SlideOperationsKPI
      data={
        (slide.charts as any) || {
          roomReadyMinutesWeekly: [
            { label: 'W1', value: 46 },
            { label: 'W2', value: 44 },
            { label: 'W3', value: 41 },
            { label: 'W4', value: 38 },
          ],
          receptionProcessing: { before: 6.5, after: 4.2 },
        }
      }
      locale={locale}
    />
  )
  if (slide.id === 'upsell') return (
    <SlideUpsell
      data={
        (slide.charts as any) || {
          topAddons: [
            { name: 'Late check-out', value: 32 },
            { name: 'Airport transfer', value: 28 },
            { name: 'Breakfast', value: 24 },
            { name: 'Upgrade', value: 16 },
          ],
          revPerRoomByMonth: [
            { label: 'Jan', value: 4.2 },
            { label: 'Feb', value: 5.1 },
            { label: 'Mar', value: 6.0 },
            { label: 'Apr', value: 6.8 },
          ],
        }
      }
      locale={locale}
    />
  )
  if (slide.id === 'reputation')
    return (
      <SlideReputation
        data={
          (slide.charts as any) || {
            answeredWithin24Before: 54,
            answeredWithin24After: 86,
            starByQuarter: [
              { label: 'Q1', value: 4.1 },
              { label: 'Q2', value: 4.2 },
              { label: 'Q3', value: 4.4 },
              { label: 'Q4', value: 4.5 },
            ],
          }
        }
        locale={locale}
      />
    )
  if (slide.id === 'report')
    return (
      <SlideReport
        data={
          (slide.charts as any) || {
            monthlyRevenue: [
              { label: 'Jan', value: 12000 },
              { label: 'Feb', value: 13000 },
              { label: 'Mar', value: 14000 },
              { label: 'Apr', value: 15000 },
            ],
            occupancyRate: { before: 75, after: 85 },
          }
        }
        locale={locale}
      />
    )
  if (slide.id === 'marketing')
    return (
      <SlideMarketing
        data={
          (slide.charts as any) || {
            funnel: [
              { label: 'Jan', a: 1800, b: 140 },
              { label: 'Feb', a: 1900, b: 160 },
              { label: 'Mar', a: 2100, b: 190 },
              { label: 'Apr', a: 2300, b: 220 },
            ],
            bookingsByCampaign: [
              { category: 'Website perk', Before: 18, After: 31 },
              { category: 'Weak-day fill', Before: 12, After: 22 },
              { category: 'Past guests', Before: 9, After: 17 },
            ],
          }
        }
        locale={locale}
      />
    )
  if (slide.id === 'voice') return <PhoneConversation locale={locale} />
  if (slide.id === 'closing')
    return (
      <SlideClosingCards
        items={slide.bullets as string[]}
      />
    )
  if (slide.id === 'pricing')
    return (
      <SlidePricing
        data={
          (slide.charts as any) || {
            plans: [
              {
                name: 'Starter',
                price: '$99',
                period: 'mo',
                features: ['Core features', 'Email support'],
              },
              {
                name: 'Growth',
                price: '$199',
                period: 'mo',
                features: ['Everything in Starter', 'Advanced automations'],
                cta: 'Contact sales',
              },
            ],
          }
        }
      />
    )
  if (slide.id === 'team') return <Toasts />
  if (slide.id === 'metrics' && slide.charts) return <SlideMetrics data={slide.charts as any} locale={locale} />
  if (slide.id === 'services-overview') return <SlideServicesCards items={slide.bullets ?? []} />
  if (slide.id === 'solutions-examples') return <SlideExamples items={slide.bullets ?? []} />
  return null
}

