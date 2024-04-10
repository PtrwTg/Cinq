import React, { useState } from 'react';
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
        <p>
          Email : phurichaya.7502@gmail.com{' '}
          <FaRegCopy
            className={styles.copyIcon}
            onClick={() => copyToClipboard('phurichaya.7502@gmail.com')}
          />
        </p>
        <p>
          Line ID : 070x{' '}
          <FaRegCopy
            className={styles.copyIcon}
            onClick={() => copyToClipboard('070x')}
          />
        </p>
      </div>
    </div>
  );
}

export default contact;