import PostButton from 'components/Button/PostButton';
import { NextPage } from 'next';
import React from 'react';

const FooterButton: NextPage = () => {
  return (
    <section className="flex justify-end items-center mt-[1rem]">
      <PostButton
        type="submit"
        buttonName="취소"
        backgroundColor="bg-slate-200"
      />
      <PostButton
        type="button"
        buttonName="글 등록"
        backgroundColor="bg-black"
        textColor="text-white"
      />
    </section>
  );
};

export default FooterButton;
