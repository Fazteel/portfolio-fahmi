// src/pages/Home.jsx
import React from 'react';

const Home = () => {
    return (
        <div className="text-center p-8 my-20">
            <div className="flex items-center justify-center">
                <div className="mx-4">
                    <img className="rounded-full w-60 h-60 bg-slate-600" src="/docs/images/examples/image-4@2x.jpg" alt="Fahmi Andika Setiono" />
                </div>
                <div className="mx-4 text-center">
                    <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                        Fahmi Andika Setiono
                    </h1>
                    <p className="mb-6 text-lg font-bold text-gray-500 lg:text-3xl sm:px-16 xl:px-48 dark:text-gray-400">
                        Fullstack Developer
                    </p>
                    <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-full hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900" >
                        Learn more
                        <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10" >
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;
