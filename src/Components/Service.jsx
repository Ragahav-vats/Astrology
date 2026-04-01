import React from 'react'

export default function Service() {
  return (
    <>
      <section class="bg-gray-900 text-white py-16 px-6">

        {/* <!-- Heading --> */}
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold">Our Astrology Services</h2>
          <p class="text-gray-400 mt-2">
            Explore powerful cosmic tools to understand your life better
          </p>
        </div>

        {/* <!-- Cards --> */}
        <div class="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8">

          {/* <!-- Card 1 --> */}
          <div class="bg-gray-800 p-6 rounded-2xl text-center hover:scale-105 hover:bg-gray-700 transition shadow-lg">
            <div class="text-4xl mb-4">🌟</div>
            <h3 class="text-xl font-semibold mb-2">Birth Chart Analysis</h3>
            <p class="text-gray-400">
              Get deep insights about your personality, career, and destiny.
            </p>
          </div>

          {/* <!-- Card 2 --> */}
          <div class="bg-gray-800 p-6 rounded-2xl text-center hover:scale-105 hover:bg-gray-700 transition shadow-lg">
            <div class="text-4xl mb-4">🔮</div>
            <h3 class="text-xl font-semibold mb-2">Daily Horoscope</h3>
            <p class="text-gray-400">
              Know what the stars say about your day and upcoming events.
            </p>
          </div>

          {/* <!-- Card 3 --> */}
          <div class="bg-gray-800 p-6 rounded-2xl text-center hover:scale-105 hover:bg-gray-700 transition shadow-lg">
            <div class="text-4xl mb-4">❤️</div>
            <h3 class="text-xl font-semibold mb-2">Love Compatibility</h3>
            <p class="text-gray-400">
              Check how compatible you are with your partner.
            </p>
          </div>

          {/* <!-- Card 4 --> */}
          <div class="bg-gray-800 p-6 rounded-2xl text-center hover:scale-105 hover:bg-gray-700 transition shadow-lg">
            <div class="text-4xl mb-4">📅</div>
            <h3 class="text-xl font-semibold mb-2">Kundli Matching</h3>
            <p class="text-gray-400">
              Perfect match analysis for marriage and relationships.
            </p>
          </div>

          {/* <!-- Card 5 --> */}
          <div class="bg-gray-800 p-6 rounded-2xl text-center hover:scale-105 hover:bg-gray-700 transition shadow-lg">
            <div class="text-4xl mb-4">🪐</div>
            <h3 class="text-xl font-semibold mb-2">Planetary Reports</h3>
            <p class="text-gray-400">
              Understand planetary positions and their effects.
            </p>
          </div>

          {/* <!-- Card 6 --> */}
          <div class="bg-gray-800 p-6 rounded-2xl text-center hover:scale-105 hover:bg-gray-700 transition shadow-lg">
            <div class="text-4xl mb-4">💼</div>
            <h3 class="text-xl font-semibold mb-2">Career Guidance</h3>
            <p class="text-gray-400">
              Find the best career path based on your horoscope.
            </p>
          </div>

        </div>
      </section>
    </>
  )
}
