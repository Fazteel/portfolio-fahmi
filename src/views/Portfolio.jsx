import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';

const projects = [
    {
        id: 1,
        title: "BagiBagi Cora - Task Management",
        role: "Front-End Developer",
        category: "Frontend",
        description: "Platform web manajemen tugas untuk meningkatkan kolaborasi dan produktivitas organisasi. Mengintegrasikan REST API untuk pembaruan tugas secara real-time.",
        tech: ["JSP", "JSTL", "Bootstrap", "REST API"],
        duration: "Jan 2024 - Mar 2024",
        problem: "Tim organisasi mengalami kesulitan melacak kemajuan tugas secara real-time, mengakibatkan miskomunikasi dan penundaan pengiriman proyek.",
        solution: "Membangun antarmuka web interaktif menggunakan JSP/JSTL dan Bootstrap yang dikoneksikan ke REST API, memungkinkan alur pembaruan status tugas dinamis.",
        github: "https://github.com/Fazteel",
        demo: null,
        color: "from-blue-500 to-indigo-600"
    },
    {
        id: 2,
        title: "Pagii HR - Management System",
        role: "Full-Stack Contributor",
        category: "Full-Stack",
        description: "Sistem HR terintegrasi untuk absensi, perjalanan dinas, cuti, dan reimbursement. Dioptimalkan pada sisi query database dan logika API untuk performa yang lebih cepat.",
        tech: ["React", "Next.js", "Spring Boot", "PostgreSQL"],
        duration: "Apr 2024 - Jul 2024",
        problem: "Proses administrasi HR seperti pengajuan cuti, absensi, dan reimbursement dilakukan secara manual dan lambat karena query database yang tidak dioptimalkan.",
        solution: "Mengembangkan fitur absensi terintegrasi, perizinan cuti, dan reimbursement menggunakan Next.js dan Spring Boot, serta mengoptimalkan query database PostgreSQL untuk performa 40% lebih cepat.",
        github: "https://github.com/Fazteel",
        demo: null,
        color: "from-teal-500 to-emerald-600"
    },
    {
        id: 3,
        title: "Pagii Chatshop - AI Chatbot",
        role: "Full-Stack Contributor",
        category: "Full-Stack",
        description: "Platform commerce berbasis WhatsApp dengan asisten AI, terintegrasi dengan REST API untuk alur pemesanan, invoice, dan pembayaran.",
        tech: ["WhatsApp API", "REST API", "AI Chatbot", "Node.js"],
        duration: "Aug 2024 - Oct 2024",
        problem: "UMKM kesulitan mengelola chat pesanan masuk secara manual di WhatsApp dan sering kehilangan calon pembeli karena respon yang lambat.",
        solution: "Mengintegrasikan asisten AI pintar ke WhatsApp Business API dengan backend Node.js untuk menangani otomatisasi tanya-jawab produk, pembuatan invoice, dan link pembayaran secara real-time.",
        github: "https://github.com/Fazteel",
        demo: null,
        color: "from-purple-500 to-pink-600"
    },
    {
        id: 4,
        title: "Sandbox Ordering - POS System",
        role: "Full-Stack Contributor",
        category: "Full-Stack",
        description: "Sistem kasir dan toko online (Web & WebView) dengan manajemen pesanan dan keranjang belanja yang dibangun menggunakan arsitektur komponen yang reusable.",
        tech: ["Vue.js", "Spring Boot", "REST API", "PostgreSQL"],
        duration: "Nov 2024 - Jan 2025",
        problem: "Sistem Point of Sale (POS) tradisional lambat, kaku, dan tidak mendukung sinkronisasi pesanan langsung dari pelanggan melalui web mobile.",
        solution: "Membangun sistem POS modern dengan arsitektur frontend Vue.js reusable dan backend Spring Boot yang mendukung pesanan dinamis baik via Web desktop maupun WebView mobile.",
        github: "https://github.com/Fazteel",
        demo: null,
        color: "from-orange-500 to-amber-600"
    },
    {
        id: 5,
        title: "WasteGo - Waste Bank App",
        role: "Backend Developer",
        category: "Backend",
        description: "Aplikasi bank sampah akademik untuk manajemen penjemputan dan reward poin dengan pemisahan routing, controller, dan service yang bersih.",
        tech: ["Express.js", "PostgreSQL", "Node.js", "Sequelize"],
        duration: "Feb 2025 - May 2025",
        problem: "Manajemen sampah akademik tidak tercatat secara digital, membuat pelacakan penjemputan sampah dan pembagian poin reward tidak transparan.",
        solution: "Merancang backend Express.js bersih dengan arsitektur Layered (routing, controller, service) dan database PostgreSQL, untuk mengelola transaksi bank sampah secara akurat.",
        github: "https://github.com/Fazteel/WasteGo",
        demo: null,
        color: "from-green-500 to-emerald-600"
    },
    {
        id: 6,
        title: "Kalaesok",
        role: "Backend Developer",
        category: "Backend",
        description: "RESTful API untuk asisten kesehatan mental dan sistem SOS dengan chatbot, broadcast alert WhatsApp, dan penyimpanan S3.",
        tech: ["Fastify", "Prisma", "PostgreSQL", "Redis", "MinIO"],
        duration: "May 2026 - Jun 2026",
        problem: "Pengguna kesulitan melacak mood, menulis jurnal, dan memicu bantuan darurat (SOS) instan saat krisis kesehatan mental.",
        solution: "Mengembangkan API Fastify dengan chatbot krisis, integrasi API WhatsApp untuk SOS instan, log harian, dan penyimpanan MinIO S3.",
        github: "https://github.com/Fazteel/kalaras-api",
        demo: null,
        color: "from-purple-500 to-indigo-600"
    }
];

