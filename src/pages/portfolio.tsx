import React from 'react';
import Head from '@docusaurus/Head';
import HeroSection from '../components/HeroSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import PortfolioFooter from '../components/PortfolioFooter';
import styles from './portfolio.module.css';

export default function Portfolio() {
  return <>
    <Head><title>Okan Uzal | DevSecOps Portfolio</title><meta name="description" content="DevSecOps portfolio with skills, projects and technical documentation." /></Head>
    <main className={styles.portfolio}><HeroSection/><SkillsSection/><ProjectsSection/><ContactSection/><PortfolioFooter/></main>
  </>;
}
