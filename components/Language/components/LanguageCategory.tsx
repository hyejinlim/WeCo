import { memo, useState } from 'react';
import * as R from 'ramda';
import { LANGUAGE_CATEGORY_LIST } from '../constants';

type Props = {
  onLanguageCategory: (category: string) => void;
};
function LanguageCategory({ onLanguageCategory }: Props) {
  const [category, setCategory] = useState<string>('popular');
  const handleLanguageCategory = (category: string) => {
    setCategory(category);
    onLanguageCategory && onLanguageCategory(category);
  };
  return (
    <ul className="flex gap-14 border-b-2 border-slate-200 pb-4 pl-4 mb-8">
      {R.addIndex(R.map)((language: any, index: number) => {
        const { label, value } = language;
        return (
          <li
            key={index}
            onClick={handleLanguageCategory.bind(null, value)}
            className={`flex font-bold text-2xl cursor-pointer relative ${
              category === value
                ? "text-black after:content-[''] after:absolute after:h-1.5 after:w-[calc(100%+26px)] after:-left-3.5 after:-bottom-4 after:bg-yellow-300"
                : 'text-zinc-500'
            }`}
          >
            {label}
          </li>
        );
      })(LANGUAGE_CATEGORY_LIST)}
    </ul>
  );
}

export default memo(LanguageCategory);
