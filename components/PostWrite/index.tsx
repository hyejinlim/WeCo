import dynamic from 'next/dynamic';
import { memo, useEffect } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import * as R from 'ramda';
import SelectForm from '../select/SelectForm';
import DatePickerForm from '../picker/DatePickerForm';
import PostHeader from 'components/Header/PostHeader';
import PostButton from 'components/Button/PostButton';
import TextField from 'components/TextField/TextField';
import { useForm } from 'react-hook-form';
import {
  ContactType,
  Period,
  Positions,
  ProgressType,
  RecruitCnt,
  RecruitType,
  Skills,
} from './spread';
import { getPostFormSchema } from 'utils/validations/postValidation';
import { doc, setDoc } from 'firebase/firestore';
import { fireStore } from '../../firebase/firebaseClient';
import { useAuth } from 'context/authProvider';
import { useRouter } from 'next/router';

const Editor = dynamic(() => import('../editor/Editor'), {
  ssr: false,
});

const InitialData = {
  title: '', // 제목
  content: '', // 내용
  recruitType: '', // 모집 구분
  recruitCnt: '', // 모집 인원
  progressType: '', // 진행 방식
  period: '', // 진행 기간
  contactType: 'kakao', // 연락 방법
  contactDetail: '', // 연락 방법 상세
  endDate: dayjs().format('YYYY-MM-DD'), // 모집 마감일
  skills: [], // 기술 스택
  positions: [], // 모집 포지션
};

function PostWrite() {
  const user = useAuth();
  const router = useRouter();
  const {
    register,
    setValue,
    getValues,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<typeof InitialData>({
    resolver: getPostFormSchema(),
  });

  watch('contactType');
  watch('endDate');

  /**
   * handler
   */
  const handleSelected = (type: any, data: any) => {
    // TODO: includes
    if (R.includes(type, ['skills', 'positions'])) {
      const values = R.map(R.prop('value'))(data);
      return setValue(type, values, { shouldValidate: true });
    }
    const { value } = data;
    setValue(type, value, { shouldValidate: true });
  };
  const handlePeriod = (type: any, value: Dayjs) => {
    setValue(type, dayjs(value).format('YYYY-MM-DD'));
  };
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setValue(name, value, { shouldValidate: true });
  };
  const handleContentChange = (value: string) => {
    setValue('content', value);
  };

  const handleClick = async (values: any) => {
    const data = { ...values, comments: 0, views: 0, uid: user?.uid };
    const timeStamp = dayjs().valueOf().toString();
    const docRef = doc(fireStore, 'posts', timeStamp);
    await setDoc(docRef, data).then(() => {
      alert('등록되었습니다.');
      router.push('/');
    });
  };

  /**
   * useEffect
   */
  useEffect(() => {
    R.pipe(
      R.toPairs,
      R.forEach(([name, value]: any) => {
        register(name);
        setValue(name, value);
      })
    )(InitialData);
  }, [InitialData, register, setValue]);

  return (
    <div className="custom_md:w-full flex flex-col w-[1024px] w-max-[1040px] mx-auto my-0 gap-12 py-14 px-4">
      <section>
        <PostHeader num={1} title="프로젝트 기본 정보를 입력해 주세요." />
        <div className="gap-4 sm:flex-col grid-cols-2 grid">
          <div className="flex flex-col gap-2">
            <label className="font-medium">모집 구분</label>
            <SelectForm
              name="recruitType"
              options={RecruitType}
              placeHolder="스터디/프로젝트"
              onChange={handleSelected.bind(null, 'recruitType')}
            />
            {errors?.recruitType && (
              <div className="text-sm text-red-500">
                {errors?.recruitType.message}
              </div>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium">모집 인원</label>
            <SelectForm
              name="recruitCnt"
              options={RecruitCnt}
              placeHolder="인원 미정~10명 이상"
              onChange={handleSelected.bind(null, 'recruitCnt')}
            />
            {errors?.recruitCnt && (
              <div className="text-sm text-red-500">
                {errors?.recruitCnt.message}
              </div>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium">진행 방식</label>
            <SelectForm
              name="progressType"
              options={ProgressType}
              placeHolder="온라인/오프라인"
              onChange={handleSelected.bind(null, 'progressType')}
            />
            {errors?.progressType && (
              <div className="text-sm text-red-500">
                {errors?.progressType.message}
              </div>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium">진행 기간</label>
            <SelectForm
              name="period"
              options={Period}
              placeHolder="기간 미정~6개월 이상"
              onChange={handleSelected.bind(null, 'period')}
            />
            {errors?.period && (
              <div className="text-sm text-red-500">
                {errors?.period.message}
              </div>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium">기술 스택</label>
            <SelectForm
              name="skills"
              isMulti
              options={Skills}
              placeHolder="프로젝트 사용 스택"
              onChange={handleSelected.bind(null, 'skills')}
            />
            {errors?.skills && (
              <div className="text-sm text-red-500">
                {errors?.skills.message}
              </div>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium">모집 마감일</label>
            <DatePickerForm
              date={getValues('endDate')}
              onChange={handlePeriod.bind(null, 'endDate')}
            />
            {errors?.endDate && (
              <div className="text-sm text-red-500">
                {errors?.endDate.message}
              </div>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium">모집 포지션</label>
            <SelectForm
              name="positions"
              isMulti
              options={Positions}
              placeHolder="프론트엔드, 백엔드..."
              onChange={handleSelected.bind(null, 'positions')}
            />
            {errors?.positions && (
              <div className="text-sm text-red-500">
                {errors?.positions.message}
              </div>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium">연락 방법</label>
            <SelectForm
              name="contactType"
              defaultValue={ContactType[0]}
              options={ContactType}
              placeHolder="연락 방법"
              onChange={handleSelected.bind(null, 'contactType')}
            />
            <TextField
              name="contactDetail"
              value={getValues('contactDetail')}
              placeholder={
                getValues('contactType') === 'kakao'
                  ? '오픈 카톡방 링크'
                  : getValues('contactType') === 'google'
                  ? '이메일'
                  : '구글 폼 주소'
              }
              onChange={handleChange}
              errorText={errors?.contactDetail?.message}
            />
          </div>
        </div>
      </section>
      <section>
        <PostHeader num={2} title="프로젝트에 대해 소개해주세요." />
        <section className="flex flex-col gap-2">
          <label className="font-medium" htmlFor="input">
            제목
          </label>
          <TextField
            name="title"
            placeholder="글 제목을 입력해주세요!"
            value={getValues('title')}
            onChange={handleChange}
            errorText={errors?.title?.message}
          />
          <Editor value={getValues('content')} onChange={handleContentChange} />
          {errors?.content && (
            <div className="mt-10 text-sm text-red-500">
              {errors?.content.message}
            </div>
          )}
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
          onClick={handleSubmit(handleClick)}
        />
      </section>
    </div>
  );
}

export default memo(PostWrite);
