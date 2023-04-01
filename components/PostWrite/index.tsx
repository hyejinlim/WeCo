import dynamic from 'next/dynamic';
import { useState, useId, memo } from 'react';
import { postInfoData } from '../../data/postInfo.js';
import dayjs from 'dayjs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as R from 'ramda';
import SelectForm from '../select/SelectForm';
import DatePickerForm from '../picker/DatePickerForm';
import PostHeader from 'components/Header/PostHeader';
import PostButton from 'components/Button/PostButton';
import TextField from 'components/TextField/TextField';

const Editor = dynamic(() => import('../editor/Editor'), {
  ssr: false,
});
const InitialData = {
  title: '',
  content: '',
  recruitType: '',
  recruitCnt: '',
  progressType: '',
  duration: '',
  contactType: '카카오톡 오픈채팅',
  contact: '',
  startDate: dayjs().format('YYYY-MM-DD'),
  skills: [],
};

type RequestDataProps = {
  [key: string]: any;
} & typeof InitialData;

function PostWrite() {
  const [postData, setPostData] = useState(postInfoData);
  const [requestData, setRequestData] = useState<RequestDataProps>(InitialData);

  /**
   * handler
   */
  const handleSelected = (data: any) => {
    const [value, type] = searchSkillValue(data);
    setRequestData({ ...requestData, [type]: value });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRequestData({ ...requestData, [name]: value });
  };
  const handleContentChange = (value: string) => {
    setRequestData({ ...requestData, content: value });
  };
  const handlePeriod = (value: any) => {
    setRequestData({
      ...requestData,
      startDate: dayjs(value).format('YYYY-MM-DD'),
    });
  };
  const handleClick = () => {
    const errorKey = searchKey();
    if (errorKey) {
      showErrorToast(errorKey);
    } else {
      console.log('성공');
      // api
    }
  };

  const searchSkillValue = (data: any) => {
    let newValue;

    if (R.length(data) > 0) {
      const skillValues = data.map(({ value }: any) => value);
      newValue = skillValues;
    } else {
      newValue = [];
    }

    return [newValue, 'skills'];
  };
  const searchKey = (): string => {
    let resultKey = '';
    const keyArray: Array<string> = Object.keys(requestData);

    keyArray.some((key) => {
      if (key === 'startDate') {
        const isNan = R.isNil(requestData[key]);
        if (isNan) {
          resultKey = 'errorStartDate';
          return;
        }
      }
      if (R.length(requestData[key]) < 1) {
        resultKey = key;
        return;
      }
    });
    return resultKey;
  };
  const showErrorToast = (key: string) => {
    let message = '';
    switch (key) {
      case 'title':
        message = '제목을 입력해주세요!';
        break;
      case 'content':
        message = '내용을 입력해주세요!';
        break;
      case 'recruitType':
        message = '모집 구분을 선택해주세요!';
        break;
      case 'recruitCnt':
        message = '모집 인원을 선택해주세요!';
        break;
      case 'progressType':
        message = '진행 방식을 선택해주세요!';
        break;
      case 'duration':
        message = '진행 기간을 선택해주세요!';
        break;
      case 'skills':
        message = '기술 스택을 선택해주세요!';
        break;
      case 'startDate':
        message = '시작일을 입력해주세요!';
        break;
      case 'errorStartDate':
        message = '시작일을 알맞은 형태에 맞게 작성해주세요!';
        break;
      case 'contact':
        message = '연락 주소를 입력해주세요!';
        break;
      default:
    }
    toast.error(message);
  };

  return (
    <>
      <div className="custom_md:w-full flex flex-col w-[1024px] w-max-[1040px] mx-auto my-0 gap-12 py-14 px-4">
        <section>
          <PostHeader num={1} title="프로젝트 기본 정보를 입력해 주세요." />
          {postData.map((group, index: number) => {
            return (
              <ul
                key={index}
                className={`flex gap-4 sm:flex-col ${
                  index === 4 ? 'sm:-mt-6' : 'mt-10 sm:mt-5'
                }`}
              >
                {group.map((item) => {
                  const { id, uiType, title, options, isMulti, place_holder } =
                    item;
                  return uiType === 'default' ? (
                    <li className="grow shrink basis-[0%]" key={id}>
                      <label className="inline-block font-medium mb-1">
                        {title}
                      </label>
                      <SelectForm
                        useId={() => useId()}
                        options={options}
                        isMulti={isMulti}
                        placeHolder={place_holder}
                        onChange={handleSelected}
                      />
                    </li>
                  ) : uiType === 'calendar' ? (
                    <li className="grow shrink basis-[0%]" key={id}>
                      <div className="flex flex-col">
                        <div className="inline-block font-medium mb-1">
                          {title}
                        </div>
                        <DatePickerForm
                          onChange={handlePeriod}
                          date={requestData.startDate}
                        />
                      </div>
                    </li>
                  ) : uiType === 'custom' ? (
                    <li className="grow shrink basis-[0%]" key={id}>
                      <div className="mt-3">
                        <TextField
                          name="contact"
                          value={requestData.contact}
                          placeholder="오픈 카톡방 링크"
                          onChange={handleChange}
                        />
                      </div>
                    </li>
                  ) : (
                    <li className="grow shrink basis-[0%]" key={id}>
                      <div>
                        <input
                          className="w-full h-14 min-h-14 leading-10 pl-4 pr-12 py-3 border-2 border-solid border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                          type="hidden"
                        />
                      </div>
                    </li>
                  );
                })}
              </ul>
            );
          })}
        </section>
        <section>
          <PostHeader num={2} title="프로젝트에 대해 소개해주세요." />
          <section>
            <label className="inline-block mb-1 font-bold" htmlFor="input">
              제목
            </label>
            <TextField
              name="title"
              placeholder="글 제목을 입력해주세요!"
              value={requestData.title}
              onChange={handleChange}
            />
            <div className="mt-4">
              <Editor
                value={requestData.content}
                onChange={handleContentChange}
              />
            </div>
          </section>
        </section>
        <section className="flex justify-end items-center mt-4">
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
            onClick={handleClick}
          />
        </section>
      </div>
      <ToastContainer theme="colored" position="top-right" autoClose={2000} />
    </>
  );
}

export default memo(PostWrite);
