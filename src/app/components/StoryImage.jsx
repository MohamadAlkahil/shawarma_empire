'use client';

import styles from '../styles/StoryImage.module.css';
import Image from 'next/image';
import baklava_image from '../assets/baklava.jpg'

export default function StoryImage() {
    return(
        <div className={styles.storyImageContainer}>
            <div className={styles.imageContainer}>
                <div className={styles.imageWrapper}>
                    <Image 
                        src={baklava_image} 
                        alt='Our Story' 
                        layout='fill' 
                        objectFit='cover' 
                        className={styles.imageItem} 
                    />
                </div>
                <div className={styles.overlay}></div>
                <div className={styles.imageContent} >
                    <h1>Our Story</h1>
                </div>
            </div>
            <div className={styles.storyContainer}>
                <p>Our journey began over four decades ago, rooted in recipes passed down through generations, bringing the authentic flavors of Middle Eastern street food to the bustling streets of Toronto. Nestled in the heart of Scarborough, we at Shawarma Empire are proud to be a testament to the power of tradition, quality, and community. We invite you to become part of our story—join us for a meal and experience the difference that passion and tradition can make.</p>
                <h1>Our Philosophy</h1>
                <p>At Shawarma Empire, we believe in doing things the right way, not the easy way. For us, that means:</p>
                <ul>
                    <li>Using only the highest quality ingredients, like skinless chicken and premium strip loin beef.</li>
                    <li>Preparing everything from scratch, in-house, without preservatives.</li>
                    <li>Investing in our food rather than marketing—our customers are our best advertisers.</li>
                </ul>
                <p>Our commitment to quality is unwavering; we spend about 50% of our revenue on food costs, well above the industry standard. But for us, it’s not just about the bottom line; it’s about serving food we’re genuinely proud of.</p>
            </div>
        </div>
    );
}