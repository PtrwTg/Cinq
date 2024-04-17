import React from 'react';
import styles from './contact.module.css';
import { FaRegCopy } from "react-icons/fa";

function copyToClipboard(text) {
  navigator.clipboard.writeText(text)
    .then(() => {
      console.log('Text copied to clipboard');
    })
    .catch((err) => {
      console.error('Failed to copy text: ', err);
    });
}

function Contact() {
  return (
    <div className={styles.container} id="contact">
      <p className={styles.pcontact}>Contact me</p>
      <div className={styles.divbutton}>
        <a href="https://www.behance.net/190c15d9" target="_blank" rel="noopener noreferrer">
          <button className={styles.skillbut}>
            <span className={styles.tooltip}>Hello Bēhance ! 👋</span>
            Bē
          </button>
        </a>
        <a href="https://www.facebook.com/phurisrl/" target="_blank" rel="noopener noreferrer">
          <button className={styles.skillbut}>
            <span className={styles.tooltip}>Hello Facebook ! 👋</span>
            F
          </button>
        </a>
        <a href="https://www.linkedin.com/in/phurichaya-kongsrilang-102319301/" target="_blank" rel="noopener noreferrer">
          <button className={styles.skillbut}>
            <span className={styles.tooltip}>Hello LinkedIn ! 👋</span>
            in
          </button>
        </a>
      </div>
      <div className={styles.divcontact}>
        <p>
          Email: phurichaya.7502@gmail.com{' '}
          <FaRegCopy className={styles.copyIcon} onClick={() => copyToClipboard('phurichaya.7502@gmail.com')} />
        </p>
        <p>
          Line ID: 0993656596{' '}
          <FaRegCopy className={styles.copyIcon} onClick={() => copyToClipboard('0993656596')} />
        </p>
      </div>
    </div>
  );
}

export default Contact;