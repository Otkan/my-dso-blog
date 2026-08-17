import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import type {Skill} from '../../data/portfolio';
import styles from './styles.module.css';

type Props = {
  skill: Skill;
  detailed?: boolean;
};

export default function SkillCard({skill, detailed = false}: Props) {
  const iconUrl = useBaseUrl(skill.icon);

  return (
    <article
      className={`${styles.card} ${detailed ? styles.detailed : ''}`}
    >
      <div className={styles.iconArea}>
        <img
          className={styles.icon}
          src={iconUrl}
          alt={`${skill.name} icon`}
        />

        <span className={styles.skillName}>
          {skill.short}
        </span>
      </div>

      <div className={styles.details}>
        <h3>How I used this skill</h3>

        <ul>
          {skill.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}