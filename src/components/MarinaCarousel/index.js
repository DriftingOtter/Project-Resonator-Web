import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const marinaImages = [
  {
    src: '/img/marina/8_22_25__FLOATING_FRONT_VIEW_MARINA.png',
    alt: 'Marina Model - Front View',
    title: 'Front View'
  },
  {
    src: '/img/marina/8_22_25__FLOATING_FRONT_AND_BACK_MARINA.png',
    alt: 'Marina Model - Front and Back View',
    title: 'Front and Back View'
  }
];

export default function MarinaCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? marinaImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === marinaImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carousel}>
        <button 
          className={styles.carouselButton} 
          onClick={goToPrevious}
          aria-label="Previous image"
        >
          &#8249;
        </button>
        
        <div className={styles.imageContainer}>
          <img
            src={marinaImages[currentIndex].src}
            alt={marinaImages[currentIndex].alt}
            className={styles.carouselImage}
          />
          <div className={styles.imageTitle}>{marinaImages[currentIndex].title}</div>
        </div>
        
        <button 
          className={styles.carouselButton} 
          onClick={goToNext}
          aria-label="Next image"
        >
          &#8250;
        </button>
      </div>
      
      <div className={styles.indicators}>
        {marinaImages.map((_, index) => (
          <button
            key={index}
            className={clsx(
              styles.indicator,
              index === currentIndex && styles.indicatorActive
            )}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
