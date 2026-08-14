import React, {useState} from 'react';
import Link from '@docusaurus/Link';

import {projects} from '../../data/portfolio';

import ProjectCard from '../ProjectCard';

import styles from './styles.module.css';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(0);

  return (
    <section
      id="projects"
      className={styles.section}
    >
      <div className={styles.inner}>
        <h2>My project highlights</h2>

        <div className={styles.desktopLayout}>
          <aside className={styles.projectNavigation}>
            <ol>
              {projects.map((project, index) => (
                <li key={project.title}>
                  <button
                    type="button"
                    className={
                      selectedProject === index
                        ? styles.activeProject
                        : ''
                    }
                    onClick={() => setSelectedProject(index)}
                  >
                    {project.title}
                  </button>
                </li>
              ))}
            </ol>

            <Link
              className={styles.moreProjects}
              to="/docs/projects/overview"
            >
              ↳ see more projects
            </Link>
          </aside>

          <ProjectCard
            project={projects[selectedProject]}
          />
        </div>

        <div className={styles.mobileList}>
          {projects.slice(0, 3).map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}

          <p className={styles.moreText}>
            Want to see more? Browse the complete project documentation.
          </p>

          <Link
            className={styles.moreLink}
            to="/docs/projects/overview"
          >
            ↳ see more projects
          </Link>
        </div>
      </div>
    </section>
  );
}