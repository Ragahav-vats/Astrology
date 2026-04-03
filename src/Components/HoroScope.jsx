import React from 'react'

export default function HoroScope() {
    return (
        <>
            <section class="bg-gradient-to-b from-indigo-900 via-purple-900 to-black py-16 px-4">
                <div class="max-w-7xl mx-auto text-center">

                    {/* <!-- Heading --> */}
                    <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
                        Daily Horoscope
                    </h2>
                    <p class="text-gray-300 mb-12">
                        Discover what the stars have in store for you today ✨
                    </p>

                    {/* <!-- Grid --> */}
                    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">

                        {/* <!-- Card --> */}
                        <div class="bg-white/10 backdrop-blur-lg rounded-2xl p-5 text-white hover:scale-105 transition duration-300 shadow-lg cursor-pointer">
                            <div class="text-4xl mb-3">♈</div>
                            <h3 class="font-semibold text-lg">Aries</h3>
                            <p class="text-sm text-gray-300">Mar 21 - Apr 19</p>
                        </div>

                        <div class="bg-white/10 backdrop-blur-lg rounded-2xl p-5 text-white hover:scale-105 transition duration-300 shadow-lg cursor-pointer">
                            <div class="text-4xl mb-3">♉</div>
                            <h3 class="font-semibold text-lg">Taurus</h3>
                            <p class="text-sm text-gray-300">Apr 20 - May 20</p>
                        </div>

                        <div class="bg-white/10 backdrop-blur-lg rounded-2xl p-5 text-white hover:scale-105 transition duration-300 shadow-lg cursor-pointer">
                            <div class="text-4xl mb-3">♊</div>
                            <h3 class="font-semibold text-lg">Gemini</h3>
                            <p class="text-sm text-gray-300">May 21 - Jun 20</p>
                        </div>

                        <div class="bg-white/10 backdrop-blur-lg rounded-2xl p-5 text-white hover:scale-105 transition duration-300 shadow-lg cursor-pointer">
                            <div class="text-4xl mb-3">♋</div>
                            <h3 class="font-semibold text-lg">Cancer</h3>
                            <p class="text-sm text-gray-300">Jun 21 - Jul 22</p>
                        </div>

                        <div class="bg-white/10 backdrop-blur-lg rounded-2xl p-5 text-white hover:scale-105 transition duration-300 shadow-lg cursor-pointer">
                            <div class="text-4xl mb-3">♌</div>
                            <h3 class="font-semibold text-lg">Leo</h3>
                            <p class="text-sm text-gray-300">Jul 23 - Aug 22</p>
                        </div>

                        <div class="bg-white/10 backdrop-blur-lg rounded-2xl p-5 text-white hover:scale-105 transition duration-300 shadow-lg cursor-pointer">
                            <div class="text-4xl mb-3">♍</div>
                            <h3 class="font-semibold text-lg">Virgo</h3>
                            <p class="text-sm text-gray-300">Aug 23 - Sep 22</p>
                        </div>

                        <div class="bg-white/10 backdrop-blur-lg rounded-2xl p-5 text-white hover:scale-105 transition duration-300 shadow-lg cursor-pointer">
                            <div class="text-4xl mb-3">♎</div>
                            <h3 class="font-semibold text-lg">Libra</h3>
                            <p class="text-sm text-gray-300">Sep 23 - Oct 22</p>
                        </div>

                        <div class="bg-white/10 backdrop-blur-lg rounded-2xl p-5 text-white hover:scale-105 transition duration-300 shadow-lg cursor-pointer">
                            <div class="text-4xl mb-3">♏</div>
                            <h3 class="font-semibold text-lg">Scorpio</h3>
                            <p class="text-sm text-gray-300">Oct 23 - Nov 21</p>
                        </div>

                        <div class="bg-white/10 backdrop-blur-lg rounded-2xl p-5 text-white hover:scale-105 transition duration-300 shadow-lg cursor-pointer">
                            <div class="text-4xl mb-3">♐</div>
                            <h3 class="font-semibold text-lg">Sagittarius</h3>
                            <p class="text-sm text-gray-300">Nov 22 - Dec 21</p>
                        </div>

                        <div class="bg-white/10 backdrop-blur-lg rounded-2xl p-5 text-white hover:scale-105 transition duration-300 shadow-lg cursor-pointer">
                            <div class="text-4xl mb-3">♑</div>
                            <h3 class="font-semibold text-lg">Capricorn</h3>
                            <p class="text-sm text-gray-300">Dec 22 - Jan 19</p>
                        </div>

                        <div class="bg-white/10 backdrop-blur-lg rounded-2xl p-5 text-white hover:scale-105 transition duration-300 shadow-lg cursor-pointer">
                            <div class="text-4xl mb-3">♒</div>
                            <h3 class="font-semibold text-lg">Aquarius</h3>
                            <p class="text-sm text-gray-300">Jan 20 - Feb 18</p>
                        </div>

                        <div class="bg-white/10 backdrop-blur-lg rounded-2xl p-5 text-white hover:scale-105 transition duration-300 shadow-lg cursor-pointer">
                            <div class="text-4xl mb-3">♓</div>
                            <h3 class="font-semibold text-lg">Pisces</h3>
                            <p class="text-sm text-gray-300">Feb 19 - Mar 20</p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
