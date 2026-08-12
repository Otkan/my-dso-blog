export type Skill = {
  name: string;
  short: string;
  icon: string;
  bullets: string[];
};

export type ProjectSkill = {
  label: string;
  icon: string;
};

export type Project = {
  title: string;
  subtitle?: string;
  image: string;
  skills: ProjectSkill[];
  description: string;
  documentation: string;
  github: string;
};

export const skills: Skill[] = [
  {
    name: 'HTML',
    short: 'HTML',
    icon: '/img/portfolio/skills/html.svg',
    bullets: [
      'User-friendly navigation menus',
      'Responsive web design',
      'Contact forms and login pages',
      'Transitions, animations and hover effect',
    ],
  },
  {
    name: 'CSS',
    short: 'CSS',
    icon: '/img/portfolio/skills/css.svg',
    bullets: [
      'User-friendly navigation menus',
      'Responsive web design',
      'Contact forms and login pages',
      'Transitions, animations and hover effect',
    ],
  },
  {
    name: 'Static site generator',
    short: 'Static site',
    icon: '/img/portfolio/skills/docusaurus.svg',
    bullets: [
      'Search functionality',
      'Static website and customization',
      'Tags, categories, and RSS feeds',
      'Translation',
    ],
  },
  {
    name: 'Python',
    short: 'Python',
    icon: '/img/portfolio/skills/python.svg',
    bullets: [
      'Build APIs',
      'Spam filtering',
      'Recommendation systems',
      'Automate software testing',
    ],
  },
  {
    name: 'Shell scripting',
    short: 'Shell scripting',
    icon: '/img/portfolio/skills/shell.svg',
    bullets: [
      'Adding new and setting their permissions',
      'Performing calculations or running statistical analysis on data',
      'Conditional statements, loops, functions',
    ],
  },
  {
    name: 'YAML',
    short: 'Yaml',
    icon: '/img/portfolio/skills/yaml.svg',
    bullets: [
      'A Kubernetes deployment',
      'Store settings like database connections',
      'Environment-specific variables',
      'Complex data structures',
    ],
  },
  {
    name: 'Container',
    short: 'Container',
    icon: '/img/portfolio/skills/docker.svg',
    bullets: [
      'CI/CD pipelines',
      'Automate building, testing, deploying applications',
      'Build microservices-based applications',
    ],
  },
  {
    name: 'CI/CD with GitHub Actions',
    short: 'CI/CD',
    icon: '/img/portfolio/skills/github-actions.svg',
    bullets: [
      'Automated builds and tests',
      'Pre-built actions',
      'Push, pull request, schedule',
      'Automated deployments',
    ],
  },
  {
    name: 'IT Security',
    short: 'IT Security',
    icon: '/img/portfolio/skills/security.svg',
    bullets: [
      'Simulate attacks and identify vulnerabilities',
      'Setting up multi-factor authentication',
      'Login security',
      'Implement authentication and authorization mechanisms',
    ],
  },
];
export const projects: Project[] = [
  {
    title: 'Juice Shop Master',
    image: '/img/portfolio/juice-shop.jpg',

    skills: [
      {
        label: 'IT Security',
        icon: '/img/portfolio/skills/security.svg',
      },
      {
        label: 'Shell scripting',
        icon: '/img/portfolio/skills/shell.svg',
      },
      {
        label: 'Container',
        icon: '/img/portfolio/skills/docker.svg',
      },
    ],

    description:
      'Documented OWASP Juice Shop security challenges in an isolated lab, including Broken Access Control, XSS and SQL Injection with mitigation notes.',

    documentation:
      '/docs/projects/juice-shop-master/',

    github:
      'https://github.com/Otkan/my-dso-blog',
  },

  {
    title: 'V-Server Setup',
    image: '/img/portfolio/vserver.jpg',

    skills: [
      {
        label: 'YAML',
        icon: '/img/portfolio/skills/yaml.svg',
      },
      {
        label: 'Shell scripting',
        icon: '/img/portfolio/skills/shell.svg',
      },
      {
        label: 'IT Security',
        icon: '/img/portfolio/skills/security.svg',
      },
    ],

    description:
      'Configured a cloud server with SSH keys, hardened login settings and documented the setup as part of the DevSecOps course.',

    documentation:
      '/docs/projects/vserver-setup',

    github:
      'https://github.com/Otkan/my-dso-blog',
  },

  {
    title: 'Docusaurus Portfolio',
    image: '/img/portfolio/docusaurus.jpg',

    skills: [
      {
        label: 'HTML',
        icon: '/img/portfolio/skills/html.svg',
      },
      {
        label: 'CSS',
        icon: '/img/portfolio/skills/css.svg',
      },
      {
        label: 'CI/CD',
        icon: '/img/portfolio/skills/github-actions.svg',
      },
    ],

    description:
      'A responsive portfolio integrated into the existing Docusaurus documentation project and implemented from the provided Figma design.',

    documentation:
      '/docs/projects/overview',

    github:
      'https://github.com/Otkan/my-dso-blog',
  },
];