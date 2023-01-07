import { memo, useEffect, useState } from 'react';
import RecruitToggle from 'components/toggle/RecruitToggle';
import RecruitCategory from './RecruitCategory';
import RecruitCard from './RecruitCard';
import { Recruit } from './types';
import { RECRUIT_DATA } from './constants';

function RecruitList() {
  const [data, setData] = useState<Recruit[]>([]);
  const handleToggleChange = (checked: boolean) => {
    console.log('toogle checked', checked);
  };

  useEffect(() => {
    setData(RECRUIT_DATA);
  }, [RECRUIT_DATA]);

  return (
    <div className="max-w-7xl w-full mx-auto px-4 pb-20">
      <div className="flex items-center mb-8 justify-between">
        <RecruitCategory />
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
