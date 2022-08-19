import React from 'react';

interface Props {
  onClick?: () => void;
  buttonName: string;
  backgroundColor?: string;
  textColor?: string;
  type?: 'submit' | 'button';
}

const PostButton = ({
  buttonName,
  onClick,
  backgroundColor,
  textColor,
  type,
}: Props) => {
  return (
    <button
      className={`cursor-pointer outline-none border-none rounded p-4 text-base ${backgroundColor} ${textColor} mr-[1rem]`}
      type={type}
      onClick={onClick}
    >
      {buttonName}
    </button>
  );
};

export default PostButton;
