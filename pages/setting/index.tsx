import { memo } from 'react';
import Header from 'components/Header';
import { SettingForm } from 'components/Form/SettingForm';

function Setting() {
  return (
    <>
      <Header />
      <SettingForm />
    </>
  );
}

export default memo(Setting);
