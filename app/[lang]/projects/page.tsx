import { getDictionary } from '../../../lib/dictionary';
import { Download, FileText, MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default async function Projects({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;
    const dict = await getDictionary(lang as any);

    // Placeholder projects data
    const projects = [
        {
            id: 1,
            title: dict.projects.list[0].title,
            category: dict.projects.list[0].category,
            image: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            location: dict.projects.list[0].location,
            pdfUrl: "#",
        },
        {
            id: 2,
            title: dict.projects.list[1].title,
            category: dict.projects.list[1].category,
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            location: dict.projects.list[1].location,
            pdfUrl: "#",
        },
        {
            id: 3,
            title: dict.projects.list[2].title,
            category: dict.projects.list[2].category,
            image: "https://images.unsplash.com/photo-1504307651254-35680f49e4d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            location: dict.projects.list[2].location,
            pdfUrl: "#",
        }
    ];

    return (
        <div className="bg-slate-50 min-h-screen py-16 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">{dict.navigation.projects}</h1>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                        {dict.projects.subtitle}
                    </p>
                    <div className="w-24 h-1 bg-[var(--color-primary)] mx-auto mt-8 rounded"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col">

                            <div className="relative h-64 w-full overflow-hidden bg-slate-200">
                                {/* Image Placeholder */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                                    style={{ backgroundImage: `url(${project.image})` }}
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                                <div className="absolute top-4 left-4 z-10">
                                    <span className="bg-amber-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-md">
                                        {project.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[var(--color-primary)] transition-colors">{project.title}</h3>

                                <div className="flex items-center text-gray-500 mb-6 text-sm">
                                    <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                                    <span>{project.location}</span>
                                </div>

                                <div className="pt-5 mt-auto border-t border-slate-100">
                                    <a
                                        href={project.pdfUrl}
                                        className="flex justify-between items-center text-[var(--color-primary)] font-semibold hover:text-[var(--color-primary-dark)] transition-colors group/link"
                                    >
                                        <span className="flex items-center">
                                            <FileText className="w-5 h-5 mr-2 group-hover/link:translate-x-1 transition-transform" />
                                            {dict.projects.viewPdf}
                                        </span>
                                        <Download className="w-5 h-5 text-gray-400 group-hover/link:text-[var(--color-primary-dark)] transition-colors" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center text-white border-b-4 border-amber-500 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-[var(--color-primary-dark)] rounded-full opacity-20 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-48 h-48 bg-amber-500 rounded-full opacity-10 blur-3xl"></div>
                    <div className="relative z-10">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4">{dict.projects.ctaTitle}</h2>
                        <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                            {dict.projects.ctaDesc}
                        </p>
                        <Link
                            href={`/${lang}/contact`}
                            className="inline-flex justify-center items-center px-8 py-4 text-base font-semibold rounded-md bg-amber-500 text-slate-900 hover:bg-amber-400 hover:scale-105 transition-all shadow-lg"
                        >
                            {dict.hero.cta}
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}
