import Image from 'next/image';
import { memo } from 'react';
import Rating from './components/Rating';

function EvaluateModal({ onCancel }: any) {
  const handleCancel = () => {
    onCancel && onCancel();
  };
  return (
    <div className="flex flex-col bg-white fixed left-6 bottom-6 w-[32rem] rounded-2xl border border-gray-600 p-4">
      <div className="flex justify-end">
        <Image
          src="/img/x.png"
          width="15"
          height="15"
          className="cursor-pointer"
          onClick={handleCancel}
        />
      </div>
      <div className="flex flex-col text-center">
        <div className="font-bold text-3xl">WECO 에 만족하셨나요?</div>
        <div className="mt-1">더 좋은 서비스를 위해, 평가를 남겨주세요!</div>
      </div>
      <Rating onCancel={onCancel} />
    </div>
  );
}

export default memo(EvaluateModal);
