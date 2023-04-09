import { memo } from 'react';
import Link from 'next/link';
import dayjs from 'dayjs';
import { AiOutlineEye, AiOutlineComment } from 'react-icons/ai';
import * as R from 'ramda';
import { Post } from '../types';
import { Positions, RecruitType } from 'components/PostWrite/spread';
import { labelFromValue } from 'utils/selection';

type Props = {
  data: Post[];
};

const addIndexMap = R.addIndex(R.map);

function PostCard({ data }: Props) {
  return (
    <ul className="flex flex-wrap gap-6 p-0">
      {addIndexMap((item: any, index: number) => {
        const {
          id,
          endDate,
          title,
          positions,
          skills,
          name,
          views,
          comments,
          recruitType,
        } = item;
        return (
          <Link key={index} href={`/post/detail/${id}`}>
            <a className="hover:scale-[1.03] duration-300 cursor-pointer px-6 pt-16 pb-8 flex box-border justify-center flex-col w-[400px] rounded-3xl border-gray-300 border-2 border-solid">
              <li className="p-0 m-0">
                <div className="flex justify-between items-center">
                  <span className="bg-gray-200 text-gray-800 font-semibold px-4 py-1 rounded-full">
                    {labelFromValue(recruitType, RecruitType)}
                  </span>
                  <div className="flex gap-3.5 text-neutral-400">
                    <p>
                      마감일 | &nbsp;
                      <span className="font-semibold">
                        {dayjs(endDate).format('YYYY-MM-DD')}
                      </span>
                    </p>
                  </div>
                </div>
                <h1 className="mt-6 mb-4 text-2xl line-clamp-2">{title}</h1>
                <ul className="flex gap-1 text-lg mt-6 mb-10 text-neutral-400">
                  {R.map((item: string) => {
                    return (
                      <li
                        key={item}
                        className="text-blue-600 bg-gray-200 rounded-full px-2 py-1 text-sm"
                      >
                        {labelFromValue(item, Positions)}
                      </li>
                    );
                  })(positions)}
                </ul>
                <ul className="flex gap-2 mb-9">
                  {addIndexMap((item: any, index: number) => {
                    return (
                      <li key={index} className="w-10 h-10">
                        <img src={`/img/${item}.svg`} />
                      </li>
                    );
                  })(skills)}
                </ul>
                <section className="flex border-solid border-gray-300 border-t pt-4 justify-between">
                  <div className="flex items-center">
                    <img
                      className="w-9 h-9 mr-3"
                      src="https://hola-post-image.s3.ap-northeast-2.amazonaws.com/default.PNG"
                    />
                    <div className="text-lg font-normal">{name}</div>
                  </div>
                  <div className="flex gap-4 text-neutral-400">
                    <div className="flex items-center gap-1">
                      <AiOutlineEye className="w-7 h-7" />
                      <p>{views ?? 0}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <AiOutlineComment className="w-7 h-7" />
                      <p>{comments ?? 0}</p>
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

export default memo(PostCard);
