import React from 'react';
import { Link } from 'react-router-dom';
import Bluenavbar from '../../components/bluenavbar/bluenavbar';
import styles from './appproject.module.css';
import Contact from '../../components/contact/contact';
import App1 from './App1.png';
import App2 from './App2.png';
import App3 from './App3.png';

function AppProject() {
  return (
    <div>
      <Bluenavbar />
      <main className={styles.main}>
        <div className={styles.choice}>
          <Link to="/app1">
            <img className={styles.app1img} src={App1} alt="" />
          </Link>
          <Link to="/app2">
            <img className={styles.app2img} src={App2} alt="" />
          </Link>
          <Link to="/app3">
            <img className={styles.app3img} src={App3} alt="" />
          </Link>
        </div>
        <div className={styles.divp}>
          <p className={styles.pmargin1}>JournalMood</p>
          <p className={styles.pmargin2}>Wonder</p>
          <p className={styles.pmargin3}>Pocket</p>
        </div>
      </main>
      <Contact />
    </div>
  )
}

export default AppProject