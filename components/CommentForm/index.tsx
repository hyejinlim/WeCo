import dayjs from 'dayjs';
import { fireStore } from '../../firebase/firebaseClient';
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import { memo, useState } from 'react';
import { useAuth } from 'context/authProvider';

type Props = {
  total: number;
  did: string;
};
function CommentForm({ total, did }: Props) {
  const user = useAuth();
  const [comment, setComment] = useState<string>('');

  /**
   * handlers
   */
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!comment) {
      alert('댓글을 작성해주세요.');
      return;
    }
    const timeStamp = dayjs().valueOf().toString();
    const data = {
      comment,
      uid: user?.uid,
      name: user?.displayName,
      timeStamp,
    };
    const docRef = collection(fireStore, 'posts', did, 'comments');
    await addDoc(docRef, data).then(() => {
      setComment(''); // reset

      // 업데이트
      const docRef = doc(fireStore, 'posts', did);
      updateDoc(docRef, {
        comments: total + 1,
      });
    });
  };
  const handleChange = (e: any) => {
    const { value } = e.target;
    setComment(value);
  };

  return (
    <div className="mt-12">
      <div className="font-bold text-xl pb-6">{total}개의 댓글이 있습니다.</div>
      <form onSubmit={handleSubmit}>
        <textarea
          name="comment"
          placeholder="댓글을 입력하세요."
          className="w-full border-2 rounded-2xl p-4 mb-2"
          onChange={handleChange}
          value={comment}
        />
        <div className="w-full flex justify-end">
          <button className="bg-gray-900 text-white rounded-full py-2 px-8">
            댓글 등록
          </button>
        </div>
      </form>
    </div>
  );
}

export default memo(CommentForm);
