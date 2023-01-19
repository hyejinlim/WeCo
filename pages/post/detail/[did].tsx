import { Fragment, memo } from 'react';
import * as R from 'ramda';
import { useRouter } from 'next/router';
import { IoArrowBack as Back } from 'react-icons/io5';
import { FcLinux as Penguin } from 'react-icons/fc';
import Header from 'components/Header';
import { RECRUIT_DATA } from 'pages/recruit/constants';

function PostDetail() {
  const router = useRouter();
  const { query } = router;
  const { did } = query;
  const data = R.find((item: any) => item.id === parseInt(did as string))(
    RECRUIT_DATA
  );
  const { title, language, explan } = data || {};

  /**
   * handlers
   */
  const handleBack = () => router.back();

  if (!data) return <Fragment />;
  return (
    <Fragment>
      <Header />
      <div className="relative max-w-4xl mx-auto px-4 pt-4 pb-12">
        {/* back */}
        <div className="mt-12">
          <Back size="36" onClick={handleBack} className="text-gray-500" />
        </div>
        {/* title */}
        <div className="text-5xl sm:text-3xl xs:text-2xl font-bold mt-12">
          {title}
        </div>
        {/* profile */}
        <div className="flex items-center py-8 text-lg gap-4 border-b-2">
          <div className="font-bold pr-4 border-r-2">네네오</div>
          <div className="text-gray-500">2022.08.14</div>
        </div>
        {/* info */}
        <div className="grid grid-cols-2 sm:grid-cols-1 sm:grid-flow-row gap-6 sm:gap-4 py-12">
          <div className="text-xl sm:text-base font-bold">
            <span className="text-gray-500 pr-4">모집 구분</span>
            <span>프로젝트</span>
          </div>
          <div className="text-xl sm:text-base font-bold">
            <span className="text-gray-500 pr-4">진행 방식</span>
            <span>오프라인</span>
          </div>
          <div className="text-xl sm:text-base font-bold">
            <span className="text-gray-500 pr-4">모집 인원</span>
            <span>10명</span>
          </div>
          <div className="text-xl sm:text-base font-bold">
            <span className="text-gray-500 pr-4">시작 예정</span>
            <span>2022.08.17</span>
          </div>
          <div className="text-xl sm:text-base font-bold">
            <span className="text-gray-500 pr-4">연락 방법</span>
            <span>카카오톡 오픈채팅</span>
          </div>
          <div className="text-xl sm:text-base font-bold">
            <span className="text-gray-500 pr-4">예상 기간</span>
            <span>3개월</span>
          </div>
          <div className="text-xl sm:text-base font-bold flex items-center">
            <span className="text-gray-500 pr-4">사용 언어</span>
            <span className="flex gap-1">
              {R.map((item: string) => {
                return (
                  <embed src={`/img/${item}.svg`} width="36" height="36" />
                );
              })(language)}
            </span>
          </div>
        </div>
        {/* project introduce */}
        <div className="mt-12">
          <div className="pb-8 text-2xl font-bold border-b-2">
            프로젝트 소개
          </div>
          <div className="py-8">{explan}</div>
        </div>
        {/* comment write */}
        <div className="mt-12">
          <div className="font-bold text-xl pb-6">1개의 댓글이 있습니다.</div>
          <textarea
            placeholder="댓글을 입력하세요."
            className="w-full border-2 rounded-2xl p-4 mb-2"
          />
          <div className="w-full flex justify-end">
            <button className="bg-gray-900 text-white rounded-full py-2 px-8">
              댓글 등록
            </button>
          </div>
        </div>
        {/* comment list */}
        <div className="mt-4">
          <div className="pb-4">
            <div className="flex items-center">
              <div className="bg-red-300 rounded-full p-1 mr-4">
                <Penguin size="48" />
              </div>
              <div>
                <div className="font-bold">펭수</div>
                <div className="text-sm text-gray-500">2022-08-15 19:42:18</div>
              </div>
            </div>
            <div className="text-lg py-4 border-b">Gooooooood!</div>
          </div>
          <div className="pb-4">
            <div className="flex items-center">
              <div className="bg-red-300 rounded-full p-1 mr-4">
                <Penguin size="48" />
              </div>
              <div>
                <div className="font-bold">펭수</div>
                <div className="text-sm text-gray-500">2022-08-15 19:42:18</div>
              </div>
            </div>
            <div className="text-lg py-4 border-b">Gooooooood!</div>
          </div>
        </div>
        {/* recomment post */}
        <div className="absolute left-full top-96 2xl:hidden">
          <div className="flex items-center mb-4">
            <div className="w-0 h-10 border-2 border-blue-500 bg-blue-500 mr-2" />
            <div className="whitespace-pre-wrap">
              <span className="font-bold">펭수</span>
              {`님이\n좋아하실 글을 모아봤어요!`}
            </div>
          </div>
          <div className="w-60 border-2 rounded-lg px-2 py-4 text-sm">
            <div>
              <span className="text-blue-300">1. </span>개발자 추가 모집
            </div>
            <div>
              <span className="text-blue-300">2. </span>개발자 추가 모집
            </div>
            <div>
              <span className="text-blue-300">3. </span>개발자 추가 모집
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default memo(PostDetail);
