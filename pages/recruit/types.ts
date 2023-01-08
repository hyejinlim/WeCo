export type Category = {
  label: string;
  value: string;
  img: string;
};

export type Recruit = {
  id: number;
  type: string;
  startDate: string;
  title: string;
  tag: string[];
  language: string[];
  author: string;
  views: string;
  comments: string;
  isClosed: boolean;
  explain: string;
};
