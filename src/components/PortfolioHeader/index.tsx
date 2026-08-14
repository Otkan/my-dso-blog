import React, {useEffect, useState} from 'react';
import styles from './styles.module.css';

export default function PortfolioHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (menuOpen) {
        setHeaderVisible(true);
        lastScrollY = currentScrollY;
        return;
      }

      if (currentScrollY <= 20) {
        setHeaderVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setHeaderVisible(false);
      } else {
        setHeaderVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, {passive: true});

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`${styles.header} ${
        headerVisible ? styles.headerVisible : styles.headerHidden
      }`}
    >
      <div className={styles.inner}>
        <nav className={styles.desktopNav}>
          <a href="#about">About me</a>
          <a href="#skills">My skills</a>
          <a href="#projects">My projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <button
          type="button"
          className={styles.menuButton}
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        className={`${styles.mobileMenu} ${
          menuOpen ? styles.mobileMenuOpen : ''
        }`}
      >
        <button
          type="button"
          className={styles.closeButton}
          aria-label="Close menu"
          onClick={closeMenu}
        >
          <span />
          <span />
        </button>

        <nav className={styles.mobileNav}>
          <a href="#about" onClick={closeMenu}>
            About me
          </a>

          <a href="#skills" onClick={closeMenu}>
            My skills
          </a>

          <a href="#projects" onClick={closeMenu}>
            My projects
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}