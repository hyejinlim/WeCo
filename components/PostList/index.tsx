import { memo, useEffect, useState } from 'react';
import * as R from 'ramda';
import PostCategory from './components/PostCategory';
import PostCard from './components/PostCard';
import PostToggle from './components/PostToggle';
import { Post } from './types';

type Props = {
  postData: Post[];
  selectedLanguage: string[];
};
function PostList({ postData, selectedLanguage }: Props) {
  const [data, setData] = useState<Post[]>([]);

  /**
   * handler
   */
  // 데이터 초기화
  const handleResetData = () => setData(postData);

  // 선택한 카테고리(프로젝트/스터디) 데이터 필터링
  const handleCategoryChange = (type: string) => {
    if (type === 'all') {
      handleResetData();
      return;
    }
    const newData = R.filter((val: Post) => val.recruitType === type)(postData);
    setData(newData);
  };

  // 모집중인 데이터 필터링
  const handleToggleChange = (checked: boolean) => {
    const newData = R.filter((val: Post) => val.isClosed === !!!checked)(
      postData
    );
    setData(newData);
  };

  // 선택한 언어에 따른 데이터 필터링
  const handleDataWithLanguage = (language: string[]) => {
    if (R.isEmpty(language)) {
      handleResetData();
      return;
    }
    const newData = R.reduce((acc: any, cur: any) => {
      const existArr = R.pipe(
        R.map((item) => R.includes(item, language)),
        R.filter((v: boolean) => v)
      )(cur.skills);
      if (!R.isEmpty(existArr)) return [...acc, cur];
      else return [...acc];
    }, [])(postData);

    setData(newData);
  };

  /**
   * useEffect
   */
  useEffect(() => setData(postData), [postData]); // init
  useEffect(() => handleDataWithLanguage(selectedLanguage), [selectedLanguage]);

  return (
    <div className="max-w-7xl w-full mx-auto px-4 pb-20">
      <div className="flex items-center mb-8 justify-between">
        <PostCategory onCategoryChange={handleCategoryChange} />
        <div className="flex items-center">
          <PostToggle
            label="모집 중만 보기"
            onToggleChange={handleToggleChange}
          />
        </div>
      </div>
      <PostCard data={data} />
    </div>
  );
}

export default memo(PostList);
