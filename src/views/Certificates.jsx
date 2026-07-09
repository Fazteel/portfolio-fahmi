import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const certificates = [
    {
        id: 1,
        title: "Node.js & React.js Bootcamp Graduate",
        issuer: "WGS Hub",
        date: "November 2024",
        credentialId: "WGS-NRB-2024-0987",
        link: "https://wgshub.com",
        description: "Intensive training program covering modern web architectures, REST APIs, Role-Based Access Control (RBAC), and performance tuning with Node.js and React."
    },
    {
        id: 2,
        title: "Full-Stack Web Development Specialist",
        issuer: "SEAMEO QITEP",
        date: "September 2024",
        credentialId: "SEAMEO-WD-2024-5412",
        link: "https://www.qitepinscience.org",
        description: "Practical development of database-driven applications using Laravel, React, and SQL database optimization techniques."
    },
    {
        id: 3,
        title: "Belajar Dasar Pemrograman JavaScript",
        issuer: "Dicoding Indonesia",
        date: "December 2023",
        credentialId: "JS-BASIC-DEC2023",
        link: "https://www.dicoding.com/certificates/1OP86N8M3X1N",
        description: "Foundational Javascript certificate verifying understanding of variable scopes, functional programming, OOP, and asynchronous javascript control flows."
    },
    {
        id: 4,
        title: "Belajar Membuat Aplikasi Web dengan React",
        issuer: "Dicoding Indonesia",
        date: "March 2024",
        credentialId: "REACT-APP-MAR2024",
        link: "https://www.dicoding.com/certificates/EYX4Y1G3PZ1M",
        description: "React application development covering declarative rendering, component lifecycle states, custom hooks, and state context propagation."
    },
    {
        id: 5,
        title: "Belajar Dasar Pemrograman Web",
        issuer: "Dicoding Indonesia",
        date: "October 2023",
        credentialId: "WEB-BASIC-OCT2023",
        link: "https://www.dicoding.com/certificates/2VX3N4D0PXY1",
        description: "Fundamentals of responsive layout design using semantic HTML5 tags, CSS layouts (Flexbox/Grid), and media-query responsive viewports."
    }
];

const Certificates = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [hoveredCardId, setHoveredCardId] = useState(null);
    const [isAutoplay, setIsAutoplay] = useState(true);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));
    };

    useEffect(() => {
        if (!isAutoplay) return;
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, [isAutoplay]);

    const textVariant = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <div id="certificates" className="bg-transparent py-16 items-center justify-center text-left overflow-hidden">
            <div className="max-w-screen-xl mx-auto px-6 md:px-12">
                
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={textVariant}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-extrabold text-slate-800 dark:text-white sm:text-4xl">
                        Certifications & <span className="underline underline-offset-3 decoration-8 decoration-blue-500 dark:decoration-blue-400">Licenses</span>
                    </h2>
                    <p className="mt-4 text-lg text-slate-500 dark:text-gray-400">
                        Verifiable professional credentials validating my technical skills.
                    </p>
                </motion.div>

                {/* Carousel Wrapper */}
                <div 
                    className="relative max-w-4xl mx-auto"
                    onMouseEnter={() => setIsAutoplay(false)}
                    onMouseLeave={() => setIsAutoplay(true)}
                >
                    {/* Navigation Buttons */}
                    <div className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 z-10">
                        <button 
                            onClick={prevSlide}
                            className="p-3 rounded-xl bg-white/80 hover:bg-white border border-slate-200/50 shadow-md hover:shadow-lg dark:bg-slate-900/80 dark:hover:bg-slate-800 dark:border-slate-800/80 text-slate-700 dark:text-slate-300 transition-all duration-200 focus:outline-none"
                            aria-label="Previous slide"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                    </div>
                    
                    <div className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 z-10">
                        <button 
                            onClick={nextSlide}
                            className="p-3 rounded-xl bg-white/80 hover:bg-white border border-slate-200/50 shadow-md hover:shadow-lg dark:bg-slate-900/80 dark:hover:bg-slate-800 dark:border-slate-800/80 text-slate-700 dark:text-slate-300 transition-all duration-200 focus:outline-none"
                            aria-label="Next slide"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Slides */}
                    <div className="overflow-hidden py-4 px-2">
                        <motion.div 
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                            layout
                        >
                            <AnimatePresence mode="popLayout">
                                {[0, 1, 2].map((offset) => {
                                    const index = (currentIndex + offset) % certificates.length;
                                    const cert = certificates[index];
                                    return (
                                        <motion.div
                                            key={cert.id}
                                            initial={{ opacity: 0, scale: 0.9, x: offset * 20 }}
                                            animate={{ opacity: 1, scale: 1, x: 0 }}
                                            exit={{ opacity: 0, scale: 0.9, x: -20 }}
                                            transition={{ duration: 0.5, ease: "easeInOut" }}
                                            onMouseEnter={() => setHoveredCardId(cert.id)}
                                            onMouseLeave={() => setHoveredCardId(null)}
                                            className={`p-6 rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between h-[360px] glass-card
                                              ${hoveredCardId === cert.id 
                                                ? 'border-blue-400/50 dark:border-blue-500/30 ring-1 ring-blue-500/30' 
                                                : 'border-slate-200/50 dark:border-slate-800/40'
                                              }`}
                                        >
                                            <div>
                                                {/* Certificate SVG Badge */}
                                                <div className="flex items-center justify-between mb-4">
                                                    <span className="text-3xl">🏅</span>
                                                    <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase">
                                                        {cert.date}
                                                    </span>
                                                </div>

                                                <h3 className="text-lg font-bold text-slate-800 dark:text-white line-clamp-2 group-hover:text-blue-600 transition-colors">
                                                    {cert.title}
                                                </h3>
                                                
                                                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-1">
                                                    {cert.issuer}
                                                </p>

                                                <p className="text-slate-500 dark:text-gray-400 text-xs leading-relaxed mt-3 line-clamp-4">
                                                    {cert.description}
                                                </p>
                                            </div>

                                            <div className="pt-4 border-t border-slate-200/50 dark:border-slate-800/50 mt-4">
                                                <div className="flex flex-col gap-2">
                                                    <div className="flex justify-between items-center text-[10px] text-slate-400 dark:text-slate-500 font-mono">
                                                        <span>ID:</span>
                                                        <span className="font-semibold text-slate-600 dark:text-slate-400">{cert.credentialId}</span>
                                                    </div>
                                                    <a
                                                        href={cert.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="mt-1 w-full text-center px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 rounded-xl transition-all duration-200 inline-flex items-center justify-center gap-1.5 shadow-sm shadow-blue-500/10"
                                                    >
                                                        Verify Credential
                                                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </AnimatePresence>
                        </motion.div>
                    </div>

                    {/* Pagination Dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {certificates.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentIndex(i)}
                                className={`h-2.5 rounded-full transition-all duration-300 ${
                                    currentIndex === i 
                                        ? 'w-8 bg-blue-600' 
                                        : 'w-2.5 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'
                                }`}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Certificates;
