import Image from 'next/image';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';

const PopUpStyle: Modal.Styles = {
  overlay: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  content: {
    position: 'fixed',
    left: '1.5rem',
    bottom: '1.5rem',
    top: '4rem',
    right: '4rem',
    width: '500px',
    height: '300px',
    display: 'flex',
    flexDirection: 'column',
    padding: '2rem',
    borderRadius: '20px',
  },
};

export function EvaluateModal() {
  const { register, handleSubmit, reset } = useForm({ mode: 'onChange' });
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [rating, setRating] = useState<number>(0);
  const [feedback, setFeedback] = useState<string>('');
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const handleRating = (rate: number) => {
    setRating(rate);
  };
  const onSubmitValid = (data: any) => {
    setFeedback(data.feedbackvalue);
    reset();
  };
  console.log('별점', rating);
  console.log('피드백', feedback);
  return (
    <>
      <div className="fixed left-6 bottom-6  w-16 h-16" onClick={openModal}>
        <Image src="/img/eval.png" width="50" height="50" />
      </div>
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        style={PopUpStyle}
        ariaHideApp={false}
        contentLabel="Example Modal"
      >
        <div className="flex flex-col text-center justify-between">
          <div className="font-extrabold text-3xl">
            Organization 에 만족하셨나요?
          </div>
          <div className="mt-1">
            더 좋은 서비스를 위해서 평가를 남겨주시면 감사하겠습니다!
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmitValid)}
          className="flex justify-center items-center my-1"
        >
          <input
            {...register('feedbackvalue', {
              required: '피드백을 남겨주세요',
            })}
            type="text"
            placeholder="피드백을 남겨주세요"
            className="w-80 h-10 outline-none text-base py-0 px-6 border-solid mr-2 border-slate-500 border-2 rounded-lg"
          />
          <button
            className="bg-black rounded-lg outline-none border-none cursor-pointer w-24 h-10 text-base flex items-center justify-center text-white"
            type="submit"
          >
            제출하기
          </button>
        </form>
      </Modal>
    </>
  );
}
