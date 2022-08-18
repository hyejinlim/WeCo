import { MainHeader } from 'components/Header';
import { SettingForm } from 'components/Form/SettingForm';
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
