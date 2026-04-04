import React, { useState } from 'react'
import { Link } from 'react-router'
import { ToastContainer } from 'react-toastify'

export default function Header() {

    const [open, setOpen] = useState(false);
    return (
        <>
            <ToastContainer />
            <header className="bg-[#0f172a] text-white shadow-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

                    {/* Logo */}
                    <Link to="/">
                    <div className="flex items-center gap-2">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/869/869869.png"
                            alt="logo"
                            className="w-8 h-8"
                        />
                        <h1 className="text-xl font-bold text-orange-400">
                            Astro<span className="text-white">Ved</span>
                        </h1>
                    </div>
                    </Link>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex gap-6 items-center">
                        <Link to="/" className="hover:text-blue-400">Home</Link>
                        <Link to="/about" className="hover:text-blue-400">About Us</Link>
                        <Link to="/services" className="hover:text-blue-400">Our Services</Link>
                        <Link to="/horoscope" className="hover:text-blue-400">Daily Horoscope</Link>
                        <Link to="/tarot" className="hover:text-blue-400">Tarot Reading</Link>
                        <Link to="/testimonials" className="hover:text-blue-400">Testimonials</Link>
                        <Link to="/contact" className="hover:text-blue-400">Contact Us</Link>

                        <Link
                            to="/login"
                            className="px-4 py-1 rounded-full bg-blue-500 hover:bg-blue-600"
                        >
                            Login / Sign in
                        </Link>

                        <Link
                            to="/appointment"
                            className="px-4 py-1 rounded-full border border-pink-500 hover:bg-pink-500"
                        >
                            Book Appointment
                        </Link>
                    </nav>

                    {/* Mobile Button */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden text-2xl"
                    >
                        ☰
                    </button>
                </div>

                {/* Mobile Menu */}
                {open && (
                    <div className="md:hidden px-4 pb-4 space-y-3">
                        <Link to="/" className="block" onClick={() => setOpen(false)}>Home</Link>
                        <Link to="/about" className="block" onClick={() => setOpen(false)}>About Us</Link>
                        <Link to="/services" className="block" onClick={() => setOpen(false)}>Our Services</Link>
                        <Link to="/horoscope" className="block" onClick={() => setOpen(false)}>Daily Horoscope</Link>
                        <Link to="/tarot" className="block" onClick={() => setOpen(false)}>Tarot Reading</Link>
                        <Link to="/testimonials" className="block" onClick={() => setOpen(false)}>Testimonials</Link>
                        <Link to="/contact" className="block" onClick={() => setOpen(false)}>Contact Us</Link>

                        <Link
                            to="/login"
                            className="block bg-blue-500 text-center py-2 rounded-full"
                            onClick={() => setOpen(false)}
                        >
                            Login / Sign in
                        </Link>

                        <Link
                            to="/appointment"
                            className="block border border-pink-500 text-center py-2 rounded-full"
                            onClick={() => setOpen(false)}
                        >
                            Book Appointment
                        </Link>
                    </div>
                )}
            </header>

        </>
    )
}
