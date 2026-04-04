import React, { useState } from 'react'
import app from '../Firebase/config';
import { getDatabase, ref, set } from "firebase/database";
import { toast } from 'react-toastify';

export default function Appiontment() {


    const formHandler = (event) => {
        event.preventDefault();
        const data = {
            name: event.target.name.value,
            email: event.target.email.value,
            number: event.target.number.value,
            message: event.target.message.value,
            date: event.target.date.value
        }
        const db = getDatabase(app);
        set(ref(db, 'users/' + Date.now()), data);
        event.target.reset();
        toast.success('Booking Confirmed !!');
        console.log(data);
    }

    return (
        <>
            {/* <!-- Appointment Section Start --> */}
            <section class="py-12 px-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center">

                <div class="bg-white rounded-2xl shadow-xl p-6 md:p-8 w-full max-w-lg">

                    {/* <!-- Heading --> */}
                    <h2 class="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">
                        Book Appointment
                    </h2>

                    {/* <!-- Form --> */}
                    <form class="space-y-4" onSubmit={formHandler}>

                        {/* <!-- Name --> */}
                        <input type="text" placeholder="Full Name"
                            name='name'
                            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />

                        {/* <!-- Email --> */}
                        <input type="email" placeholder="Email"
                            name='email'
                            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />

                        {/* <!-- Phone --> */}
                        <input type="number" placeholder="Phone"
                            name='number'
                            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />

                        {/* <!-- Date & Time --> */}
                        <div class="grid grid-cols-2 gap-3">
                            <input type="date"
                                name='date'
                                class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />

                            <input type="time"
                                name='time'
                                class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
                        </div>

                        {/* <!-- Message --> */}
                        <textarea rows="3"
                            name='message'
                            placeholder="Message (optional)"
                            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"></textarea>

                        {/* <!-- Button --> */}
                        <button type="submit"
                            class="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-lg font-semibold hover:scale-105 transition duration-300">
                            Book Now
                        </button>

                    </form>

                </div>

            </section>
            {/* <!-- Appointment Section End --></input> */}
        </>
    )
}
