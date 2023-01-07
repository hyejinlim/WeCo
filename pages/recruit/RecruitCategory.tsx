import { memo } from 'react';
import * as R from 'ramda';
import { CATEGORY_LIST } from './constants';
import { Category } from './types';

type Props = {
  onCategoryChange: (type: string) => void;
};

function RecruitCategory({ onCategoryChange }: Props) {
  const handleCategoryChange = (category: Category) => {
    const { value } = category;
    onCategoryChange && onCategoryChange(value);
  };
  return (
    <section className="flex">
      {R.addIndex(R.map)((category: any, index: number) => {
        const { label, img } = category;
        return (
          <div
            key={index}
            className="flex items-center mr-6 font-bold text-2xl cursor-pointer text-neutral-400"
            onClick={handleCategoryChange.bind(null, category)}
          >
            <img className="w-[28px] h-[28px]" src={img} alt={label} />
            <span className="ml-2">{label}</span>
          </div>
        );
      })(CATEGORY_LIST)}
    </section>
  );
}

export default memo(RecruitCategory);
