import React, { useState } from 'react'
import { Link } from 'react-router'
import { ToastContainer } from 'react-toastify'

export default function Header() {

    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <ToastContainer />
            <header class="bg-[#0f172a] text-white px-6 py-4 sticky top-0 z-50">
                <button
                    className="md:hidden text-2xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>
                <div class="max-w-7xl mx-auto flex items-center justify-between">

                    {/* <!-- Logo --> */}
                    <div class="text-2xl font-bold tracking-wider">
                        <Link to="/" className="flex items-center gap-2 text-white">

                            {/* Icon */}
                            <span className="text-yellow-400 text-2xl">☀️</span>

                            {/* Text */}
                            <h1 className="text-xl md:text-2xl font-bold tracking-wide">
                                Astro<span className="text-pink-500">Ved</span>
                            </h1>

                        </Link>
                    </div>



                    {/* <!-- Center Navigation --> */}
                    <nav class="hidden md:flex gap-6 text-gray-300 text-sm">
                        <Link to="/" className="text-sky-400 transition">Home</Link>
                        <Link to="/about" className="hover:text-white transition">About Us</Link>
                        <Link to="/services" className="hover:text-white transition">Our Services</Link>
                        <Link to="/horoscope" className="hover:text-white transition">Daily Horoscope</Link>
                        <Link to="/tarot" className="hover:text-white transition">Tarot Reading</Link>
                        <Link to="/testimonials" className="hover:text-white transition">Testimonials</Link>
                        <Link to="/contact" className="hover:text-white transition">Contact Us</Link>
                    </nav>


                    {/* <!-- Right Section --> */}
                    <div class="flex items-center gap-6">

                        {/* <!-- Phone --> */}
                        <Link to="/login">
                            <button class=" px-4 py-2 rounded-full text-sm bg-blue-500 hover:text-black transition">
                                Login / sign in
                            </button>
                        </Link>

                        {/* <!-- Button --> */}
                        <Link to="/appointment">
                            <button class="border border-pink-500 px-4 py-2 rounded-full text-sm hover:bg-pink-500 hover:text-black transition">
                                Book Your Appiontment
                            </button>
                        </Link>

                    </div>
                </div>
            </header>
        </>
    )
}
