import { getDictionary } from '../../lib/dictionary';
import Link from 'next/link';
import { ArrowRight, CheckCircle, MapPin, ShieldCheck, Building2, Award, Clock, Route } from 'lucide-react';

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
      <section className="relative bg-slate-900 border-b-4 border-amber-500 text-white py-20 lg:py-32 overflow-hidden shadow-2xl">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1574340321262-d48e8a6daea7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {dict.hero.title}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-200">
              {dict.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={`/${lang}/contact`}
                className="inline-flex justify-center items-center px-8 py-4 text-base font-semibold rounded-md bg-[#facc15] text-gray-900 hover:bg-yellow-500 transition-colors"
              >
                {dict.hero.cta}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href={`/${lang}/services`}
                className="inline-flex justify-center items-center px-8 py-4 text-base font-semibold rounded-md bg-slate-50/10 text-white hover:bg-slate-50/20 transition-colors border border-white/20"
              >
                {dict.hero.secondaryCta}
              </Link>
            </div>
          </div>
        </div>
      </section>

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
                href={`/${lang}/services`}
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
    </div>
  );
}
