import { memo } from 'react';
import Header from 'components/Header';
import MainSlider from 'components/Slider';
import LanguageSelect from 'components/Language';
import ScrollTopButton from 'components/Button/ScrollTopButton';
import EvaluateButton from 'components/Button/EvaluateButton';
import PostList from '../components/PostList';

function Home() {
  return (
    <>
      <Header />
      <MainSlider />
      <LanguageSelect />
      <PostList />
      <EvaluateButton />
      <ScrollTopButton />
    </>
  );
}

export default memo(Home);
