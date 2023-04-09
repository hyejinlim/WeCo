import { memo, useEffect, useState } from 'react';
import MyPageForm from 'components/Form/MyPageForm';
import Header from 'components/Header';
import { useAuth } from 'context/authProvider';
import { fireStore } from '../../firebase/firebaseClient';
import { collection, getDocs, query, where } from 'firebase/firestore';
import dayjs from 'dayjs';
import { Post } from 'components/PostList/types';

function MyPage() {
  const user = useAuth();
  const [postData, setPostData] = useState<Post[]>([]);

  /**
   * useEffect
   */
  const init = async () => {
    if (user?.uid) {
      const docRef = collection(fireStore, 'posts');
      const q = query(docRef, where('uid', '==', user?.uid));
      const querySnapshot = await getDocs(q);
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
      <MyPageForm postData={postData} />
    </>
  );
}

export default memo(MyPage);
