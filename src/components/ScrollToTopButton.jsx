import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
    const [ isVisible, setIsVisible ] = useState(false);

    // Fungsi untuk mendeteksi scroll
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);  // Tampilkan tombol jika scroll lebih dari 300px
        } else {
            setIsVisible(false); // Sembunyikan tombol jika kurang dari 300px
        }
    };

    // Fungsi untuk mengarahkan scroll ke paling atas
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Scroll dengan animasi yang halus
        });
    };

    // Tambah event listener untuk mendeteksi scroll
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        // Hapus event listener saat komponen di-unmount
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 bg-blue-700 dark:bg-gray-900 text-white p-3 rounded-full shadow-lg hover:bg-blue-800 transition-all duration-300 ease-in-out">
                    <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v13m0-13 4 4m-4-4-4 4" />
                    </svg>

                </button>
            )}
        </>
    );
};

export default ScrollToTopButton;
