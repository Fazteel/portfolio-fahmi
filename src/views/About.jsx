import { motion } from 'framer-motion';

const skillCategories = [
    {
        title: "Frontend Development",
        icon: "💻",
        skills: ["Vue.js", "React.js", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"]
    },
    {
        title: "Backend Development",
        icon: "⚙️",
        skills: ["Node.js", "Express.js", "Java", "Spring Boot", "PHP", "Laravel", "CodeIgniter"]
    },
    {
        title: "Database & API",
        icon: "🗄️",
        skills: ["MySQL", "PostgreSQL", "MongoDB", "RESTful APIs", "JSON", "Postman", "Swagger"]
    },
    {
        title: "Tools & Platforms",
        icon: "🛠️",
        skills: ["Git", "GitHub", "GitLab", "npm", "Maven", "AWS (Basic)", "Linux (Basic)"]
    }
];

const About = () => {
    const textVariant = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const cardContainerVariant = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const cardVariant = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    return (
        <div id="about" className="bg-transparent py-16 items-center justify-center text-center overflow-hidden">
            <div className="max-w-screen-xl mx-auto px-6 md:px-12 mt-10">
                
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={textVariant}
                    className="flex justify-center items-center gap-3 mb-6"
                >
                    <h1 className="text-3xl font-extrabold leading-none tracking-tight text-slate-800 md:text-4xl lg:text-5xl dark:text-white">
                        About <span className="underline underline-offset-3 decoration-8 decoration-blue-500 dark:decoration-blue-400">Me</span>
                    </h1>
                </motion.div>
                
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={textVariant}
                    className="max-w-4xl mx-auto text-left md:text-center"
                >
                    <p className="text-lg text-center font-normal text-slate-600 lg:text-xl dark:text-slate-300 leading-relaxed">
                        I am a Full-Stack Developer with hands-on experience developing scalable web applications using Java (Spring Boot), Node.js, and modern frontend frameworks like Vue.js, React, and Next.js. I am experienced in the full Software Development Lifecycle (SDLC), from system design and RESTful API integration to performance optimization and deployment. Currently pursuing a Diploma in Informatics Engineering at PENS, I am passionate about writing clean, maintainable code and solving complex technical challenges.
                    </p>
                </motion.div>

                <motion.hr 
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="w-32 h-1 mx-auto my-12 bg-slate-300 border-0 rounded dark:bg-slate-700" 
                />

                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={textVariant}
                    className="text-center mb-10"
                >
                    <h1 className="text-3xl font-extrabold leading-none tracking-tight text-slate-800 md:text-4xl lg:text-5xl dark:text-white">
                        My <span className="underline underline-offset-3 decoration-8 decoration-blue-500 dark:decoration-blue-400">Skills</span>
                    </h1>
                    <p className="mt-4 text-slate-500 dark:text-slate-400 text-lg">
                        Technologies and tools I work with to bring ideas to life.
                    </p>
                </motion.div>

                <motion.div 
                    variants={cardContainerVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-5xl mx-auto"
                >
                    {skillCategories.map((category, index) => (
                        <motion.div key={index} variants={cardVariant} className="p-6 rounded-2xl shadow-sm border border-slate-200/50 dark:border-slate-800/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 glass-card">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-2xl">{category.icon}</span>
                                <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                                    {category.title}
                                </h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, i) => (
                                    <span key={i} className="px-3 py-1.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600 text-sm font-medium rounded-lg hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-slate-600 dark:hover:text-white transition-colors cursor-default">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </div>
    );
};

export default About;