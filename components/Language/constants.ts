import { LANGUAGE, LANGUAGE_CATEGORY } from './types';

export const LANGUAGE_CATEGORY_LIST: LANGUAGE_CATEGORY[] = [
  {
    label: '인기',
    value: 'popular',
  },
  {
    label: '프론트엔드',
    value: 'frontend',
  },
  {
    label: '백엔드',
    value: 'backend',
  },
  {
    label: '모바일',
    value: 'mobile',
  },
  {
    label: '기타',
    value: 'etc',
  },
  {
    label: '모두보기',
    value: 'all',
  },
];

export const LANGUAGE_LIST: LANGUAGE[] = [
  {
    label: 'JavaScript',
    value: 'JavaScript',
    img: '/img/javascript.svg',
    category: ['popular', 'frontend'],
  },
  {
    label: 'TypeScript',
    value: 'TypeScript',
    img: '/img/typescript.svg',
    category: ['popular', 'frontend'],
  },
  {
    label: 'React',
    value: 'React',
    img: '/img/react.svg',
    category: ['popular', 'frontend'],
  },
  {
    label: 'Vue',
    value: 'Vue',
    img: '/img/vue.svg',
    category: ['popular', 'frontend'],
  },
  {
    label: 'NextJs',
    value: 'NextJs',
    img: '/img/nextjs.svg',
    category: ['popular', 'frontend'],
  },
  {
    label: 'Svelte',
    value: 'Svelte',
    img: '/img/svelte.svg',
    category: ['popular', 'frontend'],
  },
  {
    label: 'Java',
    value: 'Java',
    img: '/img/java.svg',
    category: ['popular', 'backend'],
  },
  {
    label: 'Spring',
    value: 'Spring',
    img: '/img/spring.svg',
    category: ['popular', 'backend'],
  },
  {
    label: 'NodeJs',
    value: 'NodeJs',
    img: '/img/nodejs.svg',
    category: ['popular', 'backend'],
  },
  {
    label: 'NestJs',
    value: 'NestJs',
    img: '/img/nestjs.svg',
    category: ['backend'],
  },
  {
    label: 'Go',
    value: 'Go',
    img: '/img/go.svg',
    category: ['popular', 'backend'],
  },
  {
    label: 'Kotlin',
    value: 'Kotlin',
    img: '/img/kotlin.svg',
    category: ['backend', 'mobile'],
  },
  {
    label: 'Express',
    value: 'Express',
    img: '/img/express.svg',
    category: ['backend'],
  },
  {
    label: 'MySQL',
    value: 'MySQL',
    img: '/img/mysql.svg',
    category: ['backend'],
  },
  {
    label: 'MongoDB',
    value: 'MongoDB',
    img: '/img/mongodb.svg',
    category: ['backend'],
  },
  {
    label: 'Python',
    value: 'Python',
    img: '/img/python.svg',
    category: ['backend'],
  },
  {
    label: 'Django',
    value: 'Django',
    img: '/img/django.svg',
    category: ['backend'],
  },
  { label: 'PHP', value: 'PHP', img: '/img/php.svg', category: ['backend'] },
  {
    label: 'GraphQL',
    value: 'GraphQL',
    img: '/img/graphql.svg',
    category: ['backend'],
  },
  {
    label: 'FireBase',
    value: 'FireBase',
    img: '/img/firebase.svg',
    category: ['backend'],
  },
  {
    label: 'Flutter',
    value: 'Flutter',
    img: '/img/flutter.svg',
    category: ['mobile'],
  },
  {
    label: 'Swift',
    value: 'Swift',
    img: '/img/swift.svg',
    category: ['mobile'],
  },
  {
    label: 'Kotlin',
    value: 'Kotlin',
    img: '/img/kotlin.svg',
    category: ['mobile'],
  },
  {
    label: 'ReactNative',
    value: 'ReactNative',
    img: '/img/reactnative.svg',
    category: ['mobile'],
  },
  {
    label: 'Unity',
    value: 'Unity',
    img: '/img/unity.svg',
    category: ['mobile'],
  },
  { label: 'AWS', value: 'AWS', img: '/img/aws.svg', category: ['etc'] },
  {
    label: 'Kubernetes',
    value: 'Kubernetes',
    img: '/img/kubernetes.svg',
    category: ['etc'],
  },
  {
    label: 'Docker',
    value: 'Docker',
    img: '/img/docker.svg',
    category: ['etc'],
  },
  { label: 'Git', value: 'Git', img: '/img/git.svg', category: ['etc'] },
  { label: 'Figma', value: 'Figma', img: '/img/figma.svg', category: ['etc'] },
  {
    label: 'Zeplin',
    value: 'Zeplin',
    img: '/img/zeplin.svg',
    category: ['etc'],
  },
  { label: 'Jest', value: 'Jest', img: '/img/jest.svg', category: ['etc'] },
  { label: 'C', value: 'C', img: '/img/c.svg', category: ['etc'] },
];
