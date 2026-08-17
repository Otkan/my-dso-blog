import React, {useRef, useState} from 'react';
import {skills} from '../../data/portfolio';
import SkillCard from '../SkillCard';
import styles from './styles.module.css';

export default function SkillsSection() {
  const mobileSkillGroups = [
    skills.slice(0, 3),
    skills.slice(3, 6),
    skills.slice(6, 9),
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const railRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const rail = railRef.current;

    if (!rail) {
      return;
    }

    const slides = Array.from(
      rail.children,
    ) as HTMLElement[];

    if (!slides.length) {
      return;
    }

    const railLeft = rail.getBoundingClientRect().left;

    let closestIndex = 0;
    let closestDistance = Infinity;

    slides.forEach((slide, index) => {
      const slideLeft = slide.getBoundingClientRect().left;
      const distance = Math.abs(slideLeft - railLeft);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveSlide(closestIndex);
  };

  const scrollToSlide = (index: number) => {
    const rail = railRef.current;

    if (!rail) {
      return;
    }

    const slide = rail.children[index] as HTMLElement | undefined;

    slide?.scrollIntoView({
      behavior: 'smooth',
      inline: 'start',
      block: 'nearest',
    });
  };

  return (
    <section id="skills" className={styles.section}>
      <div className={styles.inner}>
        <h2>My skills</h2>

        <div className={styles.grid}>
          {skills.map((skill) => (
            <SkillCard
              key={skill.name}
              skill={skill}
            />
          ))}
        </div>

        <div
          className={styles.mobileRail}
          ref={railRef}
          onScroll={handleScroll}
        >
          {mobileSkillGroups.map((group, index) => (
            <div
              className={styles.mobileSlide}
              key={index}
            >
              {group.map((skill) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  detailed
                />
              ))}
            </div>
          ))}
        </div>

        <div className={styles.dots}>
          {mobileSkillGroups.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Show skill group ${index + 1}`}
              className={
                activeSlide === index
                  ? styles.activeDot
                  : ''
              }
              onClick={() => scrollToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}