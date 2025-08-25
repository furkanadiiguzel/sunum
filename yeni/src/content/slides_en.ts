import type { Slide } from './slides'

const srcset = (url: string) => ({
  src: `${url}?auto=format&fit=crop&w=1280&q=70`,
  srcSet: `${url}?auto=format&fit=crop&w=480&q=60 480w, ${url}?auto=format&fit=crop&w=768&q=65 768w, ${url}?auto=format&fit=crop&w=1280&q=70 1280w, ${url}?auto=format&fit=crop&w=1920&q=75 1920w`,
  sizes: '(max-width: 768px) 100vw, 1200px',
})

export const slidesEn: Slide[] = [
  {
    id: 'cover',
    title: 'Orwen — AI-Powered Business Solutions',
    lead:
      'Orwen is the operating layer that simplifies how modern businesses run. It automates routine tasks and provides innovative solutions, allowing teams to focus on creating value. Powered by human-like AI that understands context and communicates naturally, Orwen transforms operations into seamless, efficient processes.',
    body:
      "This presentation demonstrates how Orwen's automation capabilities enhance service consistency, accelerate operations, and turn every interaction into an opportunity to impress.",
    visual: {
      type: 'image',
      ...srcset('https://images.unsplash.com/photo-1522071820081-009f0129c71c'),
      alt: 'Modern workspace with team collaborating.',
    },
  },
  {
    id: 'intro',
    title: 'What This Really Is',
    body:
      "This is not cold, rigid automation. It’s a human-like AI that speaks naturally, understands tone, and adapts to each situation. It communicates in Turkish, English, and other languages you need. When empathy or discretion is required, it hands off to your team with a tidy summary and suggested next steps.",
    visual: {
      type: 'image',
      ...srcset('https://images.unsplash.com/photo-1521737604893-d14cc237f11d'),
      alt: 'Calm system overview with connected steps.',
    },
  },
  {
    id: 'automation-what',
    title: 'What Is Automation?',
    body:
      'Automation runs repetitive tasks, notifications, approvals, and data transfers reliably on your behalf. The goal: fewer errors, more speed and consistency, and time back for your team to do creative work.',
    visual: {
      type: 'image',
      ...srcset('https://images.unsplash.com/photo-1522071820081-009f0129c71c'),
      alt: 'Modern workspace with teams collaborating.',
    },
    bullets: [
      'Automates repetitive tasks',
      'Moves data safely between systems',
      'Notifies the right person at the right time',
    ],
  },
  {
    id: 'automation-benefits',
    title: 'Benefits to Your Business',
    body:
      'Even simple automations deliver measurable value in 2–4 weeks. Fewer errors, faster responses, and visible processes increase team productivity.',
    bullets: [
      'Speed: less waiting, faster response times',
      'Consistency: standard steps done right every time',
      'Visibility: processes and bottlenecks become clear',
      'Cost: lower ops cost, team time freed up',
    ],
    visual: {
      type: 'image',
      ...srcset('https://images.unsplash.com/photo-1553877522-43269d4ea984'),
      alt: 'Efficiency and speed gains.',
    },
  },
  {
    id: 'services-overview',
    title: 'Our Services (Overview)',
    body:
      'Modular services tailored to your needs. Choose individually or as bundled packages.',
    bullets: [
      'Process Automations: CRM, ticketing, task flows',
      'Communication Automations: web/WhatsApp/Instagram bot, email/SMS',
      'Reporting & Dashboards: executive visibility, alerts',
      'Integrations: Zapier/Make, webhooks, custom API bridges',
      'Custom Solutions: RPA/LLM-powered smart flows',
    ],
    visual: {
      type: 'image',
      ...srcset('https://images.unsplash.com/photo-1498050108023-c5249f4df085'),
      alt: 'Service and module sets.',
    },
  },
  {
    id: 'solutions-examples',
    title: 'Example Automations',
    bullets: [
      'Form → CRM record → email confirmation → sales task',
      'Deal closed → generate invoice → notify Slack',
      'Support ticket → assign priority → status updates',
      'Low stock → open procurement task → alert manager',
    ],
    body:
      'Each automation creates a small, tangible win; together they make a big difference.',
    visual: {
      type: 'image',
      ...srcset('https://images.unsplash.com/photo-1518779578993-ec3579fee39f'),
      alt: 'Flow examples.',
    },
  },
  {
    id: 'how-we-work',
    title: 'How We Work',
    bullets: [
      '1) Discovery: goals and bottlenecks',
      '2) Design: simple but effective flows',
      '3) Pilot: quick 1–2 week trial',
      '4) Go Live: monitoring and fine-tuning',
      '5) Improve: monthly optimization rhythm',
    ],
    body:
      'We proceed with clear timelines, measurable targets, and lean documentation.',
    visual: {
      type: 'image',
      ...srcset('https://images.unsplash.com/photo-1524666041070-9d87656c25bb'),
      alt: 'Step-by-step progress.',
    },
  },
  {
    id: 'reservations',
    title: '1) Inquiries & Customer Messaging',
    body:
      'Human-like replies that feel personal—late-night questions get warm, instant answers, and tricky cases reach your team with full context.',
    bullets: [
      'Instantly answers common questions from your website, WhatsApp, Instagram, or email (pricing, availability, delivery, scheduling).',
      'Sends friendly order/appointment confirmations and pre‑event information.',
      'Handles multiple languages clearly; passes special or sensitive cases to a person.',
      'Customers get quick, reassuring responses—even after hours.',
      'More direct conversions over time.',
      'Fewer interruptions for your team.',
    ],
    visual: {
      type: 'image',
      ...srcset('https://images.unsplash.com/photo-1529336953121-ad5a0d43d0d2'),
      alt: 'Messaging panel with a customer conversation.',
    },
    charts: {
      responseBeforeMin: 12,
      responseAfterMin: 3,
      conversionUpliftPct: 18,
    },
  },
  {
    id: 'operations-kpi',
    title: '2) Onboarding / Offboarding & Operations Flow',
    body:
      'Customers receive polite, clear guidance; teams see short, human-readable tasks instead of cryptic codes.',
    bullets: [
      'Sends a short pre‑onboarding form for details and preferences to speed up the start.',
      'When a case closes, creates a follow‑up task automatically and updates status to “Ready” when done.',
      'If an issue is reported, opens the right task (ops/maintenance) and tracks it to closure.',
      'Shorter queues and lower support load; work finished on time.',
      'A clear daily plan for operations and fewer “who does what?” moments.',
      'Less back‑and‑forth between teams.',
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
    title: '3) Customer Experience & Gentle Upselling',
    body:
      'Suggests add‑ons the way a person would—relevant, polite, never pushy; if a customer says “not today,” it backs off gracefully.',
    bullets: [
      'Before engagement: simple, fixed‑price add‑ons like upgrade, priority handling, express service.',
      'During the lifecycle: well‑timed, friendly reminders (e.g., afternoon promo).',
      'Customers feel informed and in control; one tap to accept.',
      'Teams spend less time explaining options.',
    ],
    visual: {
      type: 'image',
      ...srcset('https://images.unsplash.com/photo-1558222217-08ef9ac3a995'),
      alt: 'Friendly upsell suggestions.',
    },
    charts: {
      topAddons: [
        { name: 'Priority handling', value: 32 },
        { name: 'Express service', value: 28 },
        { name: 'Extended support', value: 24 },
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
    title: '4) Reputation & Feedback Management',
    body:
      'Drafts sincere, empathetic replies that sound like you; flags sensitive cases for a human to finalize.',
    bullets: [
      'Collects new reviews daily from Google, social platforms, marketplaces, or app stores.',
      'Highlights negatives fast and prepares a polite draft response for your approval.',
      'If feedback mentions a fixable issue, opens a task, tracks the fix, and closes the loop.',
      'Customers see timely, caring responses—scores tend to rise over time.',
      'Repeated issues become visible and get solved for good.',
      'Your team learns what customers value most.',
    ],
    visual: {
      type: 'image',
      ...srcset('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4'),
      alt: 'Feedback dashboard with sentiment highlights.',
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
    title: '5) Monthly Performance Report (Executive‑Friendly)',
    body:
      'Explains the “why,” not just the numbers—plain‑English insights your whole team can act on next month.',
    bullets: [
      'At the start of each month: sources, weak periods, top channels, cycle time, churn, add‑on results.',
      'Two files: executive one‑pager + deeper workbook for anyone who wants to dive in.',
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
        { label: 'NA', value: 35 },
        { label: 'EMEA', value: 30 },
        { label: 'APAC', value: 20 },
        { label: 'LATAM', value: 15 },
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
    title: '6) Month‑by‑Month Marketing Plan & Campaign Rotation',
    body:
      'Turns data into a one‑page, human‑readable action list—clear priorities, simple messages in each language.',
    bullets: [
      'Convert the monthly report into a short plan for the coming month.',
      'Small website perk (e.g., free shipping or onboarding discount).',
      'Simple campaigns to fill weaker days first; friendly messages to past customers in their language.',
      'Seasonal updates to photos and text (winter, summer, launch seasons).',
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
        { category: 'Weak‑day fill', Before: 12, After: 22 },
        { category: 'Past customers', Before: 9, After: 17 },
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
    title: 'What to Expect in the First 90 Days',
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
      'Every property is different. For a clear, line-item proposal (individual services vs. bundles), timelines, and 90-day targets, contact us at arda.mtg@gmail.com or WhatsApp: +905514268881.',
    bullets: [
      'Modular (à la carte): choose any service on its own (each has a clear scope and SLA).',
      'Bundled packages: discounted bundles that combine multiple services for better value.',
      'Each service is available individually or in discounted bundles. For details and pricing, contact us at arda.mtg@gmail.com or WhatsApp: +905514268881.',
    ],
    visual: {
      type: 'image',
      ...srcset('https://images.unsplash.com/photo-1522071820081-009f0129c71c'),
      alt: 'Simple pricing overview.',
    },
  },
]

