'use client';

import styles from '../styles/Footer.module.css';
import Image from 'next/image';
import YelpLogo from '../assets/yelp-logo.svg';
import FacebookLogo from '../assets/facebook-logo.svg';
import InstagramLogo from '../assets/instagram-logo.svg';
import TripAdvisorLogo from '../assets/trip-advisor-logo.svg';
import Link from 'next/link';




export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.logosDiv}>
                <a href="https://www.instagram.com/shawarma_empire_toronto/" target="_blank" rel="noopener noreferrer" className={styles.logoItem}>
                    <Image src={InstagramLogo} alt="Instagram" width={24} height={24} />
                </a>
                <a href="https://www.facebook.com/p/Shawarma-Empire-100049242533928/" target="_blank" rel="noopener noreferrer" className={styles.logoItem}>
                    <Image src={FacebookLogo} alt="Facebook" width={24} height={24} />
                </a>
                <a href="https://www.tripadvisor.ca/Restaurant_Review-g155019-d803715-Reviews-Shawarma_Empire-Toronto_Ontario.html" target="_blank" rel="noopener noreferrer" className={styles.logoItem}>
                    <Image src={TripAdvisorLogo} alt="TripAdvisor" width={24} height={24} />
                </a>
                <a href="https://www.yelp.ca/biz/shawarma-empire-scarborough" target="_blank" rel="noopener noreferrer" className={styles.logoItem}>
                    <Image src={YelpLogo} alt="Yelp" width={24} height={24} />
                </a>
            </div>
            <div className={styles.policyDiv} herf="/">
                <div className={styles.policyItem}>
                    <Link href="/policy">Privacy Policy & Terms of Use</Link>
                </div>
            </div>
        </footer>
    );
}