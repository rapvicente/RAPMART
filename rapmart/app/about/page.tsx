"use client";
import React from 'react';
import { Irish_Grover } from 'next/font/google';

const irishGrover = Irish_Grover({
  weight: '400',
  subsets: ['latin'],
});

const AboutPage: React.FC = () => {
  return (
    <div className={`p-8 text-left ${irishGrover.className}`}>
      <h1 className="text-4xl font-bold mb-8 text-[#2D336B]">About Us</h1>
      <div className="mt-4 overflow-hidden">
        <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#2D336B] to-transparent animate-moveLine"></div>
      </div>
      <div className="flex justify-between items-center mt-8 mb-12">
        <div className="flex-1 mr-8 text-black">
          <p className="text-lg mb-6">
            Welcome to RAPMART! We are dedicated resellers of authentic Popmart products. Our mission is to provide hard-to-find Popmart collectibles at reasonable prices. We pride ourselves on our ability to ship products overseas, ensuring that Popmart enthusiasts around the world can enjoy their favorite items.
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <img src="/popmart2.png" alt="Popmart Product 1" className="w-full h-auto rounded-lg" />
        </div>
      </div>
      <div className="flex justify-end items-center mb-12">
        <div className="flex-1 flex justify-center">
          <img src="/popmart1.png" alt="Popmart Product 2" className="w-full h-auto rounded-lg" />
        </div>
        <div className="flex-1 ml-8 text-black">
          <p className="text-lg mb-6">
            RAPMART was established in February 2025 with the goal of becoming the go-to source for Popmart products. Our team is passionate about Popmart and committed to delivering exceptional customer service.
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center mb-12">
        <div className="flex-1 mr-8 text-black">
          <p className="text-lg mb-6">
            Our system is designed to provide a seamless shopping experience for Popmart enthusiasts. We offer a wide range of products, from the latest releases to rare collectibles. Our user-friendly platform makes it easy to browse, purchase, and track your orders.
          </p>
          <p className="text-lg mb-6">
            We also provide detailed product descriptions, high-quality images, and customer reviews to help you make informed purchasing decisions. Our secure payment system ensures that your transactions are safe and protected.
          </p>
          <div className="mt-4 overflow-hidden">
            <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#2D336B] to-transparent animate-moveLine"></div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-12">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/fMNB0kSv6j0?si=EBm5PpmSYAB9fCPN"
          title="Labubu Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg"
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Kt1FWcr9w3o?si=ZYCvxrHqvS8QEtDi"
          title="Labubu Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg"
        ></iframe>
      </div>
    </div>
  );
};

export default AboutPage;