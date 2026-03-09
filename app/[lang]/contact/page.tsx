import { getDictionary } from '../../../lib/dictionary';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export default async function Contact({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;
    const dict = await getDictionary(lang as any);

    return (
        <div className="bg-slate-50 min-h-screen py-16 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">{dict.navigation.contact}</h1>
                    <div className="w-24 h-1 bg-[var(--color-primary)] mx-auto mt-8 rounded"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Contact Information Cards */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">{dict.contact.title}</h2>

                        <a href="tel:+995591959607" className="flex items-center p-6 bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all group">
                            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--color-primary)] transition-colors">
                                <Phone className="w-6 h-6 text-[var(--color-primary)] group-hover:text-amber-500 transition-colors" />
                            </div>
                            <div className="ml-6">
                                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">{dict.contact.phone}</p>
                                <p className="text-lg font-semibold text-gray-900">+995 591 95 96 07</p>
                            </div>
                        </a>

                        <a href="https://wa.me/995591959607" target="_blank" rel="noopener noreferrer" className="flex items-center p-6 bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all group">
                            <div className="w-14 h-14 bg-[#25D366]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#25D366] transition-colors">
                                <MessageCircle className="w-6 h-6 text-[#25D366] group-hover:text-white transition-colors" />
                            </div>
                            <div className="ml-6">
                                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">WhatsApp</p>
                                <p className="text-lg font-semibold text-gray-900">+995 591 95 96 07</p>
                            </div>
                        </a>

                        <a href="mailto:zarqua.g1996@gmail.com" className="flex items-center p-6 bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all group">
                            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--color-primary)] transition-colors">
                                <Mail className="w-6 h-6 text-[var(--color-primary)] group-hover:text-amber-500 transition-colors" />
                            </div>
                            <div className="ml-6">
                                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">{dict.contact.email}</p>
                                <p className="text-lg font-semibold text-gray-900">zarqua.g1996@gmail.com</p>
                            </div>
                        </a>

                        <div className="flex items-center p-6 bg-white rounded-2xl shadow-sm border border-slate-200">
                            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                                <MapPin className="w-6 h-6 text-[var(--color-primary)]" />
                            </div>
                            <div className="ml-6">
                                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">მისამართი</p>
                                <p className="text-lg font-semibold text-gray-900">{dict.contact.address}</p>
                            </div>
                        </div>

                    </div>

                    {/* Contact Form Placeholder */}
                    <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200 p-8 md:p-10">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8 relative inline-block">
                            {dict.contact.formTitle}
                            <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-amber-500 rounded"></span>
                        </h2>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">{dict.contact.nameLabel}</label>
                                <input type="text" id="name" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all" placeholder={dict.contact.namePlaceholder} />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">{dict.contact.phoneLabel}</label>
                                <input type="tel" id="phone" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all" placeholder={dict.contact.phonePlaceholder} />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">{dict.contact.messageLabel}</label>
                                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none transition-all" placeholder={dict.contact.messagePlaceholder}></textarea>
                            </div>
                            <button type="button" className="w-full bg-[var(--color-primary)] text-white font-bold py-4 px-4 rounded-xl hover:bg-[var(--color-primary-dark)] transition-colors shadow-md">
                                {dict.contact.submit}
                            </button>
                        </form>
                    </div>

                </div>

            </div>
        </div>
    );
}
