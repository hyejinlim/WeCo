import React, { useState } from 'react';
import { datalist } from 'data/SkillDataList';
import { MultiSelect } from 'react-multi-select-component';
import Router from 'next/router';

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
    <div className="sm:ml-0 sm:mr-0 pl-4 pr-4 mt-12 ml-auto mr-auto w-3/5 pb-20 sm:w-full">
      <h1 className="block text-3xl font-bold">내 정보 수정</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex">
          <img
            src="/img/default.png"
            className="block h-40 w-40 rounded-full shadow-lg object-cover my-10 mx-0"
          />
          <div className="flex flex-col justify-center ml-2.5">
            <label className="bg-black text-white rounded inline-block cursor-pointer text-center pt-1 w-32 h-8 font-bold m-1.5">
              이미지선택
              <input
                type="file"
                onChange={handleChange}
                name="fileUpload"
                className="hidden"
              />
            </label>
            <button className=" bg-black font-bold rounded w-32 m-1.5 h-8 text-base outline-none border-none cursor-pointer text-white">
              이미지 삭제
            </button>
          </div>
        </div>
        <div className="flex items-center sm:flex-col sm:items-start">
          <h3 className="w-80 text-xl font-bold sm:my-4">닉네임</h3>
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
        <div className="flex items-center mt-12 sm:flex-col sm:items-start">
          <h3 className="w-80 text-xl font-bol my-4">관심 기술 태그</h3>
          <span className="w-60 sm:w-96">
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
        <button
          type="button"
          className="mt-6 bg-red-600 font-bold rounded w-24 mr-2.5 h-8 text-base outline-none border-none cursor-pointer  text-white"
          name="signOut"
        >
          회원 탈퇴
        </button>
      </form>
    </div>
  );
}
