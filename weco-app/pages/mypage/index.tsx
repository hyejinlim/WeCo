import { MainHeader } from 'components/Header';
import { MyPageForm } from 'components/Form/MyPageForm';
import { NextPage } from 'next';

const MyPage: NextPage = () => {
  return (
    <>
      <MainHeader />
      <MyPageForm />
    </>
  );
};

export default MyPage;
