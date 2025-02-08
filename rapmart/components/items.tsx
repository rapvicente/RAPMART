"use client";
import React, { useState } from 'react';
import { Irish_Grover } from 'next/font/google';

const irishGrover = Irish_Grover({
  weight: '400',
  subsets: ['latin'],
});

interface ItemProps {
  imageSrc: string;
}

const Item: React.FC<ItemProps> = ({ imageSrc }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={styles.item}>
      <img src={imageSrc} alt="Item" style={styles.image} />
      <button
        style={{
          ...styles.button,
          ...(isHovered ? styles.buttonHover : {}),
          fontFamily: irishGrover.style.fontFamily,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        BUY NOW
      </button>
    </div>
  );
};

const styles = {
  item: {
    textAlign: 'center' as 'center',
    margin: '1rem',
  },
  image: {
    width: '250px',
    height: '250px',
    objectFit: 'cover' as 'cover',
    borderRadius: '10px', // Add border radius for rounded corners
  },
  button: {
    marginTop: '1rem',
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#2D336B',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease', // Add transition for smooth hover effect
  },
  buttonHover: {
    backgroundColor: '#1f244f', // Darker shade for hover effect
  },
};

export default Item;