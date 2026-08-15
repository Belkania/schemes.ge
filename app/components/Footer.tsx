import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer({ dict, lang }: { dict: any; lang: string }) {
    return (
        <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    <div className="col-span-1 md:col-span-2">
                        <span className="font-bold text-xl text-white block mb-4">Sqemebi.ge</span>
                        <p className="text-slate-400 mb-4 max-w-sm">
                            {dict.hero.subtitle}
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-4">{dict.navigation.services}</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href={lang === 'ka' ? '/services' : `/${lang}/services`} className="text-slate-400 hover:text-white text-sm transition-colors">
                                    {dict.navigation.services}
                                </Link>
                            </li>
                            <li>
                                <Link href={lang === 'ka' ? '/projects' : `/${lang}/projects`} className="text-slate-400 hover:text-white text-sm transition-colors">
                                    {dict.navigation.projects}
                                </Link>
                            </li>
                            <li>
                                <Link href={lang === 'ka' ? '/about' : `/${lang}/about`} className="text-slate-400 hover:text-white text-sm transition-colors">
                                    {dict.navigation.about}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-4">{dict.navigation.contact}</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center text-slate-400 text-sm">
                                <Phone className="w-4 h-4 mr-2 text-amber-500" />
                                <a href="tel:+995591959607" className="hover:text-white transition-colors">+995 591 959 607</a>
                            </li>
                            <li className="flex items-center text-slate-400 text-sm">
                                <Mail className="w-4 h-4 mr-2 text-amber-500" />
                                <a href="mailto:sqemebi.ge@gmail.com" className="hover:text-white transition-colors">sqemebi.ge@gmail.com</a>
                            </li>
                            <li className="flex items-center text-slate-400 text-sm">
                                <MapPin className="w-4 h-4 mr-2 text-amber-500" />
                                {dict.contact.address}
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-slate-500 text-sm">
                        &copy; {new Date().getFullYear()} Sqemebi.ge. All rights reserved.
                    </p>
                    <div className="flex space-x-4 mt-4 md:mt-0 text-sm text-slate-500">
                        <Link href="/" className="hover:text-white">ქართული</Link>
                        <Link href="/en" className="hover:text-white">English</Link>
                        <Link href="/ru" className="hover:text-white">Русский</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
