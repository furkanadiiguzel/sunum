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

// Local assets
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore - handled by Vite
import hotelBg from '../assets/hotel.jpg'

const srcset = (url: string) => ({
  src: `${url}?auto=format&fit=crop&w=1280&q=70`,
  srcSet: `${url}?auto=format&fit=crop&w=480&q=60 480w, ${url}?auto=format&fit=crop&w=768&q=65 768w, ${url}?auto=format&fit=crop&w=1280&q=70 1280w, ${url}?auto=format&fit=crop&w=1920&q=75 1920w`,
  sizes: '(max-width: 768px) 100vw, 1200px',
})

export const slides: Slide[] = [
  {
    id: 'cover',
    title: 'IgnitOS — Zgjidhje të Fuqizuara nga AI për Biznese',
    lead:
      'IgnitOS është shtresa operative që e thjeshton mënyrën si funksionojnë bizneset moderne. Nga kontakti i parë te ndjekja e fundit, bashkon çdo hap kritik në një rrjedhë koherente—që ekipet të kalojnë më pak kohë duke ndjekur punët dhe më shumë duke krijuar vlerë. Me AI me sjellje njerëzore që kupton kontekstin dhe komunikon natyrshëm, IgnitOS i kthen detyrat rutinë në ekzekutim të lehtë dhe të qëndrueshëm.',
    body:
      'Kjo prezantim tregon si një sistem i vetëm, i orkestruar mirë, rrit qëndrueshmërinë e shërbimit, përshpejton operacionet dhe e kthen çdo ndërveprim—shitje, mbështetje ose shpërndarje—në një mundësi për të lënë përshtypje.',
    visual: {
      type: 'image',
      src: hotelBg as unknown as string,
      srcSet: hotelBg as unknown as string,
      sizes: '(max-width: 768px) 100vw, 1200px',
      alt: 'Pamje nate e një hoteli me pishinë të ndriçuar.',
    },
  },
  {
    id: 'intro',
    title: 'Çfarë Është Realisht Kjo',
    body:
      "Kjo nuk është një automatizim i ftohtë e i ngurtë. Është një konsulente AI me sjellje njerëzore që flet me mysafirët në gjuhë të përditshme, kupton tonin (urgjent vs. i qetë) dhe përshtatet me çdo situatë. Mund të komunikojë natyrshëm në shqip, anglisht, turqisht dhe çdo gjuhë tjetër që dëshironi. Kur kërkohet empati ose diskrecion, ia kalon çështjen ekipit tuaj me një përmbledhje të rregullt dhe hapa të rekomanduar. Në praktikë, do të shihni: përgjigje më të shpejta, mbërritje më të rrjedhshme, plane më të qarta pastrimi, përgjigje më të shpejta ndaj vlerësimeve dhe një ritëm mujor raportesh me veprime të thjeshta, muaj pas muaji.",
    visual: {
      type: 'image',
      ...srcset('https://images.unsplash.com/photo-1521737604893-d14cc237f11d'),
      alt: 'Calm system overview with connected steps.',
    },
  },
  {
    id: 'reservations',
    title: '1) Rezervime & Mesazhet me Mysafirët',
    body:
      'Përgjigje me tone njerëzore që duken personale—pyetjet e vonshme marrin përgjigje të ngrohta, të menjëhershme, dhe rastet e ndërlikuara i kalohen stafit tuaj me gjithë kontekstin.',
    bullets: [
      'U përgjigjet menjëherë pyetjeve të shpeshta nga faqja juaj, WhatsApp, Instagram ose email (parkimi, oraret e mëngjesit, check-in i vonë).',
      'Dërgon konfirmime miqësore dhe informacione para mbërritjes.',
      'Menaxhon shumë gjuhë qartë; rastet e veçanta/sensitive ia kalon një personi.',
      'Mysafirët marrin përgjigje të shpejta e qetësuese—edhe pas orarit.',
      'Më shumë rezervime direkte (pa komision) me kalimin e kohës.',
      'Më pak ndërprerje për recepsionin.',
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
    title: '2) Check-In / Check-Out & Rrjedha e Housekeeping',
    body:
      'Mysafirët marrin udhëzime të qarta e të sjellshme; stafi sheh detyra të shkurtra e të kuptueshme, jo kode të paqarta.',
    bullets: [
      'Dërgon një formular të shkurtër para mbërritjes për të dhënat e identifikimit dhe preferencat, për të përshpejtuar mbërritjen.',
      'Kur një dhomë bën check-out, krijon automatikisht detyrë pastrimi dhe e përditëson statusin në “Gati” sapo përfundohet.',
      'Nëse një mysafir raporton problem, hap detyrën e duhur (mirëmbajtje/pastrime) dhe e ndjek deri në mbyllje.',
      'Radhë më të shkurtra në recepsion; dhomat gati në kohë.',
      'Plan ditor i qartë për housekeeping dhe më pak momente “kush shkon ku?”.',
      'Më pak kthim‑përgjigje mes ekipeve.',
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
    title: '3) Përvoja e Mysafirëve & Upsell i Butë',
    body:
      'Sugjeron shtesa ashtu si do të bënte një person—relevante, të sjellshme, kurrë me presion; nëse mysafiri thotë “jo sot”, tërhiqet me elegancë.',
    bullets: [
      'Para mbërritjes: shtesa të thjeshta me çmim fiks si përmirësim dhome, dalje e vonshme, transfer aeroporti, mëngjes.',
      'Gjatë qëndrimit: kujtesa miqësore në kohën e duhur (p.sh., ofertë e pasdites për spa).',
      'Mysafirët ndihen të informuar dhe në kontroll; pranim me një prekje.',
      'Recepsioni kalon më pak kohë duke shpjeguar opsionet.',
    ],
    visual: {
      type: 'image',
      ...srcset('https://images.unsplash.com/photo-1558222217-08ef9ac3a995'),
      alt: 'Friendly upsell suggestions.',
    },
    charts: {
      topAddons: [
        { name: 'Dalje e vonshme (late check-out)', value: 32 },
        { name: 'Transfer aeroporti', value: 28 },
        { name: 'Mëngjes', value: 24 },
        { name: 'Përmirësim dhome (upgrade)', value: 16 },
      ],
      revPerRoomByMonth: [
        { label: 'Janar', value: 4.2 },
        { label: 'Shkurt', value: 5.1 },
        { label: 'Mars', value: 6.0 },
        { label: 'Prill', value: 6.8 },
      ],
    },
  },
  {
    id: 'reputation',
    title: '4) Reputacioni & Menaxhimi i Vlerësimeve',
    body:
      'Përgatit përgjigje të sinqerta e empatike që tingëllojnë si ju; sinjalizon rastet sensitive që t’i finalizojë një njeri.',
    bullets: [
      'Mbledh vlerësime të reja çdo ditë nga Google dhe faqet e rezervimeve.',
      'Nxjerr shpejt në pah anët negative dhe përgatit një përgjigje të sjellshme për miratimin tuaj.',
      'Nëse një vlerësim përmend një problem të rregullueshëm, hap një detyrë, ndjek rregullimin dhe mbyll ciklin.',
      'Mysafirët shohin përgjigje të kujdesshme dhe në kohë—vlerësimet priren të rriten me kohën.',
      'Çështjet e përsëritura bëhen të dukshme dhe zgjidhen përfundimisht.',
      'Ekipi juaj mëson çfarë vlerësojnë më shumë mysafirët.',
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
    title: '5) Raporti Mujor i Rezervimeve (i Qartë, i Dobishëm për Drejtuesit)',
    body:
      'Shpjegon “pse”-në, jo vetëm shifrat—përfundime të qarta që i gjithë ekipi mund t’i zbatojë muajin e ardhshëm.',
    bullets: [
      'Në fillim të çdo muaji: nga erdhën mysafirët, ditët e dobëta, kanalet kryesore, qëndrimi mesatar, anulimet dhe rezultatet e shtesave.',
      'Dy skedarë: një faqe për pronarin + një material i thelluar për këdo që dëshiron të zhytet në detaje.',
      'Përgjigje të thjeshta për “Çfarë funksionoi realisht?” dhe vendime më të mira për stafimin/çmimet.',
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
        { label: 'Janar', a: 52, b: 12 },
        { label: 'Shkurt', a: 57, b: 10 },
        { label: 'Mars', a: 63, b: 9 },
        { label: 'Prill', a: 68, b: 8 },
      ],
    },
  },
  {
    id: 'marketing',
    title: '6) Plan Mujor Marketingu & Rotacion Fushatash',
    body:
      'E kthen të dhënat në një listë veprimesh në një faqe—prioritete të qarta, mesazhe të thjeshta në çdo gjuhë.',
    bullets: [
      'Ktheni raportin mujor në një plan të shkurtër për muajin në vijim.',
      'Një përfitim i vogël për rezervimet direkte në faqen tuaj (p.sh., transfer falas ose zbritje në mëngjes).',
      'Fushata të thjeshta për të mbushur fillimisht ditët më të dobëta; mesazhe miqësore për ish‑mysafirët në gjuhën e tyre.',
      'Përditësime sezonale të fotove dhe teksteve (pushime dimërore në qytet, arratisje verore në natyrë).',
    ],
    visual: {
      type: 'image',
      ...srcset('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4'),
      alt: 'Marketing plan highlights.',
    },
    charts: {
      funnel: [
        { label: 'Janar', a: 1800, b: 140 },
        { label: 'Shkurt', a: 1900, b: 160 },
        { label: 'Mars', a: 2100, b: 190 },
        { label: 'Prill', a: 2300, b: 220 },
      ],
      bookingsByCampaign: [
        { category: 'Përfitim në faqe', Before: 18, After: 31 },
        { category: 'Mbushje ditësh të dobëta', Before: 12, After: 22 },
        { category: 'Mysafirë të mëparshëm', Before: 9, After: 17 },
      ],
    },
  },
  {
    id: 'voice',
    title: '“Si Flet” — Shembull i Shkurtër Bisedimi',
    body:
      'Mysafir: “Vijmë në 23:30—a mund të bëjmë ende check-in?”\nAI: “Patjetër. Recepsioni është i hapur; nëse doni, mund t’ju dërgoj tani udhëzimet për derën. Udhëtim të mbarë!”\n\nMysafir: “Është përvjetori ynë.”\nAI: “Urime! Dëshironi një surprizë të vogël në dhomë? Mund të organizoj një pjatë me ëmbëlsira ose lule.”',
    visual: {
      type: 'image',
      ...srcset('https://images.unsplash.com/photo-1529336953121-ad5a0d43d0d2'),
      alt: 'Natural AI conversation samples.',
    },
  },
  {
    id: 'closing',
    title: 'Çfarë të Prisni në 90 Ditët e Para',
    bullets: [
      'Përgjigje më të shpejta ndaj mesazheve → mysafirë më të kënaqur, më shumë rezervime direkte.',
      'Mbërritje dhe largime më të rrjedhshme → recepsion më i qetë, dhomat gati me kohë.',
      'Të ardhura shtesë të qëndrueshme nga shtesat e thjeshta që pëlqejnë mysafirët.',
      'Përgjigje të dukshme dhe në kohë ndaj vlerësimeve → reputacion online më i fortë.',
      'Ritëm mujor: raport → plan veprimi → rezultate më të mira muajin tjetër.',
    ],
    body:
      'E gjitha kjo mundësohet nga një konsulente AI me sjellje njerëzore që komunikon natyrshëm, kupton kontekstin dhe di kur të përfshijë një person real.',
    visual: {
      type: 'image',
      ...srcset('https://images.unsplash.com/photo-1519125323398-675f0ddb6308'),
      alt: 'Positive momentum over first 90 days.',
    },
  },
  {
    id: 'pricing',
    title: 'Çmime & Paketa',
    body:
      'Çdo pronë është ndryshe. Për një ofertë të qartë me zëra (shërbime individuale vs. paketa), afate dhe objektiva 90-ditore, na kontaktoni në arda.mtg@gmail.com ose WhatsApp: +905514268881.',
    bullets: [
      'Modulare (à la carte): zgjidhni çdo shërbim veçmas (secili me fushë dhe SLA të qartë).',
      'Paketa të bashkuara: zbritje për kombinime shërbimesh për vlerë më të mirë.',
      'Çdo shërbim ofrohet veçmas ose në paketa me zbritje. Për detaje dhe çmime, na shkruani në arda.mtg@gmail.com ose WhatsApp: +905514268881.',
    ],
    visual: {
      type: 'image',
      ...srcset('https://images.unsplash.com/photo-1522071820081-009f0129c71c'),
      alt: 'Simple pricing overview.',
    },
  },
]

