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
    title: 'HotelOS — Automation for Exceptional Stays',
    lead:
      'HotelOS is the operating layer that simplifies how modern hotels work. From the first inquiry to the final thank-you, it brings every critical step into one coherent flow—so teams spend less time chasing tasks and more time delighting guests.',
    body:
      'This presentation shows how a single, well-orchestrated system raises service consistency, accelerates operations, and turns every interaction into an opportunity to impress.',
    visual: {
      type: 'image',
      ...srcset('https://images.unsplash.com/photo-1520256862855-398228c41684'),
      alt: 'Premium hotel lobby at night with modern lighting.',
    },
  },
  {
    id: 'problem',
    title: 'Where Momentum Is Lost Today',
    body:
      'Most hotels run on a patchwork of tools and manual routines. Guest questions queue up across channels. Bookings sit in different portals. Tasks are relayed by memory. Valuable feedback arrives late—if at all. These gaps slow teams, hide priorities, and create inconsistent experiences across stays. The result is avoidable effort for staff and subtle friction for guests: the email that took too long to answer, the room that wasn’t ready, the birthday note that never went out. Fragmentation adds up—and it shows in reviews and revenue.',
    bullets: [
      'Slow responses on first contact reduce conversion and trust.',
      'Disconnected booking views cause double work and handover errors.',
      'Tasks lack ownership and timelines; small delays amplify throughout the day.',
      'Feedback loops are delayed; reputational risk grows quietly.',
    ],
    visual: {
      type: 'image',
      ...srcset('https://images.unsplash.com/photo-1551776235-dde6d4829808'),
      alt: 'Four snapshots representing reception, housekeeping, spa, and online reviews.',
    },
  },
  {
    id: 'vision',
    title: 'A Unified Operating Rhythm',
    body:
      'HotelOS aligns guest journeys and staff workflows into one predictable rhythm. Every message, booking, task, and note is visible in context. Teams see what matters now, what’s next, and what success looks like—without switching screens or guessing who owns the next step. Consistency becomes a habit; service standards become measurable; and improvements compound week after week. The outcome is not just efficiency, but calm: a team that acts in sync and guests who feel the difference.',
    visual: {
      type: 'image',
      ...srcset('https://images.unsplash.com/photo-1521737604893-d14cc237f11d'),
      alt: 'A linear flow of the guest lifecycle with connected nodes.',
    },
  },
  {
    id: 'first-contact',
    title: 'First Contact, First Win',
    body:
      'Speed and consistency at the very first touchpoint decide how many inquiries turn into bookings. HotelOS centralizes questions from web, email, and messaging into a single, organized panel, helps teams respond instantly to common topics, and keeps conversation history attached to the guest profile. Confirmation messages are clear and timely; arrival details are never missed. Guests feel seen and informed—before they even arrive.',
    bullets: [
      'Instant answers to common questions keep momentum high and queues short.',
      'A single consolidated view of bookings and messages reduces errors.',
      'Post-reservation confirmations and pre-arrival briefs set expectations early.',
    ],
    visual: {
      type: 'image',
      ...srcset('https://images.unsplash.com/photo-1529336953121-ad5a0d43d0d2'),
      alt: 'Conversation mockup answering availability and stay details.',
    },
  },
  {
    id: 'operations',
    title: 'Clarity for Busy Days',
    body:
      'Mornings are won or lost in the first hour. HotelOS translates arrivals, departures, and room statuses into clear, assigned work. Pre-arrival forms reduce front-desk queues; room turnovers are scheduled and tracked; maintenance tickets include photos, priority, and SLA. Managers see bottlenecks early and can rebalance with a click. By noon, the hotel is on pace—not playing catch-up.',
    bullets: [
      'Digital pre-check reduces lobby waiting and data entry.',
      'Smart housekeeping assignments optimize routes and readiness times.',
      'Maintenance intake with priorities and evidence speeds resolution.',
    ],
    visual: {
      type: 'image',
      ...srcset('https://images.unsplash.com/photo-1521737604893-d14cc237f11d'),
      alt: 'Timeline from arrival to room ready with accompanying task cards.',
    },
  },
  {
    id: 'upsell',
    title: 'Personalization that Feels Natural',
    body:
      'Guests remember small, well-timed gestures. HotelOS surfaces tasteful recommendations that align with each profile and stay context—spa time for weekend getaways, early dinner for families, or a car to the airport on the last morning. Special dates never slip by; messages feel personal, not automated. When relevance is the rule, upsell becomes service, not sales.',
    bullets: [
      'Preference-aware suggestions: spa, dining, transfer, late checkout.',
      'Special-occasion notes and treats that build loyalty.',
      'Multilingual messages reduce friction for international guests.',
    ],
    visual: {
      type: 'image',
      ...srcset('https://images.unsplash.com/photo-1558222217-08ef9ac3a995'),
      alt: 'Side-by-side spa and restaurant imagery with suggestion overlays.',
    },
  },
  {
    id: 'reviews',
    title: 'Reputation in Real Time',
    body:
      'Feedback shapes tomorrow’s bookings. HotelOS consolidates reviews and messages, highlights themes, and nudges the right follow-up. Quick, thoughtful thanks reinforce positive moments; clear escalation paths ensure issues are addressed before they echo online. Trends are visible at a glance, so the team learns faster than problems can repeat.',
    bullets: [
      'Review summaries with themes and keywords.',
      'Priority alerts for time-sensitive or recurring issues.',
      'Courtesy acknowledgements that strengthen guest rapport.',
    ],
    visual: {
      type: 'image',
      ...srcset('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4'),
      alt: 'Star rating motif and a short satisfaction bar chart.',
    },
  },
  {
    id: 'team',
    title: 'When Teams Move as One',
    body:
      'Service quality improves when information flows to the right person at the right moment. HotelOS routes updates to roles, not inboxes: arrivals to front desk, turnovers to housekeeping, incidents to maintenance. Short, actionable notifications replace noisy threads, and tasks close with clear ownership. Fewer handoffs, fewer surprises, more time face-to-face with guests.',
    bullets: [
      'Role-based notifications reduce noise and missed details.',
      'Task creation from messages—nothing gets lost.',
      'Light, respectful alerts; quiet hours honored.',
    ],
    visual: {
      type: 'image',
      ...srcset('https://images.unsplash.com/photo-1529336953121-ad5a0d43d0d2'),
      alt: 'Compact notifications list and team avatar cluster.',
    },
  },
  {
    id: 'metrics',
    title: 'What Success Looks Like',
    body:
      'Every operational change should be visible in the numbers. HotelOS tracks the indicators that matter: response time, room readiness, task closure, review trends, and revenue from well-timed offers. The intent is not vanity metrics but decision support—clear signals that guide where to focus next week.',
    visual: {
      type: 'image',
      ...srcset('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4'),
      alt: 'Bar, donut, and sparkline showing improvement across core hotel KPIs.',
    },
    charts: {
      kpis: [
        { label: 'First Response (hrs)', before: 0.9, after: 0.5 },
        { label: 'Room Ready On Time (%)', before: 76, after: 91 },
        { label: 'Resolution <4h (%)', before: 58, after: 80 },
        { label: 'Incremental Rev/Stay (€)', before: 0, after: 8.7 },
      ],
      donut: { onTime: 91, late: 9 },
      satisfaction7d: [78, 80, 82, 83, 84, 86, 87],
    },
  },
  {
    id: 'closing',
    title: 'Bring Calm to Busy Days',
    body:
      'HotelOS turns complexity into a predictable rhythm: clear responsibilities, timely messages, and steady follow-through from first contact to farewell. Guests notice the calm; teams feel the control. If you want service to feel simple, visible, and memorable—every day—this is how you start.',
    visual: {
      type: 'image',
      ...srcset('https://images.unsplash.com/photo-1519125323398-675f0ddb6308'),
      alt: 'Warm, softly lit hotel entrance transitioning into evening.',
    },
  },
]

