import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

export default function PortfolioFooter() {
    return <footer className={styles.footer}>
        <span>© {new Date().getFullYear()} Sven Patrick Meier (spmse). Built with Docusaurus and 💚</span>
        <Link to="/legal-notice">
            Legal Notice
        </Link></footer>
}
