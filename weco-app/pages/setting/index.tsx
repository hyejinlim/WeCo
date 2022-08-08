import { MainHeader } from 'components/Header';
import { SessionForm } from 'components/SessionForm';
import { SettingForm } from 'components/SessionForm/SettingForm';
import { NextPage } from 'next';

const Setting: NextPage = () => {
  return (
    <>
      <MainHeader />
      <SettingForm />
    </>
  );
};

export default Setting;
