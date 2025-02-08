import React from 'react';
import { Irish_Grover } from 'next/font/google';

const irishGrover = Irish_Grover({
  weight: '400',
  subsets: ['latin'],
});

interface ItemProps {
  imageSrc: string;
}

const Item: React.FC<ItemProps> = ({ imageSrc }) => {
  return (
    <div style={styles.item}>
      <img src={imageSrc} alt="Item" style={styles.image} />
      <button style={{ ...styles.button, fontFamily: irishGrover.style.fontFamily }}>BUY NOW</button>
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
  },
};

export default Item;