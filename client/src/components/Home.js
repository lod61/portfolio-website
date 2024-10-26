import React from 'react';
import styles from './Home.module.css';

function Home() {
  return (
    <section id="home" className={styles.home}>
      <div className={styles.container}>
        <h1 className={styles.title}>Welcome to Design Tech – Innovating Smart Solutions for a Better Future</h1>
        <p className={styles.subtitle}>We specialize in Smart Investment, 3D Mapping, and Exhibitions & Events Management, providing businesses with cutting-edge tools to thrive. With our innovative approach and deep expertise, we deliver results that drive value and create unforgettable experiences.</p>
        <div className={styles.ctaContainer}>
          <a href="#portfolio" className={`${styles.ctaButton} ${styles.primary}`}>Explore our services</a>
          <a href="#contact" className={`${styles.ctaButton} ${styles.secondary}`}>Connect with us</a>
        </div>
      </div>
      <div className={styles.bgAnimation}></div>
    </section>
  );
}

export default Home;
