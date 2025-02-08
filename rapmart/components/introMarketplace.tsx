"use client";
import React from 'react';
import { Irish_Grover } from 'next/font/google';
import Item from './items';

const irishGrover = Irish_Grover({
  weight: '400',
  subsets: ['latin'],
});

const IntroMarketplace: React.FC = () => {
  return (
    <div className="bg-[#A9B5DF] p-8 text-center">
      <div className="flex justify-start items-center mb-8">
        <h1 className={`text-4xl font-bold text-black mr-4 ${irishGrover.className}`}>MARKETPLACE</h1>
        <a href="/marketplace">
          <button className={`px-4 py-2 text-lg font-bold text-white bg-[#2D336B] rounded transition-colors duration-300 hover:bg-[#48A6A7] hover:text-black ${irishGrover.className}`}>
            SEE MORE
          </button>
        </a>
      </div>
      <div className="flex justify-around items-center">
        <Item imageSrc="/labubu.png" title="Labubu" price="₱7500" />
        <Item imageSrc="/hirono.png" title="Hirono" price="₱5300" />
        <Item imageSrc="/crybaby.png" title="Crybaby" price="₱9000" />
        <Item imageSrc="/spacemolly.png" title="Space Molly" price="₱5400" />
      </div>
    </div>
  );
};

export default IntroMarketplace;