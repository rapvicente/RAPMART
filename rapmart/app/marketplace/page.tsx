"use client";
import React from 'react';
import { Irish_Grover } from 'next/font/google';
import Item from '../../components/items';

const irishGrover = Irish_Grover({
  weight: '400',
  subsets: ['latin'],
});

const items = [
  { id: 0, imageSrc: '/crybaby.png', title: 'Crybaby', price: '₱1000' },
  { id: 1, imageSrc: '/flipwithme.png', title: 'Flip With Me', price: '₱1200' },
  { id: 2, imageSrc: '/labubu.png', title: 'Labubu', price: '₱1500' },
  { id: 3, imageSrc: '/hirono.png', title: 'Hirono', price: '₱1300' },
  { id: 4, imageSrc: '/item1.png', title: 'Skullpanda', price: '₱2100' },
  { id: 5, imageSrc: '/item2.png', title: 'Penny Wise Molly', price: '₱1150' },
  { id: 6, imageSrc: '/item3.png', title: 'Ducky Panda', price: '₱4250' },
  { id: 7, imageSrc: '/item4.png', title: 'Space Molly', price: '₱2350' },
  { id: 8, imageSrc: '/item5.png', title: 'Zimomo', price: '₱3400' },
  { id: 9, imageSrc: '/item6.png', title: 'Time to Chill ', price: '₱6450' },
  { id: 10, imageSrc: '/item7.png', title: 'Angel in Clouds Labubu', price: '₱5500' },
  { id: 11, imageSrc: '/item8.png', title: 'Hallobubu', price: '₱6799' },
];

const MarketplacePage = () => {
  return (
    <div className="bg-[#FFF2F2] p-10">
      <h1 className={`text-6xl font-bold text-[#2D336B] text-left ${irishGrover.className}`}>Marketplace</h1>
      <div className="flex flex-wrap justify-center">
        {items.map((item) => (
          <Item key={item.id} imageSrc={item.imageSrc} title={item.title} price={item.price} />
        ))}
      </div>
    </div>
  );
};

export default MarketplacePage;