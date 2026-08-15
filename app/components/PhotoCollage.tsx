'use client';

import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';

export default function PhotoCollage() {
    const [isVisible, setIsVisible] = useState(false);
    const [lightboxImg, setLightboxImg] = useState<string | null>(null);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15 } // Trigger when 15% of the section is visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const images = [
        "/projects/project-1.jpg", 
        "/projects/project-3.jpg", 
        "/projects/project-2.jpg", 
    ];

    return (
        <section className="py-20 sm:py-32 bg-slate-50 relative overflow-hidden" ref={sectionRef}>
            {/* Background decorative blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[500px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10 lg:gap-12 items-center w-full">
                    
                    {/* Photo 1 (Left) */}
                    <div 
                        onClick={() => setLightboxImg(images[0])}
                        className={`relative rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 transform 
                            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'} 
                            hover:-translate-y-4 hover:scale-[1.08] hover:shadow-[0_30px_60px_rgba(0,0,0,0.4)] z-10 hover:z-30 group aspect-[4/3] cursor-pointer`}
                        style={{ transitionDelay: '100ms' }}
                    >
                        <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/0 transition-colors duration-500 z-10"></div>
                        <img 
                            src={images[0]} 
                            alt="Collage 1" 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                        />
                        <div className="absolute inset-0 border-[6px] border-white/40 group-hover:border-amber-400/80 rounded-3xl pointer-events-none z-20 transition-colors duration-500"></div>
                        <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.3)] rounded-3xl pointer-events-none z-20"></div>
                    </div>

                    {/* Photo 2 (Center) */}
                    <div 
                        onClick={() => setLightboxImg(images[1])}
                        className={`relative rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 transform 
                            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'} 
                            hover:-translate-y-4 hover:scale-[1.08] hover:shadow-[0_30px_60px_rgba(0,0,0,0.4)] z-20 hover:z-30 group aspect-[4/3] cursor-pointer`}
                        style={{ transitionDelay: '300ms' }}
                    >
                        <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/0 transition-colors duration-500 z-10"></div>
                        <img 
                            src={images[1]} 
                            alt="Collage 2" 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                        />
                        <div className="absolute inset-0 border-[6px] border-white/40 group-hover:border-amber-400/80 rounded-3xl pointer-events-none z-20 transition-colors duration-500"></div>
                        <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(0,0,0,0.4)] rounded-3xl pointer-events-none z-20"></div>
                        <div className="absolute -inset-4 bg-amber-500/20 blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    </div>

                    {/* Photo 3 (Right) */}
                    <div 
                        onClick={() => setLightboxImg(images[2])}
                        className={`relative rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 transform 
                            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'} 
                            hover:-translate-y-4 hover:scale-[1.08] hover:shadow-[0_30px_60px_rgba(0,0,0,0.4)] z-10 hover:z-30 group aspect-[4/3] cursor-pointer`}
                        style={{ transitionDelay: '500ms' }}
                    >
                        <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/0 transition-colors duration-500 z-10"></div>
                        <img 
                            src={images[2]} 
                            alt="Collage 3" 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                        />
                        <div className="absolute inset-0 border-[6px] border-white/40 group-hover:border-amber-400/80 rounded-3xl pointer-events-none z-20 transition-colors duration-500"></div>
                        <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.3)] rounded-3xl pointer-events-none z-20"></div>
                    </div>

                </div>
            </div>

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
                        <img
                            src={lightboxImg}
                            alt="გადიდებული ფოტო"
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
        </section>
    );
}
