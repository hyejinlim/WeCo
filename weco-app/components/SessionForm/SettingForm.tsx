import React, { useState } from 'react';
import { datalist } from 'data/SkillDataList';
import { MultiSelect } from 'react-multi-select-component';
import Router, { useRouter } from 'next/router';

type props = {
  fileUpload: string;
  nickName: string;
};

export function SettingForm() {
  const [selected, setSelected] = useState([]);
  const [values, setValues] = useState<props>({ fileUpload: '', nickName: '' });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    Router.push('/');
    console.log({ ...values, selected });
    return { ...values, selected };
  };

  return (
    <div className="pl-4 pr-4 mt-12 ml-auto mr-auto w-3/5 pb-20">
      <h1 className="block text-3xl font-bold">내 정보 수정</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex">
          <img
            src="/img/default.png"
            className="block h-40 w-40 rounded-full shadow-lg object-cover my-10 mx-0"
          />
          <div className="flex flex-col justify-center ml-2.5">
            <input
              type="file"
              onChange={handleChange}
              name="fileUpload"
              className="block w-full  text-slate-500
            file:mr-2.5  file:px-4 file:my-2 file:h-8
            file:rounded file:border-0
            file:text-base file:font-bold
            file:bg-black file:text-white cursor-pointer"
            />
            <button className=" bg-black font-bold rounded w-24 mr-2.5 h-8 text-base outline-none border-none cursor-pointer text-white">
              이미지 삭제
            </button>
          </div>
        </div>
        <div className="flex items-center">
          <h3 className="w-80 text-xl font-bold">닉네임</h3>
          <input
            type="text"
            onChange={handleChange}
            name="nickName"
            className="w-72 rounded border-slate-300 border-2 text-lg p-2 min-h-12"
          />
        </div>
        <p className="mt-3.5 text-slate-500 text-sm ">
          WeCo 에서 사용되는 이름입니다.
        </p>
        <hr className="mt-2.5" />
        <div className="flex items-center mt-12">
          <h3 className="w-80 text-xl font-bold">관심 기술 태그</h3>
          <span className="w-60">
            <MultiSelect
              options={datalist}
              value={selected}
              onChange={setSelected}
              labelledBy="Select Option"
            />
          </span>
        </div>
        <p className="mt-3.5 text-slate-500 text-sm ">
          관심 있는 기술 태그를 등록해주세요.
        </p>
        <hr className="mt-2.5" />
        <button
          type="submit"
          className="mt-6 bg-black font-bold rounded w-24 mr-2.5 h-8 text-base outline-none border-none cursor-pointer text-white"
          name="complete"
        >
          완료
        </button>
      </form>
      <button
        className="mt-6 bg-red-600 font-bold rounded w-24 mr-2.5 h-8 text-base outline-none border-none cursor-pointer  text-white"
        name="signOut"
      >
        회원 탈퇴
      </button>
    </div>
  );
}
