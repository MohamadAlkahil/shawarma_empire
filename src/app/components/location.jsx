import React from 'react';
import styles from '../styles/Location.module.css';

const Location = () => {
  return (
    <div className={styles.locationContainer}>
      <h2 className={styles.title}>Our Location</h2>
      <div className={styles.infoSection}>
        <p className={styles.info}>
          <span className={styles.icon}>📍</span> 1823 Lawrence Avenue E Scarborough, ON M1R 2Y3
        </p>
        <p className={styles.info}>
          <span className={styles.icon}>📞</span> (416) 285-1337
        </p>
      </div>
      <div className={styles.buttonWrapper}>
        <a 
          href="https://www.google.com/maps/place/Shawarma+Empire/@43.743088,-79.3034397,16z/data=!3m1!4b1!4m6!3m5!1s0x89d4cdf70f4cdef5:0x3eacda5091123b64!8m2!3d43.743088!4d-79.3034397!16s%2Fg%2F1tdr958x?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.button}
        >
          VIEW ON GOOGLE MAPS
        </a>
      </div>
    </div>
  );
};

export default Location;