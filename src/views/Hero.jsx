import { Link } from 'react-scroll';
import HeroImg from '../assets/hero-img.png';
import CV from '../assets/CV - Fahmi Andika Setiono.pdf';

const Hero = () => {
    return (
        <div id="home" className="flex flex-col-reverse lg:flex-row items-center justify-center min-h-[85vh] px-6 py-12 lg:px-24 max-w-screen-xl mx-auto gap-12">
            
            {/* Kiri: Teks & Tombol */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left flex-1">
                <p className="text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase text-sm mb-2">
                    Welcome to my portfolio
                </p>
                <h1 className="mb-4 text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                    Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Fahmi Andika Setiono</span>
                </h1>
                <h2 className="mb-6 text-2xl font-bold text-gray-600 md:text-3xl dark:text-gray-300">
                    Full-Stack Developer
                </h2>
                <p className="mb-8 text-lg font-normal text-gray-500 dark:text-gray-400 max-w-xl leading-relaxed">
                    I build scalable, maintainable web applications and create seamless user experiences from front to back.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <a href={CV} target="_blank" rel="noopener noreferrer" 
                        className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white transition-all duration-300 bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 hover:shadow-blue-500/30 hover:-translate-y-1 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800">
                        Download Resume
                    </a>
                    <Link to="contact" smooth={true} duration={500} 
                        className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-gray-900 transition-all duration-300 bg-transparent border border-gray-300 rounded-full hover:bg-gray-100 hover:-translate-y-1 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-600 dark:hover:bg-gray-800 dark:focus:ring-gray-800 cursor-pointer">
                        Get in Touch
                    </Link>
                </div>

                <div className="flex gap-5 text-gray-500 dark:text-gray-400">
                    <a href="https://github.com/Fazteel" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-white transition-colors duration-300 hover:-translate-y-1">
                        <span className="sr-only">GitHub</span>
                        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/fahmi-andika-setiono-238108224/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 hover:-translate-y-1">
                        <span className="sr-only">LinkedIn</span>
                        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/4ntaressss/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-300 hover:-translate-y-1">
                        <span className="sr-only">Instagram</span>
                        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                        </svg>
                    </a>
                </div>
            </div>

            <div className="flex-1 flex justify-center lg:justify-end relative group">
                <div className="absolute inset-0 bg-blue-400 dark:bg-blue-600 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto"></div>
                
                <img 
                    className="relative rounded-full w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] object-cover border-4 border-white dark:border-gray-800 shadow-2xl transition-transform duration-500 group-hover:-translate-y-2" 
                    src={HeroImg} 
                    alt="Fahmi Andika Setiono" 
                />
            </div>
            
        </div>
    );
};

export default Hero;