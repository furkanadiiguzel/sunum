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
    title: 'Orwen — AI-Powered Solutions for Businesses',
    lead:
      'Orwen is the operational layer that simplifies how modern businesses function. It automates routine tasks and provides innovative solutions, allowing teams to focus on creating value. With AI that understands context and communicates naturally, Orwen transforms operations into seamless, efficient processes.',
    body:
      'This presentation demonstrates how Orwen\'s automation capabilities enhance service consistency, accelerate operations, and turn every interaction into an opportunity to impress.',
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
    title: 'Gerçekten Nedir Bu',
    body:
      "Bu soğuk, katı bir otomasyon değil. Kullanıcılarla günlük dilde konuşan, tonu (acil vs. rahat) anlayan ve her duruma uyum sağlayan insan benzeri bir AI'dir. Türkçe, İngilizce ve istediğiniz herhangi bir dilde doğal bir şekilde iletişim kurabilir. Empati veya gizlilik gerektiğinde, ekibinize düzenli bir özet ve önerilen sonraki adımlarla iletir. Pratikte, daha hızlı yanıtlar, daha sorunsuz operasyonlar, daha net planlar, daha hızlı yanıtlar ve aylık raporlar ve basit, ay ay eylemler göreceksiniz.",
    visual: {
      type: 'image',
      ...srcset('https://images.unsplash.com/photo-1521737604893-d14cc237f11d'),
      alt: 'Bağlantılı adımlarla sakin sistem genel görünümü.',
    },
  },
  {
    id: 'automation-what',
    title: 'Otomasyon Nedir?',
    body:
      'Otomasyon; tekrarlı işleri, bildirimleri, onay akışlarını ve veri aktarımını insanların yerine güvenilir şekilde yürüten akıllı süreçlerdir. Amaç: hatayı azaltmak, hız ve tutarlılığı artırmak, ekibin zamanını yaratıcı işe geri kazandırmak.',
    visual: {
      type: 'image',
      ...srcset('https://images.unsplash.com/photo-1522071820081-009f0129c71c'),
      alt: 'Ekiplerin birlikte çalıştığı modern işyeri.',
    },
    bullets: [
      'Tekrarlayan görevleri otomatikleştirir',
      'Veriyi sistemler arası güvenle taşır',
      'Doğru anda doğru kişiye haber verir',
    ],
  },
  {
    id: 'automation-benefits',
    title: 'İşinize Katkıları',
    body:
      'Basit otomasyonlar bile 2-4 hafta içinde ölçülebilir fayda getirir. Daha az hata, daha hızlı yanıt ve görünür süreçler ile ekip verimliliği artar.',
    bullets: [
      'Hız: Beklemeler azalır, yanıt süreleri kısalır',
      'Tutarlılık: Standart adımlar her seferinde doğru yapılır',
      'Şeffaflık: Süreçler ve darboğazlar görünür olur',
      'Maliyet: Operasyon maliyeti düşer, ekip zamanı serbest kalır',
    ],
    visual: {
      type: 'image',
      ...srcset('https://images.unsplash.com/photo-1553877522-43269d4ea984'),
      alt: 'Verimlilik ve hız artışı.',
    },
  },
  {
    id: 'services-overview',
    title: 'Hizmetlerimiz (Özet)',
    body:
      'İhtiyaca göre modüler hizmetler sunuyoruz. Dilerseniz tek tek, dilerseniz paket olarak.',
    bullets: [
      'Süreç Otomasyonları: CRM, biletleme, görev akışları',
      'İletişim Otomasyonları: web/WhatsApp/Instagram bot, e‑posta/SMS',
      'Raporlama ve Panolar: yönetici görünürlüğü, uyarılar',
      'Entegrasyonlar: Zapier/Make, webhook, özel API köprüleri',
      'Özel Çözümler: RPA/LLM tabanlı akıllı akışlar',
    ],
    visual: {
      type: 'image',
      ...srcset('https://images.unsplash.com/photo-1498050108023-c5249f4df085'),
      alt: 'Hizmet ve modül setleri.',
    },
  },
  {
    id: 'solutions-examples',
    title: 'Örnek Otomasyonlar',
    bullets: [
      'Form → CRM kaydı → e‑posta teyidi → satış görevi',
      'Satış kapandı → fatura oluştur → Slack bilgilendir',
      'Destek talebi → öncelik ata → durum güncellemeleri',
      'Stok azaldı → tedarik görevini aç → yöneticiyi uyar',
    ],
    body:
      'Her otomasyon küçük ama somut bir kazanım üretir; birlikte büyük fark yaratırlar.',
    visual: {
      type: 'image',
      ...srcset('https://images.unsplash.com/photo-1518779578993-ec3579fee39f'),
      alt: 'Akış örnekleri.',
    },
  },
  {
    id: 'how-we-work',
    title: 'Nasıl Çalışıyoruz',
    bullets: [
      '1) Keşif: Hedefler ve darboğazlar',
      '2) Tasarım: Basit ama etkili akışlar',
      '3) Pilot: 1‑2 haftalık hızlı deneme',
      '4) Canlı: İzleme ve ince ayar',
      '5) Geliştirme: Aylık iyileştirme ritmi',
    ],
    body:
      'Net zaman çizelgesi, ölçülebilir hedefler ve sade dokümantasyonla ilerleriz.',
    visual: {
      type: 'image',
      ...srcset('https://images.unsplash.com/photo-1524666041070-9d87656c25bb'),
      alt: 'Adım adım ilerleme.',
    },
  },
  {
    id: 'reservations',
    title: '1) Talepler ve Müşteri Mesajlaşması',
    body:
      'Kişisel hissettiren insan benzeri yanıtlar—gece geç sorulara sıcak, anlık cevap; hassas konular ekipten birine tam özetle aktarılır.',
    bullets: [
      'Web siteniz, WhatsApp, Instagram veya e‑postadan gelen sık soruları anında yanıtlar (fiyat, uygunluk, teslimat, randevu).',
      'Sipariş/randevu onaylarını ve ön bilgilendirmeleri nazikçe iletir.',
      'Birden çok dili netçe yönetir; özel/hassas durumları insana devreder.',
      'Müşteriler mesai dışı dahil hızlı ve güven veren yanıtlar alır.',
      'Zamanla daha fazla doğrudan dönüşüm.',
      'Ekip için daha az bölünme ve kesinti.',
    ],
    visual: {
      type: 'image',
      ...srcset('https://images.unsplash.com/photo-1529336953121-ad5a0d43d0d2'),
      alt: 'Müşteri sohbet ekranı.',
    },
    charts: {
      responseBeforeMin: 12,
      responseAfterMin: 3,
      conversionUpliftPct: 18,
    },
  },
  {
    id: 'operations-kpi',
    title: '2) Başlatma / Kapatma ve Operasyon Akışı',
    body:
      'Müşteriler net ve kibar yönlendirme alır; ekipler karmaşık kodlar yerine kısa, okunur görevler görür.',
    bullets: [
      'Hızlı başlangıç için kısa bir ön bilgi formu gönderir.',
      'Bir iş kapandığında otomatik takip görevi oluşturur ve tamamlanınca “Hazır” durumuna çeker.',
      'Bir sorun bildirildiğinde doğru görevi (ops/bakım) açar ve kapanışa kadar takip eder.',
      'Daha kısa kuyruklar, zamanında tamamlanan işler.',
      'Günlük net plan ve daha az “kim ne yapacak?” anı.',
      'Ekipler arası daha az gidip gelme.',
    ],
    visual: {
      type: 'image',
      ...srcset('https://images.unsplash.com/photo-1521737604893-d14cc237f11d'),
      alt: 'Görev ve hazırlık akışı.',
    },
    charts: {
      roomReadyMinutesWeekly: [
        { label: 'H1', value: 46 },
        { label: 'H2', value: 44 },
        { label: 'H3', value: 41 },
        { label: 'H4', value: 38 },
      ],
      receptionProcessing: { before: 6.5, after: 4.2 },
    },
  },
  {
    id: 'upsell',
    title: '3) Müşteri Deneyimi ve Yumuşak Ek Satış',
    body:
      'Bir insan gibi ek teklifler sunar—ilgili, kibar, asla baskıcı değildir; “bugün değil” dendiğinde zarifçe çekilir.',
    bullets: [
      'Başlamadan önce: yükseltme, öncelikli işlem, ekspres hizmet gibi sabit fiyatlı ekler.',
      'Süreç içinde: doğru zamanlı, dostça hatırlatmalar (ör. öğleden sonra kampanyası).',
      'Müşteri bilgili ve kontrol hissiyle karar verir; tek dokunuşla kabul.',
      'Ekip, seçenekleri açıklamak için daha az zaman harcar.',
    ],
    visual: {
      type: 'image',
      ...srcset('https://images.unsplash.com/photo-1558222217-08ef9ac3a995'),
      alt: 'Dostça ek satış önerileri.',
    },
    charts: {
      topAddons: [
        { name: 'Öncelikli işlem', value: 32 },
        { name: 'Ekspres hizmet', value: 28 },
        { name: 'Genişletilmiş destek', value: 24 },
        { name: 'Yükseltme', value: 16 },
      ],
      revPerRoomByMonth: [
        { label: 'Ocak', value: 4.2 },
        { label: 'Şubat', value: 5.1 },
        { label: 'Mart', value: 6.0 },
        { label: 'Nisan', value: 6.8 },
      ],
    },
  },
  {
    id: 'reputation',
    title: '4) İtibar ve Geri Bildirim Yönetimi',
    body:
      'Sizin dilinizde samimi ve empatik taslak yanıtlar hazırlar; hassas durumları bir insana devreder.',
    bullets: [
      'Google, sosyal platformlar, pazar yerleri veya mağaza yorumlarını günlük toplar.',
      'Olumsuzları hızla vurgular ve onayınıza sunulan kibar bir yanıt taslağı üretir.',
      'Düzeltilebilir bir konu varsa görev açar, çözümü takip eder ve döngüyü kapatır.',
      'Zamanında ve özenli yanıtlar → puanlar zamanla artma eğiliminde.',
      'Tekrarlayan sorunlar görünür olur ve kalıcı şekilde çözülür.',
      'Ekibiniz müşterilerin en çok neyi önemsediğini öğrenir.',
    ],
    visual: {
      type: 'image',
      ...srcset('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4'),
      alt: 'Duygu vurgulu geri bildirim panosu.',
    },
    charts: {
      answeredWithin24Before: 54,
      answeredWithin24After: 86,
      starByQuarter: [
        { label: 'Ç1', value: 4.1 },
        { label: 'Ç2', value: 4.2 },
        { label: 'Ç3', value: 4.4 },
        { label: 'Ç4', value: 4.5 },
      ],
    },
  },
  {
    id: 'report',
    title: '5) Aylık Performans Raporu (Yönetici Dostu)',
    body:
      'Sadece rakamlar değil, “neden”i açıklar—tüm ekibin bir sonraki ay uygulayabileceği sade içgörüler.',
    bullets: [
      'Ay başında: kaynaklar, zayıf dönemler, en iyi kanallar, çevrim süresi, churn, ek satış sonuçları.',
      'İki dosya: yönetici özeti + derinleşmek isteyenler için çalışma kitabı.',
      '“Gerçekten ne işe yaradı?” sorusuna basit yanıtlar; daha iyi kadro/fiyat kararları.',
    ],
    visual: {
      type: 'image',
      ...srcset('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4'),
      alt: 'Aylık rapor görselleri.',
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
        { label: 'Ocak', a: 52, b: 12 },
        { label: 'Şubat', a: 57, b: 10 },
        { label: 'Mart', a: 63, b: 9 },
        { label: 'Nisan', a: 68, b: 8 },
      ],
    },
  },
  {
    id: 'marketing',
    title: '6) Aylık Pazarlama Planı ve Kampanya Rotasyonu',
    body:
      'Veriyi tek sayfalık, okunur bir eylem listesine çevirir—açık öncelikler, her dilde basit mesajlar.',
    bullets: [
      'Aylık raporu gelecek ay için kısa bir plana dönüştürün.',
      'Web sitesi için küçük bir fayda (ör. ücretsiz kargo ya da onboarding indirimi).',
      'Önce zayıf günleri dolduran basit kampanyalar; eski müşterilere dillerinde dostça mesajlar.',
      'Sezonluk görsel ve metin güncellemeleri (kış, yaz, lansman dönemleri).',
    ],
    visual: {
      type: 'image',
      ...srcset('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4'),
      alt: 'Pazarlama planı öne çıkanlar.',
    },
    charts: {
      funnel: [
        { label: 'Ocak', a: 1800, b: 140 },
        { label: 'Şubat', a: 1900, b: 160 },
        { label: 'Mart', a: 2100, b: 190 },
        { label: 'Nisan', a: 2300, b: 220 },
      ],
      bookingsByCampaign: [
        { category: 'Web sitesi faydası', Before: 18, After: 31 },
        { category: 'Zayıf gün doldurma', Before: 12, After: 22 },
        { category: 'Eski müşteriler', Before: 9, After: 17 },
      ],
    },
  },
  {
    id: 'voice',
    title: '“Nasıl Konuşur” — Kısa Konuşma Örneği',
    body:
      'Misafir: “23:30’da geliyoruz—hala check-in yapabilir miyiz?”\nAI: “Tabii ki. Resepsiyon açık; isterseniz kapı talimatlarını şimdi gönderebilirim. İyi yolculuklar!”\n\nMisafir: “Yıldönümümüz.”\nAI: “Tebrikler! Odanızda küçük bir sürpriz ister misiniz? Tatlı tabağı veya çiçekler ayarlayabilirim.”',
    visual: {
      type: 'image',
      ...srcset('https://images.unsplash.com/photo-1529336953121-ad5a0d43d0d2'),
      alt: 'Doğal AI konuşma örnekleri.',
    },
  },
  {
    id: 'closing',
    title: 'İlk 90 Günde Ne Beklemeli',
    bullets: [
      'Misafir mesajlarına daha hızlı yanıtlar → daha mutlu misafirler, daha fazla doğrudan rezervasyon.',
      'Daha sorunsuz varışlar ve ayrılışlar → daha sakin resepsiyon, zamanında hazır odalar.',
      'Misafirlerin beğendiği basit ek hizmetlerden düzenli ek gelir.',
      'Görünür, zamanında yanıtlar → daha güçlü çevrimiçi itibar.',
      'Aylık rapor → eylem planı → bir sonraki ay daha iyi sonuçlar.',
    ],
    body:
      'Tüm bunlar, doğal bir şekilde iletişim kuran, bağlamı anlayan ve gerçek bir kişiyi dahil etmesi gerektiğinde bilen insan benzeri bir AI concierge tarafından desteklenmektedir.',
    visual: {
      type: 'image',
      ...srcset('https://images.unsplash.com/photo-1519125323398-675f0ddb6308'),
      alt: 'İlk 90 gün boyunca olumlu ivme.',
    },
  },
  {
    id: 'pricing',
    title: 'Fiyatlandırma ve Paketler',
    body:
      'Her mülk farklıdır. Bireysel hizmetler ve paketler, zaman çizelgeleri ve 90 günlük hedefler için net bir teklif için bizimle iletişime geçin: arda.mtg@gmail.com veya WhatsApp: +905514268881.',
    bullets: [
      'Modüler (à la carte): her hizmeti tek başına seçin (her biri net kapsam ve SLA ile).',
      'Birden fazla hizmeti birleştiren indirimli paketler.',
      'Her hizmet tek başına veya indirimli paketlerde sunulmaktadır. Detaylar ve fiyatlar için bizimle iletişime geçin: arda.mtg@gmail.com veya WhatsApp: +905514268881.',
    ],
    visual: {
      type: 'image',
      ...srcset('https://images.unsplash.com/photo-1522071820081-009f0129c71c'),
      alt: 'Basit fiyatlandırma genel görünümü.',
    },
  },
]

