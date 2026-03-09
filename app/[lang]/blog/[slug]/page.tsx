import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Calendar, User, ArrowLeft, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { getDictionary } from '../../../../lib/dictionary';
import { locales } from '../../../../lib/i18n';

import { blogData } from '../../../../lib/blogData';

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
    const { lang, slug } = await params;
    const currentBlogData = blogData[lang] || blogData['ka'];
    const post = currentBlogData[slug];

    if (!post) {
        return { title: 'Not Found' };
    }

    return {
        title: post.title,
        description: post.description,
        keywords: [post.keyword, 'საგზაო მოძრაობის ორგანიზების სქემები', 'საქართველო', 'თბილისი'],
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

    const post = currentBlogData[slug];

    if (!post) {
        notFound();
    }

    return (
        <div className="bg-slate-50 min-h-screen py-12 md:py-20 lg:py-24 border-t border-slate-200">
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-200">

                <Link
                    href={`/${lang}/blog`}
                    className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-[var(--color-primary)] mb-8 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    {lang === 'ka' ? 'უკან დაბრუნება (ბლოგი)' : lang === 'ru' ? 'Вернуться назад (Блог)' : 'Go Back (Blog)'}
                </Link>

                <article>
                    <header className="mb-12">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-gray-500 border-b border-gray-100 pb-8">
                            <div className="flex items-center">
                                <Calendar className="w-5 h-5 mr-2" />
                                <time>{post.date}</time>
                            </div>
                            <div className="flex items-center">
                                <User className="w-5 h-5 mr-2" />
                                <span>{lang === 'ka' ? 'Schemes.ge - საინჟინრო გუნდი' : lang === 'ru' ? 'Schemes.ge - Инженерная команда' : 'Schemes.ge - Engineering Team'}</span>
                            </div>
                            <span className="text-sm font-bold text-slate-800 bg-amber-200/50 px-3 py-1 rounded-full border border-amber-300">
                                {post.keyword}
                            </span>
                        </div>
                    </header>

                    <div className="prose prose-lg max-w-none text-gray-700 prose-headings:text-gray-900 prose-a:text-[var(--color-primary)] hover:prose-a:text-[var(--color-primary-dark)]">
                        {post.content}
                    </div>

                    <footer className="mt-16 pt-8 border-t border-slate-200 text-center bg-slate-900 rounded-2xl p-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-[var(--color-primary-dark)] rounded-full opacity-20 blur-3xl"></div>
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold text-white mb-4">{dict.services.ctaTitle || 'გჭირდებათ დახმარება?'}</h3>
                            <p className="text-slate-300 mb-6">{dict.services.ctaDesc || 'ჩვენ გაგიწევთ სრულ პროფესიონალურ მომსახურებას ნებისმიერი სირთულის საგზაო მოძრაობის სქემის მომზადებასა და შეთანხმებაში.'}</p>
                            <Link
                                href={`/${lang}/contact`}
                                className="inline-flex justify-center items-center px-8 py-3 text-base font-bold rounded-md bg-amber-500 text-slate-900 hover:bg-amber-400 transition-colors shadow-lg"
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
