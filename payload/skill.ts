import { ISkill } from '../component/skill/ISkill';

const programmingLanguages: ISkill.Skill = {
  category: 'Programming Languages',
  items: [
    {
      title: 'C',
      level: 2,
    },
    {
      title: 'C++',
      level: 3,
    },
    {
      title: 'Kotlin',
      level: 3,
    },
    {
      title: 'Python',
      level: 1,
    },
    {
      title: 'PHP',
      level: 2,
    },
    {
      title: 'Javascript/Typescript',
      level: 2,
    },
  ],
};

const backendSkill: ISkill.Skill = {
  category: 'Backend',
  items: [
    {
      title: 'AWS',
      level: 2,
    },
    {
      title: 'Spring Boot',
      level: 3,
    },
    {
      title: 'JPA',
      level: 3,
    },
    {
      title: 'REST API',
      level: 3,
    },
    {
      title: 'Mysql',
      level: 3,
    },
    {
      title: 'codeigniter',
      level: 3,
    },
  ],
};

const frontendSkill: ISkill.Skill = {
  category: 'Frontend',
  items: [
    {
      title: 'Vue',
      level: 3,
    },
    {
      title: 'React',
      level: 2,
    },
    {
      title: 'HTML/CSS',
      level: 2,
    },
  ],
};

const devopsSkill: ISkill.Skill = {
  category: 'Devops',
  items: [
    {
      title: 'Docker',
      level: 3,
    },
    {
      title: 'Kubernetes',
      level: 3,
    },
    {
      title: 'Github action',
      level: 2,
    },
    {
      title: 'Jenkins',
      level: 1,
    },
    {
      title: 'Argocd',
      level: 2,
    },
  ],
};

const etcSkills: ISkill.Skill = {
  category: 'etc',
  items: [
    {
      title: 'Github',
      level: 3,
    },
    {
      title: 'Slack',
      level: 3,
    },
    {
      title: 'Notion',
      level: 3,
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [programmingLanguages, backendSkill, frontendSkill, devopsSkill, etcSkills],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
