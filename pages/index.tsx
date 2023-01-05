import MainHeader from 'components/Header';
import { EvaluateModal } from 'components/Modal/EvaluateModal';
import { SkillSelect } from 'components/Skill';
import { MainSlider } from 'components/Slider';
import { memo } from 'react';
import RecruitMain from './recruit';

function Home() {
  return (
    <>
      <MainHeader />
      <MainSlider />
      <SkillSelect />
      <RecruitMain />
      <EvaluateModal />
    </>
  );
}

export default memo(Home);
