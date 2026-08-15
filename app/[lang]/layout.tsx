import type { Metadata } from 'next';
import { Inter, Noto_Sans_Georgian } from 'next/font/google';
import './globals.css';
import { locales } from '../../lib/i18n';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingContact from '../components/FloatingContact';
import { getDictionary } from '../../lib/dictionary';

// Use English standard font
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

// Use Georgian font 
const notoSansGeorgian = Noto_Sans_Georgian({
  subsets: ['georgian'],
  variable: '--font-noto-georgian'
});

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;

  const siteInfo = {
    ka: {
      title: 'სატრანსპორტო სქემები — პროფესიონალური საგზაო სქემების მომზადება',
      description: 'სატრანსპორტო სქემა — პროფესიონალური მომზადება და ოფიციალური შეთანხმება. დროებითი საგზაო სქემა, სამშენებლო სქემა, შესასვლელ-გამოსასვლელი სქემა. მერიასა და საპატრულო პოლიციასთან შეთანხმება თბილისსა და საქართველოს მასშტაბით. sqemebi.ge',
    },
    en: {
      title: 'Transport Schemes Georgia — Professional Traffic Organization',
      description: 'Professional transport scheme preparation and official approval with Tbilisi City Hall and Patrol Police. Temporary traffic schemes, construction detour plans, entry/exit schemes across Georgia.',
    },
    ru: {
      title: 'Транспортные схемы Грузия — Профессиональная организация движения',
      description: 'Профессиональная подготовка транспортных схем и согласование с мэрией Тбилиси и патрульной полицией. Временные, строительные схемы и схемы въезда-выезда по всей Грузии.',
    }
  };

  const currentInfo = siteInfo[lang as keyof typeof siteInfo] || siteInfo.ka;
  const baseUrl = 'https://www.sqemebi.ge';

  return {
    title: {
      default: currentInfo.title,
      template: `%s | Sqemebi.ge`
    },
    description: currentInfo.description,
    keywords: lang === 'ka' ? [
      'სატრანსპორტო სქემები',
      'სატრანსპორტო სქემა',
      'საგზაო მოძრაობის ორგანიზება',
      'საგზაო მოძრაობის ორგანიზების სქემა',
      'დროებითი საგზაო სქემა',
      'სამშენებლო საგზაო სქემა',
      'სქემების მომზადება',
      'სქემა მერიასთან შეთანხმება',
      'საპატრულო პოლიციასთან შეთანხმება',
      'სამშენებლო ტექნიკის განთავსების სქემა',
      'შესასვლელ-გამოსასვლელი სქემა',
      'sqemebi.ge',
      'სქემები.ge',
      'საგზაო სქემები თბილისი',
      'საგზაო სქემები საქართველო',
      'სატრანსპორტო სქემა თბილისი',
      'სქემა მგეგმარეობელი'
    ] : lang === 'en' ? [
      'transport schemes Georgia',
      'transport scheme',
      'traffic organization scheme',
      'temporary traffic scheme Tbilisi',
      'road scheme approval Georgia',
      'construction traffic scheme',
      'traffic detour plan Georgia',
      'sqemebi.ge',
      'Tbilisi transport scheme',
      'road traffic scheme Georgia'
    ] : [
      'транспортные схемы Грузия',
      'транспортная схема',
      'схема организации движения',
      'временная схема дорожного движения',
      'согласование схемы Тбилиси',
      'схема движения строительство',
      'схема въезда выезда',
      'sqemebi.ge'
    ],
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: lang === 'ka' ? '/' : `/${lang}`,
      languages: {
        'ka': '/',
        'en': '/en',
        'ru': '/ru',
      },
    },
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
        { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
        { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
        { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
      ],
      apple: [{ url: '/icon-192.png', sizes: '180x180', type: 'image/png' }],
      shortcut: '/favicon.ico',
    },
    openGraph: {
      title: currentInfo.title,
      description: currentInfo.description,
      url: lang === 'ka' ? baseUrl : `${baseUrl}/${lang}`,
      siteName: 'სქემები.ge',
      locale: lang === 'ka' ? 'ka_GE' : lang === 'en' ? 'en_US' : 'ru_RU',
      type: 'website',
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'სქემები.ge — სატრანსპორტო სქემები საქართველოში' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: currentInfo.title,
      description: currentInfo.description,
      images: ['/og-image.png'],
    },
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as any);

  return (
    <html lang={lang} className="scroll-smooth">
      <body className={`${inter.variable} ${notoSansGeorgian.variable} font-sans antialiased bg-[var(--color-background)] text-gray-800 flex flex-col min-h-screen`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["ProfessionalService", "LocalBusiness"],
              "name": "Sqemebi.ge",
              "alternateName": "სქემები.ge",
              "url": "https://www.sqemebi.ge",
              "logo": "https://www.sqemebi.ge/logo-new.png",
              "image": "https://www.sqemebi.ge/og-image.png",
              "description": "Professional transport scheme preparation and official approval with Tbilisi City Hall and Patrol Police across Georgia.",
              "telephone": "+995591959607",
              "email": "sqemebi.ge@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Tbilisi",
                "addressRegion": "Tbilisi",
                "addressCountry": "GE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 41.6938,
                "longitude": 44.8015
              },
              "areaServed": {
                "@type": "Country",
                "name": "Georgia"
              },
              "openingHours": "Mo-Fr 09:00-18:00",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+995591959607",
                "contactType": "customer service",
                "email": "sqemebi.ge@gmail.com",
                "availableLanguage": ["Georgian", "Russian", "English"]
              },
              "sameAs": [
                "https://www.facebook.com/sqemebi"
              ],
              "priceRange": "$$",
              "currenciesAccepted": "GEL",
              "paymentAccepted": "Cash, Bank Transfer"
            })
          }}
        />
        <Navbar dict={dict} lang={lang} />
        <main className="flex-grow">
          {children}
        </main>
        <Footer dict={dict} lang={lang} />
        <FloatingContact />
      </body>
    </html>
  );
}
