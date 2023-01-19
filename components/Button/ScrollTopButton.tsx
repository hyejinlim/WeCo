import Image from 'next/image';
import { memo, useEffect, useState } from 'react';

function ScrollTopButton() {
  const [scrollY, setScrollY] = useState<number>(0); // 스크롤값을 저장하기 위한 상태

  const handleScroll = () => {
    setScrollY(window.pageYOffset); // window 스크롤 값을 scrollY에 저장
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); // addEventListener 함수를 삭제
    };
  }, []);

  return (
    <div
      className={
        scrollY === 0 ? 'hidden' : 'fixed right-4 bottom-4 w-16 h-16 sm:hidden'
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

export default memo(ScrollTopButton);
