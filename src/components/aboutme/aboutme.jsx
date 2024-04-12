import React, { useState } from 'react';
import styles from './aboutme.module.css';
import profile from './profileimg.png';
import resume from './resumeimg.png';
import { IoArrowDown, IoCheckmarkOutline } from "react-icons/io5";

function Aboutme() {
  const [isPressed, setIsPressed] = useState(false);

  const handleMouseDown = () => {
    setIsPressed(true);
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <p className={styles.pabout}>About Me</p>
        <div className={styles.underline}></div>
        <div className={styles.profile}>
          <img className={styles.profileimg} src={profile} alt="profile" />
          <div className={styles.pprofile}>
            <p>My name is Cinq. I am a graphic designer who is interested in  UX/UI design . I'm studying in the bachelor of Multimedia Technology and Animation at MFU. I enjoy looking through different trends for fresh ideas. I'm searching for new experiences right now, and I hope that we can collaborate. :)</p>
          </div>
        </div>
        <p className={styles.presume}>My Resume</p>
        <div className={styles.divresume}>
          <div className={styles.Imgresume}>
            <img className={styles.resume} src={resume} alt="resume" />
            <div className={styles.divbutton}>
              <button
                className={styles.circle_button}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
              >
                {isPressed ? <IoCheckmarkOutline size={40} /> : <IoArrowDown size={40} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;