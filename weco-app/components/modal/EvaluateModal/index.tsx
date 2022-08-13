import Image from 'next/image';
import { useState } from 'react';
import { ScrollTopButton } from '../../Button/ScrollTopButton';
import { EvaluateForm } from './EvaluateForm/EvaluateForm';

export function EvaluateModal() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <>
      {modalOpen ? (
        <EvaluateForm setModalOpen={setModalOpen} />
      ) : (
        <div
          className="fixed left-6 bottom-6  w-16 h-16"
          onClick={() => setModalOpen(true)}
        >
          <Image
            src="/img/eval.png"
            width="50"
            height="50"
            className="hover:cursor-pointer hover:scale-110 ease-in-out duration-200"
          />
        </div>
      )}
      <ScrollTopButton />
    </>
  );
}
