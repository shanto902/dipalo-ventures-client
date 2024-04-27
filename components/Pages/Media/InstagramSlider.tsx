/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';
import { TInstagramCarousel } from '@/components/types';
import Image from 'next/image';
const InstagramSlider = ({ post }: { post: TInstagramCarousel[] }) => {
  return (
    <>
      <Swiper
        pagination={{
          type: 'bullets',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {post.map((item) => (
          <SwiperSlide key={item.id}>
            {item.media_type === 'VIDEO' ? (
              <video controls>
                <source src={item.media_url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              item.media_url && (
                <img src={item.media_url} alt=""  />
              )
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default InstagramSlider;
