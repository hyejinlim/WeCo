import { NextPage } from 'next';
import React from 'react';
import Select from 'react-select';
import { postInfoData } from '../../data/postInfo.js';

const PostInfo: NextPage = () => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  return (
    <>
      <section>
        <div>
          <span>1</span>
          <h2>프로젝트 기본 정보를 입력해 주세요.</h2>
        </div>
        <ul>
            {
                
            }
          <li>
            <label htmlFor="onofflin">모집 구분</label>
            <Select options={options} />
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
        </ul>
      </section>
    </>
  );
};

export default PostInfo;
