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
        { title: dict.services.list[1].title, desc: dict.services.list[1].desc, icon: <Shield className="w-8 h-8" /> },
        { title: dict.services.list[2].title, desc: dict.services.list[2].desc, icon: <AlertTriangle className="w-8 h-8" /> },
        { title: dict.services.list[3].title, desc: dict.services.list[3].desc, icon: <Briefcase className="w-8 h-8" /> },
        { title: dict.services.list[4].title, desc: dict.services.list[4].desc, icon: <Truck className="w-8 h-8" /> },
        { title: dict.services.list[5].title, desc: dict.services.list[5].desc, icon: <Cog className="w-8 h-8" /> },
        { title: dict.services.list[6].title, desc: dict.services.list[6].desc, icon: <Droplets className="w-8 h-8" /> }
    ];

    return (
        <div className="bg-slate-50 min-h-screen py-16 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">{dict.navigation.services}</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg italic">
                        {dict.services.subtitle}
                    </p>
                    <div className="w-24 h-1 bg-[var(--color-primary)] mx-auto mt-8 rounded"></div>
                </div>

                {/* Master Service Section */}
                <div className="mb-20">
                    <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-16 shadow-2xl border-b-8 border-amber-500 relative overflow-hidden text-white transition-all hover:shadow-slate-400/50">
                        {/* Background accents */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-primary)] rounded-full opacity-10 blur-3xl -mr-32 -mt-32"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500 rounded-full opacity-5 blur-3xl -ml-16 -mb-16"></div>

                        <div className="relative z-10">
                            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
                                <div className="w-24 h-24 sm:w-32 sm:h-32 bg-amber-500 rounded-3xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-amber-500/20">
                                    <Route className="w-12 h-12 sm:w-16 sm:h-16 text-slate-900" />
                                </div>
                                <div className="text-center lg:text-left flex-grow">
                                    <span className="inline-block px-4 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-500 text-sm font-bold uppercase tracking-widest mb-4">
                                        Main Service / მთავარი სერვისი
                                    </span>
                                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
                                        {services[0].title}
                                    </h2>
                                    <p className="text-blue-100 text-xl leading-relaxed mb-10 max-w-4xl">
                                        {services[0].desc}
                                    </p>

                                    {/* Sub-services listed as components of the main one */}
                                    <h4 className="text-amber-500 font-bold text-lg mb-6 uppercase tracking-wider flex items-center justify-center lg:justify-start">
                                        <div className="w-8 h-px bg-amber-500 mr-3 hidden sm:block"></div>
                                        {lang === 'ka' ? 'აღნიშნული სერვისი მოიცავს:' : lang === 'en' ? 'This service includes:' : 'Данная услуга включает:'}
                                    </h4>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                                        {services.slice(1).map((subService, idx) => (
                                            <div key={idx} className="flex items-start bg-white/5 border border-white/10 p-5 rounded-2xl hover:bg-white/10 transition-colors group">
                                                <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                                                    <CheckCircle className="w-5 h-5 text-amber-500" />
                                                </div>
                                                <div>
                                                    <h5 className="font-bold text-white mb-1">{subService.title}</h5>
                                                    <p className="text-blue-100/60 text-sm leading-snug">{subService.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action Banner */}
                <div className="bg-white rounded-[2rem] p-10 md:p-16 text-center text-gray-900 border border-slate-200 shadow-xl relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">{dict.services.ctaTitle}</h2>
                        <p className="text-gray-600 text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
                            {dict.services.ctaDesc}
                        </p>
                        <a
                            href={`/${lang}/contact`}
                            className="inline-flex justify-center items-center px-12 py-5 text-lg font-bold rounded-2xl bg-slate-900 text-white hover:bg-slate-800 hover:scale-105 transition-all shadow-xl shadow-slate-900/20 group"
                        >
                            {dict.hero.cta}
                            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}
