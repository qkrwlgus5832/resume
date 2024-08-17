import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '세차블락 API 개선 작업',
      startedAt: '2021-02',
      endedAt: '2021-06',
      where: '쏘카(SOCAR)',
      descriptions: [
        {
          content: '기존의 세차블락 API를 개선시키는 작업',
        },
        {
          content:
            '장애블락 시간안에 세차블락을 예약해야 하는데 이 세차블락의 예약생성/수정/취소에 따른 기존 장애블락 수정 작업',
        },
        {
          content: '쏘카의 예약 관련 로직들을 익힐 수 있던 프로젝트',
          descriptions: [
            {
              content: '관련 다이어그램',
              href:
                'https://viewer.diagrams.net/?highlight=0000ff&edit=_blank&layers=1&nav=1#G1JSFdqYnIQavP_cmCu94zq-rhNCedh6PW#%7B%22pageId%22%3A%22By-zMG-n-gU9y0vpxgiY%22%7D',
            },
          ],
        },
      ],
    },
    {
      title: '사고비 완납 후 회원상태 자동변경 프로젝트',
      startedAt: '2021-05',
      endedAt: '2021-09',
      where: '쏘카(SOCAR)',
      descriptions: [
        {
          content: '사고 미납금에 따른 회원상태를 자동으로 옮겨주는 프로젝트(결제 방식에 상관X)',
        },
        {
          content:
            '신규 사고, 사고비, 회원 자격 재심사중, 예약 미납금 등 회원상태 관련된 모든 조건들을 판별하여 회원 상태를 자동으로 업데이트시키는 서버 개발',
        },
        {
          content:
            '새로운 서버를 구축하면서 기존의 php 레거시로 되어있던 회원상태 관련 로직들을 kotlin으로 옮김',
        },
        {
          content: '성과',
          weight: 'MEDIUM',
          descriptions: [
            { content: '회원 상태 문의 콜 인입 4주 기준 383건 감소' },
            { content: '사고관리팀 및 서비스지원팀 내 리소스 절감' },
          ],
        },
      ],
    },
    {
      title: '사고 12대 중과실 추가',
      startedAt: '2021-08',
      endedAt: '2021-09',
      where: '쏘카(SOCAR)',
      descriptions: [
        {
          content:
            '사고관리시스템 내 12대 중과실 항목들(미신고, 과속, 중앙선침범 등)을 추가하는 작업' +
            '(해당 항목들을 위반할 경우 보험적용이 안되도록 함)',
        },
        {
          content:
            '해당 항목들이 기존 테이블에 yn플래그로 항목개수만큼 존재하고 있었고, 하드코딩으로 존재하고 있었음 -> 해당 부분을 개선시켜 새로운 테이블로 정규화',
        },
      ],
    },
    {
      title: '차량자원관리시스템 프로젝트',
      startedAt: '2021-11',
      endedAt: '2022-05',
      where: '쏘카(SOCAR)',
      descriptions: [
        {
          content: '차량과 관련된 리소스를 관리하는 프로젝트(차량 구매, 매각, 협력처 등등)',
        },
        {
          content: '프론트(nuxt.js), 백엔드 작업(Spring boot, grpc, kotlin)',
        },
        {
          content: 'Spring scheduler 이용해 요청서 관련 알림을 개발',
        },
        {
          content:
            'Docker, go를 이용해 api로 요청하면 grpc로 자동으로 포워딩해주는 grpc gateway서버를 개발',
        },
      ],
    },
    {
      title: '사고관리시스템 isms-p 대응',
      startedAt: '2022-06',
      endedAt: '2022-07',
      where: '쏘카(SOCAR)',
      descriptions: [
        {
          content: '사고관리시스템 ISMS-P 심사에 대비해 보안 취약점을 수정하는 작업',
        },
        {
          content:
            'Keycloak + gatekeeper로 이루어져있던 기존 서버를 사내 모듈을 사용해서 Keycloak + Spring security를 사용하도록 변경',
        },
        {
          content: '쿠키값 조작 막기, 사내 백오피스 포탈(사내 백오피스 공통 모듈) 연동 작업',
        },
      ],
    },
    {
      title: '사고관리시스템 회원상태 로직 변경',
      startedAt: '2023-03',
      endedAt: '2023-05',
      where: '쏘카(SOCAR)',
      descriptions: [
        {
          content: '신규 사고가 접수 되더라도, 회원상태가 "예약가능"으로 유지',
        },
        {
          content:
            '사고비가 발생되서 청구중이더라도, 신규이관상태가 아니라면(7일이 지나지 않았다면) "예약가능"으로 유지',
        },
        {
          content: '성과',
          weight: 'MEDIUM',
          descriptions: [
            { content: '기존의 예약불가 회원들이 예약가능으로 변경되면서 연 매출액 9.8억 증가' },
          ],
        },
      ],
    },
    {
      title: '하나손해보험 연동 프로젝트',
      startedAt: '2022-09',
      endedAt: '2023-07',
      where: '쏘카(SOCAR)',
      descriptions: [
        {
          content:
            '사고접수를 할 경우, 조건에 만족할 경우 보험에 자동으로 접수되도록 하는 프로젝트',
        },
        {
          content:
            '손해액 처리 결과를 API로 받고, DB에 저장시키는 프로젝트(Spring Batch + cronjob 사용)',
        },
        {
          content: 'Spring Batch를 수동으로 실행시킬 수 있는 서버 따로 구축',
        },
        {
          content: '기존의 AXA손해보험 손해액 관련 로직들을 php에서 spring boot + kotlin으로 전환',
        },
        {
          content:
            '사내 보험서버를 개발하게 되었으며, 모든 종류의 보험이 해당서버로 통신될 수 있도록 확장성 있게 개발',
        },
        {
          content: '성과',
          weight: 'MEDIUM',
          descriptions: [
            { content: '하나손해보험 관련 고객센터 상담시간 95%감소' },
            { content: '사고기획팀 및 서비스 지원팀 리소스 절감' },
            { content: '보험료 5억 절감' },
          ],
        },
      ],
    },
    {
      title: '사내 어드민 시스템 차량 일괄블락 개선',
      startedAt: '2023-08',
      endedAt: '2023-09',
      where: '쏘카(SOCAR)',
      descriptions: [
        {
          content:
            '재해재난 대응, 차량 매각지 이동 등 다수 차량을 관리하기 위해 기존에 있는 차량 일괄블락 기능을 개선하는 작업',
        },
        {
          content:
            '차량에 대한 블락(예약)을 생성할 경우, 해당 구간에 존재하는 예약들을 제외한 모든 사이사이 시간에 블락(예약)을 걸어주는 기능',
        },
        {
          content: '차량, 예약마다 다른 쿠션타임에 대한 모든 케이스들을 구현',
        },
        {
          content:
            '예약의 복잡한 로직 및 정책에도 불구하고 QA 이슈 한건 발생, 현재까지 장애 없이 사용중',
        },
        {
          content: '성과',
          weight: 'MEDIUM',
          descriptions: [{ content: '연간 운영 리소스 8.5MM 절감' }],
        },
      ],
    },
    {
      title: '사고관리시스템 pf0 상품 개발',
      startedAt: '2023-09',
      endedAt: '2023-10',
      where: '쏘카(SOCAR)',
      descriptions: [
        {
          content: '차량손해면책제도 0원 상품 개발을 위한 수정개발',
        },
        {
          content: '사고가 발생되더라도 면책금이 0이라면 휴차료 + 수리비가 전액 면제 ',
        },
      ],
    },
    {
      title: '삼성화재 연동 프로젝트',
      startedAt: '2023-12',
      where: '쏘카(SOCAR)',
      descriptions: [
        {
          content:
            '사고접수를 할 경우, 조건에 만족할 경우 보험에 자동으로 접수되도록 하는 프로젝트',
        },
        {
          content:
            '손해액 처리 결과를 API로 받고, DB에 저장시키는 프로젝트(Spring Batch + cronjob 사용)',
        },
        {
          content: 'Spring Batch를 수동으로 실행시킬 수 있는 서버 따로 구축',
        },
        {
          content: '성과',
          weight: 'MEDIUM',
          descriptions: [
            { content: '삼성화재 관련 고객센터 상담시간 95%감소' },
            { content: '사고기획팀 및 서비스 지원팀 리소스 절감' },
            { content: '보험료 10억 절감' },
          ],
        },
      ],
    },
  ],
};

export default project;
