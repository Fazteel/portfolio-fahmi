import React from "react";
import Portfolio1 from '../assets/Portfolio.svg'
import EduPay from '../assets/EduPay.svg'
import LED from '../assets/LED.svg'

const Portfolio = () => {
    return (
        <div className="bg-gray-100 dark:bg-gray-700 py-8 items-center justify-center lg:flex-row lg:justify-center text-center">
            <div className="mt-16 text-center">
                <h1 className="inline-block mb-8 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white hover:-translate-y-2">
                    My <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">Projects</span>
                </h1>

                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-center items-center px-16 mt-4">
                    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-110">
                        <a href="#">
                            <img class="rounded-t-lg" src={Portfolio1} alt="" />
                        </a>
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Portfolio Website</h5>
                            </a>
                            <span class="bg-red-100 text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">ReactJS</span>
                            <span class="bg-red-100 text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-700 dark:text-blue-300">Tailwind</span>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">A personal website showcasing projects and skills, built with React and Tailwind for modern design.</p>
                            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                            </a>
                        </div>
                    </div>
                    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-110">
                        <a href="https://github.com/Fazteel/EduPay" target="_blank">
                            <img class="rounded-t-lg" src={EduPay} alt="" />
                        </a>
                        <div class="p-5">
                            <a href="https://github.com/Fazteel/EduPay" target="_blank">
                                <h5 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">EduPay</h5>
                            </a>
                            <span class="bg-red-100 text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">Laravel</span>
                            <span class="bg-red-100 text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-700 dark:text-blue-300">Tailwind</span>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Helps manage school finances and transactions using Laravel and MySQL for efficient data handling.</p>
                            <a href="https://github.com/Fazteel/EduPay" target="_blank" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                            </a>
                        </div>
                    </div>
                    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-110">
                        <a href="https://fazteel.github.io/LED-Community/" target="_blank">
                            <img class="rounded-t-lg" src={LED} alt="" />
                        </a>
                        <div class="p-5">
                            <a href="https://fazteel.github.io/LED-Community/" target="_blank">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">LED Community Web</h5>
                            </a>
                            <span class="bg-red-100 text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-orange-900 dark:text-orange-300">HTML</span>
                            <span class="bg-red-100 text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300">Bootstrap</span>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">An online platform for programmers to share knowledge and collaborate, built with HTML and Bootstrap.</p>
                            <a href="https://fazteel.github.io/LED-Community/" target="_blank" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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