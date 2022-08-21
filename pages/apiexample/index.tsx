import React, { useEffect } from 'react';
import { getAuthToken } from 'services/AuthService';
import {
  getTest,
  getTest2,
  getTest3,
  postTest,
  putTest,
  delTest,
  useQueryGetTest,
} from 'services/Test';
import { useQuery } from 'react-query';
/**
 * api 호출 테스트 페이지 입니다.
 */
const SampleApiTest = () => {
  const testData = useQueryGetTest({ id: 1, name: 'test' });
  console.log('testData', testData);

  useEffect(() => {
    getTestApi();
    // getTest2Api();
    // getTest3Api();
    // postTestApi();
    // putTestApi();
    // deleteTestApi();
    // updateAuthToken();
  }, []);

  const getTestApi = async () => {
    const test = await getTest({ id: 1, name: 'test' });
    console.log('getTestApi response test ===', test);
  };

  const getTest2Api = async () => {
    const id = 1;
    const name = 'test';
    const test = await getTest2(id, name);
    console.log('getTest3Api response test ===', test);
  };

  const getTest3Api = async () => {
    const param = {
      id: 1,
      name: 'test',
    };
    const test = await getTest3(param);
    console.log('getTest2Api response test ===', test);
  };

  const postTestApi = async () => {
    const param = {
      id: 1,
      name: 'test',
    };
    const test = await postTest(param);
    console.log('postTestApi response test ===', test);
  };

  const putTestApi = async () => {
    const test = await putTest({ id: 1, name: 'test' });
    console.log('putTestApi response test ===', test);
  };

  const deleteTestApi = async () => {
    const test = await delTest({ id: 1, name: 'test' });
    console.log('deleteTestApi response test ===', test);
  };

  const updateAuthToken = async () => {
    const authToken = await getAuthToken();
    console.log('updateAuthToken authToken ===', authToken);
  };

  return (
    <>
      <h1>API 테스트 페이지</h1>
      {testData.isSuccess && <h2>{testData.data.name}</h2>}
    </>
  );
};
export default SampleApiTest;
