import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

import { faBell } from '@fortawesome/free-regular-svg-icons';
import { IProfile } from '../component/profile/IProfile';
import image from '../asset/photo.jpg';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '박지현',
    small: '(arin)',
  },
  contact: [
    {
      title: 'pjh_5890@naver.com',
      link: 'mailto:pjh_5890@naver.com',
      icon: faEnvelope,
    },
    {
      title: '010-7196-5890',
      icon: faPhone,
      badge: true,
    },
    {
      link: 'https://github.com/qkrwlgus5832',
      icon: faGithub,
    },
    {
      link: 'https://www.instagram.com/jihtun_456',
      icon: faInstagram,
    },
  ],
  notice: {
    title: '휴대전화나 인스타그램 메시지, 링크드인 메시지보다 이메일을 더 선호합니다',
    icon: faBell,
  },
};

export default profile;
