import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import DarkModeToggle from '../components/DarkModeToggle';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleNavbar = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const navItems = [
        { name: 'Home', to: 'home' },
        { name: 'About', to: 'about' },
        { name: 'Experience', to: 'experience' },
        { name: 'Portfolio', to: 'portfolio' },
        { name: 'Contact', to: 'contact' }
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
            scrolled 
                ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm py-3' 
                : 'bg-transparent py-5'
        }`}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-6 lg:px-12">
                
                <Link to="home" smooth={true} duration={500} className="cursor-pointer">
                    <span className="self-center text-xl font-bold whitespace-nowrap text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        Fahmi.<span className="text-blue-600 dark:text-blue-400">dev</span>
                    </span>
                </Link>

                <div className="flex items-center gap-4 md:hidden">
                    <DarkModeToggle />
                    <button onClick={toggleNavbar} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-800 dark:focus:ring-gray-600" aria-expanded={isOpen}>
                        <span className="sr-only">Open main menu</span>
                        {isOpen ? (
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>

                <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto mt-4 md:mt-0`}>
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-2xl bg-white/90 dark:bg-gray-800/90 md:bg-transparent md:dark:bg-transparent md:flex-row md:space-x-8 md:mt-0 md:border-0">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <Link 
                                    to={item.to} 
                                    smooth={true} 
                                    duration={500} 
                                    spy={true} 
                                    activeClass="text-blue-600 dark:text-blue-400 font-bold"
                                    onClick={closeMenu}
                                    className="block py-2 px-3 text-gray-700 rounded-lg hover:bg-gray-50 md:hover:bg-transparent md:hover:text-blue-600 md:p-0 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent cursor-pointer transition-colors"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="hidden md:block">
                    <DarkModeToggle />
                </div>
                
            </div>
        </nav>
    );
};

export default Navbar;