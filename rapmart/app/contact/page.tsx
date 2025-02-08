"use client";
import React, { useState } from 'react';
import { Irish_Grover } from 'next/font/google';

const irishGrover = Irish_Grover({
  weight: '400',
  subsets: ['latin'],
});

const ContactPage: React.FC = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log({ name, number, email, message });
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center">
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50" style={{ backgroundImage: 'url(/contactBackground.png)', backgroundColor: '#7886C7'}}></div>
            <div className="relative bg-[#FFF2F2] p-5 max-w-lg mx-auto rounded-lg shadow-md">
                <h1 className={`text-6xl font-bold text-[#2D336B] text-center ${irishGrover.className}`}>Contact Us</h1>
                <p className="text-[#7886C7] text-center mb-5">We would love to hear from you! Please fill out the form below and we will get in touch with you shortly.</p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-2.5">
                    <label className="text-[#2D336B]">
                        Name:
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="p-2.5 border border-[#A9B5DF] rounded w-full"
                        />
                    </label>
                    <label className="text-[#2D336B]">
                        Phone Number:
                        <input
                            type="text"
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                            className="p-2.5 border border-[#A9B5DF] rounded w-full"
                        />
                    </label>
                    <label className="text-[#2D336B]">
                        Email:
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="p-2.5 border border-[#A9B5DF] rounded w-full"
                        />
                    </label>
                    <label className="text-[#2D336B]">
                        Message:
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="p-2.5 border border-[#A9B5DF] rounded w-full h-24"
                        />
                    </label>
                    <button type="submit" className={`bg-[#2D336B] text-[#FFF2F2] p-2.5 w-36 border-none rounded cursor-pointer mt-2.5 self-end ${irishGrover.className}`}>
                        SUBMIT
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;