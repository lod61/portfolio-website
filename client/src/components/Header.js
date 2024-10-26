import React, { useState, useEffect } from 'react';
import logo from '../assets/images/logo.png'; // 使用实际的文件名
import styles from './Header.module.css';

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <img src={logo} alt="Design Tech Logo" className={styles.logo} />
        <nav>
          <ul className={styles.navList}>
            {['home', 'services', 'portfolio', 'about', 'contact'].map((item, index) => (
              <li key={item} style={{animationDelay: `${index * 0.1}s`}}>
                <a href={`#${item}`}>{item.charAt(0).toUpperCase() + item.slice(1)}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
