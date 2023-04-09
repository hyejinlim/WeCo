import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export const getPostFormSchema = () =>
  yupResolver(
    yup.object({
      title: yup.string().required('제목을 입력해주세요.'),
      content: yup.string().required('내용을 입력해주세요.'),
      recruitType: yup.string().required('모집 구분을 선택해주세요.'),
      recruitCnt: yup.string().required('모집 인원을 선택해주세요.'),
      progressType: yup.string().required('진행 방식을 선택해주세요.'),
      period: yup.string().required('진행 기간을 선택해주세요.'),
      endDate: yup.string().required('모집 마감일을 선택해주세요.'),
      skills: yup.array().min(1, '기술 스택을 선택해주세요.'),
      positions: yup.array().min(1, '모집 포지션을 선택해주세요.'),
      contactDetail: yup.string().required('연락 주소를 입력해주세요.'),
    })
  );
