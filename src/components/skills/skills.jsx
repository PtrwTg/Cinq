import React from 'react'
import styles from './skills.module.css'
import skillsimg from './skillsimg.svg'

function skills() {
  return (
    <div className={styles.container}>
        <div className={styles.divp}>
            <p className={styles.pskill}>Skills</p>
            <div className={styles.underline}></div>
        </div>
        <img className={styles.skillsimg} src={skillsimg} alt="" />
    </div>
  )
}

export default skills