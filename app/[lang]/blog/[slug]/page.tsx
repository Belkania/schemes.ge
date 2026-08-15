import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Calendar, User, ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { getDictionary } from '../../../../lib/dictionary';
import { locales } from '../../../../lib/i18n';

import { blogData } from '../../../../lib/blogData';

function localePath(lang: string, path: string): string {
  return lang === 'ka' ? path : `/${lang}${path}`;
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const { lang, slug } = await params;
  const currentBlogData = blogData[lang] || blogData['ka'];
  const post = currentBlogData[slug];
  const baseUrl = 'https://www.sqemebi.ge';

  if (!post) {
    return { title: 'Not Found' };
  }

  const canonical = lang === 'ka'
    ? `${baseUrl}/blog/${slug}`
    : `${baseUrl}/${lang}/blog/${slug}`;

  const keywordsByLang: Record<string, string[]> = {
    ka: [post.keyword, 'საგზაო მოძრაობის ორგანიზების სქემები', 'საქართველო', 'თბილისი', 'sqemebi.ge'],
    en: [post.keyword, 'traffic organization schemes', 'Georgia', 'Tbilisi', 'sqemebi.ge'],
    ru: [post.keyword, 'схемы организации движения', 'Грузия', 'Тбилиси', 'sqemebi.ge'],
  };

  return {
    title: post.title,
    description: post.description,
    keywords: keywordsByLang[lang] || keywordsByLang.ka,
    alternates: {
      canonical,
      languages: {
        'ka': `${baseUrl}/blog/${slug}`,
        'en': `${baseUrl}/en/blog/${slug}`,
        'ru': `${baseUrl}/ru/blog/${slug}`,
      },
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: canonical,
      siteName: 'Sqemebi.ge',
      locale: lang === 'ka' ? 'ka_GE' : lang === 'en' ? 'en_US' : 'ru_RU',
      type: 'article',
      publishedTime: post.date,
      images: [{ url: `${baseUrl}/og-image.png`, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [`${baseUrl}/og-image.png`],
    },
  };
}

export function generateStaticParams() {
  const slugs = Object.keys(blogData['ka']);
  const paths = [];

  for (const locale of locales) {
    for (const slug of slugs) {
      paths.push({ lang: locale, slug });
    }
  }

  return paths;
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const dict = await getDictionary(lang as any);
  const currentBlogData = blogData[lang] || blogData['ka'];
  const baseUrl = 'https://www.sqemebi.ge';

  const post = currentBlogData[slug];

  if (!post) {
    notFound();
  }

  const canonical = lang === 'ka'
    ? `${baseUrl}/blog/${slug}`
    : `${baseUrl}/${lang}/blog/${slug}`;

  const authorName = lang === 'ka'
    ? 'Sqemebi.ge — საინჟინრო გუნდი'
    : lang === 'ru'
    ? 'Sqemebi.ge — Инженерная команда'
    : 'Sqemebi.ge — Engineering Team';

  const blogPostSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: 'Sqemebi.ge',
      url: baseUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Sqemebi.ge',
      url: baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo-new.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonical,
    },
    image: `${baseUrl}/og-image.png`,
    url: canonical,
    inLanguage: lang === 'ka' ? 'ka' : lang === 'en' ? 'en' : 'ru',
    keywords: post.keyword,
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-16 lg:py-24 border-t border-slate-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostSchema) }}
      />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-5 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-200">

        <Link
          href={localePath(lang, '/blog')}
          className="inline-flex items-center text-xs sm:text-sm font-medium text-gray-500 hover:text-[var(--color-primary)] mb-6 sm:mb-8 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2" />
          {lang === 'ka' ? 'უკან დაბრუნება (ბლოგი)' : lang === 'ru' ? 'Вернуться назад (Блог)' : 'Go Back (Blog)'}
        </Link>

        <article>
          <header className="mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-gray-500 border-b border-gray-100 pb-6 sm:pb-8">
              <div className="flex items-center text-sm sm:text-base">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                <time dateTime={post.date}>{post.date}</time>
              </div>
              <div className="flex items-center text-sm sm:text-base">
                <User className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                <span>{authorName}</span>
              </div>
              <span className="text-xs sm:text-sm font-bold text-slate-800 bg-amber-200/50 px-2.5 sm:px-3 py-1 rounded-full border border-amber-300">
                {post.keyword}
              </span>
            </div>
          </header>

          <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none text-gray-700 prose-headings:text-gray-900 prose-a:text-[var(--color-primary)] hover:prose-a:text-[var(--color-primary-dark)]">
            {post.content}
          </div>

          {/* Internal linking: Related section */}
          <div className="mt-10 sm:mt-14 p-6 bg-slate-50 rounded-2xl border border-slate-200">
            <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-4">
              {lang === 'ka' ? 'დაკავშირებული გვერდები' : lang === 'ru' ? 'Связанные страницы' : 'Related Pages'}
            </h2>
            <div className="flex flex-wrap gap-3">
              <Link
                href={localePath(lang, '/services')}
                className="inline-flex items-center px-4 py-2 rounded-xl bg-white border border-slate-200 text-sm font-semibold text-gray-700 hover:border-amber-400 hover:text-amber-600 transition-colors"
              >
                {dict.navigation.services} <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Link>
              <Link
                href={localePath(lang, '/projects')}
                className="inline-flex items-center px-4 py-2 rounded-xl bg-white border border-slate-200 text-sm font-semibold text-gray-700 hover:border-amber-400 hover:text-amber-600 transition-colors"
              >
                {dict.navigation.projects} <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Link>
              <Link
                href={localePath(lang, '/blog')}
                className="inline-flex items-center px-4 py-2 rounded-xl bg-white border border-slate-200 text-sm font-semibold text-gray-700 hover:border-amber-400 hover:text-amber-600 transition-colors"
              >
                {dict.navigation.blog} <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Link>
            </div>
          </div>

          <footer className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-slate-200 text-center bg-slate-900 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-16 -mr-16 w-48 sm:w-64 h-48 sm:h-64 bg-[var(--color-primary-dark)] rounded-full opacity-20 blur-3xl pointer-events-none"></div>
            <div className="relative z-10">
              <h3 className="text-lg sm:text-2xl font-bold text-white mb-3 sm:mb-4">{dict.services.ctaTitle || 'გჭირდებათ დახმარება?'}</h3>
              <p className="text-slate-300 text-sm sm:text-base mb-5 sm:mb-6">{dict.services.ctaDesc || 'ჩვენ გაგიწევთ სრულ პროფესიონალურ მომსახურებას.'}</p>
              <Link
                href={localePath(lang, '/contact')}
                className="inline-flex justify-center items-center px-6 sm:px-8 py-3 text-sm sm:text-base font-bold rounded-xl bg-amber-500 text-slate-900 hover:bg-amber-400 transition-colors shadow-lg"
              >
                {dict.hero.cta}
              </Link>
            </div>
          </footer>

        </article>

      </main>
    </div>
  );
}
