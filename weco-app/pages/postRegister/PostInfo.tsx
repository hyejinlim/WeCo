import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { postInfoData } from '../../data/postInfo.js';
import SelectForm from '../../components/select/SelectForm';
import { forEach } from 'ramda';

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
    start_date: '',
    skills: [],
  });

  useEffect(() => {
    console.log(' requestData   ===> ', requestData);
  }, [requestData]);

  useEffect(() => {
    if (requestData.skills.length < 1) {
      const skills = [...postData];
      console.log('skills ===> ', skills);
      // skills.forEach((items) => {
      //   items.options.forEach((item: any) => {
      //     if (item.type === 'TS') {
      //       item.disabled = true;
      //     }
      //   });
      // });
      // setPostData(skills);
    }
  }, [requestData.skills]);

  const selectHandler = (data: any) => {
    let value;
    let type;

    // TODO : 스킬타입 같은 경우 배열로 들어 오기 때문에 분기 처리 해야함
    // 함수로 빼야함
    if (Array.isArray(data)) {
      if (data.length > 0) {
        const skillValue = data.map((skill: any): string => {
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
      // 시작 예정일
      case 'SS':
        setRequestData({ ...requestData, start_date: value });
        break;
      // 연락 방법
      case 'CM':
        setRequestData({ ...requestData, contact_type: value });
        break;
      default:
    }
  };

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
            <ul className="mt-10 flex gap-4 sm:flex-col sm:mt-5" key={idx}>
              {items.map((item) =>
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
                    <label className="inline-block font-medium mb-[5px]">
                      {item.title}
                    </label>
                  </li>
                )
              )}
            </ul>
          ))}

          {/* {postInfoData.map((items, idx) =>
          items.options.length > 0 ? (
            <ul className=" mt-10 flex gap-4 ">
              <li key={items.id} className="">
                <label>{items.title}</label>
                <SelectForm
                  options={items.options}
                  isMulti={items.isMulti}
                  placeHolder={items.place_holder}
                  onChange={(e) => selectHandler(e)}
                />
              </li>
            </ul>
          ) : (
            <>캘린더 폼</> // calender form
          )
        )} */}
          <li>
            <label htmlFor="onofflin">모집 구분</label>
            {/*<div>
              <span></span>
               <div>
                <div>프로젝트</div>
                 <div>
                  <div>
                    <input type="text" />
                    <div></div>
                  </div>
                </div> 
              </div>
            </div> */}
            <input name="onoffline" type="hidden" value="1"></input>
          </li>
        </section>
      </div>
    </>
  );
};

export default PostInfo;
