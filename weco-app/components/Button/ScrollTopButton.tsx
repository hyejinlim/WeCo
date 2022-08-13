import Image from 'next/image';

export function ScrollTopButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className="fixed right-4 bottom-4 w-16 h-16 ">
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
