import React from 'react';
import PortfolioHeader from '../PortfolioHeader';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

export default function HeroSection() {
  const profileImage = useBaseUrl(
    '/img/portfolio/profile-picture.png',
  );

  return (
    <section id="about" className={styles.hero}>
      <PortfolioHeader />

      <div className={styles.content}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>
            Hey there. 👋 I am
          </p>

          <h1>Okan Uzal</h1>

          <h2>DevSecOps Engineer</h2>

          <p className={styles.intro}>
            I enjoy building reliable systems, automating repeatable work and
            understanding how applications can be operated securely. This
            portfolio brings together the projects and documentation I created
            while developing my DevSecOps skills.
          </p>

          <a className={styles.cta} href="#contact">
            Contact me
          </a>
        </div>

        <div className={styles.portrait}>
          <img
            src={profileImage}
            alt="Portrait of Okan Uzal"
            className={styles.profileImage}
          />
        </div>
      </div>
    </section>
  );
}