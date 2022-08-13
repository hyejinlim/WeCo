import RecruitCard from 'pages/recruit/RecruitCard';

export function MyPageForm() {
  return (
    <section className="pt-20">
      <div className="w-4/5 my-0 mx-auto min-h-screen">
        <main className="flex flex-col">
          <section className="flex mb-8">
            <span className="ml-2 cursor-pointer font-extrabold text-2xl">
              작성목록
            </span>
          </section>
        </main>
        <div className="bg-zinc-600 w-full h-screen text-8xl">
          내가 작성한 게시글 보여주는 영역
        </div>
      </div>
    </section>
  );
}
