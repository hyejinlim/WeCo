import { memo } from 'react';

type Props = {
  num: number;
  title: string;
};

function PostHeader({ num, title }: Props) {
  return (
    <div className="flex items-center py-4 mb-9 border-b-2 border-solid border-gray-300">
      <span className="mr-2 w-7 h-7 flex justify-center items-center rounded-full bg-yellow-400 font-bold text-white">
        {num}
      </span>
      <h2 className="font-bold text-2xl tracking-tighter m-0">{title}</h2>
    </div>
  );
}

export default memo(PostHeader);
