import React from 'react'

export default function Kundli() {
    return (
        <dv>
            {/* <!-- Kundli Analysis Section --> */}
            <section class="bg-gradient-to-br from-indigo-950 via-black to-purple-950 text-white py-16 px-6">

                {/* <!-- Heading --> */}
                <div class="text-center mb-14">
                    <h2 class="text-3xl md:text-5xl font-bold mb-4">
                        Kundli Analysis
                    </h2>
                    <p class="text-gray-300 max-w-2xl mx-auto">
                        Unlock the secrets of your life through detailed Kundli (birth chart) analysis.
                        Get insights into your personality, career, relationships, and future predictions.
                    </p>
                </div>

                {/* <!-- Grid --> */}
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* <!-- Birth Chart --> */}
                    <div class="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
                        <div class="text-yellow-400 text-4xl mb-4">🪐</div>
                        <h3 class="text-xl font-semibold mb-2">Birth Chart (Janam Kundli)</h3>
                        <p class="text-gray-300 text-sm">
                            Analyze planetary positions at your birth to understand your personality and destiny.
                        </p>
                    </div>

                    {/* <!-- Career --> */}
                    <div class="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
                        <div class="text-green-400 text-4xl mb-4">💼</div>
                        <h3 class="text-xl font-semibold mb-2">Career & Finance</h3>
                        <p class="text-gray-300 text-sm">
                            Discover the best career path, financial growth, and success opportunities.
                        </p>
                    </div>

                    {/* <!-- Marriage --> */}
                    <div class="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
                        <div class="text-pink-400 text-4xl mb-4">💑</div>
                        <h3 class="text-xl font-semibold mb-2">Love & Marriage</h3>
                        <p class="text-gray-300 text-sm">
                            Get insights into your love life, compatibility, and marriage timing.
                        </p>
                    </div>

                    {/* <!-- Health --> */}
                    <div class="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
                        <div class="text-red-400 text-4xl mb-4">❤️</div>
                        <h3 class="text-xl font-semibold mb-2">Health Predictions</h3>
                        <p class="text-gray-300 text-sm">
                            Identify health patterns and get guidance for a balanced and healthy life.
                        </p>
                    </div>

                    {/* <!-- Dasha --> */}
                    <div class="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
                        <div class="text-blue-400 text-4xl mb-4">⏳</div>
                        <h3 class="text-xl font-semibold mb-2">Dasha & Transit</h3>
                        <p class="text-gray-300 text-sm">
                            Understand planetary periods (Dasha) and their effects on your life events.
                        </p>
                    </div>

                    {/* <!-- Remedies --> */}
                    <div class="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
                        <div class="text-purple-400 text-4xl mb-4">🔮</div>
                        <h3 class="text-xl font-semibold mb-2">Astrological Remedies</h3>
                        <p class="text-gray-300 text-sm">
                            Get personalized remedies to overcome challenges and improve life.
                        </p>
                    </div>

                </div>

                {/* <!-- CTA --> */}
                <div class="text-center mt-12">
                    <button class="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-full font-semibold shadow-lg transition duration-300">
                        Get Your Kundli Report
                    </button>
                </div>

            </section>
        </dv>
    )
}
