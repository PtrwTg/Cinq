import React from 'react'
import styles from './bluenavbar.module.css'
import Back from './arrow.png'
import { Link } from 'react-router-dom';


function bluenavbar() {
  return (
    <nav className={styles.bluenavbar}>
        <img className={styles.back} src={Back} alt="" />

        <div className={styles.menu}>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/contact">Contact Me</Link>
        </li>
        </div>

    </nav>
  )
}

export default bluenavbar