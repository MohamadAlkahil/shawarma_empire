'use client';

import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/Menu.module.css';
import Header from '../components/Header';
import MenuNavBar from '../components/MenuNavBar';
import MenuItem from '../components/MenuItem';
import MenuSection from '../components/MenuSection';

const menuSections = [
  { id: 'sandwiches', title: 'Sandwiches' },
  { id: 'plates', title: 'Plates' },
  { id: 'combos', title: 'Combos' },
  { id: 'sideOrders', title: 'Side Orders' },
  { id: 'salads', title: 'Salads' },
  { id: 'drinks', title: 'Drinks' },
  { id: 'desserts', title: 'Desserts' },
];

const menuItems = [
  { id: 1, title: "1 Chicken Shawarma", price: 7.49, description: "CHICKEN, YOUR CHOICE OF TOPPINGS, TAHINI AND GARLIC SAUCES", section: "sandwiches" },
  { id: 2, title: "2 Chicken Shawarma", price: 13.99, description: "CHICKEN, YOUR CHOICE OF TOPPINGS, TAHINI AND GARLIC SAUCES", section: "sandwiches" },
  { id: 3, title: "1 Beef Shawarma", price: 7.99, description: "BEFF, YOUR CHOICE OF TOPPINGS, TAHINI SAUCE", section: "sandwiches" },
  { id: 4, title: "2 Beef Shawarma", price: 14.99, description: "BEFF, YOUR CHOICE OF TOPPINGS, TAHINI SAUCE", section: "sandwiches" },
  { id: 5, title: "1 Mix Shawarma", price: 7.99, description: "MIX CHICKEN & BEEF, YOUR CHOICE OF TOPPINGS, TAHINI AND GARLIC SAUCES", section: "sandwiches" },
  { id: 6, title: "2 Mix Shawarma", price: 14.99, description: "MIX CHICKEN & BEEF, YOUR CHOICE OF TOPPINGS, TAHINI AND GARLIC SAUCES", section: "sandwiches" },
  { id: 7, title: "1 Falafel Shawarma", price: 6.49, description: "3 FALAFEL PIECES, YOUR CHOICE OF TOPPINGS, TAHINI SAUCE", section: "sandwiches" },
  { id: 8, title: "2 Falafel Shawarma", price: 11.99, description: "3 FALAFEL PIECES, YOUR CHOICE OF TOPPINGS, TAHINI SAUCE", section: "sandwiches" },
  { id: 9, title: "Chicken Shawarma Plate", price: 13.99, description: "CHICKEN, YOUR CHOICE OF TOPPINGS, RICE, HUMMUS, TAHINI AND GARLIC SAUCES", section: "plates" },
  { id: 10, title: "Beef Shawarma Plate", price: 14.99, description: "BEEF, YOUR CHOICE OF TOPPINGS, RICE, HUMMUS, TAHINI SAUCE", section: "plates" },
  { id: 11, title: "Mix Shawarma Plate", price: 14.99, description: "MIX CHICKEN & BEEF, YOUR CHOICE OF TOPPINGS, RICE, HUMMUS, TAHINI AND GARLIC SAUCES", section: "plates" },
  { id: 12, title: "Chicken Shawarma Plate with Fries", price: 13.99, description: "CHICKEN, FRIES, PICKLES & TURNIPS, TAHINI AND GARLIC SAUCES", section: "plates" },
  { id: 13, title: "Beef Shawarma Plate with Fries", price: 14.99, description: "BEEF, FRIES, PICKLES & TURNIPS, TAHINI AND GARLIC SAUCES", section: "plates" },
  { id: 14, title: "Mix Shawarma Plate with Fries", price: 14.99, description: "MIX CHICKEN & BEEF, FRIES, PICKLES & TURNIPS, TAHINI AND GARLIC SAUCES", section: "plates" },
  { id: 15, title: "Falafel Plate", price: 11.99, description: "5 FALAFEL PIECES, YOUR CHOICE OF TOPPINGS, RICE, TAHINI SAUCE", section: "plates" },
  { id: 16, title: "Mojadarah Plate", price: 7.49, description: "LENIL RICE, YOUR CHOICE OF TOPPINGS (SALAD), TAHINI SAUCE", section: "plates" },
  { id: 17, title: "Chicken Combo 1", price: 12.49, description: "1 CHICKEN SANDWICH, FRIES, POP", section: "combos" },
  { id: 18, title: "Chicken Combo 2", price: 12.49, description: "1 CHICKEN SANDWICH, SOUP, POP", section: "combos" },
  { id: 19, title: "Chicken Combo 3", price: 12.49, description: "1 CHICKEN SANDWICH, SALAD, POP", section: "combos" },
  { id: 20, title: "Fries", price: 3.99, description: "", section: "sideOrders" },
  { id: 21, title: "Small Rice", price: 3.99, description: "", section: "sideOrders" },
  { id: 22, title: "Large Rice", price: 4.99, description: "", section: "sideOrders" },
  { id: 23, title: "Lentil Soup", price: 3.49, description: "", section: "sideOrders" },
  { id: 24, title: "Hummus", price: 3.99, description: "", section: "sideOrders" },
  { id: 25, title: "Spinach Pie", price: 4.49, description: "", section: "sideOrders" },
  { id: 26, title: "Extra Sauce", price: 0.50, description: "", section: "sideOrders" },
  { id: 27, title: "Falafel Piece", price: 0.75, description: "", section: "sideOrders" },
  { id: 28, title: "Chicken by Kilogram", price: 45.00, description: "", section: "sideOrders" },
  { id: 28, title: "Beef by Kilogram", price: 60.00, description: "", section: "sideOrders" },
  { id: 29, title: "Small House Salad", price: 3.49, description: "", section: "salads" },
  { id: 30, title: "Large House Salad", price: 4.99, description: "", section: "salads" },
  { id: 31, title: "Small Tabooli Salad", price: 3.99, description: "", section: "salads" },
  { id: 32, title: "Large Tabooli Salad", price: 5.49, description: "", section: "salads" },
  { id: 33, title: "Small Greek Salad", price: 3.99, description: "", section: "salads" },
  { id: 34, title: "Large Greek Salad", price: 5.49, description: "", section: "salads" },
  { id: 35, title: "Canned Pop", price: 1.50, description: "", section: "drinks" },
  { id: 36, title: "Vimto", price: 1.50, description: "", section: "drinks" },
  { id: 37, title: "Bottled Drink", price: 1.99, description: "", section: "drinks" },
  { id: 38, title: "Ayran", price: 4.49, description: "", section: "drinks" },
  { id: 39, title: "Water", price: 1.50, description: "", section: "drinks" },
  { id: 40, title: "Baklava", price: 4.99, description: "", section: "desserts" },
];

