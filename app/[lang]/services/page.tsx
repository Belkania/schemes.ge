import { getDictionary } from '../../../lib/dictionary';
import { CheckCircle, Route, Shield, AlertTriangle, Briefcase, Truck, Droplets, Cog, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const titles = {
        ka: 'სატრანსპორტო სქემა — ჩვენი სერვისები',
        en: 'Transport Schemes — Our Services',
        ru: 'Транспортные Схемы — Наши Услуги'
    };
    const desc = {
        ka: 'სატრანსპორტო სქემა: დროებითი საგზაო სქემა, სამშენებლო სქემა, შესასვლელ-გამოსასვლელი სქემა, მერიასთან შეთანხმება, შუქნიშნების დაგეგმარება და სხვა. sqemebi.ge',
        en: 'Transport schemes services: temporary traffic schemes, construction schemes, entry/exit schemes, city hall approval, traffic light planning and more.',
        ru: 'Транспортные схемы: временные дорожные схемы, строительные схемы, схемы въезда-выезда, согласование с мэрией и планирование светофоров.'
    };
    const url = lang === 'ka' ? `https://www.sqemebi.ge/services` : `https://www.sqemebi.ge/${lang}/services`;
    
    return {
        title: titles[lang as keyof typeof titles] || titles.ka,
        description: desc[lang as keyof typeof desc] || desc.ka,
        alternates: {
            canonical: url,
            languages: {
                'ka': 'https://www.sqemebi.ge/services',
                'en': 'https://www.sqemebi.ge/en/services',
                'ru': 'https://www.sqemebi.ge/ru/services',
            }
        },
        openGraph: {
            url,
            title: titles[lang as keyof typeof titles] || titles.ka,
            description: desc[lang as keyof typeof desc] || desc.ka,
            images: [{ url: 'https://www.sqemebi.ge/og-image.png', width: 1200, height: 630, alt: 'Sqemebi.ge — სატრანსპორტო სქემები' }],
        }
    };
}
export default async function Services({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;
    const dict = await getDictionary(lang as any);

    const icons = [
        <Route className="w-7 h-7 sm:w-8 sm:h-8" />,
        <Shield className="w-7 h-7 sm:w-8 sm:h-8" />,
        <AlertTriangle className="w-7 h-7 sm:w-8 sm:h-8" />,
        <Briefcase className="w-7 h-7 sm:w-8 sm:h-8" />,
        <Truck className="w-7 h-7 sm:w-8 sm:h-8" />,
        <Cog className="w-7 h-7 sm:w-8 sm:h-8" />,
        <Droplets className="w-7 h-7 sm:w-8 sm:h-8" />,
    ];

    const services = (dict.services.list as any[]).map((s, i) => ({
        title: s.title,
        desc: s.desc,
        icon: icons[i],
    }));

    return (
        <div className="bg-slate-50 min-h-screen py-12 sm:py-16 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-10 sm:mb-16">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        {lang === 'ka'
                            ? 'სატრანსპორტო სქემები — პროფესიონალური საგზაო სქემების მომზადება'
                            : lang === 'en'
                            ? 'Transport Scheme Services — Professional Traffic Organization'
                            : 'Транспортные схемы — Профессиональная организация движения'}
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg italic px-4">
                        {dict.services.subtitle}
                    </p>
                    <div className="w-20 sm:w-24 h-1 bg-[var(--color-primary)] mx-auto mt-6 rounded"></div>
                </div>

                {/* Master Service Card */}
                <div className="mb-12 sm:mb-20">
                    <div className="bg-slate-900 rounded-2xl sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-16 shadow-2xl border-b-8 border-amber-500 relative overflow-hidden text-white">
                        <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-[var(--color-primary)] rounded-full opacity-10 blur-3xl -mr-24 sm:-mr-32 -mt-24 sm:-mt-32 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-amber-500 rounded-full opacity-5 blur-3xl -ml-12 sm:-ml-16 -mb-12 sm:-mb-16 pointer-events-none"></div>

                        <div className="relative z-10">
                            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-10 lg:gap-12">
                                <div className="w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-amber-500 rounded-2xl sm:rounded-3xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-amber-500/20">
                                    <Route className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-slate-900" />
                                </div>
                                <div className="text-center sm:text-left flex-grow">
                                    <span className="inline-block px-3 sm:px-4 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-500 text-xs sm:text-sm font-bold uppercase tracking-widest mb-3 sm:mb-4">
                                        {lang === 'ka' ? 'მთავარი სერვისი' : lang === 'en' ? 'Main Service' : 'Основная услуга'}
                                    </span>
                                    <h2 className="text-xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-4 sm:mb-6 leading-tight">
                                        {services[0].title}
                                    </h2>
                                    <p className="text-blue-100 text-sm sm:text-base lg:text-xl leading-relaxed mb-6 sm:mb-10 max-w-4xl">
                                        {services[0].desc}
                                    </p>

                                    <h4 className="text-amber-500 font-bold text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 uppercase tracking-wider flex items-center justify-center sm:justify-start">
                                        <div className="w-6 sm:w-8 h-px bg-amber-500 mr-3 hidden sm:block"></div>
                                        {lang === 'ka' ? 'აღნიშნული სერვისი მოიცავს:' : lang === 'en' ? 'This service includes:' : 'Данная услуга включает:'}
                                    </h4>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                                        {services.slice(1).map((sub, idx) => (
                                            <div key={idx} className="flex items-start bg-white/5 border border-white/10 p-4 sm:p-5 rounded-xl sm:rounded-2xl hover:bg-white/10 transition-colors group">
                                                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-amber-500/20 rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                                                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500" />
                                                </div>
                                                <div>
                                                    <h5 className="font-bold text-white text-sm sm:text-base mb-1">{sub.title}</h5>
                                                    <p className="text-blue-100/60 text-xs sm:text-sm leading-snug">{sub.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-white rounded-2xl sm:rounded-[2rem] p-8 sm:p-10 lg:p-16 text-center border border-slate-200 shadow-xl relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-extrabold mb-4 sm:mb-6">{dict.services.ctaTitle}</h2>
                        <p className="text-gray-600 text-sm sm:text-base lg:text-xl mb-6 sm:mb-10 max-w-3xl mx-auto leading-relaxed">
                            {dict.services.ctaDesc}
                        </p>
                        <Link
                            href={lang === 'ka' ? '/contact' : `/${lang}/contact`}
                            className="inline-flex justify-center items-center px-8 sm:px-12 py-4 sm:py-5 text-sm sm:text-base lg:text-lg font-bold rounded-xl sm:rounded-2xl bg-slate-900 text-white hover:bg-slate-800 hover:scale-105 transition-all shadow-xl shadow-slate-900/20 group"
                        >
                            {dict.hero.cta}
                            <ArrowRight className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>

                {/* Internal Linking */}
                <div className="mt-10 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Link
                        href={lang === 'ka' ? '/projects' : `/${lang}/projects`}
                        className="flex items-center justify-between p-5 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-amber-400 transition-all group"
                    >
                        <div>
                            <p className="text-xs font-semibold text-amber-600 uppercase tracking-wider mb-1">
                                {lang === 'ka' ? 'გალერეა' : lang === 'ru' ? 'Галерея' : 'Gallery'}
                            </p>
                            <p className="font-bold text-gray-900">{dict.navigation.projects}</p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
                    </Link>
                    <Link
                        href={lang === 'ka' ? '/blog' : `/${lang}/blog`}
                        className="flex items-center justify-between p-5 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-amber-400 transition-all group"
                    >
                        <div>
                            <p className="text-xs font-semibold text-amber-600 uppercase tracking-wider mb-1">
                                {lang === 'ka' ? 'სტატიები' : lang === 'ru' ? 'Статьи' : 'Articles'}
                            </p>
                            <p className="font-bold text-gray-900">{dict.navigation.blog}</p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
