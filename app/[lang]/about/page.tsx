import { getDictionary } from '../../../lib/dictionary';
import { Shield, BookOpen, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const titles = {
        ka: 'ჩვენს შესახებ | სატრანსპორტო სქემა',
        en: 'About Us | Transport Schemes',
        ru: 'О Нас | Транспортные Схемы'
    };
    const desc = {
        ka: 'sqemebi.ge — სატრანსპორტო სქემის პროფესიონალური მომზადება და შეთანხმება თბილისსა და საქართველოში. მერიასა და საპატრულო პოლიციასთან ოფიციალური შეთანხმება.',
        en: 'sqemebi.ge — professional transport scheme preparation and approval in Georgia. Official coordination with city hall and patrol police.',
        ru: 'sqemebi.ge — профессиональная подготовка транспортных схем в Грузии. Официальное согласование с мэрией и патрульной полицией.'
    };
    const url = lang === 'ka' ? `https://www.sqemebi.ge/about` : `https://www.sqemebi.ge/${lang}/about`;
    
    return {
        title: titles[lang as keyof typeof titles] || titles.ka,
        description: desc[lang as keyof typeof desc] || desc.ka,
        alternates: {
            canonical: url,
            languages: {
                'ka': 'https://www.sqemebi.ge/about',
                'en': 'https://www.sqemebi.ge/en/about',
                'ru': 'https://www.sqemebi.ge/ru/about',
            }
        },
        openGraph: {
            url,
            title: titles[lang as keyof typeof titles] || titles.ka,
            description: desc[lang as keyof typeof desc] || desc.ka,
            images: [{ url: 'https://www.sqemebi.ge/og-image.png', width: 1200, height: 630, alt: 'Sqemebi.ge — ჩვენს შესახებ' }],
        }
    };
}
export default async function About({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;
    const dict = await getDictionary(lang as any);

    return (
        <div className="bg-slate-50 min-h-screen py-12 sm:py-16 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-10 sm:mb-16">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        {lang === 'ka'
                            ? 'სატრანსპორტო სქემები — ჩვენს შესახებ'
                            : lang === 'en'
                            ? 'About Sqemebi.ge — Transport Scheme Experts in Georgia'
                            : 'О нас — Эксперты транспортных схем в Грузии'}
                    </h1>
                    <div className="w-20 sm:w-24 h-1 bg-[var(--color-primary)] mx-auto rounded"></div>
                </div>

                <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200 overflow-hidden mb-16 transition-all hover:shadow-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* Left: About text */}
                        <div className="p-6 sm:p-10 lg:p-14 flex flex-col justify-center">
                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">{dict.about.title}</h2>
                            <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                                {dict.about.p1}
                            </p>
                            <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                                {dict.about.p2}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                {(dict.about.bullets as string[]).map((bullet, i) => (
                                    <div key={i} className="flex items-center text-gray-700">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                                        <span className="font-medium text-sm sm:text-base">{bullet}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right: Agreements */}
                        <div className="bg-slate-50 p-6 sm:p-10 lg:p-14 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-slate-200">
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 relative inline-block">
                                {dict.about.agreementsTitle}
                                <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-amber-500 rounded"></span>
                            </h3>
                            <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
                                {dict.about.agreementsDesc}
                            </p>

                            <ul className="space-y-4 sm:space-y-6">
                                <li className="flex items-start bg-white p-4 rounded-xl shadow-sm border border-slate-100 hover:-translate-y-1 transition-transform">
                                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 rounded-full flex items-center justify-center mr-4">
                                        <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500" />
                                    </div>
                                    <div>
                                        <h4 className="text-base sm:text-lg font-semibold text-gray-900">{dict.about.gov1}</h4>
                                        <p className="text-xs sm:text-sm text-gray-500">{dict.about.gov1Desc}</p>
                                    </div>
                                </li>

                                <li className="flex items-start bg-white p-4 rounded-xl shadow-sm border border-slate-100 hover:-translate-y-1 transition-transform">
                                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 rounded-full flex items-center justify-center mr-4">
                                        <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500" />
                                    </div>
                                    <div>
                                        <h4 className="text-base sm:text-lg font-semibold text-gray-900">{dict.about.gov2}</h4>
                                        <p className="text-xs sm:text-sm text-gray-500">{dict.about.gov2Desc}</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Internal Linking */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <Link
                        href={lang === 'ka' ? '/services' : `/${lang}/services`}
                        className="flex items-center justify-between p-5 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-amber-400 transition-all group"
                    >
                        <div>
                            <p className="text-xs font-semibold text-amber-600 uppercase tracking-wider mb-1">
                                {lang === 'ka' ? 'შეიტყვეთ' : lang === 'ru' ? 'Узнайте' : 'Explore'}
                            </p>
                            <p className="font-bold text-gray-900">{dict.navigation.services}</p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
                    </Link>
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
                        href={lang === 'ka' ? '/contact' : `/${lang}/contact`}
                        className="flex items-center justify-between p-5 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-amber-400 transition-all group"
                    >
                        <div>
                            <p className="text-xs font-semibold text-amber-600 uppercase tracking-wider mb-1">
                                {lang === 'ka' ? 'დაგვიკავშირდეთ' : lang === 'ru' ? 'Свяжитесь' : 'Get in Touch'}
                            </p>
                            <p className="font-bold text-gray-900">{dict.navigation.contact}</p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
                    </Link>
                </div>

            </div>
        </div>
    );
}
