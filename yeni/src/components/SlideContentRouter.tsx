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
import type { Slide } from '../content/slides'

type Props = { slide: Slide; locale?: 'sq' | 'en' }

export function SlideContentRouter({ slide, locale = 'sq' }: Props) {
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
            advanceDaysHeatmap: [
              [4, 3, 2, 1, 0, 0, 1, 2, 3, 4],
              [5, 4, 3, 2, 1, 1, 2, 3, 4, 5],
              [6, 5, 4, 3, 2, 2, 3, 4, 5, 6],
              [8, 6, 5, 4, 3, 3, 4, 5, 6, 8],
              [10, 8, 6, 5, 4, 4, 5, 6, 8, 10],
            ],
            shareByRegion: [
              { label: 'AL', value: 35 },
              { label: 'TR', value: 22 },
              { label: 'RS', value: 18 },
              { label: 'EU', value: 25 },
            ],
            occupancyVsCancels: [
              { label: 'Jan', a: 52, b: 12 },
              { label: 'Feb', a: 57, b: 10 },
              { label: 'Mar', a: 63, b: 9 },
              { label: 'Apr', a: 68, b: 8 },
            ],
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
        items={
          locale === 'sq'
            ? [
                'Përgjigje më të shpejta ndaj mesazheve → mysafirë më të kënaqur, më shumë rezervime direkte.',
                'Mbërritje dhe largime më të rrjedhshme → recepsion më i qetë, dhomat gati me kohë.',
                'Të ardhura shtesë të qëndrueshme nga shtesat e thjeshta që pëlqejnë mysafirët.',
                'Përgjigje të dukshme dhe në kohë ndaj vlerësimeve → reputacion online më i fortë.',
                'Ritëm mujor: raport → plan veprimi → rezultate më të mira muajin tjetër.',
              ]
            : [
                'Faster replies to guest messages → happier guests, more direct bookings.',
                'Smoother arrivals and departures → calmer reception, rooms ready on time.',
                'Steady extra revenue from simple add-ons guests like.',
                'Visible, timely review replies → stronger online reputation.',
                'A monthly rhythm of report → action plan → better results next month.',
              ]
        }
      />
    )
  if (slide.id === 'pricing')
    return (
      <SlidePricing
        data={
          (slide.charts as any) ||
          (locale === 'sq'
            ? {
                plans: [
                  {
                    name: 'Starter (Modular À la carte)',
                    price: 'Për shërbim',
                    features: [
                      'Zgjidhni çdo aftësi të vetme (fushë & SLA e qartë)',
                      'E shkëlqyer për të provuar Orwen në një fushë',
                      'Pa angazhim afatgjatë',
                    ],
                    cta: 'Kërko ofertë',
                  },
                  {
                    name: 'Growth (Paketë)',
                    price: 'Kurseni 15% (paketë)',
                    features: [
                      'Rezervime + Housekeeping + Vlerësime',
                      'Automatizim & raporte ndër-funksionale',
                      'Mbështetje prioritare',
                    ],
                    cta: 'Kërko ofertë',
                  },
                  {
                    name: 'Pro (Paketa e Plotë)',
                    price: 'Kurseni 25% (paketë)',
                    features: [
                      'Të gjitha aftësitë + rotacion plani marketingu',
                      'Takime të dedikuara suksesi',
                      'KPI & trajnime të përshtatura',
                    ],
                    cta: 'Kërko ofertë',
                  },
                ],
              }
            : {
                plans: [
                  {
                    name: 'Starter (Modular À la carte)',
                    price: 'Per service',
                    features: [
                      'Pick any single capability (clear scope & SLA)',
                      'Great for trying Orwen in one area',
                      'No long-term commitment',
                    ],
                    cta: 'Request quote',
                  },
                  {
                    name: 'Growth (Bundled)',
                    price: 'Save 15% bundle',
                    features: [
                      'Reservations + Housekeeping + Reviews',
                      'Cross-feature automation & reporting',
                      'Priority support',
                    ],
                    cta: 'Request quote',
                  },
                  {
                    name: 'Pro (Full Suite)',
                    price: 'Save 25% bundle',
                    features: [
                      'All capabilities + Marketing plan rotation',
                      'Dedicated success check-ins',
                      'Tailored KPIs & training',
                    ],
                    cta: 'Request quote',
                  },
                ],
              })
        }
      />
    )
  if (slide.id === 'team') return <Toasts />
  if (slide.id === 'metrics' && slide.charts) return <SlideMetrics data={slide.charts as any} locale={locale} />
  return null
}

