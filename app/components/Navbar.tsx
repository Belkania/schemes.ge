'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Globe, Phone } from 'lucide-react';
import { useState } from 'react';

// Helper: build a locale-aware path
// For 'ka' (default), paths have no prefix: /services, /contact, etc.
// For 'en' and 'ru', paths include the prefix: /en/services, /ru/contact
function localePath(lang: string, path: string) {
    if (lang === 'ka') return path || '/';
    return `/${lang}${path}`;
}

export default function Navbar({ dict, lang }: { dict: any; lang: string }) {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const switchLanguage = (newLang: string) => {
        if (!pathname) return '/';

        // Determine the current "raw" path without any locale prefix
        const nonDefaultLocales = ['en', 'ru'];
        let rawPath = pathname;
        for (const locale of nonDefaultLocales) {
            if (pathname.startsWith(`/${locale}/`)) {
                rawPath = pathname.slice(`/${locale}`.length);
                break;
            } else if (pathname === `/${locale}`) {
                rawPath = '/';
                break;
            }
        }
        // rawPath is now the clean path (e.g. '/', '/services', '/contact')

        return localePath(newLang, rawPath === '/' ? '' : rawPath);
    };

    const navLinks = [
        { href: localePath(lang, ''), label: dict.navigation.home },
        { href: localePath(lang, '/about'), label: dict.navigation.about },
        { href: localePath(lang, '/services'), label: dict.navigation.services },
        { href: localePath(lang, '/projects'), label: dict.navigation.projects },
        { href: localePath(lang, '/blog'), label: dict.navigation.blog },
        { href: localePath(lang, '/contact'), label: dict.navigation.contact },
    ];

    return (
        <nav className="bg-[var(--color-background)] shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 sm:h-20">
                    {/* Logo */}
                    <Link href={localePath(lang, '')} className="flex-shrink-0 flex items-center gap-2">
                        <Image
                            src="/icon-192.png"
                            alt="სქემები.ge — სატრანსპორტო სქემები ლოგო"
                            width={40}
                            height={40}
                            className="rounded-lg"
                        />
                        <span className="font-bold text-lg sm:text-xl text-[var(--color-primary)]">სქემები.ge</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-1 xl:gap-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-gray-600 hover:text-[var(--color-primary)] px-2 xl:px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap"
                            >
                                {link.label}
                            </Link>
                        ))}

                        {/* Language Switcher */}
                        <div className="flex items-center gap-1 border-l pl-3 ml-1">
                            <Globe className="w-4 h-4 text-gray-400 hidden xl:block" />
                            {(['ka', 'en', 'ru'] as const).map((l) => (
                                <Link key={l} href={switchLanguage(l)}
                                    className={`text-sm px-1 ${lang === l ? 'font-bold text-[var(--color-primary)]' : 'text-gray-500 hover:text-gray-700'}`}>
                                    {l.toUpperCase()}
                                </Link>
                            ))}
                        </div>

                        <a href="tel:+995591959607"
                            className="ml-2 bg-[var(--color-primary)] text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-[var(--color-primary-dark)] transition-colors whitespace-nowrap">
                            {dict.contact.callUs}
                        </a>
                    </div>

                    {/* Mobile: language + hamburger */}
                    <div className="flex items-center gap-2 lg:hidden">
                        <div className="flex items-center gap-1.5 bg-slate-50 border border-gray-100 rounded-full px-3 py-1">
                            {(['ka', 'en', 'ru'] as const).map((l) => (
                                <Link key={l} href={switchLanguage(l)}
                                    className={`text-xs font-medium ${lang === l ? 'text-[var(--color-primary)] font-bold' : 'text-gray-500'}`}>
                                    {l.toUpperCase()}
                                </Link>
                            ))}
                        </div>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="lg:hidden border-t border-gray-100 bg-white shadow-lg">
                    <div className="px-4 pt-3 pb-4 space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="flex items-center px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-[var(--color-primary)] hover:bg-blue-50 transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="pt-2 border-t border-gray-100">
                            <a href="tel:+995591959607"
                                className="flex items-center justify-center gap-2 w-full bg-[var(--color-primary)] text-white px-4 py-3 rounded-xl font-semibold text-base hover:bg-[var(--color-primary-dark)] transition-colors">
                                <Phone className="w-5 h-5" />
                                {dict.contact.callUs}
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
