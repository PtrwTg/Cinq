import React from 'react'
import styles from './hello.module.css'

function hello() {
  return (
    <div className={styles.container}>
        <div className={styles.main}>
            <p className={styles.hello}>Hello, My name is</p>
            <h1 className={styles.name}>Cinq</h1>
            <h1 className={styles.lname}>Purich</h1>
            <div className={styles.underline}></div>
            <p className={styles.position}>Graphic & UX/UI design</p>
        </div>
    </div>
  )
}

export default hello