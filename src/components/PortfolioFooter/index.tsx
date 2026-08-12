import React from 'react';
import styles from './styles.module.css';
export default function PortfolioFooter() {
    return <footer className={styles.footer}><span>© {new Date().getFullYear()} Okan Uzal</span><a href="#">Legal notice</a></footer>
}
