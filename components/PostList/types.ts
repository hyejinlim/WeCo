export type Category = {
  label: string;
  value: string;
  img: string;
};

export type Post = {
  id: string;
  positions: string[];
  progressType: string;
  contactType: string;
  contactDetail: string;
  recruitCnt: number;
  endDate: string;
  title: string;
  skills: string[];
  isClosed: boolean;
  period: number;
  recruitType: string;
};
