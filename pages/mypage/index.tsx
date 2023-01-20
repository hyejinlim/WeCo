import { memo } from 'react';
import MyPageForm from 'components/Form/MyPageForm';
import Header from 'components/Header';

function MyPage() {
  return (
    <>
      <Header />
      <MyPageForm />
    </>
  );
}

export default memo(MyPage);
