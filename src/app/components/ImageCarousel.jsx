'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/ImageCarousel.module.css';

const ImageCarousel = ({ images, autoPlayInterval = 15000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
       prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
       prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  useEffect(() => {
    const intervalId = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(intervalId);
  }, [nextSlide,autoPlayInterval]);

  return (
    <div className={styles.carouselContainer}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`${styles.carouselSlide} ${index === currentIndex ? styles.active : ''}`}
        >
          <div className={styles.imageWrapper}>
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
              className={styles.carouselImage}
            />
          </div>
          <div className={styles.overlay}></div>
          <div className={styles.carouselContent}>
            <h2>{image.title}</h2>
            <p>{image.description}</p>
            <Link href="/menu">
              <div className={styles.carouselButton}>View Our Menu</div>
            </Link>
          </div>
        </div>
      ))}
      <button className={`${styles.carouselControl} ${styles.prev}`} onClick={prevSlide}>
        &#10094;
      </button>
      <button className={`${styles.carouselControl} ${styles.next}`} onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default ImageCarousel;