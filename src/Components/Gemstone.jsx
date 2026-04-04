import React from 'react'

export default function Gemstone() {
    return (
        <>
            {/* <!-- Gemstone Recommendation Section --> */}
            <section class="bg-gradient-to-br from-black via-indigo-950 to-purple-900 text-white py-16 px-6">

                {/* <!-- Heading --> */}
                <div class="text-center mb-14">
                    <h2 class="text-3xl md:text-5xl font-bold mb-4">
                        Gemstone Recommendations
                    </h2>
                    <p class="text-gray-300 max-w-2xl mx-auto">
                        Discover powerful gemstones based on your birth chart and zodiac sign.
                        Enhance your luck, love, career, and health with the right cosmic energy.
                    </p>
                </div>

                {/* <!-- Cards --> */}
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* <!-- Ruby --> */}
                    <div class="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:scale-105 transition duration-300">
                        <div class="text-red-400 text-4xl mb-4">🔴</div>
                        <h3 class="text-xl font-semibold mb-2">Ruby (Manik)</h3>
                        <p class="text-gray-300 text-sm mb-3">
                            Associated with the Sun, Ruby boosts confidence, leadership, and success.
                        </p>
                        <span class="text-xs text-yellow-300">Best for: Leo ♌</span>
                    </div>

                    {/* <!-- Emerald --> */}
                    <div class="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:scale-105 transition duration-300">
                        <div class="text-green-400 text-4xl mb-4">🟢</div>
                        <h3 class="text-xl font-semibold mb-2">Emerald (Panna)</h3>
                        <p class="text-gray-300 text-sm mb-3">
                            Improves communication, intelligence, and financial growth.
                        </p>
                        <span class="text-xs text-yellow-300">Best for: Gemini ♊, Virgo ♍</span>
                    </div>

                    {/* <!-- Sapphire --> */}
                    <div class="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:scale-105 transition duration-300">
                        <div class="text-blue-400 text-4xl mb-4">🔵</div>
                        <h3 class="text-xl font-semibold mb-2">Blue Sapphire (Neelam)</h3>
                        <p class="text-gray-300 text-sm mb-3">
                            Brings instant success, protection, and strong career growth.
                        </p>
                        <span class="text-xs text-yellow-300">Best for: Capricorn ♑, Aquarius ♒</span>
                    </div>

                    {/* <!-- Diamond --> */}
                    <div class="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:scale-105 transition duration-300">
                        <div class="text-pink-400 text-4xl mb-4">💎</div>
                        <h3 class="text-xl font-semibold mb-2">Diamond (Heera)</h3>
                        <p class="text-gray-300 text-sm mb-3">
                            Enhances love, luxury, beauty, and relationships.
                        </p>
                        <span class="text-xs text-yellow-300">Best for: Taurus ♉, Libra ♎</span>
                    </div>

                    {/* <!-- Yellow Sapphire --> */}
                    <div class="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:scale-105 transition duration-300">
                        <div class="text-yellow-400 text-4xl mb-4">🟡</div>
                        <h3 class="text-xl font-semibold mb-2">Yellow Sapphire (Pukhraj)</h3>
                        <p class="text-gray-300 text-sm mb-3">
                            Attracts wealth, wisdom, and marriage blessings.
                        </p>
                        <span class="text-xs text-yellow-300">Best for: Sagittarius ♐, Pisces ♓</span>
                    </div>

                    {/* <!-- Coral --> */}
                    <div class="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:scale-105 transition duration-300">
                        <div class="text-orange-400 text-4xl mb-4">🟠</div>
                        <h3 class="text-xl font-semibold mb-2">Red Coral (Moonga)</h3>
                        <p class="text-gray-300 text-sm mb-3">
                            Boosts energy, courage, and protects from negativity.
                        </p>
                        <span class="text-xs text-yellow-300">Best for: Aries ♈, Scorpio ♏</span>
                    </div>

                </div>

                {/* <!-- CTA --> */}
                <div class="text-center mt-12">
                    <button class="bg-indigo-500 hover:bg-indigo-600 px-8 py-3 rounded-full font-semibold shadow-lg transition duration-300">
                        Get Your Personalized Gemstone
                    </button>
                </div>

            </section>
        </>
    )
}
