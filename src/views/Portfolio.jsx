import React from "react";
import Portfolio1 from '../assets/Portfolio.svg'
import EduPay from '../assets/EduPay.svg'
import LED from '../assets/LED.svg'

const Portfolio = () => {
    return (
        <div id="portfolio" className="bg-gray-100 dark:bg-gray-700 py-8 items-center justify-center lg:flex-row lg:justify-center text-center">
            <div className="mt-16 text-center">
                <h1 className="inline-block mb-8 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white hover:-translate-y-2">
                    My <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">Projects</span>
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center px-4 md:px-8 lg:px-16 mt-8">
                    {/* Card 1 */}
                    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-lg transition-transform hover:scale-105 dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="rounded-t-lg" src={Portfolio1} alt="Portfolio Website" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Portfolio Website</h5>
                            </a>
                            <div className="flex justify-center space-x-2 mb-3">
                                <span className="bg-red-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">ReactJS</span>
                                <span className="bg-red-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-blue-700 dark:text-blue-300">Tailwind</span>
                            </div>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">A personal website showcasing projects and skills, built with React and Tailwind for modern design.</p>
                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-full hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700">
                                Read more
                            </a>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-lg transition-transform hover:scale-105 dark:bg-gray-800 dark:border-gray-700">
                        <a href="https://github.com/Fazteel/EduPay" target="_blank">
                            <img className="rounded-t-lg" src={EduPay} alt="EduPay" />
                        </a>
                        <div className="p-5">
                            <a href="https://github.com/Fazteel/EduPay" target="_blank">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">EduPay</h5>
                            </a>
                            <div className="flex justify-center space-x-2 mb-3">
                                <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">Laravel</span>
                                <span className="bg-red-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-blue-700 dark:text-blue-300">Tailwind</span>
                            </div>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Helps manage school finances and transactions using Laravel and MySQL for efficient data handling.</p>
                            <a href="https://github.com/Fazteel/EduPay" target="_blank" className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-full hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700">
                                Read more
                            </a>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-lg transition-transform hover:scale-105 dark:bg-gray-800 dark:border-gray-700">
                        <a href="https://fazteel.github.io/LED-Community/" target="_blank">
                            <img className="rounded-t-lg" src={LED} alt="LED Community Web" />
                        </a>
                        <div className="p-5">
                            <a href="https://fazteel.github.io/LED-Community/" target="_blank">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">LED Community Web</h5>
                            </a>
                            <div className="flex justify-center space-x-2 mb-3">
                                <span className="bg-red-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-orange-900 dark:text-orange-300">HTML</span>
                                <span className="bg-red-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300">Bootstrap</span>
                            </div>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">An online platform for programmers to share knowledge and collaborate, built with HTML and Bootstrap.</p>
                            <a href="https://fazteel.github.io/LED-Community/" target="_blank" className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-full hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700">
                                Read more
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Portfolio;