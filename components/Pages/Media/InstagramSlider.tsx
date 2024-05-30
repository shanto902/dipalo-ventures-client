/* eslint-disable @next/next/no-img-element */
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';
import { TInstagramCarousel } from '@/components/types';

const InstagramSlider = ({
  post,
  caption,
}: {
  post: TInstagramCarousel[];
  caption: string;
}) => {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handleSlideChange = () => {
    videoRefs.current.forEach((video) => {
      if (video) {
        video.pause();
      }
    });
  };

  return (
    <Swiper
      pagination={{
        type: 'bullets',
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper "
      onSlideChange={handleSlideChange}
    >
      {post.map((item) => {
        if (item.media_type === 'IMAGE') {
          return (
            <SwiperSlide key={item.id}>
              <div className="relative">
                <img
                  className="rounded-xl h-full w-full"
                  src={item.media_url}
                  alt=""
                  loading="lazy"
                />
                <h2 className="hover:opacity-100 opacity-0 p-10 transition-all duration-500 absolute bottom-0 left-0 z-10 text-xs bg-black/50 text-white">
                  {caption}
                </h2>
              </div>
            </SwiperSlide>
          );
        } else if (item.media_type === 'VIDEO') {
          return (
            <SwiperSlide key={item.id}>
              <video className="rounded-xl h-full" controls>
                <source src={item.media_url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </SwiperSlide>
          );
        }
        return null;
      })}
    </Swiper>
  );
};

export default InstagramSlider;
