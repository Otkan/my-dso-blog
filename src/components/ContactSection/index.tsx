import React from 'react';
import styles from './styles.module.css';

export default function ContactSection() {
  return <section id="contact" className={styles.section}>
    <div className={styles.inner}>
      <div><h2>Contact me</h2><p>I am interested in DevSecOps opportunities where I can keep learning, contribute to reliable
        infrastructure and help improve security across the delivery process.</p><ul><li>Open to junior DevSecOps / cloud /
        platform opportunities</li><li>Interested in automation, Linux, containers and security</li><li>Available for
        collaborative project work</li></ul></div>
      <div className={styles.contact}><p>Looking forward to hearing from you!</p>
        <a href="https://github.com/Otkan" target="_blank" rel="noreferrer">◎ GitHub profile</a></div>
    </div>
    <a className={styles.top} href="#about" aria-label="Back to top">↑</a>
  </section>;
}
