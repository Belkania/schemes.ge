import { NextRequest, NextResponse } from 'next/server';
import { locales, defaultLocale } from './lib/i18n';

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Skip Next.js internals, static assets, and SEO files
    if (
        pathname.startsWith('/_next/') ||
        pathname.startsWith('/api/') ||
        pathname === '/sitemap.xml' ||
        pathname === '/robots.txt' ||
        pathname.match(/\.(.*)$/)
    ) {
        return NextResponse.next();
    }

    // Check which locale is in the pathname
    const pathnameLocale = locales.find(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameLocale) {
        // If it's the default locale (ka), redirect to the clean URL (remove /ka prefix)
        if (pathnameLocale === defaultLocale) {
            const newPathname = pathname === `/${defaultLocale}`
                ? '/'
                : pathname.slice(`/${defaultLocale}`.length);
            const url = request.nextUrl.clone();
            url.pathname = newPathname;
            return NextResponse.redirect(url, 308);
        }
        // Other locales (en, ru) — pass through
        return NextResponse.next();
    }

    // No locale in pathname — this is a clean Georgian URL
    // Internally rewrite to /ka/... so Next.js can resolve [lang] param
    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}${pathname === '/' ? '' : pathname}`;
    return NextResponse.rewrite(url);
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|sitemap.xml|robots.txt|favicon.ico).*)'],
};
