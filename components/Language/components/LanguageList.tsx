import Image from 'next/image';
import { memo } from 'react';
import * as R from 'ramda';
import { LANGUAGE } from '../types';

type Props = {
  data: LANGUAGE[];
  selectedData: string[];
  onLanguage: (language: string) => void;
};
function LanguageList({ data, selectedData, onLanguage }: Props) {
  const handleLanguage = (language: string) => {
    onLanguage && onLanguage(language);
  };
  return (
    <ul className="flex flex-wrap w-full gap-3.5 mb-10">
      {R.addIndex(R.map)((language: any, index: number) => {
        const { label, value, img } = language;
        const isSelect =
          R.isEmpty(selectedData) || R.includes(value)(selectedData);
        return (
          <li
            key={index}
            onClick={handleLanguage.bind(null, value)}
            className={`flex gap-2.5 items-center border border-slate-300 rounded-full px-5 py-2 hover:ease-in hover:scale-105 hover:duration-100 cursor-pointer ${
              isSelect ? '' : 'opacity-30'
            }`}
          >
            <Image src={img} width="36" height="36" />
            <span>{label}</span>
          </li>
        );
      })(data)}
    </ul>
  );
}

export default memo(LanguageList);
