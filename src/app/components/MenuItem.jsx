import React from 'react';
import styles from '../styles/MenuItem.module.css';

export default function MenuItem({ title, price, description }) {
  return (
    <div className={styles.menuItem}>
      <div className={styles.itemInfo}>
        <div className={styles.itemTitlePrice}>
          <h3 className={styles.itemTitle}>{title}</h3>
          <p className={styles.itemPrice}>${price.toFixed(2)}</p>
        </div>
        {description && <p className={styles.itemDescription}>{description}</p>}
      </div>
    </div>
  );
}