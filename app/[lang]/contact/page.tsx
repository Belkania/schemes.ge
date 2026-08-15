import { getDictionary } from '../../../lib/dictionary';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const titles = {
        ka: 'დაგვიკავშირდით | სატრანსპორტო სქემა',
        en: 'Contact Us | Transport Schemes',
        ru: 'Связаться | Транспортные схемы'
    };
    const desc = {
        ka: 'გადაგვიკავშირდით სატრანსპორტო სქემის მომზადებლად. დაგვირეკეთ: +995 591 95 96 07. დროებითი საგზაო სქემა, სამშენებლო სქემა, მერიასთან შეთანხმება — sqemebi.ge',
        en: 'Contact us to order transport schemes. Call: +995 591 95 96 07. Temporary traffic schemes, construction schemes, city hall approval.',
        ru: 'Свяжитесь с нами для заказа транспортных схем. Звоните: +995 591 95 96 07. Временные схемы, строительные схемы, согласование с мэрией.'
    };
    const url = lang === 'ka' ? `https://www.sqemebi.ge/contact` : `https://www.sqemebi.ge/${lang}/contact`;
    
    return {
        title: titles[lang as keyof typeof titles] || titles.ka,
        description: desc[lang as keyof typeof desc] || desc.ka,
        alternates: {
            canonical: url,
            languages: {
                'ka': 'https://www.sqemebi.ge/contact',
                'en': 'https://www.sqemebi.ge/en/contact',
                'ru': 'https://www.sqemebi.ge/ru/contact',
            }
        },
        openGraph: {
            url,
            title: titles[lang as keyof typeof titles] || titles.ka,
            description: desc[lang as keyof typeof desc] || desc.ka,
            images: [{ url: 'https://www.sqemebi.ge/og-image.png', width: 1200, height: 630, alt: 'Sqemebi.ge — კონტაქტი' }],
        }
    };
}

export default async function Contact({
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
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{dict.navigation.contact}</h1>
                    <div className="w-20 sm:w-24 h-1 bg-[var(--color-primary)] mx-auto rounded"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">

                    {/* Contact Info Cards */}
                    <div className="space-y-4 sm:space-y-6">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">{dict.contact.title}</h2>

                        <a href="tel:+995591959607" className="flex items-center p-4 sm:p-6 bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all group">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--color-primary)] transition-colors">
                                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--color-primary)] group-hover:text-amber-500 transition-colors" />
                            </div>
                            <div className="ml-4 sm:ml-6">
                                <p className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">{dict.contact.phone}</p>
                                <p className="text-base sm:text-lg font-semibold text-gray-900">+995 591 95 96 07</p>
                            </div>
                        </a>

                        <a href="https://wa.me/995591959607" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 sm:p-6 bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all group">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#25D366] transition-colors">
                                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#25D366] group-hover:text-white transition-colors" />
                            </div>
                            <div className="ml-4 sm:ml-6">
                                <p className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">WhatsApp</p>
                                <p className="text-base sm:text-lg font-semibold text-gray-900">+995 591 95 96 07</p>
                            </div>
                        </a>

                        <a href="mailto:sqemebi.ge@gmail.com" className="flex items-center p-4 sm:p-6 bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all group">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--color-primary)] transition-colors">
                                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--color-primary)] group-hover:text-amber-500 transition-colors" />
                            </div>
                            <div className="ml-4 sm:ml-6 min-w-0">
                                <p className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">{dict.contact.email}</p>
                                <p className="text-sm sm:text-lg font-semibold text-gray-900 truncate">sqemebi.ge@gmail.com</p>
                            </div>
                        </a>

                        <div className="flex items-center p-4 sm:p-6 bg-white rounded-2xl shadow-sm border border-slate-200">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--color-primary)]" />
                            </div>
                            <div className="ml-4 sm:ml-6">
                                <p className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">
                                    {lang === 'ka' ? 'მისამართი' : lang === 'ru' ? 'Адрес' : 'Address'}
                                </p>
                                <p className="text-base sm:text-lg font-semibold text-gray-900">{dict.contact.address}</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200 p-6 sm:p-8 lg:p-10">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 relative inline-block">
                            {dict.contact.formTitle}
                            <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-amber-500 rounded"></span>
                        </h2>
                        <form className="space-y-4 sm:space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">{dict.contact.nameLabel}</label>
                                <input type="text" id="name"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all text-sm sm:text-base"
                                    placeholder={dict.contact.namePlaceholder} />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">{dict.contact.phoneLabel}</label>
                                <input type="tel" id="phone"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all text-sm sm:text-base"
                                    placeholder={dict.contact.phonePlaceholder} />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">{dict.contact.messageLabel}</label>
                                <textarea id="message" rows={4}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all resize-none text-sm sm:text-base"
                                    placeholder={dict.contact.messagePlaceholder}></textarea>
                            </div>
                            <button type="button"
                                className="w-full bg-[var(--color-primary)] text-white font-bold py-3 sm:py-4 px-4 rounded-xl hover:bg-[var(--color-primary-dark)] transition-colors shadow-md text-sm sm:text-base">
                                {dict.contact.submit}
                            </button>
                        </form>
                    </div>

                </div>

            </div>
        </div>
    );
}
