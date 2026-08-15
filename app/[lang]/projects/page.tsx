import { getDictionary } from '../../../lib/dictionary';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import ProjectsGrid from '../../components/ProjectsGrid';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const titles = {
        ka: 'პროექტები | დასრულებული საგზაო სქემები',
        en: 'Projects | Completed Traffic Schemes',
        ru: 'Проекты | Завершенные дорожные схемы'
    };
    const desc = {
        ka: 'ჩვენ მიერ დასრულებული საგზაო მოძრაობის ორგანიზების სქემების გალერეა. იხილეთ ჩვენი პროექტები.',
        en: 'Gallery of completed traffic organization schemes by our team. View our projects.',
        ru: 'Галерея завершенных схем организации дорожного движения. Посмотрите наши проекты.'
    };
    const url = lang === 'ka' ? `https://www.sqemebi.ge/projects` : `https://www.sqemebi.ge/${lang}/projects`;
    
    return {
        title: titles[lang as keyof typeof titles] || titles.ka,
        description: desc[lang as keyof typeof desc] || desc.ka,
        alternates: {
            canonical: url,
            languages: {
                'ka': 'https://www.sqemebi.ge/projects',
                'en': 'https://www.sqemebi.ge/en/projects',
                'ru': 'https://www.sqemebi.ge/ru/projects',
            }
        },
        openGraph: {
            url,
            title: titles[lang as keyof typeof titles] || titles.ka,
            description: desc[lang as keyof typeof desc] || desc.ka,
        }
    };
}

// =====================================================
// პროექტების სია — სურათები /public/projects/ საქაღალდეში
// სურათების სახელები: project-1.jpg ... project-9.jpg
// =====================================================
const projectImages = [
    '/projects/project-1.jpg',
    '/projects/project-2.jpg',
    '/projects/project-3.jpg',
    '/projects/project-4.jpg',
    '/projects/project-5.jpg',
    '/projects/project-6.jpg',
    '/projects/project-7.jpg',
    '/projects/project-8.jpg',
    '/projects/project-9.jpg',
];

export default async function Projects({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;
    const dict = await getDictionary(lang as any);

    const projects = [
        {
            id: 1,
            title: '',
            category: lang === 'ka' ? 'დასრულებული საგზაო მოძრაობის სქემა' : lang === 'ru' ? 'Завершенная схема движения' : 'Completed Traffic Scheme',
            location: '',
            image: projectImages[0],
            isCompleted: true,
        },
        {
            id: 2,
            title: '',
            category: lang === 'ka' ? 'ღობის მონტაჟი-დემონტაჟი' : lang === 'ru' ? 'Монтаж/Демонтаж забора' : 'Fence Installation/Dismantling',
            location: '',
            image: projectImages[1],
        },
        {
            id: 3,
            title: '',
            category: lang === 'ka' ? 'შესასვლელ-გამოსასვლელი საავტომობილო გზის მოპირკეთება' : lang === 'ru' ? 'Мощение подъездной дороги' : 'Paving of Access Road',
            location: '',
            image: projectImages[2],
        },
        {
            id: 4,
            title: '',
            category: lang === 'ka' ? 'შესასვლელ-გამოსასვლელი საავტომობილო გზის მოპირკეთება' : lang === 'ru' ? 'Мощение подъездной дороги' : 'Paving of Access Road',
            location: '',
            image: projectImages[3],
        },
        {
            id: 5,
            title: '',
            category: lang === 'ka' ? 'დასრულებული საგზაო მოძრაობის სქემა' : lang === 'ru' ? 'Завершенная схема движения' : 'Completed Traffic Scheme',
            location: '',
            image: projectImages[4],
            isCompleted: true,
        },
        {
            id: 6,
            title: '',
            category: lang === 'ka' ? 'დასრულებული საგზაო მოძრაობის სქემა' : lang === 'ru' ? 'Завершенная схема движения' : 'Completed Traffic Scheme',
            location: '',
            image: projectImages[5],
            isCompleted: true,
        },
        {
            id: 7,
            title: '',
            category: lang === 'ka' ? 'დასრულებული საგზაო მოძრაობის სქემა' : lang === 'ru' ? 'Завершенная схема движения' : 'Completed Traffic Scheme',
            location: '',
            image: projectImages[6],
            isCompleted: true,
        },
        {
            id: 8,
            title: '',
            category: lang === 'ka' ? 'ღობის მონტაჟი-დემონტაჟი' : lang === 'ru' ? 'Монтаж/Демонтаж забора' : 'Fence Installation/Dismantling',
            location: '',
            image: projectImages[7],
        },
        {
            id: 9,
            title: '',
            category: lang === 'ka' ? 'დასრულებული საგზაო მოძრაობის სქემა' : lang === 'ru' ? 'Завершенная схема движения' : 'Completed Traffic Scheme',
            location: '',
            image: projectImages[8],
            isCompleted: true,
        },
    ];

    const labelViewAll = lang === 'ka' ? 'ყველა პროექტის ნახვა' : lang === 'ru' ? 'Показать все проекты' : 'View All Projects';
    const labelCollapse = lang === 'ka' ? 'ნაკლების ნახვა' : lang === 'ru' ? 'Скрыть' : 'Show Less';
    const labelZoom = lang === 'ka' ? '🔍 გადიდება' : lang === 'ru' ? '🔍 Увеличить' : '🔍 Zoom';
    const labelAlt = lang === 'ka' ? 'პროექტის ფოტო' : lang === 'ru' ? 'Фото проекта' : 'Project photo';

    return (
        <div className="bg-slate-50 min-h-screen py-12 sm:py-16 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-10 sm:mb-16">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{dict.navigation.projects}</h1>
                    <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg px-4">
                        {dict.projects.subtitle}
                    </p>
                    <div className="w-20 sm:w-24 h-1 bg-[var(--color-primary)] mx-auto mt-6 rounded"></div>
                </div>

                {/* Interactive Grid (client component) */}
                <ProjectsGrid
                    projects={projects}
                    labelViewAll={labelViewAll}
                    labelCollapse={labelCollapse}
                    labelZoom={labelZoom}
                    labelAlt={labelAlt}
                />

                {/* CTA */}
                <div className="bg-slate-900 rounded-2xl p-8 sm:p-10 lg:p-12 text-center text-white border-b-4 border-amber-500 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 -mt-16 -mr-16 w-48 sm:w-64 h-48 sm:h-64 bg-[var(--color-primary-dark)] rounded-full opacity-20 blur-3xl pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-36 sm:w-48 h-36 sm:h-48 bg-amber-500 rounded-full opacity-10 blur-3xl pointer-events-none"></div>
                    <div className="relative z-10">
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">{dict.projects.ctaTitle}</h2>
                        <p className="text-blue-100 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
                            {dict.projects.ctaDesc}
                        </p>
                        <Link
                            href={lang === 'ka' ? '/contact' : `/${lang}/contact`}
                            className="inline-flex justify-center items-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-xl bg-amber-500 text-slate-900 hover:bg-amber-400 hover:scale-105 transition-all shadow-lg"
                        >
                            {dict.hero.cta}
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}
