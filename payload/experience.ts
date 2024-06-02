import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '쏘카(SOCAR)',
      position: '사내 백오피스 개발자',
      startedAt: '2020-10',
      descriptions: ['사내 어드민 시스템, 차량자원관리시스템, 사고관리시스템, 보험서버 개발'],
      skillKeywords: [
        'Spring boot',
        'kubernetes',
        'Kotlin',
        'Jpa',
        'querydsl',
        'AWS',
        'docker',
        'vue.js',
        'nuxt.js',
        'git',
        'Linux',
        'PHP',
        'codeigniter',
      ],
    },
    {
      title: '엔테크서비스(Nhn Technology service)',
      position: '유저 서비스팀 인턴',
      startedAt: '2020-01',
      endedAt: '2020-02',
      descriptions: ['인턴 과제 수행(네이버 부스트코스)'],
      skillKeywords: ['Spring Framework', 'tomcat', 'mybatis', 'ajax', 'javascript', 'git'],
    },
  ],
};

export default experience;
