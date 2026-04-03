import React from 'react'
import { toast } from 'react-toastify';
import app from '../Firebase/config';
import { getDatabase, ref, set } from "firebase/database";

export default function Contact() {
  const formHandler = (event) => {
    event.preventDefault();
    const data = {
      email: event.target.email.value,
      name: event.target.name.value,
      message: event.target.message.value,
    }
    const db = getDatabase(app);
    set(ref(db, 'users/' + Date.now()), data);
    event.target.reset();
    toast.success('Message Send suceessfully !!');
    console.log(data);
  }
  return (
    <>
      <section class="bg-gradient-to-b from-black via-purple-900 to-indigo-900 py-16 px-4">
        <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          {/* <!-- Left Content --> */}
          <div class="text-white">
            <h2 class="text-4xl md:text-5xl font-bold mb-4">
              Get In Touch 🔮
            </h2>
            <p class="text-gray-300 mb-6">
              Have questions about your stars? Reach out to our astrology experts anytime.
            </p>

            <div class="space-y-4">
              <p>📍 Location: India</p>
              <p>📧 Email: astro@example.com</p>
              <p>📞 Phone: +91 9876543210</p>
            </div>
          </div>

          {/* <!-- Form --> */}
          <div class="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg">
            <form class="space-y-5" onSubmit={formHandler}>

              {/* <!-- Name --> */}
              <input
                type="text"
                name='name'
                placeholder="Your Name"
                class="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-purple-500"
              />

                {/* <!-- Email --> */}
                <input
                  type="email"
                  name='email'
                  placeholder="Your Email"
                  class="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-purple-500"
                />

                  {/* <!-- Message --> */}
                  <textarea
                    rows="4"
                    name='message'
                    placeholder="Your Message"
                    class="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-purple-500"
                  ></textarea>

                  {/* <!-- Button --> */}
                  <button
                    type="submit"
                    class="w-full bg-gradient-to-r from-purple-500 to-indigo-500 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition duration-300"
                  >
                    Send Message ✨
                  </button>

                </form>
              </div>

          </div>
      </section>
    </>
  )
}
