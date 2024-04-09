// src/components/Navbar/Navbar.jsx
import React from 'react';
import styles from './navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.menu}>
        <li><a href="/about">About</a></li>
        <li><a href="/portfolio">Portfolio</a></li>
        <li><a href="/contact">Contact Me</a></li>
        </div>
    </nav>
  );
}

export default Navbar;