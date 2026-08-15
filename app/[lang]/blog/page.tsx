import { getDictionary } from '../../../lib/dictionary';
import Link from 'next/link';
import { blogData } from '../../../lib/blogData';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const titles = {
        ka: 'ბლოგი | საგზაო მოძრაობის ორგანიზება',
        en: 'Blog | Traffic Organization',
        ru: 'Блог | Организация дорожного движения'
    };
    const desc = {
        ka: 'წაიკითხეთ ჩვენი ბლოგი საგზაო სქემების, უსაფრთხოების და რეგულაციების შესახებ.',
        en: 'Read our blog about traffic schemes, safety, and regulations.',
        ru: 'Читайте наш блог о дорожных схемах, безопасности и правилах.'
    };
    const url = lang === 'ka' ? `https://www.sqemebi.ge/blog` : `https://www.sqemebi.ge/${lang}/blog`;
    
    return {
        title: titles[lang as keyof typeof titles] || titles.ka,
        description: desc[lang as keyof typeof desc] || desc.ka,
        alternates: {
            canonical: url,
            languages: {
                'ka': 'https://www.sqemebi.ge/blog',
                'en': 'https://www.sqemebi.ge/en/blog',
                'ru': 'https://www.sqemebi.ge/ru/blog',
            }
        },
        openGraph: {
            url,
            title: titles[lang as keyof typeof titles] || titles.ka,
            description: desc[lang as keyof typeof desc] || desc.ka,
            images: [{ url: 'https://www.sqemebi.ge/og-image.png', width: 1200, height: 630, alt: 'Sqemebi.ge Blog' }],
        }
    };
}
export default async function BlogIndex({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;
    const dict = await getDictionary(lang as any);
    const currentBlogData = blogData[lang] ? Object.values(blogData[lang]) : Object.values(blogData['ka']);

    return (
        <div className="bg-slate-50 min-h-screen py-12 sm:py-16 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-10 sm:mb-16">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{dict.navigation.blog || 'ბლოგი'}</h1>
                    <p className="text-sm sm:text-base lg:text-xl text-gray-600 max-w-2xl mx-auto mb-4 px-4">
                        {dict.blog.subtitle}
                    </p>
                    <div className="w-20 sm:w-24 h-1 bg-[var(--color-primary)] mx-auto rounded"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 mb-16">
                    {currentBlogData.map((post) => (
                        <Link href={lang === 'ka' ? `/blog/${post.slug}` : `/${lang}/blog/${post.slug}`} key={post.slug} className="block group">
                            <article className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5 sm:p-8 h-full hover:shadow-xl hover:-translate-y-1 transition-all group-hover:border-amber-400">
                                <div className="flex items-center justify-between mb-3 sm:mb-4">
                                    <span className="text-xs sm:text-sm font-bold text-slate-800 bg-amber-200/50 px-2.5 sm:px-3 py-1 rounded-full border border-amber-300">
                                        {post.keyword}
                                    </span>
                                    <time dateTime={post.date} className="text-xs sm:text-sm text-gray-500">{post.date}</time>
                                </div>
                                <h2 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-[var(--color-primary)] transition-colors leading-snug">
                                    {post.title}
                                </h2>
                                <p className="text-slate-600 mb-4 sm:mb-6 flex-grow text-sm sm:text-base leading-relaxed">
                                    {post.excerpt}
                                </p>
                                <span className="text-amber-600 font-bold inline-flex items-center group-hover:text-amber-500 transition-colors text-sm sm:text-base">
                                    {dict.blog.readMore} <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                                </span>
                            </article>
                        </Link>
                    ))}
                </div>

            </div>
        </div>
    );
}
