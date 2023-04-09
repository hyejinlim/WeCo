import { memo, useEffect, useState } from 'react';
import Header from 'components/Header';
import MainSlider from 'components/Slider';
import LanguageSelect from 'components/Language';
import ScrollTopButton from 'components/Button/ScrollTopButton';
import EvaluateButton from 'components/Button/EvaluateButton';
import PostList from '../components/PostList';
import { collection, getDocs } from 'firebase/firestore';
import { fireStore } from '../firebase/firebaseClient';
import { useAuth } from 'context/authProvider';
import dayjs from 'dayjs';
import { Post } from 'components/PostList/types';

function Home() {
  const user = useAuth();
  const [postData, setPostData] = useState<Post[]>([]);
  const [selectedLanguage, setSelectedlanguage] = useState<string[]>([]);

  /**
   * handlers
   */
  const handleSelectedLanguage = (language: string[]) => {
    setSelectedlanguage(language);
  };

  /**
   * useEffect
   */
  const init = async () => {
    if (user?.uid) {
      const docRef = collection(fireStore, 'posts');
      const querySnapshot = await getDocs(docRef);
      const data: any = querySnapshot.docs.map((doc) => {
        const diffDays = Math.floor(
          dayjs(doc.data().endDate).diff(dayjs(), 'day')
        );
        return {
          id: doc.id,
          positions: doc.data().positions,
          progressType: doc.data().progressType,
          contactType: doc.data().contactType,
          contactDetail: doc.data().contactDetail,
          recruitCnt: doc.data().recruitCnt,
          endDate: doc.data().endDate,
          title: doc.data().title,
          skills: doc.data().skills,
          content: doc.data().content,
          period: doc.data().period,
          recruitType: doc.data().recruitType,
          isClosed: diffDays < 0,
          name: user?.displayName,
        };
      });
      setPostData(data);
    }
  };
  useEffect(() => {
    init();
  }, [user]);

  return (
    <>
      <Header />
      <MainSlider />
      <LanguageSelect onSelectedLanguage={handleSelectedLanguage} />
      <PostList postData={postData} selectedLanguage={selectedLanguage} />
      <EvaluateButton />
      <ScrollTopButton />
    </>
  );
}

export default memo(Home);
