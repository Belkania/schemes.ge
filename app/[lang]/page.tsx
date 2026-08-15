import { getDictionary } from '../../lib/dictionary';
import { locales } from '../../lib/i18n';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle, MapPin, ShieldCheck, Building2, Award, Clock, Route } from 'lucide-react';
import PhotoCollage from '../components/PhotoCollage';
import Testimonials from '../components/Testimonials';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const baseUrl = 'https://www.sqemebi.ge';

  const titles = {
    ka: 'სატრანსპორტო სქემები — პროფესიონალური საგზაო სქემების მომზადება | Sqemebi.ge',
    en: 'Transport Schemes Georgia — Professional Traffic Organization | Sqemebi.ge',
    ru: 'Транспортные схемы Грузия — Профессиональная организация движения | Sqemebi.ge',
  };
  const descriptions = {
    ka: 'სატრანსპორტო სქემა — პროფესიონალური მომზადება და ოფიციალური შეთანხმება. დროებითი საგზაო სქემა, სამშენებლო სქემა, შესასვლელ-გამოსასვლელი სქემა. მერიასა და საპატრულო პოლიციასთან შეთანხმება. sqemebi.ge',
    en: 'Professional transport scheme preparation and official approval with Tbilisi City Hall and Patrol Police. Temporary traffic schemes, construction detour plans, entry/exit schemes across Georgia.',
    ru: 'Профессиональная подготовка транспортных схем и согласование с мэрией Тбилиси и патрульной полицией. Временные, строительные схемы и схемы въезда-выезда по всей Грузии.',
  };

  const canonical = lang === 'ka' ? baseUrl : `${baseUrl}/${lang}`;

  return {
    title: titles[lang as keyof typeof titles] || titles.ka,
    description: descriptions[lang as keyof typeof descriptions] || descriptions.ka,
    alternates: {
      canonical,
      languages: {
        'ka': baseUrl,
        'en': `${baseUrl}/en`,
        'ru': `${baseUrl}/ru`,
      },
    },
    openGraph: {
      title: titles[lang as keyof typeof titles] || titles.ka,
      description: descriptions[lang as keyof typeof descriptions] || descriptions.ka,
      url: canonical,
      siteName: 'Sqemebi.ge',
      locale: lang === 'ka' ? 'ka_GE' : lang === 'en' ? 'en_US' : 'ru_RU',
      type: 'website',
      images: [{ url: `${baseUrl}/og-image.png`, width: 1200, height: 630, alt: 'Sqemebi.ge — სატრანსპორტო სქემები საქართველოში' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: titles[lang as keyof typeof titles] || titles.ka,
      description: descriptions[lang as keyof typeof descriptions] || descriptions.ka,
      images: [`${baseUrl}/og-image.png`],
    },
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as any);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-slate-900 border-b-4 border-amber-500 text-white py-16 sm:py-20 lg:py-28 overflow-hidden shadow-2xl">
        {/* Abstract Background pattern and glow */}
        <div className="absolute inset-0 opacity-15 bg-[url('https://images.unsplash.com/photo-1574340321262-d48e8a6daea7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Desktop: two-column grid | Mobile: stacked flex */}
          <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center gap-8">

            {/* 1. TITLE + BADGE — always first */}
            <div className="lg:col-span-6 flex flex-col justify-center items-start text-left order-1 lg:order-none">
              {/* Premium Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-6 animate-pulse">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                {lang === 'ka' ? 'ოფიციალური სერვისი' : lang === 'en' ? 'Official Service' : 'Официальный сервис'}
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold leading-[1.15] tracking-tight mb-6">
                {dict.hero.title}
              </h1>

              {/* Subtitle + buttons: hidden on mobile here, shown in block below */}
              <div className="hidden lg:block">
                <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl">
                  {dict.hero.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <Link
                    href={lang === 'ka' ? '/contact' : `/${lang}/contact`}
                    className="inline-flex justify-center items-center px-8 py-4 text-base font-bold rounded-xl bg-amber-500 text-slate-950 hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/20 active:scale-95 transition-all duration-200"
                  >
                    {dict.hero.cta}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <Link
                    href={lang === 'ka' ? '/services' : `/${lang}/services`}
                    className="inline-flex justify-center items-center px-8 py-4 text-base font-bold rounded-xl bg-slate-800/60 hover:bg-slate-800 text-white border border-slate-700/80 hover:border-slate-600 active:scale-95 transition-all duration-200 backdrop-blur-sm"
                  >
                    {dict.hero.secondaryCta}
                  </Link>
                </div>
              </div>
            </div>

            {/* 2. VIDEO — second on mobile, right column on desktop */}
            <div className="lg:col-span-6 w-full flex justify-center lg:justify-end order-2 lg:order-none">
              <div className="relative w-full max-w-md sm:max-w-xl lg:max-w-2xl xl:max-w-3xl group">
                {/* Glow behind video */}
                <div className="absolute -inset-2 bg-gradient-to-r from-amber-500/20 to-blue-500/20 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                {/* Visual Glassmorphic Frame */}
                <div className="rounded-[22px] overflow-hidden p-2.5 bg-slate-950/60 border border-slate-700/40 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                  <div className="rounded-[14px] overflow-hidden aspect-video relative bg-slate-900">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src="/hero-video.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. SUBTITLE + BUTTONS — third on mobile only (hidden on desktop, shown inside left column) */}
            <div className="lg:hidden order-3 flex flex-col gap-4">
              <p className="text-base text-slate-300 leading-relaxed">
                {dict.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={lang === 'ka' ? '/contact' : `/${lang}/contact`}
                  className="inline-flex justify-center items-center px-8 py-4 text-base font-bold rounded-xl bg-amber-500 text-slate-950 hover:bg-amber-400 active:scale-95 transition-all duration-200"
                >
                  {dict.hero.cta}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href={lang === 'ka' ? '/services' : `/${lang}/services`}
                  className="inline-flex justify-center items-center px-8 py-4 text-base font-bold rounded-xl bg-slate-800/60 text-white border border-slate-700/80 active:scale-95 transition-all duration-200"
                >
                  {dict.hero.secondaryCta}
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Photo Collage Section (Animated) */}
      <PhotoCollage />

      {/* Quick Services Overview - Hierarchical Redesign */}
      <section className="py-24 bg-slate-50 border-t border-slate-200 shadow-[inset_0_4px_6px_rgba(0,0,0,0.02)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">{dict.navigation.services}</h2>
            <div className="w-24 h-1 bg-[var(--color-primary)] mx-auto rounded mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg italic">
              {dict.home.servicesTitle}
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Primary Service Highlight Card */}
            <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-slate-200 mb-12 hover:shadow-2xl transition-all duration-500 overflow-hidden relative group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-slate-900 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-slate-200">
                  <Route className="w-10 h-10 text-amber-500" />
                </div>
                <span className="inline-block px-4 py-1 rounded-full bg-blue-50 text-[var(--color-primary)] text-xs font-bold uppercase tracking-widest mb-4">
                  {lang === 'ka' ? 'მთავარი სერვისი' : lang === 'en' ? 'Main Service' : 'Основная услуга'}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                  {(dict.home.servicesList as string[])[0]}
                </h3>

                {/* Horizontal Divider */}
                <div className="w-full flex items-center justify-center gap-4 mb-8">
                  <div className="h-px bg-slate-100 flex-grow"></div>
                  <span className="text-slate-400 text-xs font-bold uppercase tracking-tighter shrink-0 italic">
                    {lang === 'ka' ? 'სერვისი მოიცავს' : lang === 'en' ? 'Service Includes' : 'Услуга включает'}
                  </span>
                  <div className="h-px bg-slate-100 flex-grow"></div>
                </div>

                {/* Grid of sub-services inside the main card */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                  {(dict.home.servicesList as string[]).slice(1).map((service, index) => (
                    <div key={index} className="flex items-center p-4 bg-slate-50/50 rounded-xl border border-slate-100 text-left hover:bg-white hover:border-blue-200 hover:shadow-md transition-all group/item">
                      <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center mr-3 shadow-sm group-hover/item:bg-amber-500 transition-colors">
                        <CheckCircle className="w-4 h-4 text-amber-500 group-hover/item:text-white" />
                      </div>
                      <span className="text-gray-700 font-semibold text-sm leading-tight">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link
                href={lang === 'ka' ? '/services' : `/${lang}/services`}
                className="inline-flex items-center px-8 py-4 rounded-xl font-bold text-white bg-slate-900 hover:bg-slate-800 hover:scale-105 transition-all shadow-lg group"
              >
                {dict.home.viewAllServices}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility / Why Choose Us Section */}
      <section className="py-16 bg-white relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center pb-16">
            <div className="p-6">
              <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-4">
                <ShieldCheck className="w-8 h-8 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{dict.home.features[0].title}</h3>
              <p className="text-gray-600">{dict.home.features[0].desc}</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{dict.home.features[1].title}</h3>
              <p className="text-gray-600">{dict.home.features[1].desc}</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{dict.home.features[2].title}</h3>
              <p className="text-gray-600">{dict.home.features[2].desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Feedback / Testimonials */}
      <Testimonials lang={lang} />
    </div>
  );
}
