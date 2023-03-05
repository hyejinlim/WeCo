import { memo } from 'react';
import * as R from 'ramda';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import SliderForm from './SlideForm/SliderForm';

const settings: SwiperProps = {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    clickable: true,
  },
  modules: [Autoplay, Pagination],
};

const slideData: any[] = [
  {
    bgColor: 'bg-yellow-200',
    btnText: '공지사항',
    btnColor: 'bg-violet-500',
    title: '새롭게 달라진 WECO!',
    subTitle: '를 소개합니다',
    subText: '이제 마음 맞는 팀원을 더 쉽게 만나세요 🔍',
    img: '/img/search.png',
  },
  {
    bgColor: 'bg-blue-200',
    title: '스터디와 사이드 프로젝트를 찾는 가장 쉬운 방법',
    subText: ' WECO 에서 함께할 개발자를 찾으세요 ⭐️',
    img: '/img/together.svg',
  },
];

function MainSlider() {
  return (
    <Swiper {...settings} className="!z-0">
      {R.addIndex(R.map)((item: any, index: number) => {
        return (
          <SwiperSlide key={index}>
            <SliderForm item={item} />
          </SwiperSlide>
        );
      })(slideData)}
    </Swiper>
  );
}

export default memo(MainSlider);
