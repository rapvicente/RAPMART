"use client";
import React from 'react';
import { Irish_Grover } from 'next/font/google';

const irishGrover = Irish_Grover({
  weight: '400',
  subsets: ['latin'],
});

const Homepage: React.FC = () => {
  return (
    <div className="flex justify-between items-center p-8">
      <div className="flex-1 text-center">
        <h1 className={`text-4xl font-bold text-black ${irishGrover.className}`}>WELCOME TO RAPMART</h1>
        <p className={`text-base mt-4 text-black ${irishGrover.className}`}>
          We are selling hard to find authentic popmart products with reasonable prices. Want to know more?
        </p>
        <a href="/about">
          <button
            className={`mt-4 px-4 py-2 text-base text-white bg-[#7886C7] border-none rounded cursor-pointer transition-colors duration-300 hover:bg-[#48A6A7] hover:text-black ${irishGrover.className}`}
          >
            ABOUT US
          </button>
        </a>
      </div>
      <div className="flex-1 text-right">
        <img src="/LABUBUHOME.png" alt="Popmart Products" className="max-w-full h-auto" />
      </div>
    </div>
  );
};

export default Homepage;