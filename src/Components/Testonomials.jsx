import React from 'react'

export default function Testonomials() {
  return (
    <>
      <section class="bg-gradient-to-r from-indigo-900 via-purple-900 to-black py-16 px-4">
        <div class="max-w-7xl mx-auto text-center">

          {/* <!-- Heading --> */}
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p class="text-gray-300 mb-12">
            Real experiences from people who trusted our astrology guidance ✨
          </p>

          {/* <!-- Cards --> */}
          <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {/* <!-- Card 1 --> */}
            <div class="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
              <div class="flex justify-center mb-4">
                <img src="https://i.pravatar.cc/100?img=1" class="w-16 h-16 rounded-full border-2 border-purple-400"/>
              </div>
              <h3 class="text-white font-semibold text-lg">Rohit Sharma</h3>
              <p class="text-sm text-gray-300 mb-3">Business Owner</p>

              {/* <!-- Stars --> */}
              <div class="flex justify-center mb-3 text-yellow-400">
                ⭐⭐⭐⭐⭐
              </div>

              <p class="text-gray-200 text-sm">
                "Amazing predictions! My career improved after following the guidance. Highly recommended."
              </p>
            </div>

            {/* <!-- Card 2 --> */}
            <div class="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
              <div class="flex justify-center mb-4">
                <img src="https://i.pravatar.cc/100?img=2" class="w-16 h-16 rounded-full border-2 border-purple-400"/>
              </div>
              <h3 class="text-white font-semibold text-lg">Priya Verma</h3>
              <p class="text-sm text-gray-300 mb-3">Student</p>

              <div class="flex justify-center mb-3 text-yellow-400">
                ⭐⭐⭐⭐⭐
              </div>

              <p class="text-gray-200 text-sm">
                "Very accurate horoscope reading. It helped me make better life decisions."
              </p>
            </div>

            {/* <!-- Card 3 --> */}
            <div class="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
              <div class="flex justify-center mb-4">
                <img src="https://i.pravatar.cc/100?img=3" class="w-16 h-16 rounded-full border-2 border-purple-400"/>
              </div>
              <h3 class="text-white font-semibold text-lg">Aman Gupta</h3>
              <p class="text-sm text-gray-300 mb-3">Engineer</p>

              <div class="flex justify-center mb-3 text-yellow-400">
                ⭐⭐⭐⭐☆
              </div>

              <p class="text-gray-200 text-sm">
                "Good experience overall. The remedies suggested were simple and effective."
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
