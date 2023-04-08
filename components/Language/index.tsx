import { memo, useEffect, useState } from 'react';
import * as R from 'ramda';
import LanguageCategory from './components/LanguageCategory';
import LanguageList from './components/LanguageList';
import LanguageSelectedList from './components/LanguageSelectedList';
import { LANGUAGE_LIST } from './constants';
import { LANGUAGE } from './types';

function LanguageSelect() {
  const [data, setData] = useState<LANGUAGE[]>([]);
  const [selectedData, setSelectedData] = useState<string[]>([]);

  /**
   * handlers
   */
  // 선택한 카테고리에 따라 데이터 필터링
  const handleLanguageCategory = (category: string) => {
    if (category === 'all') {
      setData(LANGUAGE_LIST);
      return;
    }
    const newData = R.filter((val: LANGUAGE) =>
      R.includes(category, val.category)
    )(LANGUAGE_LIST);
    setData(newData);
  };

  // 언어 선택
  const handleLanguage = (language: string) => {
    const isExist = R.includes(language)(selectedData);
    if (!isExist) {
      setSelectedData((prev: any) => [...prev, language]);
    } else {
      setSelectedData((prev: any) => [
        ...R.filter((item: string) => item !== language)(prev),
      ]);
    }
  };

  // 선택한 언어 초기화
  const handleReset = () => setSelectedData([]);

  /**
   * useEffect
   */
  useEffect(() => {
    // 기본 카테고리는 popular
    const defaultData = R.filter((val: LANGUAGE) =>
      R.includes('popular', val.category)
    )(LANGUAGE_LIST);
    setData(defaultData);
  }, [LANGUAGE_LIST]);

  return (
    <section className="sm:hidden max-w-7xl w-full px-4 mt-20 mb-20 mx-auto">
      <LanguageCategory onLanguageCategory={handleLanguageCategory} />
      <LanguageList
        data={data}
        selectedData={selectedData}
        onLanguage={handleLanguage}
      />
      <LanguageSelectedList
        data={selectedData}
        onLanguage={handleLanguage}
        onReset={handleReset}
      />
    </section>
  );
}

export default memo(LanguageSelect);
