import React, { useEffect } from 'react';
import { useQueryGetTest } from 'services/Test';
import { getComment } from 'services/CommentService';

/**
 * api 호출 테스트 페이지 입니다.
 */
const SampleApiTest = () => {
  const testData = useQueryGetTest({ id: 1, name: 'test' });
  console.log('testData', testData);

  useEffect(() => {
    getComent();
  }, []);

  const getComent = async () => {
    const result = await getComment();
    console.log('getComent ===', result);
  };

  return (
    <>
      <h1>API 테스트 페이지</h1>
      {testData.isSuccess && <h2>{testData.data.name}</h2>}
    </>
  );
};
export default SampleApiTest;
