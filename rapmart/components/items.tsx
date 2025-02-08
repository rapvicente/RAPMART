"use client";
import React, { useState } from 'react';
import { Irish_Grover } from 'next/font/google';

const irishGrover = Irish_Grover({
  weight: '400',
  subsets: ['latin'],
});

interface ItemProps {
  imageSrc: string;
  title: string;
  price: string;
}

const Item: React.FC<ItemProps> = ({ imageSrc, title, price }) => {
  const [isImageHovered, setIsImageHovered] = useState(false);

  return (
    <div className="text-center m-4">
      <img
        src={imageSrc}
        alt={title}
        className={`w-64 h-64 object-cover rounded-lg transition-transform duration-300 ${isImageHovered ? 'transform scale-105' : ''}`}
        onMouseEnter={() => setIsImageHovered(true)}
        onMouseLeave={() => setIsImageHovered(false)}
      />
      <h2 className={`mt-2 text-lg font-bold ${irishGrover.className}`}>{title}</h2>
      <p className={`mt-1 text-base ${irishGrover.className}`}>{price}</p>
      <button
        className={`mt-2 px-4 py-2 text-white bg-[#2D336B] rounded transition-colors duration-300 hover:bg-[#48A6A7] hover:text-black ${irishGrover.className}`}
      >
        BUY NOW
      </button>
    </div>
  );
};

export default Item;