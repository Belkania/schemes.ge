import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { NextRequest, NextResponse } from 'next/server';
import { defaultLocale, locales } from './lib/i18n';

function getLocale(request: NextRequest): string {
    const headers = new Headers(request.headers);
    const acceptLanguage = headers.get('accept-language');

    if (acceptLanguage) {
        const headersObject = { 'accept-language': acceptLanguage };
        const languages = new Negotiator({ headers: headersObject }).languages();

        try {
            return match(languages, locales, defaultLocale);
        } catch {
            return defaultLocale;
        }
    }

    return defaultLocale;
}

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Skip API routes, public assets, etc.
    if (
        pathname.startsWith(`/_next/`) ||
        pathname.startsWith(`/api/`) ||
        pathname.match(/\.(.*)$/)
    ) {
        return NextResponse.next();
    }

    // Check if there is any supported locale in the pathname
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) return NextResponse.next();

    // Redirect if there is no locale
    const locale = getLocale(request);
    request.nextUrl.pathname = `/${locale}${pathname}`;

    return NextResponse.redirect(request.nextUrl);
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
