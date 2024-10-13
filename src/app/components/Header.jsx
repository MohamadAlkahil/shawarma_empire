'use client';

import React, { useState, useCallback } from 'react';
import '../styles/header.css';
import Link from 'next/link';
import detectScreenSize from '../hooks/detectScreenSize';

const HamburgerIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function Header() {
    const isMobile = detectScreenSize('(max-width: 768px)');
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = useCallback(() => {
        setMenuOpen(prevState => !prevState);
    }, []);

    return (
        <header className='header'>
            <h2 className='header-title'>Shawarma Empire</h2>
            {isMobile && (
                <button 
                    onClick={toggleMenu} 
                    className='menu-button'
                    aria-expanded={menuOpen}
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                >
                    {menuOpen ? <CloseIcon /> : <HamburgerIcon />}
                </button>
            )}
            {isMobile ? (
                <div className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
                    <nav className='mobile-nav-bar'>
                        <ul className='mobile-nav-list'>
                            <li className='mobile-nav-item'>
                                <Link href="/" prefetch onClick={toggleMenu}>
                                    Home
                                </Link>
                            </li>
                            <li className='mobile-nav-item'>
                                <Link href="/ourStory" prefetch onClick={toggleMenu}>
                                    Our Story
                                </Link>
                            </li>
                            <li className='mobile-nav-item'>
                                <Link href="/menu" prefetch onClick={toggleMenu}>
                                    Menu
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            ) : (
                <nav className='nav-bar'>
                    <ul className='nav-list'>
                        <li className='nav-item'>
                            <Link href="/" prefetch>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link href="/ourStory" prefetch>
                                Our Story
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link href="/menu" prefetch>
                                Menu
                            </Link>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
}