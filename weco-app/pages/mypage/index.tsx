import { MainHeader } from 'components/Header';
import { SessionForm } from 'components/SessionForm';
import { NextPage } from 'next';

const MyPage: NextPage = () => {
  return (
    <>
      <MainHeader />
      <SessionForm />
    </>
  );
};

export default MyPage;
