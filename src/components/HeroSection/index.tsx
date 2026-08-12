import React from 'react';
import PortfolioHeader from '../PortfolioHeader';
import styles from './styles.module.css';

export default function HeroSection() {
  return (
    <section id="about" className={styles.hero}>
      <PortfolioHeader />
      <div className={styles.content}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Hey there. 👋 I am</p>
          <h1>Okan Uzal</h1>
          <h2>DevSecOps Engineer</h2>
          <p className={styles.intro}>I enjoy building reliable systems, automating repeatable work and understanding how applications can be operated securely. This portfolio brings together the projects and documentation I created while developing my DevSecOps skills.</p>
          <a className={styles.cta} href="#contact">Contact me</a>
        </div>
        <div className={styles.portrait} aria-label="Profile placeholder">
          <div className={styles.initials}>OT</div>
          <p>DevSecOps · Automation · Security</p>
        </div>
      </div>
    </section>
  );
}
