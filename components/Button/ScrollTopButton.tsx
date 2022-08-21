import Image from 'next/image';
import { useEffect, useState } from 'react';

export function ScrollTopButton() {
  const [ScrollY, setScrollY] = useState<number>(0); // 스크롤값을 저장하기 위한 상태
  const handleFollow = () => {
    setScrollY(window.pageYOffset); // window 스크롤 값을 ScrollY에 저장
  };
  useEffect(() => {
    const watch = () => {
      window.addEventListener('scroll', handleFollow);
    };
    watch(); // addEventListener 함수를 실행
    return () => {
      window.removeEventListener('scroll', handleFollow); // addEventListener 함수를 삭제
    };
  });
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div
      className={
        ScrollY === 0 ? 'hidden' : 'fixed right-4 bottom-4 w-16 h-16 sm:hidden'
      }
    >
      <Image
        className="hover:cursor-pointer hover:scale-110 ease-in-out duration-200"
        src="/img/top.jpg"
        width="55"
        height="50"
        onClick={scrollToTop}
      />
    </div>
  );
}
