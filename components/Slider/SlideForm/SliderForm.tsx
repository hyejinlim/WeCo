import Image from 'next/image';
import { memo } from 'react';

type ItemProps = {
  bgColor: string;
  btnText?: string;
  btnColor?: string;
  title: string;
  subTitle?: string;
  subText: string;
  img: string;
};

type Props = {
  item: ItemProps;
};

function SliderForm({ item }: Props) {
  const { bgColor, btnColor, btnText, title, subTitle, subText, img } = item;
  return (
    <div className={bgColor}>
      <div className={`flex max-w-7xl h-80 py-0 px-6 my-0 mx-auto ${bgColor}`}>
        <div className="flex-1 my-auto mx-0">
          {!!btnText && (
            <button
              className={`flex font-bold py-1.5 px-8 ${btnColor} rounded-3xl mb-4`}
            >
              {btnText}
            </button>
          )}
          <h2 className="md:text-3xl sm:text-2xl text-4xl p-0 mx-0 my-2.5">
            <span className="font-bold ">{title}</span> {subTitle}
          </h2>
          <span className="md:text-lg sm:text-base block text-xl">
            {subText}
          </span>
        </div>
        <div className="sm:hidden flex-1 flex justify-center items-center">
          <Image src={img} width="260" height="260" />
        </div>
      </div>
    </div>
  );
}

export default memo(SliderForm);
