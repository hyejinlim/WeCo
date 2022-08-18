import Image from 'next/image';
import { Rating } from './Rating';

export function EvaluateForm({ setModalOpen }: any) {
  return (
    <>
      <div className="flex flex-col bg-white fixed left-6 bottom-6 w-[32rem] rounded-3xl border  border-gray-600 p-4">
        <header className="flex flex-col text-black bg-white mb-2">
          <div className="flex justify-end ">
            <Image
              src="/img/x.png"
              width="15"
              height="15"
              className="cursor-pointer"
              onClick={() => setModalOpen(false)}
            />
          </div>
          <div className="flex flex-col text-center justify-between">
            <div className="font-bold text-3xl">WECO 에 만족하셨나요?</div>
            <div className="mt-1">
              더 좋은 서비스를 위해, 평가를 남겨주세요!
            </div>
          </div>
        </header>
        <Rating setModalOpen={setModalOpen} />
      </div>
    </>
  );
}
