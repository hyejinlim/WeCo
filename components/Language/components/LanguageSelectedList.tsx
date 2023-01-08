import Image from 'next/image';
import { memo } from 'react';
import * as R from 'ramda';

type Props = {
  data: string[];
  onLanguage: (language: string) => void;
  onReset: () => void;
};
function LanguageSelectedList({ data, onLanguage, onReset }: Props) {
  const handleLanguage = (language: string) => {
    onLanguage && onLanguage(language);
  };
  const handleReset = () => {
    onReset && onReset();
  };
  return (
    <ul className="flex flex-wrap items-center gap-4">
      {R.addIndex(R.map)((language: any, index: number) => {
        return (
          <li
            key={index}
            onClick={handleLanguage.bind(null, language)}
            className="flex gap-2 bg-gray-200 px-3 py-2 h-10 rounded-lg font-medium text-xl text-gray-800 justify-center items-center hover:cursor-pointer hover:ease-in hover:scale-105 hover:duration-100"
          >
            <span>{language}</span>
            <Image src="/img/delete.svg" width="16" height="16" />
          </li>
        );
      })(data)}
      {R.length(data) ? (
        <button className="text-xl" onClick={handleReset}>
          필터초기화
        </button>
      ) : null}
    </ul>
  );
}

export default memo(LanguageSelectedList);
