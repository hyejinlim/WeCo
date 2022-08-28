import { MainHeader } from 'components/Header';
import { EvaluateModal } from 'components/modal/EvaluateModal';
import { SkillSelect } from 'components/Skill';
import { MainSlider } from 'components/Slider';
import type { NextPage } from 'next';
import RecruitMain from './recruit';

const Home: NextPage = () => {
  return (
    <>
      <MainHeader />
      <MainSlider />
      <SkillSelect />
      <RecruitMain />
      <EvaluateModal />
    </>
  );
};

export default Home;
