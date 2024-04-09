import React from 'react'
import styles from './contact.module.css'

function contact() {
  return (
    <div className={styles.container}>
    <p className={styles.pcontact}>Contact me</p>
  <div className={styles.divbutton}>
    <button className={styles.skillbut}>Bē</button>
    <button className={styles.skillbut}>F</button>
    <button className={styles.skillbut}>in</button>
  </div>
  <div className={styles.divcontact}>
  <p>Email : phurichaya.7502@gmail.com</p>
  <p>Line ID : 070x</p>
  </div>
</div>
  )
}

export default contact