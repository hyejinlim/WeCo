import { memo } from 'react';
import Header from 'components/Header';
import MainSlider from 'components/Slider';
import { SkillSelect } from 'components/Skill';
import ScrollTopButton from 'components/Button/ScrollTopButton';
import EvaluateButton from 'components/Button/EvaluateButton';
import RecruitList from './recruit';

function Home() {
  return (
    <>
      <Header />
      <MainSlider />
      <SkillSelect />
      <RecruitList />
      <EvaluateButton />
      <ScrollTopButton />
    </>
  );
}

export default memo(Home);
