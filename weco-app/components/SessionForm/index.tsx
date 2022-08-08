import RecruitCard from 'pages/recruit/RecruitCard';

export function SessionForm() {
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
        <RecruitCard />
      </div>
    </section>
  );
}
