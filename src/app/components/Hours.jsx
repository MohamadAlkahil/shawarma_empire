import React from 'react';
import styles from '../styles/Hours.module.css';

const Hours = () => {
  const hours = [
    { day: 'Mon', open: '11:00 AM', close: '10:00 PM' },
    { day: 'Tue', open: '11:00 AM', close: '10:00 PM' },
    { day: 'Wed', open: '11:00 AM', close: '10:00 PM' },
    { day: 'Thu', open: '11:00 AM', close: '10:00 PM' },
    { day: 'Fri', open: '11:00 AM', close: '11:00 PM' },
    { day: 'Sat', open: '11:00 AM', close: '11:00 PM' },
    { day: 'Sun', open: '12:00 PM', close: '9:00 PM' },
  ];

  const today = new Date().getDay();
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className={styles.hoursContainer}>
      <h2 className={styles.title}>Our Hours</h2>
      <div className={styles.hoursTable}>
        {hours.map((item, index) => (
          <div 
            key={item.day} 
            className={`${styles.hoursRow} ${daysOfWeek[today] === item.day ? styles.today : ''}`}
          >
            <span className={styles.day}>{item.day}</span>
            <span className={styles.time}>{`${item.open} - ${item.close}`}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hours;