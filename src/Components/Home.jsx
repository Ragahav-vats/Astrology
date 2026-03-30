import React from 'react'
import {
  FaStar,
  FaUserAstronaut,
  FaHeart,
  FaGem,
  FaOm,
  FaSun,
} from "react-icons/fa";
import { FaMoon, } from "react-icons/fa";

export default function Home() {
  const services = [
    {
      title: "Daily Horoscope",
      desc: "Read your daily predictions",
      btn: "View Today →",
      color: "from-indigo-500 to-purple-500",
    },
    {
      title: "Kundli Analysis",
      desc: "Detailed birth chart & insights",
      btn: "Analyze Now →",
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Love & Marriage",
      desc: "Compatibility & love life predictions",
      btn: "Check Match →",
      color: "from-pink-500 to-purple-500",
    },
    {
      title: "Gemstone Recommendation",
      desc: "Find lucky gemstone for success",
      btn: "Get Suggestion →",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Puja & Remedies",
      desc: "Book religious pujas & solutions",
      btn: "Book Puja →",
      color: "from-orange-500 to-yellow-500",
    },
  ];
  return (
    <>

      <div className="bg-[#0f172a] text-white py-12 px-4">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-10">
          ✨ Explore Astrology Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {services.map((item, index) => (
            <div
              key={index}
              className={`p-5 rounded-2xl bg-gradient-to-br ${item.color} shadow-lg hover:scale-105 transition duration-300`}
            >
              <div className="bg-white/10 p-4 rounded-xl h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm opacity-80">{item.desc}</p>
                </div>

                <button className="mt-4 text-sm font-medium hover:underline">
                  {item.btn}
                </button>
              </div>
            </div>
          ))}
        </div>
        <div class="mt-10">
          <div className="bg-gradient-to-br from-[#0b0f2a] via-[#1a1f4c] to-[#0b0f2a] text-white px-4 pb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {/* 🟡 Panchang Card */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl shadow-lg hover:shadow-blue-500/20 transition duration-300">
                <h3 className="text-lg font-semibold mb-3 text-yellow-400">
                  Today's Panchang
                </h3>

                <p className="text-sm text-gray-300 mb-4">
                  Wednesday, 24 April 2024
                </p>

                <div className="grid grid-cols-2 gap-3 text-sm text-gray-200">
                  <p>🌙 Tithi: Ekadashi</p>
                  <p>⭐ Nakshatra: Rohini</p>
                  <p>🧘 Yoga: Siddhi</p>
                  <p>🌅 Sunrise: 06:02 AM</p>
                  <p>🌇 Sunset: 06:55 PM</p>
                </div>

                <button className="mt-4 text-sm text-cyan-400 hover:text-cyan-300">
                  View Full Panchang →
                </button>
              </div>

              {/* 🟣 Astrologer */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl shadow-lg text-center hover:shadow-pink-500/20 transition duration-300">
                <h3 className="text-lg font-semibold mb-4 text-pink-400">
                  Featured Astrologer
                </h3>

                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-pink-500 to-yellow-500 flex items-center justify-center text-2xl shadow-lg">
                  👩‍🔮
                </div>

                <h4 className="mt-3 font-semibold">
                  Dr. Priyanka Sharma
                </h4>

                <p className="text-sm text-gray-300">
                  Vedic Astrology Expert
                </p>

                <p className="text-yellow-400 mt-2">
                  ★★★★★ <span className="text-gray-300 text-sm">4.9</span>
                </p>

                <button className="mt-4 bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-2 rounded-lg hover:opacity-90">
                  Consult Now
                </button>
              </div>

              {/* 🔵 Blogs */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl shadow-lg hover:shadow-purple-500/20 transition duration-300">
                <h3 className="text-lg font-semibold mb-4 text-purple-400">
                  Astrology Insights & Blogs
                </h3>

                <div className="space-y-3">
                  <div className="flex gap-3 items-center">
                    <img
                      src="https://images.unsplash.com/photo-1502134249126-9f3755a50d78"
                      className="w-16 h-16 rounded-lg object-cover border border-white/10"
                    />
                    <p className="text-sm text-gray-200">
                      Moon Transit in Taurus – Impact on 12 Zodiac Signs
                    </p>
                  </div>

                  <div className="flex gap-3 items-center">
                    <img
                      src="https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3"
                      className="w-16 h-16 rounded-lg object-cover border border-white/10"
                    />
                    <p className="text-sm text-gray-200">
                      How Gemstones Can Change Your Life?
                    </p>
                  </div>
                </div>

                <button className="mt-4 text-sm text-cyan-400 hover:text-cyan-300">
                  View All →
                </button>
              </div>

            </div>
          </div>
        </div>
        <div className="mt-16 bg-gradient-to-br from-[#0b0f2a] via-[#1a1f4c] to-[#0b0f2a] px-4 pb-16">

          <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg">

            {/* Left Text */}
            
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-white">
                📩 Subscribe to Astro Updates
              </h3>
              <p className="text-sm text-gray-300 mt-1">
                Get daily horoscope & exclusive astrology tips in your inbox.
              </p>
            </div>
            

            {/* Input + Button */}
            <div className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full md:w-64 px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-300 outline-none border border-white/10 focus:ring-2 focus:ring-cyan-400"
              />

              <button className="bg-gradient-to-r from-blue-500 to-cyan-500 px-5 py-2 rounded-lg text-white hover:opacity-90 whitespace-nowrap">
                Subscribe
              </button>
            </div>

          </div>

        </div>
      </div>





    </>
  )
}
