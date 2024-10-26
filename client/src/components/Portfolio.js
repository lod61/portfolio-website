import React from 'react';
import styles from './Portfolio.module.css';

function Portfolio() {
  const projects = [
    { name: '"Your Safety Matters" Exhibition', client: 'Traffic Department', description: 'Organized to celebrate women\'s driving rights.' },
    { name: 'Guinness Records Exhibition', client: 'Saudi National Day (89th Anniversary)', description: 'A record-breaking national celebration.' },
    { name: 'Exceptional Cities Projects Exhibition', client: 'Custodian of the Two Holy Mosques', description: 'Showcasing urban development projects.' },
    { name: 'Barbecue Expo', description: 'A unique exhibition celebrating barbecue culture.' },
  ];

  return (
    <section id="portfolio" className={styles.portfolio}>
      <h2>Our Projects</h2>
      <div className={styles.projectList}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectItem}>
            <h3>{project.name}</h3>
            {project.client && <p><strong>Client:</strong> {project.client}</p>}
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
