import Header from 'components/Header';
import MainSlider from 'components/Slider';
import { SkillSelect } from 'components/Skill';
import EvaluateButton from 'components/Button/EvaluateButton';
import { ScrollTopButton } from 'components/Button/ScrollTopButton';
import { memo } from 'react';
import RecruitMain from './recruit';

function Home() {
  return (
    <>
      <Header />
      <MainSlider />
      <SkillSelect />
      <RecruitMain />
      <EvaluateButton />
      <ScrollTopButton />
    </>
  );
}

export default memo(Home);
