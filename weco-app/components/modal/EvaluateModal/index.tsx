import Image from 'next/image';
import { useState } from 'react';
import StarRatings from 'react-star-ratings';

export function EvaluateModal() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [feedback, setFeedback] = useState<string>('');
  const [star, setStar] = useState<number>(0);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFeedback(value);
  };

  const onSubmit = () => {
    console.log('star', star, 'opinion', feedback);
    setModalOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const changeRating = (num: number) => {
    setStar(num);
  };
  return (
    <>
      {modalOpen ? (
        <>
          <div className="flex flex-col bg-white fixed left-6 bottom-6 w-[32rem] rounded-3xl border  border-gray-600 p-4">
            <header className="flex flex-col text-black bg-white mb-2">
              <div className="flex justify-end ">
                <Image
                  src="/img/x.png"
                  width="15"
                  height="15"
                  className="cursor-pointer"
                  onClick={closeModal}
                />
              </div>
              <div className="flex flex-col text-center justify-between">
                <div className="font-bold text-3xl">WECO 에 만족하셨나요?</div>
                <div className="mt-1">
                  더 좋은 서비스를 위해, 평가를 남겨주세요!
                </div>
              </div>
            </header>
            <form
              onSubmit={onSubmit}
              className="flex flex-col justify-center items-center my-1"
            >
              <StarRatings rating={star} changeRating={changeRating} />
              <input
                onChange={onChange}
                type="text"
                placeholder="피드백을 남겨주세요"
                className="w-80 h-10 outline-none text-base py-0 px-6 border-solid mr-2 border-slate-500 border-2 rounded-lg my-4"
              />
              <button
                className="bg-black rounded-lg outline-none border-none cursor-pointer w-24 h-10 text-base flex items-center justify-center text-white"
                type="submit"
              >
                제출하기
              </button>
            </form>
          </div>
        </>
      ) : (
        <div className="fixed left-6 bottom-6  w-16 h-16" onClick={openModal}>
          <Image
            src="/img/eval.png"
            width="50"
            height="50"
            className="hover:cursor-pointer hover:scale-110 ease-in-out duration-200"
          />
        </div>
      )}
      <div className="fixed right-4 bottom-4 w-16 h-16 ">
        <Image
          className="hover:cursor-pointer hover:scale-110 ease-in-out duration-200"
          src="/img/top.jpg"
          width="55"
          height="50"
          onClick={scrollToTop}
        />
      </div>
    </>
  );
}
