'use client';

import { useState } from 'react';
import { MapPin, X, ChevronDown, ChevronUp } from 'lucide-react';

interface Project {
    id: number;
    title: string;
    category: string;
    location: string;
    image: string;
    isCompleted?: boolean;
}

interface ProjectsGridProps {
    projects: Project[];
    labelViewAll: string;
    labelCollapse: string;
    labelZoom: string;
    labelAlt: string;
}

export default function ProjectsGrid({ projects, labelViewAll, labelCollapse, labelZoom, labelAlt }: ProjectsGridProps) {
    const [showAll, setShowAll] = useState(false);
    const [lightboxImg, setLightboxImg] = useState<string | null>(null);

    const visibleProjects = showAll ? projects : projects.slice(0, 3);

    return (
        <>
            {/* Project Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
                {visibleProjects.map((project) => (
                    <div
                        key={project.id}
                        onClick={() => setLightboxImg(project.image)}
                        className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col cursor-pointer"
                    >
                        {/* Image */}
                        <div className="relative h-56 sm:h-64 lg:h-72 w-full overflow-hidden bg-slate-200">
                            <div
                                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                                style={{ backgroundImage: `url(${project.image})` }}
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

                            {/* Category badge */}
                            <div className="absolute top-4 left-4 z-10">
                                <span className={`${project.isCompleted ? 'bg-green-500 text-white' : 'bg-amber-500 text-slate-900'} text-xs sm:text-sm font-bold px-3 py-1.5 rounded-full uppercase tracking-wide shadow-md`}>
                                    {project.category}
                                </span>
                            </div>

                            {/* Zoom hint on hover */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
                                <div className="bg-black/50 text-white text-sm font-semibold px-4 py-2 rounded-full backdrop-blur-sm">
                                    {labelZoom}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Show All / Collapse Button */}
            {projects.length > 3 && (
                <div className="flex justify-center mb-12 sm:mb-16">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="w-full sm:w-auto flex justify-center items-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-slate-900 hover:bg-slate-800 hover:scale-105 transition-all shadow-lg text-base"
                    >
                        {showAll ? (
                            <>
                                {labelCollapse}
                                <ChevronUp className="w-5 h-5" />
                            </>
                        ) : (
                            <>
                                {labelViewAll}
                                <ChevronDown className="w-5 h-5" />
                            </>
                        )}
                    </button>
                </div>
            )}

            {/* Lightbox Modal */}
            {lightboxImg && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-2 sm:p-4 backdrop-blur-md"
                    onClick={() => setLightboxImg(null)}
                >
                    {/* Fixed Close Button for Mobile/Desktop */}
                    <button
                        onClick={() => setLightboxImg(null)}
                        className="fixed top-4 right-4 sm:top-6 sm:right-6 z-[60] w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center shadow-xl transition-colors backdrop-blur-md border border-white/20"
                        aria-label="დახურვა"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    <div
                        className="relative flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Natural-size image — no container background */}
                        <img
                            src={lightboxImg}
                            alt={labelAlt}
                            className="block rounded-lg sm:rounded-2xl shadow-2xl ring-1 ring-white/10"
                            style={{
                                maxWidth: '100vw',
                                maxHeight: '100vh',
                                width: 'auto',
                                height: 'auto',
                                objectFit: 'contain'
                            }}
                        />
                    </div>
                </div>
            )}
        </>
    );
}