export default function Menu() {
  const [activeSection, setActiveSection] = useState(menuSections[0].id);
  const [isNavSticky, setIsNavSticky] = useState(false);
  const sectionRefs = useRef({});
  const titleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = menuSections[0].id;
      for (const section of menuSections) {
        const element = sectionRefs.current[section.id];
        if (element && element.getBoundingClientRect().top <= 100) {
          currentSection = section.id;
        } else {
          break;
        }
      }
      setActiveSection(currentSection);

      // Check if we should make the nav sticky
      if (titleRef.current) {
        const titleBottom = titleRef.current.getBoundingClientRect().bottom;
        setIsNavSticky(titleBottom <= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    sectionRefs.current[sectionId]?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={styles.pageContainer}>
      <Header />
      <main className={styles.mainContent}>
        <h1 ref={titleRef} className={styles.menuTitle}>Our Menu</h1>
        <div className={styles.menuContainer}>
          <div className={`${styles.menuNavWrapper} ${isNavSticky ? styles.sticky : ''}`}>
            <MenuNavBar 
              sections={menuSections}
              activeSection={activeSection}
              onSectionClick={scrollToSection}
            />
          </div>
          <div className={styles.menuContent}>
            {menuSections.map((section) => (
              <MenuSection
                key={section.id}
                id={section.id}
                title={section.title}
                ref={(el) => (sectionRefs.current[section.id] = el)}
              >
                <div className={styles.menuItemsGrid}>
                  {menuItems
                    .filter(item => item.section === section.id)
                    .map(item => (
                      <MenuItem
                        key={item.id}
                        title={item.title}
                        price={item.price}
                        description={item.description}
                      />
                    ))
                  }
                </div>
              </MenuSection>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}