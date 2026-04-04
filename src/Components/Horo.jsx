import React from 'react'

export default function Horo() {
    return (
        <>
            {/* <!-- Premium Horoscope Section --> */}
            <section class="relative bg-black text-white py-20 px-6 overflow-hidden">

                {/* <!-- Background Glow --> */}
                <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-800/30 via-indigo-900/20 to-black"></div>

                {/* <!-- Content --> */}
                <div class="relative max-w-7xl mx-auto">

                    {/* <!-- Heading --> */}
                    <div class="text-center mb-16">
                        <h2 class="text-4xl md:text-6xl font-bold mb-4">
                            Horoscope Insights
                        </h2>
                        <p class="text-gray-400 max-w-2xl mx-auto">
                            Explore what the universe has planned for you today. Get accurate insights into love, career, health, and more.
                        </p>
                    </div>

                    {/* <!-- Featured Horoscope --> */}
                    <div class="bg-gradient-to-r from-indigo-800 to-purple-800 rounded-3xl p-8 md:p-12 mb-12 shadow-2xl">
                        <div class="flex flex-col md:flex-row items-center justify-between gap-6">

                            {/* <!-- Left --> */}
                            <div>
                                <h3 class="text-2xl md:text-3xl font-semibold mb-3">
                                    🌟 Today’s Highlight: Leo
                                </h3>
                                <p class="text-gray-200 mb-4">
                                    Today is a powerful day for leadership and bold decisions. Your confidence will attract new opportunities.
                                    Focus on career growth and avoid emotional distractions.
                                </p>
                                <button class="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition">
                                    Read Full Prediction
                                </button>
                            </div>

                            {/* <!-- Right Icon --> */}
                            <div class="text-7xl">
                                ♌
                            </div>

                        </div>
                    </div>

                    {/* <!-- Zodiac Cards --> */}
                    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">

                        {/* <!-- Card --> */}
                        <div class="group bg-white/5 border border-white/10 rounded-xl p-5 text-center hover:bg-gradient-to-br hover:from-purple-700 hover:to-indigo-700 transition duration-300 cursor-pointer">
                            <div class="text-3xl mb-2 group-hover:scale-125 transition">♈</div>
                            <h3 class="text-sm font-semibold">Aries</h3>
                            <p class="text-xs text-gray-400">Energy & action</p>
                        </div>

                        <div class="group bg-white/5 border border-white/10 rounded-xl p-5 text-center hover:bg-gradient-to-br hover:from-purple-700 hover:to-indigo-700 transition duration-300 cursor-pointer">
                            <div class="text-3xl mb-2 group-hover:scale-125 transition">♉</div>
                            <h3 class="text-sm font-semibold">Taurus</h3>
                            <p class="text-xs text-gray-400">Stability & wealth</p>
                        </div>

                        <div class="group bg-white/5 border border-white/10 rounded-xl p-5 text-center hover:bg-gradient-to-br hover:from-purple-700 hover:to-indigo-700 transition duration-300 cursor-pointer">
                            <div class="text-3xl mb-2 group-hover:scale-125 transition">♊</div>
                            <h3 class="text-sm font-semibold">Gemini</h3>
                            <p class="text-xs text-gray-400">Communication</p>
                        </div>

                        <div class="group bg-white/5 border border-white/10 rounded-xl p-5 text-center hover:bg-gradient-to-br hover:from-purple-700 hover:to-indigo-700 transition duration-300 cursor-pointer">
                            <div class="text-3xl mb-2 group-hover:scale-125 transition">♋</div>
                            <h3 class="text-sm font-semibold">Cancer</h3>
                            <p class="text-xs text-gray-400">Emotions</p>
                        </div>

                        <div class="group bg-white/5 border border-white/10 rounded-xl p-5 text-center hover:bg-gradient-to-br hover:from-purple-700 hover:to-indigo-700 transition duration-300 cursor-pointer">
                            <div class="text-3xl mb-2 group-hover:scale-125 transition">♌</div>
                            <h3 class="text-sm font-semibold">Leo</h3>
                            <p class="text-xs text-gray-400">Leadership</p>
                        </div>

                        <div class="group bg-white/5 border border-white/10 rounded-xl p-5 text-center hover:bg-gradient-to-br hover:from-purple-700 hover:to-indigo-700 transition duration-300 cursor-pointer">
                            <div class="text-3xl mb-2 group-hover:scale-125 transition">♍</div>
                            <h3 class="text-sm font-semibold">Virgo</h3>
                            <p class="text-xs text-gray-400">Perfection</p>
                        </div>

                        <div class="group bg-white/5 border border-white/10 rounded-xl p-5 text-center hover:bg-gradient-to-br hover:from-purple-700 hover:to-indigo-700 transition duration-300 cursor-pointer">
                            <div class="text-3xl mb-2 group-hover:scale-125 transition">♎</div>
                            <h3 class="text-sm font-semibold">Libra</h3>
                            <p class="text-xs text-gray-400">Balance</p>
                        </div>

                        <div class="group bg-white/5 border border-white/10 rounded-xl p-5 text-center hover:bg-gradient-to-br hover:from-purple-700 hover:to-indigo-700 transition duration-300 cursor-pointer">
                            <div class="text-3xl mb-2 group-hover:scale-125 transition">♏</div>
                            <h3 class="text-sm font-semibold">Scorpio</h3>
                            <p class="text-xs text-gray-400">Intensity</p>
                        </div>

                        <div class="group bg-white/5 border border-white/10 rounded-xl p-5 text-center hover:bg-gradient-to-br hover:from-purple-700 hover:to-indigo-700 transition duration-300 cursor-pointer">
                            <div class="text-3xl mb-2 group-hover:scale-125 transition">♐</div>
                            <h3 class="text-sm font-semibold">Sagittarius</h3>
                            <p class="text-xs text-gray-400">Adventure</p>
                        </div>

                        <div class="group bg-white/5 border border-white/10 rounded-xl p-5 text-center hover:bg-gradient-to-br hover:from-purple-700 hover:to-indigo-700 transition duration-300 cursor-pointer">
                            <div class="text-3xl mb-2 group-hover:scale-125 transition">♑</div>
                            <h3 class="text-sm font-semibold">Capricorn</h3>
                            <p class="text-xs text-gray-400">Discipline</p>
                        </div>

                        <div class="group bg-white/5 border border-white/10 rounded-xl p-5 text-center hover:bg-gradient-to-br hover:from-purple-700 hover:to-indigo-700 transition duration-300 cursor-pointer">
                            <div class="text-3xl mb-2 group-hover:scale-125 transition">♒</div>
                            <h3 class="text-sm font-semibold">Aquarius</h3>
                            <p class="text-xs text-gray-400">Innovation</p>
                        </div>

                        <div class="group bg-white/5 border border-white/10 rounded-xl p-5 text-center hover:bg-gradient-to-br hover:from-purple-700 hover:to-indigo-700 transition duration-300 cursor-pointer">
                            <div class="text-3xl mb-2 group-hover:scale-125 transition">♓</div>
                            <h3 class="text-sm font-semibold">Pisces</h3>
                            <p class="text-xs text-gray-400">Dreams</p>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}
