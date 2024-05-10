'use client';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css';
// import required modules
import { Pagination } from 'swiper/modules';
import { TFounderVideo } from '@/components/types';
import AnimatedDiv from '@/components/common/AnimatedDiv';
import VideoCard from './VideoCard';

const FounderVideoSlider = ({
  founderVideos,
}: {
  founderVideos: TFounderVideo[];
}) => {
  const breakPoints = {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  };
  return (
    <div className="slider-container">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={breakPoints}
        modules={[Pagination]}
        className="mySwiper"
      >
        {founderVideos.map((video, i) => (
          <SwiperSlide key={i}>
            <AnimatedDiv className=" py-4" id={i}>
              <VideoCard video={video} />
            </AnimatedDiv>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FounderVideoSlider;
