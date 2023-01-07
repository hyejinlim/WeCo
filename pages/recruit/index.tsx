import { memo, useEffect, useState } from 'react';
import RecruitToggle from 'components/toggle/RecruitToggle';
import RecruitCategory from './RecruitCategory';
import RecruitCard from './RecruitCard';
import { Recruit } from './types';
import { RECRUIT_DATA } from './constants';
import * as R from 'ramda';

function RecruitList() {
  const [data, setData] = useState<Recruit[]>([]);

  const handleCategoryChange = (type: string) => {
    if (type === 'all') {
      setData(RECRUIT_DATA);
      return;
    }
    const newData = R.filter((val: Recruit) => val.type === type)(RECRUIT_DATA);
    setData(newData);
  };
  const handleToggleChange = (checked: boolean) => {
    const newData = R.filter((val: Recruit) => val.isClosed === !!!checked)(
      RECRUIT_DATA
    );
    setData(newData);
  };

  useEffect(() => {
    setData(RECRUIT_DATA);
  }, [RECRUIT_DATA]);

  return (
    <div className="max-w-7xl w-full mx-auto px-4 pb-20">
      <div className="flex items-center mb-8 justify-between">
        <RecruitCategory onCategoryChange={handleCategoryChange} />
        <div className="flex items-center">
          <RecruitToggle
            label="모집 중만 보기"
            onToggleChange={handleToggleChange}
          />
        </div>
      </div>
      <RecruitCard data={data} />
    </div>
  );
}

export default memo(RecruitList);
