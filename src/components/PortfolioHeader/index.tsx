import React, {useState} from 'react';
import styles from './styles.module.css';

export default function PortfolioHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={styles.header}>
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