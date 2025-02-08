import React from 'react';
import Link from 'next/link';
import { Irish_Grover } from 'next/font/google';

const irishGrover = Irish_Grover({
  weight: '400',
  subsets: ['latin'],
});

const Navbar: React.FC = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        <Link href="/">
          <img src="/RAPMART.png" alt="Logo" style={styles.logoImage} />
        </Link>
      </div>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link href="/">HOME</Link>
        </li>
        <li style={styles.navItem}>
          <Link href="/about">ABOUT US</Link>
        </li>
        <li style={styles.navItem}>
          <Link href="/gallery">GALLERY</Link>
        </li>
        <li style={styles.navItem}>
          <Link href="/marketplace">MARKETPLACE</Link>
        </li>
        <li style={styles.navItem}>
          <Link href="/faqs">FAQS</Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2D336B',
    padding: '1rem',
  },
  logo: {
    flex: '0 1 auto',
  },
  logoImage: {
    height: '60px',
    width: '60px,' // Increased height for a bigger logo
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'flex-end',
    margin: 0,
    padding: 0,
    flex: '1 1 auto',
  },
  navItem: {
    color: '#fff',
    marginLeft: '1.5rem', // Increased gap
    fontSize: '0.875rem', // Smaller font size
    fontFamily: irishGrover.style.fontFamily,
  },
};

export default Navbar;