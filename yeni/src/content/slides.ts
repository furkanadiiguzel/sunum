export type Visual = {
  type: 'image'
  src: string
  srcSet: string
  sizes: string
  alt: string
}

export type Slide = {
  id: string
  title: string
  lead?: string
  body?: string
  bullets?: string[]
  visual: Visual
  charts?: Record<string, unknown>
  animations?: Record<string, unknown>
}

const srcset = (url: string) => ({
  src: `${url}?auto=format&fit=crop&w=1280&q=70`,
  srcSet: `${url}?auto=format&fit=crop&w=480&q=60 480w, ${url}?auto=format&fit=crop&w=768&q=65 768w, ${url}?auto=format&fit=crop&w=1280&q=70 1280w, ${url}?auto=format&fit=crop&w=1920&q=75 1920w`,
  sizes: '(max-width: 768px) 100vw, 1200px',
})

export const slides: Slide[] = [
  {
    id: 'cover',
    title: 'IgnitOS — AI-Powered Business Solutions',
    lead:
      'IgnitOS is the operating layer that simplifies how modern businesses run. From the first touch to the final follow-up, it brings every critical step into one coherent flow—so teams spend less time chasing work and more time creating value. Powered by human-like AI that understands context and communicates naturally, IgnitOS turns routine tasks into effortless, consistent execution.',
    body:
      'This presentation shows how a single, well-orchestrated system raises service consistency, accelerates operations, and turns every interaction—sales, support, or delivery—into an opportunity to impress.',
    visual: {
      type: 'image',
      ...srcset('https://images.unsplash.com/photo-1522071820081-009f0129c71c'),
      alt: 'Modern workspace with team collaborating.',
    },
  },
  {
    id: 'intro',
    title: 'Introduction — What This Really Is (and Why It Helps)',
    body:
      "This is not a cold, rigid automation. It’s a human-like AI concierge that talks to guests in everyday language, understands tone (urgent vs. casual), and adapts to each situation. It communicates naturally in Albanian, English, Turkish, and Serbian, and when the moment calls for empathy or discretion, it escalates to your team with a tidy summary and recommended next steps. In practice, you’ll see: faster replies, smoother arrivals, clearer housekeeping plans, quicker review responses, and a monthly rhythm of reports and simple, month-by-month marketing actions.",
    visual: {
      type: 'image',
      ...srcset('https://images.unsplash.com/photo-1521737604893-d14cc237f11d'),
      alt: 'Calm system overview with connected steps.',
    },
  },
  {
    id: 'reservations',
    title: '1) Reservations & Guest Messaging',
    body:
      'Human-like replies that feel personal—late-night questions get warm, instant answers, and tricky cases reach your staff with full context.',
    bullets: [
      'Instantly answers common questions from your website, WhatsApp, Instagram, or email (parking, breakfast hours, late check-in).',
      'Sends friendly booking confirmations and pre-arrival information.',
      'Handles multiple languages clearly; passes special or sensitive cases to a person.',
      'Guests get quick, reassuring responses—even after hours.',
      'More direct (commission-free) bookings over time.',
      'Fewer interruptions for your front desk.',
    ],
    visual: {
      type: 'image',
      ...srcset('https://images.unsplash.com/photo-1529336953121-ad5a0d43d0d2'),
      alt: 'Messaging panel with guest conversation.',
    },
    charts: {
      responseBeforeMin: 12,
      responseAfterMin: 3,
      conversionUpliftPct: 18,
    },
  },
  {
    id: 'operations-kpi',
    title: '2) Check-In / Check-Out & Housekeeping Flow',
    body:
      'Guests receive polite, clear guidance; staff see short, human-readable tasks instead of cryptic codes.',
    bullets: [
      'Sends a short pre-arrival form for ID details and preferences to speed up arrival.',
      'When a room checks out, creates a cleaning task automatically and updates status to “Ready” when done.',
      'If a guest reports a problem, opens the right task (maintenance/housekeeping) and tracks it to closure.',
      'Shorter queues at reception; rooms ready on time.',
      'A clear daily plan for housekeeping and fewer “who goes where?” moments.',
      'Less back-and-forth between teams.',
    ],
    visual: {
      type: 'image',
      ...srcset('https://images.unsplash.com/photo-1521737604893-d14cc237f11d'),
      alt: 'Operations flow with tasks and readiness.',
    },
    charts: {
      roomReadyMinutesWeekly: [
        { label: 'W1', value: 46 },
        { label: 'W2', value: 44 },
        { label: 'W3', value: 41 },
        { label: 'W4', value: 38 },
      ],
      receptionProcessing: { before: 6.5, after: 4.2 },
    },
  },
  {
    id: 'upsell',
    title: '3) Guest Experience & Gentle Upselling',
    body:
      'Suggests add-ons the way a person would—relevant, polite, never pushy; if guests say “not today,” it backs off gracefully.',
    bullets: [
      'Before arrival: simple, fixed-price add-ons like upgrade, late check-out, transfer, breakfast.',
      'During stay: well-timed, friendly reminders (e.g., spa late-afternoon special).',
      'Guests feel informed and in control; one tap to accept.',
      'Front desk spends less time explaining options.',
    ],
    visual: {
      type: 'image',
      ...srcset('https://images.unsplash.com/photo-1558222217-08ef9ac3a995'),
      alt: 'Friendly upsell suggestions.',
    },
    charts: {
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
    },
  },
  {
    id: 'reputation',
    title: '4) Reputation & Review Management',
    body:
      'Drafts sincere, empathetic replies that sound like you; flags sensitive cases for a human to finalize.',
    bullets: [
      'Collects new reviews daily from Google and booking sites.',
      'Highlights negatives fast and prepares a polite draft response for your approval.',
      'If a review mentions a fixable issue, opens a task, tracks the fix, and closes the loop.',
      'Guests see timely, caring responses—scores tend to rise over time.',
      'Repeated issues become visible and get solved for good.',
      'Your team learns what guests value most.',
    ],
    visual: {
      type: 'image',
      ...srcset('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4'),
      alt: 'Review dashboard with sentiment highlights.',
    },
    charts: {
      answeredWithin24Before: 54,
      answeredWithin24After: 86,
      starByQuarter: [
        { label: 'Q1', value: 4.1 },
        { label: 'Q2', value: 4.2 },
        { label: 'Q3', value: 4.4 },
        { label: 'Q4', value: 4.5 },
      ],
    },
  },
  {
    id: 'report',
    title: '5) Monthly Reservation Report (Clear, Executive-Friendly)',
    body:
      'Explains the “why,” not just the numbers—plain-English insights your whole team can act on next month.',
    bullets: [
      'At the start of each month: where guests came from, soft days, top channels, average stay, cancellations, add-on results.',
      'Two files: Owner’s one-pager + deeper workbook for anyone who wants to dive in.',
      'Simple answers to “What actually worked?” and better staffing/pricing decisions.',
    ],
    visual: {
      type: 'image',
      ...srcset('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4'),
      alt: 'Monthly report visuals.',
    },
    charts: {
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
    },
  },
  {
    id: 'marketing',
    title: '6) Month-by-Month Marketing Plan & Campaign Rotation',
    body:
      'Turns data into a one-page, human-readable action list—clear priorities, simple messages in each language.',
    bullets: [
      'Convert the monthly report into a short plan for the coming month.',
      'Small direct-booking perk on your website (e.g., free transfer or breakfast discount).',
      'Simple campaigns to fill weaker days first; friendly messages to past guests in their language.',
      'Seasonal updates to photos and text (winter city breaks, summer nature escapes).',
    ],
    visual: {
      type: 'image',
      ...srcset('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4'),
      alt: 'Marketing plan highlights.',
    },
    charts: {
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
    },
  },
  {
    id: 'voice',
    title: '“How It Speaks” — Small Voice Sample',
    body:
      'Guest: “Landing at 23:30—can I still check in?”\nAI: “Absolutely. Reception is open, and if you prefer, I can send quick door instructions now. Safe travels!”\n\nGuest: “It’s our anniversary.”\nAI: “Congratulations! Would you like a small surprise in the room? I can arrange a mini dessert plate or flowers.”',
    visual: {
      type: 'image',
      ...srcset('https://images.unsplash.com/photo-1529336953121-ad5a0d43d0d2'),
      alt: 'Natural AI conversation samples.',
    },
  },
  {
    id: 'closing',
    title: 'Conclusion — What to Expect in the First 90 Days',
    bullets: [
      'Faster replies to guest messages → happier guests, more direct bookings.',
      'Smoother arrivals and departures → calmer reception, rooms ready on time.',
      'Steady extra revenue from simple add-ons guests like.',
      'Visible, timely review replies → stronger online reputation.',
      'A monthly rhythm of report → action plan → better results next month.',
    ],
    body:
      'All of this powered by a human-like AI concierge that communicates naturally, understands context, and knows when to involve a real person.',
    visual: {
      type: 'image',
      ...srcset('https://images.unsplash.com/photo-1519125323398-675f0ddb6308'),
      alt: 'Positive momentum over first 90 days.',
    },
  },
  {
    id: 'pricing',
    title: 'Pricing & Packages',
    body:
      'Every property is different. For a clear, line-item proposal (individual services vs. bundles), timelines, and 90-day targets, contact us at [Your Email] or WhatsApp: [Your Number].',
    bullets: [
      'Modular (à la carte): choose any service on its own (each has a clear scope and SLA).',
      'Bundled packages: discounted bundles that combine multiple services for better value.',
      'Each service is available individually or in discounted bundles. For details and pricing, contact us at [Your Email] / WhatsApp: [Your Number].',
    ],
    visual: {
      type: 'image',
      ...srcset('https://images.unsplash.com/photo-1522071820081-009f0129c71c'),
      alt: 'Simple pricing overview.',
    },
  },
]

