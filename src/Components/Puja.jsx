import React from 'react'

export default function Puja() {
  return (
    <>
      {/* <!-- Puja & Remedies Section --> */}
<section class="relative bg-black text-white py-20 px-6 overflow-hidden">

  {/* <!-- Background Glow --> */}
  <div class="absolute inset-0 bg-gradient-to-br from-orange-700/20 via-purple-900/20 to-black"></div>

  {/* <!-- Container --> */}
  <div class="relative max-w-7xl mx-auto">

    {/* <!-- Heading --> */}
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-6xl font-bold mb-4">
        Puja & Remedies
      </h2>
      <p class="text-gray-400 max-w-2xl mx-auto">
        Remove life obstacles and attract positivity through powerful Vedic pujas 
        and personalized astrological remedies.
      </p>
    </div>

    {/* <!-- Featured Puja --> */}
    <div class="bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl p-8 md:p-12 mb-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
      
      {/* <!-- Left Content --> */}
      <div>
        <h3 class="text-2xl md:text-3xl font-semibold mb-3">
          🔥 Maha Mrityunjaya Puja
        </h3>
        <p class="text-gray-100 mb-4">
          A powerful Vedic ritual for health, protection, and removing negative energies. 
          Ideal for overcoming challenges and improving overall well-being.
        </p>
        <button class="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition">
          Book Puja
        </button>
      </div>

      {/* <!-- Icon --> */}
      <div class="text-7xl">
        🕉️
      </div>

    </div>

    {/* <!-- Remedies Grid --> */}
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* <!-- Card 1 --> */}
      <div class="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-gradient-to-br hover:from-orange-600 hover:to-red-600 transition duration-300">
        <div class="text-4xl mb-4 group-hover:scale-125 transition">🪔</div>
        <h3 class="text-xl font-semibold mb-2">Daily Puja Rituals</h3>
        <p class="text-gray-400 text-sm">
          Simple daily rituals to bring peace, prosperity, and positive energy into your life.
        </p>
      </div>

      {/* <!-- Card 2 --> */}
      <div class="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-gradient-to-br hover:from-purple-600 hover:to-indigo-600 transition duration-300">
        <div class="text-4xl mb-4 group-hover:scale-125 transition">📿</div>
        <h3 class="text-xl font-semibold mb-2">Mantra Chanting</h3>
        <p class="text-gray-400 text-sm">
          Powerful mantras to reduce stress, improve focus, and attract divine blessings.
        </p>
      </div>

      {/* <!-- Card 3 --> */}
      <div class="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-gradient-to-br hover:from-pink-600 hover:to-rose-600 transition duration-300">
        <div class="text-4xl mb-4 group-hover:scale-125 transition">🌿</div>
        <h3 class="text-xl font-semibold mb-2">Vastu Remedies</h3>
        <p class="text-gray-400 text-sm">
          Balance your home energy with simple Vastu corrections for better harmony.
        </p>
      </div>

      {/* <!-- Card 4 --> */}
      <div class="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-gradient-to-br hover:from-yellow-500 hover:to-orange-500 transition duration-300">
        <div class="text-4xl mb-4 group-hover:scale-125 transition">💰</div>
        <h3 class="text-xl font-semibold mb-2">Wealth Remedies</h3>
        <p class="text-gray-400 text-sm">
          Attract financial stability and growth with proven astrological solutions.
        </p>
      </div>

      {/* <!-- Card 5 --> */}
      <div class="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-gradient-to-br hover:from-blue-500 hover:to-indigo-600 transition duration-300">
        <div class="text-4xl mb-4 group-hover:scale-125 transition">💖</div>
        <h3 class="text-xl font-semibold mb-2">Love & Relationship Remedies</h3>
        <p class="text-gray-400 text-sm">
          Strengthen your bond and resolve conflicts with effective remedies.
        </p>
      </div>

      {/* <!-- Card 6 --> */}
      <div class="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-gradient-to-br hover:from-green-500 hover:to-emerald-600 transition duration-300">
        <div class="text-4xl mb-4 group-hover:scale-125 transition">🛡️</div>
        <h3 class="text-xl font-semibold mb-2">Protection Remedies</h3>
        <p class="text-gray-400 text-sm">
          Shield yourself from negative energies and evil influences.
        </p>
      </div>

    </div>

    {/* <!-- CTA --> */}
    <div class="text-center mt-14">
      <button class="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-full font-semibold shadow-lg transition duration-300">
        Get Personalized Remedies
      </button>
    </div>

  </div>

</section>
    </>
  )
}
