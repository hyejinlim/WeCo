import { memo } from 'react';
import Header from 'components/Header';
import MainSlider from 'components/Slider';
import LanguageSelect from 'components/Language';
import ScrollTopButton from 'components/Button/ScrollTopButton';
import EvaluateButton from 'components/Button/EvaluateButton';
import RecruitList from './recruit';

function Home() {
  return (
    <>
      <Header />
      <MainSlider />
      <LanguageSelect />
      <RecruitList />
      <EvaluateButton />
      <ScrollTopButton />
    </>
  );
}

export default memo(Home);
