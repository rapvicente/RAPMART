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
    <div style={styles.container}>
      <h1 style={{ ...styles.title, fontFamily: irishGrover.style.fontFamily }}>MARKETPLACE</h1>
      <div style={styles.itemsContainer}>
        <Item imageSrc="/flipwithme.png" />
        <Item imageSrc="/hirono.png" />
        <Item imageSrc="/crybaby.png" />
        <Item imageSrc="/spacemolly.png" />
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#A9B5DF',
    padding: '2rem',
    textAlign: 'center' as 'center',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: 'black',
    marginBottom: '2rem',
  },
  itemsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
};

export default IntroMarketplace;