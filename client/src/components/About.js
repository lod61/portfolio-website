import React from 'react';
import styles from './About.module.css';

function About() {
  return (
    <section id="about" className={styles.about}>
      <h2>About Us</h2>
      <div className={styles.content}>
        <h3>Our Vision & Mission</h3>
        <p>At Design Tech, our mission is to transform industries by combining technology, creativity, and strategic investment insights. We aim to empower businesses with smart solutions, informative 3D maps, and world-class events that make a lasting impact.</p>
        <h3>Our Values</h3>
        <ul>
          <li><strong>Innovation:</strong> Pioneering new ideas and advanced technologies.</li>
          <li><strong>Collaboration:</strong> Partnering with clients for mutual success.</li>
          <li><strong>Excellence:</strong> Delivering top-tier quality in every project.</li>
        </ul>
      </div>
    </section>
  );
}

export default About;
