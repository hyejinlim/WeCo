import { memo, MouseEvent } from 'react';

type Props = {
  src?: string;
  backgroundColor?: string;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
};
const SocialButton = ({
  src,
  backgroundColor = 'bg-white',
  onClick,
}: Props) => {
  const handleClick = (e: MouseEvent<HTMLElement>) => {
    onClick && onClick(e);
  };
  return (
    <button
      onClick={handleClick}
      className={`flex justify-center items-center ${backgroundColor} rounded-xl drop-shadow-xl w-28 h-28`}
    >
      <embed src={src} className="w-12 h-12" />
    </button>
  );
};
export default memo(SocialButton);
