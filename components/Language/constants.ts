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
    value: 'javascript',
    img: '/img/javascript.svg',
    category: ['popular', 'frontend'],
  },
  {
    label: 'TypeScript',
    value: 'typescript',
    img: '/img/typescript.svg',
    category: ['popular', 'frontend'],
  },
  {
    label: 'React',
    value: 'react',
    img: '/img/react.svg',
    category: ['popular', 'frontend'],
  },
  {
    label: 'Vue',
    value: 'vue',
    img: '/img/vue.svg',
    category: ['popular', 'frontend'],
  },
  {
    label: 'NextJs',
    value: 'nextjs',
    img: '/img/nextjs.svg',
    category: ['popular', 'frontend'],
  },
  {
    label: 'Svelte',
    value: 'svelte',
    img: '/img/svelte.svg',
    category: ['popular', 'frontend'],
  },
  {
    label: 'Java',
    value: 'java',
    img: '/img/java.svg',
    category: ['popular', 'backend'],
  },
  {
    label: 'Spring',
    value: 'spring',
    img: '/img/spring.svg',
    category: ['popular', 'backend'],
  },
  {
    label: 'NodeJs',
    value: 'nodejs',
    img: '/img/nodejs.svg',
    category: ['popular', 'backend'],
  },
  {
    label: 'NestJs',
    value: 'nestjs',
    img: '/img/nestjs.svg',
    category: ['backend'],
  },
  {
    label: 'Go',
    value: 'go',
    img: '/img/go.svg',
    category: ['popular', 'backend'],
  },
  {
    label: 'Kotlin',
    value: 'kotlin',
    img: '/img/kotlin.svg',
    category: ['backend', 'mobile'],
  },
  {
    label: 'Express',
    value: 'express',
    img: '/img/express.svg',
    category: ['backend'],
  },
  {
    label: 'MySQL',
    value: 'mysql',
    img: '/img/mysql.svg',
    category: ['backend'],
  },
  {
    label: 'MongoDB',
    value: 'mongodb',
    img: '/img/mongodb.svg',
    category: ['backend'],
  },
  {
    label: 'Python',
    value: 'python',
    img: '/img/python.svg',
    category: ['backend'],
  },
  {
    label: 'Django',
    value: 'django',
    img: '/img/django.svg',
    category: ['backend'],
  },
  { label: 'PHP', value: 'php', img: '/img/php.svg', category: ['backend'] },
  {
    label: 'GraphQL',
    value: 'graphql',
    img: '/img/graphql.svg',
    category: ['backend'],
  },
  {
    label: 'FireBase',
    value: 'firebase',
    img: '/img/firebase.svg',
    category: ['backend'],
  },
  {
    label: 'Flutter',
    value: 'flutter',
    img: '/img/flutter.svg',
    category: ['mobile'],
  },
  {
    label: 'Swift',
    value: 'swift',
    img: '/img/swift.svg',
    category: ['mobile'],
  },
  {
    label: 'Kotlin',
    value: 'kotlin',
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
    value: 'unity',
    img: '/img/unity.svg',
    category: ['mobile'],
  },
  { label: 'AWS', value: 'aws', img: '/img/aws.svg', category: ['etc'] },
  {
    label: 'Kubernetes',
    value: 'kubernetes',
    img: '/img/kubernetes.svg',
    category: ['etc'],
  },
  {
    label: 'Docker',
    value: 'docker',
    img: '/img/docker.svg',
    category: ['etc'],
  },
  { label: 'Git', value: 'git', img: '/img/git.svg', category: ['etc'] },
  { label: 'Figma', value: 'figma', img: '/img/figma.svg', category: ['etc'] },
  {
    label: 'Zeplin',
    value: 'zeplin',
    img: '/img/zeplin.svg',
    category: ['etc'],
  },
  { label: 'Jest', value: 'jest', img: '/img/jest.svg', category: ['etc'] },
  { label: 'C', value: 'c', img: '/img/c.svg', category: ['etc'] },
];
