import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import React, { useEffect, useState, useRef, useId } from 'react';
import { postInfoData } from '../../data/postInfo.js';

import dayjs from 'dayjs';
import { addZero } from '../../utils/common';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import SelectForm from '../../components/select/SelectForm';
import DatePickerForm from '../../components/picker/DatePickerForm';
import PostHeader from 'components/Header/PostHeader';
import PostButton from 'components/Button/PostButton';

const Editor = dynamic(() => import('../../components/editor/Editor'), {
  ssr: false,
});

interface Option {
  value: string;
  label: string;
  type: string;
  disabled?: boolean;
}
interface PostInfo {
  id: number;
  title: string | undefined;
  place_holder: string;
  isMulti: boolean;
  options: Array<Option[]>;
}

const PostInfo: NextPage = () => {
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
    start_date: dayjs().format('YYYY-MM-DD'),
    skills: [],
  });

  useEffect(() => {
    // TODO: style접근 방법 찾기 현재 react18에선 select라이브러리 호환 안맞음
    selectComponentStyle();
    window.addEventListener('resize', selectComponentStyle);
    return () => {
      window.removeEventListener('resize', selectComponentStyle);
    };
  }, []);

  // TODO : length로 넘겨주는 방식 생각 그럼 굳이 함수 쓸 필요 없음
  useEffect(() => {
    let updatePostData;
    if (requestData.skills.length > 4) {
      updatePostData = skillIsDisabledUpdate(true);
    } else {
      updatePostData = skillIsDisabledUpdate(false);
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
      case 'CM':
        setRequestData({ ...requestData, contact_type: value });
        break;
      default:
    }
  };

  const titleOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRequestData({ ...requestData, title: e.target.value });
  };

  const contentOnChangeHandler = (value: string) => {
    setRequestData({ ...requestData, content: value });
  };

  const dateValueOnChangeHandler = (value: any) => {
    const year = value.year();
    const month = addZero(value.month());
    const date = addZero(value.date());
    setRequestData({ ...requestData, start_date: `${year}-${month}-${date}` });
  };

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
  };

  const skillIsDisabledUpdate = (isDisabled: boolean) => {
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

  // TODO: 리팩터링
  const onSubmitHandler = () => {
    if (requestData.title.length < 1) {
      toast.error('제목을 입력해주세요!');
      return;
    }
    if (requestData.content.length < 1) {
      toast.error('내용을 입력해주세요!');
      return;
    }
    if (requestData.recruit_type.length < 1) {
      toast.error('모집 구분을 선택해주세요!');
      return;
    }
    if (requestData.recruit_cnt.length < 1) {
      toast.error('모집 인원을 선택해주세요!');
      return;
    }
    if (requestData.progress_type.length < 1) {
      toast.error('진행 방식을 선택해주세요!');
      return;
    }
    if (requestData.duration.length < 1) {
      toast.error('진행 기간을 선택해주세요!');
      return;
    }
    if (requestData.skills.length < 1) {
      toast.error('기술 스택을 선택해주세요!');
      return;
    }
    if (requestData.start_date.length < 1) {
      toast.error('시작일을 입력해주세요!');
      return;
    }
    if (requestData.contact.length < 1) {
      toast.error('연락 주소를 입력해주세요!', {
        className: 'toast-message',
      });
      return;
    }
  };

  console.log('requestData', requestData);

  // TODO: 렌더방식 변경
  return (
    <>
      <div className="custom_md:w-[100%] flex flex-col w-[1024px] w-max-[1040px] mx-auto my-0 gap-[3.0rem] py-[60px] px-[16px]">
        <section className="">
          <PostHeader num={'1'} title={'프로젝트 기본 정보를 입력해 주세요'} />
          {postData.map((items, idx) => (
            <ul key={idx} className="mt-10 flex gap-4 sm:flex-col sm:mt-5">
              {items.map((item) =>
                item.title.length > 0 ? (
                  item.options.length > 0 ? (
                    <>
                      <li className="grow shrink basis-[0%]" key={item.id}>
                        <label className="inline-block font-medium mb-[5px]">
                          {item.title}
                        </label>
                        <SelectForm
                          useId={() => useId()}
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
                            onChange={(newValue) =>
                              dateValueOnChangeHandler(newValue)
                            }
                            date={requestData.start_date}
                          />
                        </div>
                      </div>
                    </li>
                  )
                ) : (
                  <li className="grow shrink basis-[0%]" key={item.id}>
                    <div className="mt-[12px]">
                      <input
                        className="w-[100%] h-[56px] min-h-[56px] leading-10 pl-[16px] pr-[52px] py-[10px] border-2 border-solid border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        type="hidden"
                      />
                    </div>
                  </li>
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
                  onChange={(e) =>
                    setRequestData({ ...requestData, contact: e.target.value })
                  }
                  placeholder="오픈 카톡방 링크"
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
        <section>
          <PostHeader num={'2'} title={'프로젝트에 대해 소개해주세요.'} />
          <section>
            <label className="inline-block mb-[5px] font-bold" htmlFor="input">
              제목
            </label>
            <input
              className="w-[100%] h-[56px] min-h-[56px] leading-10 pl-[16px] pr-[52px] py-[10px] border-2 border-solid border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              id="input"
              placeholder="글 제목을 입력해주세요!"
              value={requestData.title}
              onChange={(e) => titleOnChangeHandler(e)}
            />
            <div className="mt-[16px]">
              <Editor
                value={requestData.content}
                onChange={(e: string) => contentOnChangeHandler(e)}
              />
            </div>
          </section>
        </section>
        <section className="flex justify-end items-center mt-[1rem]">
          <PostButton
            type="submit"
            buttonName="취소"
            backgroundColor="bg-slate-200"
          />
          <PostButton
            type="button"
            buttonName="글 등록"
            backgroundColor="bg-black"
            textColor="text-white"
            onClick={() => onSubmitHandler()}
          />
        </section>
      </div>
      <ToastContainer theme="colored" position="top-right" autoClose={2000} />
    </>
  );
};

export default PostInfo;
