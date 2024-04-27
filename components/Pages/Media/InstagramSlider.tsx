/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';
import { TInstagramCarousel } from '@/components/types';

const videoRefs: React.RefObject<HTMLVideoElement>[] = [];

const InstagramSlider = ({ post, caption }: { post: TInstagramCarousel[], caption: string }) => {
  // Use useEffect to create refs after the component mounts
  useEffect(() => {
    post.forEach(() => {
      videoRefs.push(React.createRef<HTMLVideoElement>());
    });
  }, [post]);

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
            <div className='relative'>
              {item.media_type === 'VIDEO' ? (
                <video ref={videoRefs[post.indexOf(item)]} className='rounded-xl h-full w-full' controls >
                  <source src={item.media_url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : 
               
                  <img className='rounded-xl' src={item.media_url} alt="" loading="lazy" />
              
              }
              {item.media_type !== "VIDEO" && <h2 className='hover:opacity-100 opacity-0 p-10 transition-all duration-500 absolute bottom-0 left-0 z-10 text-xs bg-black/50 text-white'>{caption}</h2>}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default InstagramSlider;
