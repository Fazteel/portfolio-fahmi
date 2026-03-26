
const projects = [
    {
        title: "BagiBagi Cora - Task Management",
        role: "Front-End Developer",
        description: "Platform web manajemen tugas untuk meningkatkan kolaborasi dan produktivitas organisasi. Mengintegrasikan REST API untuk pembaruan tugas secara real-time.",
        tech: ["JSP", "JSTL", "Bootstrap", "REST API"]
    },
    {
        title: "Pagii HR - Management System",
        role: "Full-Stack Contributor",
        description: "Sistem HR terintegrasi untuk absensi, perjalanan dinas, cuti, dan reimbursement. Dioptimalkan pada sisi query database dan logika API untuk performa yang lebih cepat.",
        tech: ["React", "Next.js", "Spring Boot"]
    },
    {
        title: "Pagii Chatshop - AI Chatbot",
        role: "Full-Stack Contributor",
        description: "Platform commerce berbasis WhatsApp dengan asisten AI, terintegrasi dengan REST API untuk alur pemesanan, invoice, dan pembayaran.",
        tech: ["WhatsApp API", "REST API", "AI"]
    },
    {
        title: "Sandbox Ordering - POS System",
        role: "Full-Stack Contributor",
        description: "Sistem kasir dan toko online (Web & WebView) dengan manajemen pesanan dan keranjang belanja yang dibangun menggunakan arsitektur komponen yang reusable.",
        tech: ["Vue.js", "Spring Boot", "REST API"]
    },
    {
        title: "WasteGo - Waste Bank App",
        role: "Backend Developer",
        description: "Aplikasi bank sampah akademik untuk manajemen penjemputan dan reward poin dengan pemisahan routing, controller, dan service yang bersih.",
        tech: ["Express.js", "PostgreSQL", "Node.js"]
    }
];

const Portfolio = () => {
    return (
        <div id="portfolio" className="bg-gray-50 dark:bg-gray-900 py-16 items-center justify-center text-left">
            <div className="max-w-screen-xl mx-auto px-6 md:px-12">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                        Featured <span className="text-blue-600 dark:text-blue-400">Projects</span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
                        A collection of professional and academic projects I&apos;ve contributed to.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="flex flex-col justify-between p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 dark:bg-gray-800 dark:border-gray-700">
                            <div>
                                <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                                    {project.role}
                                </span>
                                <h3 className="mt-2 text-xl font-bold text-gray-900 dark:text-white">
                                    {project.title}
                                </h3>
                                <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                    {project.description}
                                </p>
                            </div>
                            <div className="mt-6 flex flex-wrap gap-2">
                                {project.tech.map((tech, i) => (
                                    <span key={i} className="px-3 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;