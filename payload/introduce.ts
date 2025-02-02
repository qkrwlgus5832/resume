import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '안녕하세요! 저는 2020년 2월 학부를 졸업하고 2020년 10월부터 시작해서 만으로 4년째 근무하고 있는 개발자입니다 :)',
    '주로 웹 개발을 담당해왔으며, 백오피스 개발의 백엔드 개발을 주로 진행해왔습니다',
    '반복되고 불편화된 일을 자동화시키고 사내에 편하고 좋은 시스템을 제공하는 것을 목표로 하고 있습니다',
    '동료가 봤을때도 이해하기 쉽고, 유지보수하기 쉬운 코드를 작성하기 위해 노력합니다 동료와 코드리뷰를 통해 토론하고 발전하며 더 좋은 코드를 만들어나가는데에 집중합니다',
    '저는 새로운 일을 하며 성장하는 것을 즐기며, 업무와 함께 새로운 지식이 쌓여나가는 것을 좋아합니다 따라서 전혀 모르는 영역일지라도 도전하며 성장하고자 합니다',
  ],
  sign: 'Tux',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
