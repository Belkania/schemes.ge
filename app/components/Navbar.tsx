'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Globe } from 'lucide-react';
import { useState } from 'react';

export default function Navbar({ dict, lang }: { dict: any; lang: string }) {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const switchLanguage = (newLang: string) => {
        if (!pathname) return '/';
        const segments = pathname.split('/');
        segments[1] = newLang;
        return segments.join('/');
    };

    const navLinks = [
        { href: `/${lang}`, label: dict.navigation.home },
        { href: `/${lang}/about`, label: dict.navigation.about },
        { href: `/${lang}/services`, label: dict.navigation.services },
        { href: `/${lang}/projects`, label: dict.navigation.projects },
        { href: `/${lang}/blog`, label: dict.navigation.blog },
        { href: `/${lang}/contact`, label: dict.navigation.contact },
    ];

    return (
        <nav className="bg-[var(--color-background)] shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    <div className="flex items-center">
                        <Link href={`/${lang}`} className="flex-shrink-0 flex items-center">
                            {/* Logo text for SEO and Brand */}
                            <span className="font-bold text-xl text-[var(--color-primary)]">Schemes.ge</span>
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-gray-600 hover:text-[var(--color-primary)] px-3 py-2 rounded-md text-sm font-medium transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}

                        {/* Language Switcher */}
                        <div className="flex items-center space-x-2 border-l pl-4">
                            <Globe className="w-4 h-4 text-gray-400" />
                            <Link href={switchLanguage('ka')} className={`text-sm ${lang === 'ka' ? 'font-bold text-[var(--color-primary)]' : 'text-gray-500 hover:text-gray-700'}`}>KA</Link>
                            <Link href={switchLanguage('en')} className={`text-sm ${lang === 'en' ? 'font-bold text-[var(--color-primary)]' : 'text-gray-500 hover:text-gray-700'}`}>EN</Link>
                            <Link href={switchLanguage('ru')} className={`text-sm ${lang === 'ru' ? 'font-bold text-[var(--color-primary)]' : 'text-gray-500 hover:text-gray-700'}`}>RU</Link>
                        </div>

                        <a href="tel:+995591959607" className="bg-[var(--color-primary)] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[var(--color-primary-dark)] transition-colors">
                            {dict.contact.callUs}
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[var(--color-primary)]"
                        >
                            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="flex items-center space-x-4 px-3 py-2">
                            <Link href={switchLanguage('ka')} className={`text-sm ${lang === 'ka' ? 'font-bold text-[var(--color-primary)]' : 'text-gray-500'}`}>KA</Link>
                            <Link href={switchLanguage('en')} className={`text-sm ${lang === 'en' ? 'font-bold text-[var(--color-primary)]' : 'text-gray-500'}`}>EN</Link>
                            <Link href={switchLanguage('ru')} className={`text-sm ${lang === 'ru' ? 'font-bold text-[var(--color-primary)]' : 'text-gray-500'}`}>RU</Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
