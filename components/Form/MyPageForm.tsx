import PostCard from 'components/PostList/components/PostCard';
import { Post } from 'components/PostList/types';
import { memo } from 'react';

type Props = {
  postData: Post[];
};

function MyPageForm({ postData }: Props) {
  return (
    <section className="pt-20">
      <div className="max-w-7xl my-0 mx-auto px-4 min-h-screen">
        <main className="flex flex-col">
          <section className="flex mb-8">
            <span className="ml-2 cursor-pointer font-extrabold text-2xl">
              작성목록
            </span>
          </section>
        </main>
        <div className="w-full h-scree">
          <PostCard data={postData} />
        </div>
      </div>
    </section>
  );
}

export default memo(MyPageForm);
