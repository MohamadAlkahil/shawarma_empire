import React, { forwardRef } from 'react';
import styles from '../styles/MenuSection.module.css';

const MenuSection = forwardRef(({ id, title, children }, ref) => {
  return (
    <section id={id} ref={ref} className={styles.menuSection}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      {children}
    </section>
  );
});

MenuSection.displayName = 'MenuSection';

export default MenuSection;