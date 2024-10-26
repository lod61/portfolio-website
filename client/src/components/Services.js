import React from 'react';
import styles from './Services.module.css';

function Services() {
  return (
    <section id="services" className={styles.services}>
      <h2>Our Services</h2>
      <div className={styles.serviceList}>
        <div className={styles.serviceItem}>
          <h3>Smart Investment Solutions</h3>
          <p>Our Smart Investment Service helps businesses grow by targeting specific audiences and ensuring measurable outcomes.</p>
          <ul>
            <li>Data-Driven Campaigns</li>
            <li>Advanced Call Centers</li>
            <li>Tracking & Reporting</li>
          </ul>
        </div>
        <div className={styles.serviceItem}>
          <h3>3D Mapping Solutions</h3>
          <p>We create interactive 3D maps enriched with commercial and sponsor information, delivering immersive experiences for users.</p>
          <ul>
            <li>City Planning and Virtual Tours</li>
            <li>Business Districts & Commercial Zones</li>
            <li>Event Locations with Sponsor Highlights</li>
          </ul>
        </div>
        <div className={styles.serviceItem}>
          <h3>Exhibitions & Events Management</h3>
          <p>We offer end-to-end event planning and management services, from conceptualization to execution.</p>
          <ul>
            <li>Event Planning and Logistics</li>
            <li>Sponsor Coordination and Partnership Development</li>
            <li>Virtual and Hybrid Event Solutions</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Services;
