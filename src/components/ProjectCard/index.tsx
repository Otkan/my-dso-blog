import React from 'react';

import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

import type {Project, ProjectSkill} from '../../data/portfolio';

import styles from './styles.module.css';

type SkillBadgeProps = {
  skill: ProjectSkill;
};

function SkillBadge({skill}: SkillBadgeProps) {
  const iconUrl = useBaseUrl(skill.icon);

  return (
    <span>
      <img
        src={iconUrl}
        alt=""
        aria-hidden="true"
      />

      {skill.label}
    </span>
  );
}

export default function ProjectCard({
  project,
}: {
  project: Project;
}) {
  const imageUrl = useBaseUrl(project.image);

  return (
    <article className={styles.card}>
      <div className={styles.head}>
        <h3>{project.title}</h3>

        <div className={styles.badges}>
          {project.skills.map((skill) => (
            <SkillBadge
              key={skill.label}
              skill={skill}
            />
          ))}
        </div>
      </div>

      <div className={styles.body}>
        <img
          className={styles.projectImage}
          src={imageUrl}
          alt={`${project.title} project preview`}
        />

        <div className={styles.copy}>
          <p>{project.description}</p>

          <div className={styles.actions}>
            <Link
              className={styles.primary}
              to={project.documentation}
            >
              Documentation
            </Link>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}