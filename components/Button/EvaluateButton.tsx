import { Fragment, memo, useState } from 'react';
import Image from 'next/image';
import EvaluateModal from 'components/Modal/EvaluateModal';

function EvaluateButton() {
  const [visible, setVisible] = useState<boolean>(false);

  const handleClick = () => {
    setVisible(true);
  };
  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <Fragment>
      <div
        className="fixed left-6 bottom-6 w-16 h-16 sm:hidden"
        onClick={handleClick}
      >
        <Image
          src="/img/eval.png"
          width="50"
          height="50"
          className="hover:cursor-pointer hover:scale-110 ease-in-out duration-200"
        />
      </div>
      {visible && <EvaluateModal onCancel={handleCancel} />}
    </Fragment>
  );
}

export default memo(EvaluateButton);
