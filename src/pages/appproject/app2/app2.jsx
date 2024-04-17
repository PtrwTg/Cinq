import React from 'react'
import styles from './app2.module.css'
import Navbar from '../../../components/bluenavbar/bluenavbar'
import App2_1 from './app2_1.svg'
import App2_2 from './app2_2.svg'
import Contact from '../../../components/contact/contact'


function app2() {
  return (
    <div className={styles.main}>
        <Navbar />
        <img className={styles.app2_1} src={App2_1} alt="" />
        <img className={styles.app2_2} src={App2_2} alt="" />
        <div className={styles.space}></div>
        <Contact />
    </div>
  )
}

export default app2