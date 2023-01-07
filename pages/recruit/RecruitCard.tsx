import { memo } from 'react';
import Link from 'next/link';
import dayjs from 'dayjs';
import { AiOutlineEye, AiOutlineComment } from 'react-icons/ai';
import * as R from 'ramda';
import { Recruit } from './types';

type Props = {
  data: Recruit[];
};

const addIndexMap = R.addIndex(R.map);

function RecruitCard({ data }: Props) {
  return (
    <ul className="flex flex-wrap gap-6 p-0">
      {addIndexMap((item: any, index: number) => {
        const { id, startDate, title, tag, language, author, views, comments } =
          item;
        return (
          <Link key={index} href={`/post/detail/${id}`}>
            <a className="hover:scale-[1.03] duration-300 cursor-pointer px-6 pt-16 pb-12 flex box-border justify-center flex-col w-[400px] h-[450px] rounded-3xl border-gray-300 border-2 border-solid">
              <li className="p-0 m-0">
                <div className="flex gap-3.5 text-lg text-neutral-400">
                  <p>시작 예정일 | {dayjs(startDate).format('YYYY-MM-DD')}</p>
                </div>
                <h1 className="my-4 min-h-[67px] text-2xl line-clamp-2">
                  {title}
                </h1>
                <ul className="flex gap-1 text-lg mt-6 mb-10 text-neutral-400">
                  {R.map((item: string) => {
                    return <li key={item}>{`#${item}`}</li>;
                  })(tag)}
                </ul>
                <ul className="flex gap-2 mb-9">
                  {addIndexMap((item: any, index: number) => {
                    return (
                      <li key={index} className="w-12 h-12">
                        <img
                          src={`https://holaworld.io/images/languages/${item}.svg`}
                        />
                      </li>
                    );
                  })(language)}
                </ul>
                <section className="flex border-solid border-gray-300 border-t pt-4 justify-between">
                  <div className="flex items-center">
                    <img
                      className="w-9 h-9 mr-3"
                      src="https://hola-post-image.s3.ap-northeast-2.amazonaws.com/default.PNG"
                    />
                    <div className="text-lg font-normal">{author}</div>
                  </div>
                  <div className="flex gap-4 text-neutral-400">
                    <div className="flex items-center gap-1">
                      <AiOutlineEye className="w-7 h-7" />
                      <p>{views}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <AiOutlineComment className="w-7 h-7" />
                      <p>{comments}</p>
                    </div>
                  </div>
                </section>
              </li>
            </a>
          </Link>
        );
      })(data)}
    </ul>
  );
}

export default memo(RecruitCard);
