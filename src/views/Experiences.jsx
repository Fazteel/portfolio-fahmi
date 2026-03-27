import { motion } from 'framer-motion';

const experiences = [
    {
        id: 1,
        role: "Full-Stack Developer (Intern)",
        company: "PT Smooets Teknologi Outsourcing",
        duration: "Dec 2024 - Dec 2025",
        description: [
            "Designed and developed web application features for HR, task management, and online ordering systems using Vue.js, Next.js, Spring Boot, and Express.js.",
            "Implemented and integrated RESTful APIs, ensuring clean data handling and compatibility across desktop web and WebView clients.",
            "Participated in the end-to-end Software Development Lifecycle (SDLC), from requirement analysis and bug fixing to deployment in staging and production.",
            "Troubleshot production issues, improved code quality through refactoring, and collaborated with cross-functional teams to align technical solutions with business needs."
        ]
    },
    {
        id: 2,
        role: "Node.js & React.js Bootcamp",
        company: "WGS Hub",
        duration: "Sep 2024 - Nov 2024",
        description: [
            "Completed an intensive full-stack program focusing on modern web development using Express.js, React, Node.js, and PostgreSQL.",
            "Developed a warehouse and employee management application as a final project.",
            "Implemented Role-Based Access Control (RBAC) to ensure secure and role-specific access within the application."
        ]
    },
    {
        id: 3,
        role: "Web Developer Training",
        company: "SEAMEO",
        duration: "Aug 2024 - Sep 2024",
        description: [
            "Gained practical and hands-on experience in web development using Laravel, React, and SQL.",
            "Successfully built a financial management application to track and calculate income and expenses as the final training project."
        ]
    }
];

const Experience = () => {
    const textVariant = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const lineVariant = {
        hidden: { scaleY: 0 },
        visible: { scaleY: 1, transition: { duration: 1.5, ease: "easeInOut" } }
    };

    const cardVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <div id="experience" className="bg-white/70 dark:bg-gray-800 py-16 overflow-hidden">
            <div className="max-w-screen-xl mx-auto px-6 md:px-12">
                
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={textVariant}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-extrabold text-slate-800 dark:text-white sm:text-4xl">
                        Experience & <span className="underline underline-offset-3 decoration-8 decoration-blue-500 dark:decoration-blue-400">Training</span>
                    </h2>
                    <p className="mt-4 text-lg text-slate-500 dark:text-gray-400">
                        My professional journey and technical contributions.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto relative border-l border-gray-200 dark:border-gray-700 ml-3 md:ml-auto md:mr-auto md:border-l-0">
                    
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={lineVariant}
                        className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200 dark:bg-gray-700 origin-top"
                    ></motion.div>

                    {experiences.map((exp, index) => (
                        <motion.div 
                            key={exp.id} 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={cardVariant}
                            className={`relative mb-12 md:mb-16 md:flex ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} justify-between items-center w-full group`}
                        >
                            <div className="absolute -left-3.5 md:left-1/2 md:transform md:-translate-x-1/2 w-7 h-7 bg-blue-500 rounded-full border-4 border-white dark:border-gray-800 z-10 shadow-sm group-hover:scale-125 transition-transform duration-300"></div>

                            <div className="hidden md:block md:w-5/12"></div>

                            <div className="ml-8 md:ml-0 md:w-5/12 bg-slate-100 dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-100 dark:bg-gray-800 dark:text-blue-400 rounded-full">
                                    {exp.duration}
                                </span>
                                <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                                    {exp.role}
                                </h3>
                                <h4 className="text-lg font-medium text-slate-500 dark:text-gray-300 mb-4">
                                    {exp.company}
                                </h4>
                                
                                <ul className="space-y-3">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="flex items-start text-slate-500 dark:text-gray-400 text-sm leading-relaxed">
                                            <svg className="flex-shrink-0 w-4 h-4 mt-1 mr-2 text-blue-500 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Experience;