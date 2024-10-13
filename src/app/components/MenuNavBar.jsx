import React from 'react';
import styles from '../styles/MenuNavBar.module.css';

export default function MenuNavBar({ sections, activeSection, onSectionClick }) {
  return (
    <nav className={styles.menuNavBar}>
      <div className={styles.navContainer}>
        {sections.map((section) => (
          <button
            key={section.id}
            className={`${styles.navItem} ${activeSection === section.id ? styles.active : ''}`}
            onClick={() => onSectionClick(section.id)}
          >
            {section.title}
          </button>
        ))}
      </div>
    </nav>
  );
}