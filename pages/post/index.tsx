import { memo } from 'react';
import Header from 'components/Header';
import PostWrite from '../../components/PostWrite';

function Post() {
  return (
    <>
      <Header />
      <PostWrite />
    </>
  );
}

export default memo(Post);
