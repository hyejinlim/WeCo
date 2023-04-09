import dayjs from 'dayjs';
import { fireStore } from '../../firebase/firebaseClient';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { memo, useEffect, useState } from 'react';
import { FcLinux as Penguin } from 'react-icons/fc';
import * as R from 'ramda';

type Props = {
  did: string;
};
function CommentList({ did }: Props) {
  const [data, setData] = useState<any>([]);

  /**
   * useEffect
   */
  const init = async () => {
    const docRef = collection(fireStore, 'posts', did, 'comments');
    const q = query(docRef, orderBy('timeStamp'));

    // 실시간 업데이트
    onSnapshot(q, (snapshot) => {
      const data: any = snapshot.docs.map((doc) => {
        return {
          ...doc.data(),
          timeStamp: dayjs(+(doc.data().timeStamp as string)).format(
            'YYYY-MM-DD HH:mm:ss'
          ),
        };
      });
      setData(data);
    });
  };
  useEffect(() => {
    init();
  }, []);

  if (R.isEmpty(data)) return null;
  return (
    <div className="mt-4">
      {R.map((item: any) => {
        const { comment, timeStamp, name } = item;
        return (
          <div className="pb-4">
            <div className="flex items-center">
              <div className="bg-red-300 rounded-full p-1 mr-4">
                <Penguin size="48" />
              </div>
              <div>
                <div className="font-bold">{name}</div>
                <div className="text-sm text-gray-500">{timeStamp}</div>
              </div>
            </div>
            <div className="text-lg py-4 border-b">{comment}</div>
          </div>
        );
      })(data)}
    </div>
  );
}
export default memo(CommentList);
