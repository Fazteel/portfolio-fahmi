import { Link } from 'react-scroll';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white/70 border-t border-gray-100 dark:bg-gray-900 dark:border-gray-800 py-8 mt-auto">
            <div className="w-full mx-auto max-w-screen-xl px-6 lg:px-12 md:flex md:items-center md:justify-between">
                
                <span className="text-sm text-slate-500 sm:text-center dark:text-gray-400">
                    © {currentYear} <Link to="home" smooth={true} duration={500} className="hover:underline hover:text-blue-600 dark:hover:text-blue-400 font-medium cursor-pointer transition-colors">Fahmi Andika Setiono</Link>. All Rights Reserved.
                </span>
                
                <ul className="flex flex-wrap items-center mt-4 text-sm font-medium text-slate-500 dark:text-gray-400 sm:mt-0 gap-4 md:gap-6">
                    <li>
                        <Link to="about" smooth={true} duration={500} className="hover:text-slate-800 dark:hover:text-white cursor-pointer transition-colors">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="experience" smooth={true} duration={500} className="hover:text-slate-800 dark:hover:text-white cursor-pointer transition-colors">
                            Experience
                        </Link>
                    </li>
                    <li>
                        <Link to="portfolio" smooth={true} duration={500} className="hover:text-slate-800 dark:hover:text-white cursor-pointer transition-colors">
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link to="contact" smooth={true} duration={500} className="hover:text-slate-800 dark:hover:text-white cursor-pointer transition-colors">
                            Contact
                        </Link>
                    </li>
                </ul>
                
            </div>
        </footer>
    );
};

export default Footer;