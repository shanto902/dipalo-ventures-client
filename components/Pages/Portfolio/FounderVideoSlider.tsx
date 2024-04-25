'use client';
import React from 'react';
import Slider from 'react-slick';

// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { TFounderVideo } from '@/components/types';
import AnimatedDiv from '@/components/common/AnimatedDiv';
import VideoCard from './VideoCard';

const FounderVideoSlider = ({
  founderVideos,
}: {
  founderVideos: TFounderVideo[];
}) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {founderVideos.map((video, i) => (
          <AnimatedDiv className=" py-4" key={video.id} id={i}>
            <VideoCard video={video} />
          </AnimatedDiv>
        ))}
      </Slider>
    </div>
  );
};


export default FounderVideoSlider;
