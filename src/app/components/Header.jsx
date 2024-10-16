'use client';

import React, { useState, useCallback } from 'react';
import '../styles/header.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import detectScreenSize from '../hooks/detectScreenSize';
import Image from 'next/image';
import SELogo from '../assets/Logo.svg';

const HamburgerIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CloseIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function Header() {
    const isMobile = detectScreenSize('(max-width: 768px)');
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = useCallback(() => {
        setMenuOpen(prevState => !prevState);
    }, []);

    

    const NavItem = ({ href, children }) => {
        const isActive = pathname === href;
        return (
            <li className={`nav-item ${isActive ? 'active' : ''}`}>
                <Link href={href} prefetch onClick={isMobile ? toggleMenu : undefined}>
                    <span>{children}</span>
                </Link>
            </li>
        );
    };

    return (
        <header className='header'>
            <div className='logo'>
                <Link href="/">
                    <Image src={SELogo} alt="Logo" width={150} height={60} className="logo-image"/>
                </Link>
            </div>
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
                            <NavItem href="/">Home</NavItem>
                            <NavItem href="/ourStory">Our Story</NavItem>
                            <NavItem href="/menu">Menu</NavItem>
                        </ul>
                    </nav>
                </div>
            ) : (
                <nav className='nav-bar'>
                    <ul className='nav-list'>
                        <NavItem href="/">Home</NavItem>
                        <NavItem href="/ourStory">Our Story</NavItem>
                        <NavItem href="/menu">Menu</NavItem>
                    </ul>
                </nav>
            )}
        </header>
    );
}