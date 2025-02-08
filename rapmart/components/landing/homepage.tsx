"use client";
import React, { useState } from 'react';
import { Irish_Grover } from 'next/font/google';

const irishGrover = Irish_Grover({
  weight: '400',
  subsets: ['latin'],
});

const Homepage: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={styles.container}>
      <div style={styles.textContainer}>
        <h1 style={{ ...styles.title, fontFamily: irishGrover.style.fontFamily }}>WELCOME TO RAPMART</h1>
        <p style={{ ...styles.description, fontFamily: irishGrover.style.fontFamily }}>
          We are selling hard to find authentic popmart products with reasonable prices. Want to know more?
        </p>
        <button
          style={{
            ...styles.button,
            ...(isHovered ? styles.buttonHover : {}),
            fontFamily: irishGrover.style.fontFamily,
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          ABOUT US
        </button>
      </div>
      <div style={styles.imageContainer}>
        <img src="/LABUBUHOME.png" alt="Popmart Products" style={styles.image} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '2rem',
  },
  textContainer: {
    flex: 1,
    textAlign: 'center' as 'center', // Center align the text
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: 'black', // Set text color to black
  },
  description: {
    fontSize: '1rem',
    marginTop: '1rem',
    color: 'black', // Set text color to black
  },
  button: {
    marginTop: '1rem',
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#7886C7',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease', // Add transition for smooth hover effect
  },
  buttonHover: {
    backgroundColor: '#5a6ba3', // Darker shade for hover effect
  },
  imageContainer: {
    flex: 1,
    textAlign: 'right' as 'right',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
  },
};

export default Homepage;