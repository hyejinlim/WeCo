import React from 'react';

interface Props {
  num: string;
  title: string;
}

const PostHeader = ({ num, title }: Props) => {
  return (
    <div className="flex items-center p-4 mb-9 border-b-[3px] border-solid border-gray-300 ">
      <span className="mr-2 w-[28px] h-[28px] flex justify-center items-center rounded-full bg-yellow-200 font-bold text-white text-base">
        {num}
      </span>
      <h2 className="font-bold text-2xl tracking-tighter m-0">{title}</h2>
    </div>
  );
};

export default PostHeader;
