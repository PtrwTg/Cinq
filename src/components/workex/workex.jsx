import React from 'react'
import styles from './workex.module.css'
import Img1   from './1st.png'
import Img2   from './2st.png'
import Img3   from './3th.png'
import Img4   from './4th.png'

function workex() {
  return (
    <div className={styles.divcon}>
        <div className={styles.divtopic}>
            <p className={styles.htopic}>My work experiences</p>
            <div className={styles.underline}></div>
        </div>
        <div className={styles.workex}>
            <img src={Img1} alt="" />
            <div className={styles.divpex1}>
            <p className={styles.pex1_1}>During the 1st years I want to try new experiences. And I tried to learn how to</p>
            <p className={styles.pex1_2}>make filters on IG. I've tried making about 4 filters. and has the highest number of</p>
            <p className={styles.pex1_3}>users about tens of thousands.</p>
            </div>

            <img  className={styles.img} src={Img2} alt="" />
            <div className={styles.divpex1}>
            <p className={styles.pex1_1}>It’s the pair project that I’m responsible for all UX design. Our project is a project </p>
            <p className={styles.pex1_4}>about online courses. It was a challenging project for me because of the number</p>
            <p className={styles.pex1_3}>of people and limited time.</p>
            </div>

            <img className={styles.img} src={Img3} alt="" />
            <div className={styles.divpex1}>
            <p className={styles.pex1_5}>It is an art toy project with a theme inspired by northern food. It has some </p>
            <p className={styles.pex1_6}>characters and some background content that I have created.</p>
            </div>

            <img className={styles.img} src={Img4} alt="" />
            <div className={styles.divpex1}>
            <p className={styles.pex1_1}>I’m the main responsible person for the AR part in this project. From this project I </p>
            <p className={styles.pex1_7}>learned unity skills, AR skills, and how to build application It was a stressful</p>
            <p className={styles.pex1_8}>project but well worth the knowledge gained.</p>
            </div>
        </div>

        <button className={styles.portbut}>Portfolio</button>
    </div>
  )
}

export default workex