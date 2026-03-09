import { getDictionary } from '../../../lib/dictionary';
import { CheckCircle, Shield, FileText, ArrowRight, Route, AlertTriangle, Briefcase, Map, Truck, Droplets, Cog } from 'lucide-react';

export default async function Services({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;
    const dict = await getDictionary(lang as any);

    const services = [
        { title: dict.services.list[0].title, desc: dict.services.list[0].desc, icon: <Route className="w-8 h-8" /> },
        { title: dict.services.list[1].title, desc: dict.services.list[1].desc, icon: <AlertTriangle className="w-8 h-8" /> },
        { title: dict.services.list[2].title, desc: dict.services.list[2].desc, icon: <FileText className="w-8 h-8" /> },
        { title: dict.services.list[3].title, desc: dict.services.list[3].desc, icon: <Briefcase className="w-8 h-8" /> },
        { title: dict.services.list[4].title, desc: dict.services.list[4].desc, icon: <Map className="w-8 h-8" /> },
        { title: dict.services.list[5].title, desc: dict.services.list[5].desc, icon: <Truck className="w-8 h-8" /> },
        { title: dict.services.list[6].title, desc: dict.services.list[6].desc, icon: <Droplets className="w-8 h-8" /> },
        { title: dict.services.list[7].title, desc: dict.services.list[7].desc, icon: <Cog className="w-8 h-8" /> }
    ];

    return (
        <div className="bg-slate-50 min-h-screen py-16 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">{dict.navigation.services}</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        {dict.services.subtitle}
                    </p>
                    <div className="w-24 h-1 bg-[var(--color-primary)] mx-auto mt-8 rounded"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {services.map((service, idx) => (
                        <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-2 group transition-all duration-300">
                            <div className="w-16 h-16 bg-blue-50 group-hover:bg-[var(--color-primary)] rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
                                <div className="text-[var(--color-primary)] group-hover:text-emerald-400 mix-blend-luminosity">
                                    {service.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[var(--color-primary)] transition-colors">{service.title}</h3>
                            <p className="text-slate-600">{service.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center text-white border-b-4 border-amber-500 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-[var(--color-primary-dark)] rounded-full opacity-20 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-48 h-48 bg-amber-500 rounded-full opacity-10 blur-3xl"></div>
                    <div className="relative z-10">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4">{dict.services.ctaTitle}</h2>
                        <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                            {dict.services.ctaDesc}
                        </p>
                        <a
                            href={`/${lang}/contact`}
                            className="inline-flex justify-center items-center px-8 py-4 text-base font-semibold rounded-md bg-amber-500 text-slate-900 hover:bg-amber-400 hover:scale-105 transition-all shadow-lg"
                        >
                            {dict.hero.cta}
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}
