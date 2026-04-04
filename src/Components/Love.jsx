import React from 'react'

export default function Love() {
  return (
    <>
      {/* <!-- Love & Marriage Section --> */}
      <section class="bg-gradient-to-r from-purple-900 via-indigo-900 to-black text-white py-16 px-6">

        {/* <!-- Heading --> */}
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-5xl font-bold mb-4">
            Love & Marriage
          </h2>
          <p class="text-gray-300 max-w-2xl mx-auto">
            Discover the secrets of your love life and marriage through the power of astrology.
            Get insights into compatibility, future relationships, and marital harmony.
          </p>
        </div>

        {/* <!-- Cards --> */}
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* <!-- Card 1 --> */}
          <div class="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:scale-105 transition duration-300">
            <div class="text-pink-400 text-4xl mb-4">
              ❤️
            </div>
            <h3 class="text-xl font-semibold mb-2">Love Compatibility</h3>
            <p class="text-gray-300 text-sm">
              Analyze your relationship compatibility based on zodiac signs and planetary alignment.
            </p>
          </div>

          {/* <!-- Card 2 --> */}
          <div class="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:scale-105 transition duration-300">
            <div class="text-red-400 text-4xl mb-4">
              💍
            </div>
            <h3 class="text-xl font-semibold mb-2">Marriage Prediction</h3>
            <p class="text-gray-300 text-sm">
              Get accurate predictions about your marriage timing, partner nature, and future life.
            </p>
          </div>

          {/* <!-- Card 3 --> */}
          <div class="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:scale-105 transition duration-300">
            <div class="text-yellow-400 text-4xl mb-4">
              🔮
            </div>
            <h3 class="text-xl font-semibold mb-2">Relationship Guidance</h3>
            <p class="text-gray-300 text-sm">
              Resolve relationship issues and strengthen your bond with expert astrological advice.
            </p>
          </div>

          {/* <!-- Card 4 --> */}
          <div class="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:scale-105 transition duration-300">
            <div class="text-blue-400 text-4xl mb-4">
              🌙
            </div>
            <h3 class="text-xl font-semibold mb-2">Kundli Matching</h3>
            <p class="text-gray-300 text-sm">
              Match horoscopes for marriage compatibility using traditional Vedic astrology methods.
            </p>
          </div>

          {/* <!-- Card 5 --> */}
          <div class="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:scale-105 transition duration-300">
            <div class="text-green-400 text-4xl mb-4">
              💑
            </div>
            <h3 class="text-xl font-semibold mb-2">Soulmate Reading</h3>
            <p class="text-gray-300 text-sm">
              Find out who your soulmate could be and when you might meet them.
            </p>
          </div>

          {/* <!-- Card 6 --> */}
          <div class="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:scale-105 transition duration-300">
            <div class="text-purple-400 text-4xl mb-4">
              ✨
            </div>
            <h3 class="text-xl font-semibold mb-2">Love Remedies</h3>
            <p class="text-gray-300 text-sm">
              Get simple astrological remedies to improve your love and married life.
            </p>
          </div>

        </div>

        {/* <!-- Button --> */}
        <div class="text-center mt-12">
          <button class="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-semibold transition duration-300 shadow-lg">
            Get Your Love Report
          </button>
        </div>

      </section>
    </>
  )
}
