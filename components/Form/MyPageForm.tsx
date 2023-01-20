import { memo } from 'react';

function MyPageForm() {
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
        <div className="bg-zinc-300 w-full h-screen text-2xl p-4">
          내가 작성한 게시글 보여주는 영역
        </div>
      </div>
    </section>
  );
}

export default memo(MyPageForm);
