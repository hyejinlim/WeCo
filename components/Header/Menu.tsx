import Router from 'next/router';
import { memo, useState } from 'react';
import RegisterModal from 'components/Modal/RegisterModal';

type Props = {
  routeName: string;
  text: string;
  modal?: boolean;
};

function Menu({ routeName, text, modal = false }: Props) {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const handleClick = () => {
    if (modal) setModalVisible(true);
    else Router.push(`${routeName}`);
  };

  return (
    <>
      <button className="text-xl font-semibold" onClick={handleClick}>
        {text}
      </button>
      {!!modal && routeName === 'login' && (
        <RegisterModal
          isOpen={modalVisible}
          onClose={() => setModalVisible(!modalVisible)}
        />
      )}
    </>
  );
}

export default memo(Menu);
