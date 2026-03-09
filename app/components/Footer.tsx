import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer({ dict, lang }: { dict: any; lang: string }) {
    return (
        <footer className="bg-[var(--color-background)] border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    <div className="col-span-1 md:col-span-2">
                        <span className="font-bold text-xl text-[var(--color-primary)] block mb-4">Schemes.ge</span>
                        <p className="text-gray-600 mb-4 max-w-sm">
                            {dict.hero.subtitle}
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">{dict.navigation.services}</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href={`/${lang}/services`} className="text-gray-600 hover:text-[var(--color-primary)] text-sm transition-colors">
                                    {dict.navigation.services}
                                </Link>
                            </li>
                            <li>
                                <Link href={`/${lang}/projects`} className="text-gray-600 hover:text-[var(--color-primary)] text-sm transition-colors">
                                    {dict.navigation.projects}
                                </Link>
                            </li>
                            <li>
                                <Link href={`/${lang}/about`} className="text-gray-600 hover:text-[var(--color-primary)] text-sm transition-colors">
                                    {dict.navigation.about}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">{dict.navigation.contact}</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center text-gray-600 text-sm">
                                <Phone className="w-4 h-4 mr-2 text-[var(--color-primary)]" />
                                <a href="tel:+995591959607" className="hover:text-[var(--color-primary)] transition-colors">+995 591 959 607</a>
                            </li>
                            <li className="flex items-center text-gray-600 text-sm">
                                <Mail className="w-4 h-4 mr-2 text-[var(--color-primary)]" />
                                <a href="mailto:zarqua.g1996@gmail.com" className="hover:text-[var(--color-primary)] transition-colors">zarqua.g1996@gmail.com</a>
                            </li>
                            <li className="flex items-center text-gray-600 text-sm">
                                <MapPin className="w-4 h-4 mr-2 text-[var(--color-primary)]" />
                                {dict.contact.address}
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} Schemes.ge. All rights reserved.
                    </p>
                    <div className="flex space-x-4 mt-4 md:mt-0 text-sm text-gray-500">
                        <Link href="/ka" className="hover:text-[var(--color-primary)]">ქართული</Link>
                        <Link href="/en" className="hover:text-[var(--color-primary)]">English</Link>
                        <Link href="/ru" className="hover:text-[var(--color-primary)]">Русский</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
