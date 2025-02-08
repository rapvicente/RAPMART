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
      <div style={styles.header}>
        <h1 style={{ ...styles.title, fontFamily: irishGrover.style.fontFamily }}>MARKETPLACE</h1>
        <button style={{ ...styles.button, fontFamily: irishGrover.style.fontFamily }}>SEE MORE</button>
      </div>
      <div style={styles.itemsContainer}>
        <Item imageSrc="/labubu.png" />
        <Item imageSrc="/hirono.png" />
        <Item imageSrc="/crybaby.png" />
        <Item imageSrc="/spacemolly.png" />
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#7886C7',
    padding: '2rem',
    textAlign: 'center' as 'center',
  },
  header: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: '2rem',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: 'black',
    marginRight: '1rem',
  },
  button: {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#2D336B',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  itemsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
};

export default IntroMarketplace;