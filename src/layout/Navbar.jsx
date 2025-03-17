// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import DarkModeToggle from '../components/DarkModeToggle';

const Navbar = () => {
    const [ scrolled, setScrolled ] = useState(false);
    const [ isOpen, setIsOpen ] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setScrolled(scrollTop > 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`sticky top-0 z-50 transition-all duration-300 ease-in-out
            ${scrolled && !isOpen ? 'shadow-lg mt-2 mx-4 rounded-full' : 'mt-2 mx-4 lg:rounded-full sm:rounded-lg'} 
            ${scrolled ? 'px-4 top-2 bg-white dark:bg-gray-900' : 'py-2 px-6 bg-gray-100 dark:bg-gray-800'}`}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

                {/* Left: Logo or mobile menu button */}
                <div className="flex items-center justify-between w-full md:hidden">
                    <button onClick={toggleNavbar} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded={isOpen}>
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <DarkModeToggle />
                </div>

                {/* Center: Navbar items */}
                <div className={`${isOpen ? 'w-full block' : 'hidden w-full'} md:flex items-center justify-between`} id="navbar-default">
                    <ul className="font-medium flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0 p-4 md:p-0">
                        <li>
                            <Link to="about" smooth={true} duration={500} className="block py-2 px-3 text-gray-900 rounded md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="portfolio" smooth={true} duration={500} className="block py-2 px-3 text-gray-900 rounded md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                                Portfolio
                            </Link>
                        </li>
                        <li>
                            <Link to="contact" smooth={true} duration={500} className="block py-2 px-3 text-gray-900 rounded md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                                Contact
                            </Link>
                        </li>
                    </ul>

                    {/* Right: Dark Mode Toggle */}
                    <div className="hidden md:flex items-center space-x-4">
                        <DarkModeToggle />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