const categories = ["All", "Frontend", "Backend", "Full-Stack"];

const ProjectGraphic = ({ category }) => {
  if (category === "Frontend") {
    return (
      <svg className="w-full h-40 text-white rounded-xl shadow-md bg-gradient-to-br from-blue-500/80 to-indigo-600/80 p-4 border border-white/10" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="180" height="80" rx="6" fill="white" fillOpacity="0.05" stroke="white" strokeWidth="1.5" />
        <circle cx="25" cy="25" r="4" fill="white" fillOpacity="0.8" />
        <circle cx="37" cy="25" r="4" fill="white" fillOpacity="0.8" />
        <circle cx="49" cy="25" r="4" fill="white" fillOpacity="0.8" />
        <rect x="20" y="40" width="70" height="40" rx="3" fill="white" fillOpacity="0.1" />
        <rect x="100" y="40" width="80" height="8" rx="2" fill="white" fillOpacity="0.25" />
        <rect x="100" y="55" width="80" height="8" rx="2" fill="white" fillOpacity="0.15" />
        <rect x="100" y="70" width="50" height="8" rx="2" fill="white" fillOpacity="0.15" />
      </svg>
    );
  } else if (category === "Backend") {
    return (
      <svg className="w-full h-40 text-white rounded-xl shadow-md bg-gradient-to-br from-emerald-500/80 to-teal-600/80 p-4 border border-white/10" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="30" y="15" width="140" height="20" rx="4" fill="white" fillOpacity="0.1" stroke="white" strokeWidth="1.2" />
        <rect x="30" y="40" width="140" height="20" rx="4" fill="white" fillOpacity="0.1" stroke="white" strokeWidth="1.2" />
        <rect x="30" y="65" width="140" height="20" rx="4" fill="white" fillOpacity="0.1" stroke="white" strokeWidth="1.2" />
        <circle cx="45" cy="25" r="3" fill="#10B981" />
        <circle cx="45" cy="50" r="3" fill="#10B981" />
        <circle cx="45" cy="75" r="3" fill="#10B981" />
        <rect x="60" y="22" width="80" height="6" rx="1.5" fill="white" fillOpacity="0.3" />
        <rect x="60" y="47" width="60" height="6" rx="1.5" fill="white" fillOpacity="0.3" />
        <rect x="60" y="72" width="70" height="6" rx="1.5" fill="white" fillOpacity="0.3" />
      </svg>
    );
  } else {
    return (
      <svg className="w-full h-40 text-white rounded-xl shadow-md bg-gradient-to-br from-purple-500/80 to-pink-600/80 p-4 border border-white/10" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="70" height="70" rx="6" fill="white" fillOpacity="0.05" stroke="white" strokeWidth="1.2" />
        <rect x="115" y="15" width="70" height="70" rx="6" fill="white" fillOpacity="0.05" stroke="white" strokeWidth="1.2" />
        <path d="M92 50 H108" stroke="white" strokeWidth="2" strokeDasharray="3 3" />
        <polygon points="110,50 104,46 104,54" fill="white" />
        <circle cx="50" cy="50" r="15" fill="white" fillOpacity="0.1" />
        <circle cx="150" cy="50" r="15" fill="white" fillOpacity="0.1" />
        <path d="M45 50 L55 50" stroke="white" strokeWidth="2" />
        <path d="M145 50 L155 50" stroke="white" strokeWidth="2" />
      </svg>
    );
  }
};

