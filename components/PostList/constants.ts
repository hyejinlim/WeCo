import { Category, Post } from './types';

export const CATEGORY_LIST: Category[] = [
  {
    label: '전체',
    value: 'all',
    img: '/images/all_icon.png',
  },
  {
    label: '프로젝트',
    value: 'project',
    img: '/images/project_icon.png',
  },
  {
    label: '스터디',
    value: 'study',
    img: '/images/study_icon.png',
  },
];

export const POST_DATA: Post[] = [
  {
    id: 1,
    type: 'project',
    startDate: '2023-01-07T04:18:37.294Z',
    title:
      '취업준비 포트폴리오 모집합니다 모집합니다 포트폴리오 모집합니다 모집합니다',
    tag: ['온라인', '1명', '2개월'],
    language: ['react', 'javascript', 'nestjs'],
    author: 'james',
    views: '30',
    comments: '0',
    isClosed: false,
    explain:
      '개인 프로젝트로는 면접과 경험에 한계가 있어보여 포트폴리오로 제출 할 팀 프로젝트를 진행해보려고 합니다. 기획은 어느정도 진행이 된 상태이며, 현재 디자이너 1명, 프론트엔드 1명, 백엔드 2명으로 구성되어있습니다. 기간은 8월 초까지 진행할 예정입니다. 기술 스택은 리액트(Next.js)를 사용하고 온라인 구인이므로 책임감을 갖고 끝까지 프로젝트에 참여해서 의미있는 시간을 보내셨으면 합니다!',
  },
  {
    id: 2,
    type: 'project',
    startDate: '2022-12-09T04:18:37.294Z',
    title: '백앤드 어서오세요~!!!',
    tag: ['온라인', '4명', '12개월'],
    language: ['spring', 'typescript', 'nodejs'],
    author: 'mina',
    views: '100123',
    comments: '1230',
    isClosed: false,
    explain:
      '개인 프로젝트로는 면접과 경험에 한계가 있어보여 포트폴리오로 제출 할 팀 프로젝트를 진행해보려고 합니다. 기획은 어느정도 진행이 된 상태이며, 현재 디자이너 1명, 프론트엔드 1명, 백엔드 2명으로 구성되어있습니다. 기간은 8월 초까지 진행할 예정입니다. 기술 스택은 리액트(Next.js)를 사용하고 온라인 구인이므로 책임감을 갖고 끝까지 프로젝트에 참여해서 의미있는 시간을 보내셨으면 합니다!',
  },
  {
    id: 3,
    type: 'study',
    startDate: '2022-12-23T15:18:37.294Z',
    title: '모드들 행복하세요~!!!',
    tag: ['오프라인', '1231명', '1초'],
    language: ['nextjs', 'react', 'nodejs'],
    author: '제갈공명',
    views: '111111',
    comments: '22',
    isClosed: false,
    explain:
      '개인 프로젝트로는 면접과 경험에 한계가 있어보여 포트폴리오로 제출 할 팀 프로젝트를 진행해보려고 합니다. 기획은 어느정도 진행이 된 상태이며, 현재 디자이너 1명, 프론트엔드 1명, 백엔드 2명으로 구성되어있습니다. 기간은 8월 초까지 진행할 예정입니다. 기술 스택은 리액트(Next.js)를 사용하고 온라인 구인이므로 책임감을 갖고 끝까지 프로젝트에 참여해서 의미있는 시간을 보내셨으면 합니다!',
  },
  {
    id: 4,
    type: 'project',
    startDate: '2022-12-12T20:30:37.294Z',
    title: '샘플입니다아아ㅏ아',
    tag: ['오프라인', '1231명', '1초'],
    language: ['nodejs', 'javascript'],
    author: '아르헨티나명',
    views: '11',
    comments: '22',
    isClosed: false,
    explain:
      '개인 프로젝트로는 면접과 경험에 한계가 있어보여 포트폴리오로 제출 할 팀 프로젝트를 진행해보려고 합니다. 기획은 어느정도 진행이 된 상태이며, 현재 디자이너 1명, 프론트엔드 1명, 백엔드 2명으로 구성되어있습니다. 기간은 8월 초까지 진행할 예정입니다. 기술 스택은 리액트(Next.js)를 사용하고 온라인 구인이므로 책임감을 갖고 끝까지 프로젝트에 참여해서 의미있는 시간을 보내셨으면 합니다!',
  },
  {
    id: 5,
    type: 'study',
    startDate: '2023-01-01T20:30:37.294Z',
    title: '이것또한 샘플입니다 ~!',
    tag: ['온라인', '2231명', '100초'],
    language: ['vue', 'react', 'nodejs'],
    author: '제갈공명',
    views: '111111',
    comments: '22',
    isClosed: true,
    explain:
      '개인 프로젝트로는 면접과 경험에 한계가 있어보여 포트폴리오로 제출 할 팀 프로젝트를 진행해보려고 합니다. 기획은 어느정도 진행이 된 상태이며, 현재 디자이너 1명, 프론트엔드 1명, 백엔드 2명으로 구성되어있습니다. 기간은 8월 초까지 진행할 예정입니다. 기술 스택은 리액트(Next.js)를 사용하고 온라인 구인이므로 책임감을 갖고 끝까지 프로젝트에 참여해서 의미있는 시간을 보내셨으면 합니다!',
  },
  {
    id: 6,
    type: 'project',
    startDate: '2023-01-03T20:30:37.294Z',
    title:
      '취업준비 포트폴리오 모집합니다 모집합니다 포트폴리오 모집합니다 모집합니다',
    tag: ['#온라인', '#1명', '#2개월'],
    language: ['react', 'javascript', 'nestjs'],
    author: 'james',
    views: '30',
    comments: '0',
    isClosed: false,
    explain:
      '개인 프로젝트로는 면접과 경험에 한계가 있어보여 포트폴리오로 제출 할 팀 프로젝트를 진행해보려고 합니다. 기획은 어느정도 진행이 된 상태이며, 현재 디자이너 1명, 프론트엔드 1명, 백엔드 2명으로 구성되어있습니다. 기간은 8월 초까지 진행할 예정입니다. 기술 스택은 리액트(Next.js)를 사용하고 온라인 구인이므로 책임감을 갖고 끝까지 프로젝트에 참여해서 의미있는 시간을 보내셨으면 합니다!',
  },
];
