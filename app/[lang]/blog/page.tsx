import { getDictionary } from '../../../lib/dictionary';
import Link from 'next/link';

import { blogData } from '../../../lib/blogData';

export default async function BlogIndex({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;
    const dict = await getDictionary(lang as any);
    const currentBlogData = blogData[lang] ? Object.values(blogData[lang]) : Object.values(blogData['ka']);

    return (
        <div className="bg-slate-50 min-h-screen py-16 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{dict.navigation.blog || 'ბლოგი'}</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">
                        {dict.blog.subtitle}
                    </p>
                    <div className="w-24 h-1 bg-[var(--color-primary)] mx-auto rounded"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {currentBlogData.map((post) => (
                        <Link href={`/${lang}/blog/${post.slug}`} key={post.slug} className="block group">
                            <article className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 h-full hover:shadow-xl hover:-translate-y-1 transition-all group-hover:border-amber-400">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-sm font-bold text-slate-800 bg-amber-200/50 px-3 py-1 rounded-full border border-amber-300">
                                        {post.keyword}
                                    </span>
                                    <time className="text-sm text-gray-500">{post.date}</time>
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                                    {post.title}
                                </h2>
                                <p className="text-slate-600 mb-6 flex-grow">
                                    {post.excerpt}
                                </p>
                                <span className="text-amber-600 font-bold inline-flex items-center group-hover:text-amber-500 transition-colors">
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
