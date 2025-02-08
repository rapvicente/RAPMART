import React from 'react';
import Homepage from '../components/landing/homepage';
import IntroMarketplace from '@/components/introMarketplace';
import VideoComponent from '@/components/video';
export default function Home() {
  return (
    <div>
      <Homepage />
      <IntroMarketplace />
      <VideoComponent />
    </div>
  );
}