const Portfolio = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedProject]);

    const filteredProjects = selectedCategory === "All"
        ? projects
        : projects.filter(p => p.category === selectedCategory);

    const textVariant = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <div id="portfolio" className="bg-transparent py-16 items-center justify-center text-left overflow-hidden">
            <div className="max-w-screen-xl mx-auto px-6 md:px-12">
                
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={textVariant}
                    className="text-center mb-10"
                >
                    <h2 className="text-3xl font-extrabold text-slate-800 dark:text-white sm:text-4xl">
                        Featured <span className="underline underline-offset-3 decoration-8 decoration-blue-500 dark:decoration-blue-400">Projects</span>
                    </h2>
                    <p className="mt-4 text-lg text-slate-500 dark:text-gray-400">
                        A collection of professional and academic projects I&apos;ve contributed to.
                    </p>
                </motion.div>

                {/* Filter Tab Navbar */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex p-1.5 bg-slate-200/50 dark:bg-slate-900/60 backdrop-blur-md rounded-2xl border border-slate-200/30 dark:border-slate-800/40">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`relative px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-300 focus:outline-none ${
                                    selectedCategory === category 
                                        ? 'text-white shadow-sm' 
                                        : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                                }`}
                            >
                                {selectedCategory === category && (
                                    <motion.div
                                        layoutId="activeCategory"
                                        className="absolute inset-0 bg-blue-600 rounded-xl"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10">{category}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects Grid */}
                <motion.div 
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div 
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={project.id}
                                onClick={() => setSelectedProject(project)}
                                className="flex flex-col justify-between p-6 rounded-2xl shadow-sm border border-slate-200/50 dark:border-slate-800/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer glass-card group"
                            >
                                <div>
                                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                                        {project.role}
                                    </span>
                                    <h3 className="mt-2 text-xl font-bold text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="mt-3 text-slate-500 dark:text-gray-400 text-sm leading-relaxed line-clamp-3">
                                        {project.description}
                                    </p>
                                </div>
                                <div className="mt-6 flex flex-wrap gap-1.5">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="px-2 py-0.5 text-xs font-semibold text-slate-500 bg-slate-100 rounded dark:bg-slate-800 dark:text-slate-300 border border-slate-200/30 dark:border-slate-700/30">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Project Details Modal */}
                {typeof window !== 'undefined' && createPortal(
                    <AnimatePresence>
                        {selectedProject && (
                            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 cursor-pointer"
                                onClick={() => setSelectedProject(null)}
                            />
                            
                            <motion.div
                                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 50, scale: 0.95 }}
                                transition={{ type: "spring", damping: 25, stiffness: 350 }}
                                className="relative w-full max-w-2xl overflow-hidden bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200/50 dark:border-slate-800/50 text-left flex flex-col max-h-[90vh] z-10"
                            >
                                {/* Modal Header */}
                                <div className={`p-6 bg-gradient-to-r ${selectedProject.color} text-white relative`}>
                                    <button 
                                        onClick={() => setSelectedProject(null)}
                                        className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors duration-200 focus:outline-none"
                                        aria-label="Close modal"
                                    >
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                    <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-white/20 rounded-full">
                                        {selectedProject.role}
                                    </span>
                                    <h3 className="mt-3 text-2xl md:text-3xl font-extrabold">
                                        {selectedProject.title}
                                    </h3>
                                    <p className="text-white/85 text-xs font-medium mt-1 uppercase tracking-wide">
                                        {selectedProject.duration} | {selectedProject.category}
                                    </p>
                                </div>

                                {/* Modal Body (Scrollable) */}
                                <div className="p-6 md:p-8 overflow-y-auto space-y-6">
                                    {/* Visual Representation */}
                                    <div>
                                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                                            Project System Graphic
                                        </h4>
                                        <ProjectGraphic category={selectedProject.category} />
                                    </div>

                                    <div>
                                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                                            Overview
                                        </h4>
                                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
                                            {selectedProject.description}
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                                        <div>
                                            <h4 className="text-xs font-bold uppercase tracking-wider text-red-500 dark:text-red-400 mb-2">
                                                The Challenge
                                            </h4>
                                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                                {selectedProject.problem}
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-500 dark:text-emerald-400 mb-2">
                                                The Solution
                                            </h4>
                                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                                {selectedProject.solution}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="pt-2">
                                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                                            Technologies Used
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.tech.map((tech, i) => (
                                                <span key={i} className="px-3 py-1 text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-950/40 border border-blue-100/50 dark:border-blue-900/40 rounded-full">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Modal Footer */}
                                <div className="p-6 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-end gap-3">
                                    <a 
                                        href={selectedProject.github} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="px-5 py-2.5 text-sm font-semibold rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white transition-colors duration-200 inline-flex items-center gap-2"
                                    >
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                        </svg>
                                        GitHub
                                    </a>
                                    {selectedProject.demo ? (
                                        <a 
                                            href={selectedProject.demo} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="px-5 py-2.5 text-sm font-semibold rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200 inline-flex items-center gap-2"
                                        >
                                            Live Demo
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    ) : (
                                        <button 
                                            disabled
                                            className="px-5 py-2.5 text-sm font-semibold rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-500 cursor-not-allowed inline-flex items-center gap-1.5"
                                        >
                                            Demo Unavailable
                                        </button>
                                    )}
                                </div>
                            </motion.div>
                        </div>
                    )}
                    </AnimatePresence>,
                    document.body
                )}
            </div>
        </div>
    );
};

export default Portfolio;