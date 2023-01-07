import { memo } from 'react';
import * as R from 'ramda';
import { CATEGORY_LIST } from './constants';

function RecruitCategory() {
  return (
    <section className="flex">
      {R.addIndex(R.map)((category: any, index: number) => {
        const { label, img } = category;
        return (
          <div
            key={index}
            className="flex items-center mr-6 font-bold text-2xl cursor-pointer text-neutral-400"
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
