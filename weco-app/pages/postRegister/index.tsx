import { MainHeader } from 'components/Header';
import { NextPage } from 'next';
import React from 'react';
import PostInfo from './PostInfo';

const postMain: NextPage = () => {
  return (
    <>
      <MainHeader />
      <PostInfo />
    </>
  );
};

export default postMain;
