import { memo, useEffect, useState } from 'react';
import * as R from 'ramda';
import PostCategory from './components/PostCategory';
import PostCard from './components/PostCard';
import PostToggle from './components/PostToggle';
import { Post } from './types';
import { POST_DATA } from './constants';

function PostList() {
  const [data, setData] = useState<Post[]>([]);

  const handleCategoryChange = (type: string) => {
    if (type === 'all') {
      setData(POST_DATA);
      return;
    }
    const newData = R.filter((val: Post) => val.type === type)(POST_DATA);
    setData(newData);
  };
  const handleToggleChange = (checked: boolean) => {
    const newData = R.filter((val: Post) => val.isClosed === !!!checked)(
      POST_DATA
    );
    setData(newData);
  };

  useEffect(() => {
    setData(POST_DATA);
  }, [POST_DATA]);

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
