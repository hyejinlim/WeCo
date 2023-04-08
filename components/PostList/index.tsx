import { memo, useEffect, useState } from 'react';
import * as R from 'ramda';
import PostCategory from './components/PostCategory';
import PostCard from './components/PostCard';
import PostToggle from './components/PostToggle';
import { Post } from './types';

type Props = {
  postData: Post[];
};
function PostList({ postData }: Props) {
  const [data, setData] = useState<Post[]>([]);

  /**
   * handler
   */
  const handleCategoryChange = (type: string) => {
    if (type === 'all') {
      setData(postData);
      return;
    }
    const newData = R.filter((val: Post) => val.recruitType === type)(postData);
    setData(newData);
  };
  const handleToggleChange = (checked: boolean) => {
    const newData = R.filter((val: Post) => val.isClosed === !!!checked)(
      postData
    );
    setData(newData);
  };

  /**
   * useEffect
   */
  useEffect(() => {
    setData(postData);
  }, [postData]);

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
