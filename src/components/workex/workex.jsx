import React from 'react'
import styles from './workex.module.css'
import Img1   from './1st.png'
import Img2   from './2st.png'
import Img3   from './3th.png'
import Img4   from './4th.png'
import { Link } from 'react-router-dom';


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
              <p className={styles.p_workex}>During the 1st years I want to try new experiences. And I tried to learn how to 
                <br /> make filters on IG. I've tried making about 4 filters. and has the highest number of 
                <br />users about tens of thousands.</p>
            </div>

            <img  className={styles.img} src={Img2} alt="" />
            <div className={styles.divpex1}>
              <p className={styles.p_workex}>It’s the pair project that I’m responsible for all UX design. Our project is a project 
                <br />about online courses. It was a challenging project for me because of the number
                <br />of people and limited time.</p>
            </div>

            <img className={styles.img} src={Img3} alt="" />
            <div className={styles.divpex1}>
              <p className={styles.p_workex}>It is an art toy project with a theme inspired by northern food. It has some  
                <br />characters and some background content that I have created.</p>
            </div>

            <img className={styles.img} src={Img4} alt="" />
            <div className={styles.divpex1}>
              <p className={styles.p_workex}>I’m the main responsible person for the AR part in this project. From this project I 
                <br />learned unity skills, AR skills, and how to build application It was a stressful
                <br />project but well worth the knowledge gained.</p>
            </div>
        </div>
        <Link to="/portfolio">
        <button className={styles.portbut}>Portfolio</button>
        </Link>
    </div>
  )
}

export default workex