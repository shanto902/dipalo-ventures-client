'use client';
import { TFounderVideo } from '@/components/types';
import Image from 'next/image';
import React, { useRef, useState } from 'react';

const VideoCard = ({ video }: { video: TFounderVideo }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const handlePlay = () => {
    document.querySelectorAll('video').forEach((vid: HTMLVideoElement) => {
      if (vid !== videoRef.current && !vid.paused) {
        vid.pause();
      }
    });

    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  return (
    <div>
      {video.videoLink ? (
        <div className={`lg:m-5 md:m-3 m-2 rounded-3xl overflow-hidden bg-white  relative drop-shadow hover:drop-shadow-xl duration-500 transition-all`}>
        
          <div className="flex items-center justify-between lg:px-10 px-5">
            <Image
              className="aspect-square object-contain my-2 mix-blend-multiply"
              src={`${process.env.NEXT_PUBLIC_ASSETS_URL}${video.companyLogo}`}
              alt=""
              width={100}
              height={100}
            />

            <div className={`text-right ${isPlaying ? 'text-white font-semibold drop-shadow-md': 'text-black'} transition-all duration-500 `}>
              <h2 className="font-xl font-bold">{video.name}</h2>
              <h3 className="text-sm">{video.designation}</h3>
            </div>
          </div>
          <video 
            poster={`${process.env.NEXT_PUBLIC_ASSETS_URL}${video.poster}`}
            ref={videoRef}
            className={`rounded-3xl cursor-pointer ${isPlaying ? 'drop-shadow-lg' : 'drop-shadow-none'} transition-all duration-500`}
            width={1920}
            height={1080}
            controls
            preload="auto"
            onPlay={handlePlay} 
            onPause={handlePause} 
          >
            <source src={video.videoLink} type="video/mp4" />
          </video>
          <div className={` absolute -z-20 top-0 left-0 w-full h-full ${isPlaying ? 'bg-dipalo' : 'bg-white'} transition-colors duration-500`}></div>
        </div>
      ) : (
        <div className="skeleton w-full h-full"></div>
      )}
    </div>
  );
};

export default VideoCard;
