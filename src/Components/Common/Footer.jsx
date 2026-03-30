import React from 'react'

export default function Footer() {
    return (
        <>
            <footer class="bg-[#0f172a] text-gray-300 py-14 px-6">
                <div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

                    {/* <!-- Logo --> */}
                    <div>
                        {/* Icon */}
                        <div class="flex gap-2">
                        <span className="text-yellow-400 text-2xl">☀️</span>

                        {/* Text */}
                        <h1 className="text-xl md:text-2xl font-bold tracking-wide">
                            Astro<span className="text-pink-500">Ved</span>
                        </h1>
                        </div>
                        <p class="mt-4 text-sm text-gray-400">
                            Creating modern and beautiful web experiences.
                        </p>
                    </div>

                    {/* <!-- Services --> */}
                    <div>
                        <h3 class="text-sky-400 font-semibold mb-4">Services</h3>
                        <ul class="space-y-2">
                            <li class="hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer">Shop</li>
                            <li class="hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer">Services</li>
                            <li class="hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer">Contacts</li>
                        </ul>
                    </div>

                    {/* <!-- About --> */}
                    <div>
                        <h3 class="text-sky-400 font-semibold mb-4">About Me</h3>
                        <ul class="space-y-2">
                            <li class="hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer">Home Blocks</li>
                            <li class="hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer">About</li>
                            <li class="hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer">Gallery</li>
                        </ul>
                    </div>

                    {/* <!-- Contact --> */}
                    <div>
                        <h3 class="text-sky-400 font-semibold mb-4">Contact Info</h3>
                        <p class="text-sm leading-6 text-gray-400">
                            477 Jehovah Drive <br />
                            Lexington, VA 24450
                        </p>

                        {/* <!-- Social Icons --> */}
                        <div class="flex gap-4 mt-5 text-lg">
                            {/* <!-- Instagram --> */}
                            <a href="https://instagram.com/raghavmishra459" target="_blank"
                                class="hover:text-blue-500 hover:scale-110 transition-all duration-300 cursor-pointer">
                                <i class="fab fa-instagram"></i>
                            </a>

                            {/* <!-- Linkdedin --> */}
                            <a href="https://www.linkedin.com/in/raghav-mishra-9060652a0/" target="_blank"
                                class="hover:text-blue-500 hover:scale-110 transition-all duration-300 cursor-pointer">
                                <i class="fa-brands fa-linkedin"></i>
                            </a>

                            {/* <!-- GitHub --> */}
                            <a href="https://github.com/Ragahav-vats?tab=repositories" target="_blank"
                                class="hover:text-blue-500 hover:scale-110 transition-all duration-300 cursor-pointer">
                                <i class="fab fa-github"></i>
                            </a>

                            {/* <!-- Twitter --> */}
                            <a href="https://twitter.com/your_username" target="_blank"
                                class="hover:text-blue-500 hover:scale-110 transition-all duration-300 cursor-pointer">
                                <i class="fab fa-twitter"></i>
                            </a>

                        </div>
                    </div>
                </div>

                {/* <!-- Divider --> */}
                <div class="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
                    © Copyright 2026 All Rights Reserved
                </div>
            </footer>
        </>
    )
}
