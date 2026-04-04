import React, { useState } from 'react'

export default function About() {

  const [more, setMore] = useState(false);

  return (
    <>
      <section class="bg-gray-900 text-white py-16 px-6">
        <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          {/* <!-- 🌌 Image --> */}
          <div class="relative">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
              alt="Astrology Stars"
              class="rounded-2xl shadow-xl w-full h-[400px] object-cover"
            />

            <div class="absolute inset-0 bg-purple-700 opacity-20 rounded-2xl"></div>
          </div>

          {/* <!-- ✨ Content --> */}
          <div>
            <h2 class="text-3xl md:text-4xl font-bold mb-4">
              About Our Astrology
            </h2>

            <p class="text-gray-400 mb-4">
              We bring ancient astrology wisdom combined with modern insights to help you
              understand your life path, relationships, and future possibilities.
            </p>

            <p class="text-gray-400 mb-6">
              Our expert astrologers provide accurate birth chart analysis, daily horoscope,
              and compatibility readings to guide your journey.
            </p>

            {/* <!-- 🔮 Features --> */}
            <div class="grid grid-cols-2 gap-4 mb-6">
              <div class="bg-gray-800 p-4 rounded-xl text-center">
                <h3 class="font-semibold">Accurate Predictions</h3>
              </div>
              <div class="bg-gray-800 p-4 rounded-xl text-center">
                <h3 class="font-semibold">Expert Astrologers</h3>
              </div>
              <div class="bg-gray-800 p-4 rounded-xl text-center">
                <h3 class="font-semibold">Personal Guidance</h3>
              </div>
              <div class="bg-gray-800 p-4 rounded-xl text-center">
                <h3 class="font-semibold">24/7 Support</h3>
              </div>
            </div>
            {more && (
              <p class="text-gray-400 mb-4">
                In astrology, a person’s birth chart (also called a natal chart) is created using their date, time, and place of birth. This chart is used to understand personality traits, strengths, weaknesses, relationships, career paths, and future possibilities.
              </p>


            )}

            {/* <!-- 🚀 Button --> */}
            <button class="bg-purple-600 px-6 py-3 rounded-full hover:bg-purple-700 transition" onClick={() => setMore(!more)}>
              {more ? "Learn Less" : "Learn More"}
            </button>
          </div>

        </div>
      </section>
    </>
  )
}
