import { NextPage } from 'next';
import React, { useEffect, useState, useRef } from 'react';
import { postInfoData } from '../../data/postInfo.js';
import SelectForm from '../../components/select/SelectForm';
import { makeStyles } from '@mui/styles';
import DatePickerForm from '../../components/picker/DatePickerForm';
import dayjs from 'dayjs';
import { addZero } from '../../utils/common';
// import { makeStyles } from '@mui/styles';
interface Option {
  value: string;
  label: string;
  type: string;
  disabled?: boolean;
}
interface PostInfo {
  id: number;
  title: string;
  place_holder: string;
  isMulti: boolean;
  options: Array<Option[]>;
}
// const useStyles = makeStyles({
//   root: {
//     '& .MuiFormControl-root': {
//       width: '100%',
//     },
//   },
// });

const PostInfo: NextPage = () => {
  const [value, setValue] = useState(dayjs().format('YYYY-MM-DD'));
  const [postData, setPostData] = useState(postInfoData);
  const [requestData, setRequestData] = useState({
    title: '',
    content: '',
    recruit_type: '',
    recruit_cnt: '',
    progress_type: '',
    duration: '',
    contact_type: '카카오톡 오픈채팅',
    contact: '',
    start_date: '',
    skills: [],
  });

  useEffect(() => {
    // TODO: style접근 방법 찾기
    selectComponentStyle();
    window.addEventListener('resize', selectComponentStyle );
    return () => {
      window.removeEventListener('resize', selectComponentStyle );
    }
  }, [])

  const selectComponentStyle = () => {
    setTimeout(() => {
      const styleSet = (
        document.getElementsByClassName(
          'MuiFormControl-root'
        ) as HTMLCollectionOf<HTMLElement>
      )[0];
      if (styleSet) {
        styleSet.style.width = '100%';
      }
    }, 100);
  }

  useEffect(() => {
    let updatePostData;
    if (requestData.skills.length > 4) {
      updatePostData = skillDisabledUpdate(true);
    } else {
      updatePostData = skillDisabledUpdate(false);
    }
    setPostData(updatePostData);
  }, [requestData.skills]);

  const selectHandler = (data: any) => {
    const [value, type] = searchSkillValue(data);

    // TODO: 충분히 한 줄로 줄일 수 있음.
    switch (type) {
      // 모집 구분
      case 'RD':
        setRequestData({ ...requestData, recruit_type: value });
        break;
      // 모집 인원
      case 'RP':
        setRequestData({ ...requestData, recruit_cnt: value });
        break;
      // 진행 방식
      case 'PM':
        setRequestData({ ...requestData, progress_type: value });
        break;
      // 진행 기간
      case 'PP':
        setRequestData({ ...requestData, duration: value });
        break;
      // 기술 스택
      case 'TS':
        setRequestData({ ...requestData, skills: value });
        break;
      // // 시작 예정일
      // case 'SS':
      //   setRequestData({ ...requestData, start_date: value });
      //   break;
      // 연락 방법
      case 'CM':
        setRequestData({ ...requestData, contact_type: value });
        break;
      default:
    }
  };

  const skillDisabledUpdate = (isDisabled: boolean) => {
    const copyPostData = [...postData];
    // TODO: 배열에 고정으로 박혀있기 때문에 굳이 forEach 여러번 돌릴 필요 없음
    copyPostData.forEach((items) => {
      items.forEach((item) => {
        item.options.forEach((list: Option) => {
          if (list.type === 'TS') {
            list.disabled = isDisabled;
          }
        });
      });
    });
    return copyPostData;
  };

  // TODO: 함수명변경
  const searchSkillValue = (data: any) => {
    let value;
    let type;

    if (Array.isArray(data)) {
      if (data.length > 0) {
        const skillValue = data.map((skill) => {
          return skill.value;
        });
        value = skillValue;
        type = data[0].type;
      } else {
        value = [];
        type = 'TS';
      }
    } else {
      value = data.value;
      type = data.type;
    }
    return [value, type];
  };

  const dateValueOnChange = (value: any) => {
    const year = value.year();
    const month = addZero(value.month());
    const date = addZero(value.date());
    setValue(`${year}-${month}-${date}`);
    setRequestData({ ...requestData, start_date: `${year}-${month}-${date}` });
  };

  // const classes = useStyles();
  return (
    <>
      <div className="custom_md:w-[100%] flex flex-col w-[1024px] w-max-[1040px] mx-auto my-0 gap-[3.0rem] py-[60px] px-[16px]">
        <section className="">
          <div className="flex items-center p-4 mb-9 border-b-[3px] border-solid border-gray-300 ">
            <span className="mr-2 w-[28px] h-[28px] flex justify-center items-center rounded-full bg-yellow-200 font-bold text-white text-base">
              1
            </span>
            <h2 className="font-bold text-2xl tracking-tighter m-0">
              프로젝트 기본 정보를 입력해 주세요.
            </h2>
          </div>

          {postData.map((items, idx) => (
            <ul className="mt-10 flex gap-4 sm:flex-col sm:mt-5">
              {items.map((item) =>
                item.title.length > 0 ? (
                  item.options.length > 0 ? (
                    <>
                      <li className="grow shrink basis-[0%]" key={item.id}>
                        <label className="inline-block font-medium mb-[5px]">
                          {item.title}
                        </label>
                        <SelectForm
                          options={item.options}
                          isMulti={item.isMulti}
                          placeHolder={item.place_holder}
                          onChange={(e) => selectHandler(e)}
                        />
                      </li>
                    </>
                  ) : (
                    <li className="grow shrink basis-[0%]" key={item.id}>
                      <div className="flex">
                        <div className="gap-3 w-[100%]">
                          <div className="inline-block font-medium mb-[5px]">
                            {item.title}
                          </div>
                          <DatePickerForm
                            onChange={(newValue) => dateValueOnChange(newValue)}
                            date={value}
                          />
                        </div>
                      </div>
                    </li>
                  )
                ) : (
                  <>
                    <li className="grow shrink basis-[0%]" key={item.id}>
                      <div className="mt-[12px]">
                        <input
                          className="w-[100%] h-[56px] min-h-[56px] leading-10 pl-[16px] pr-[52px] py-[10px] border-2 border-solid border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                          type="hidden"
                        />
                      </div>
                    </li>
                  </>
                )
              )}
            </ul>
          ))}
          <ul className="mt-1 flex gap-4 sm:flex-col ">
            <li className="grow shrink basis-[0%]">
              <div className="mt-[12px]">
                <input
                  className="w-[100%] h-[56px] min-h-[56px] leading-10 pl-[16px] pr-[52px] py-[10px] border-2 border-solid border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  type="text"
                  value={requestData.contact}
                  onChange={(e)=>setRequestData({...requestData, contact: e.target.value})}
                  placeholder='오픈 카톡방 링크'
                />
              </div>
            </li>
            <li className="grow shrink basis-[0%]">
              <div className="mt-[12px]">
                <input
                  className="w-[100%] h-[56px] min-h-[56px] leading-10 pl-[16px] pr-[52px] py-[10px] border-2 border-solid border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  type="hidden"
                />
              </div>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default PostInfo;
