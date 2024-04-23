'use client';
import { TFounderVideo } from '@/components/types';
import Image from 'next/image';
import React, { useRef, useState } from 'react';

const VideoCard = ({ video }: { video: TFounderVideo }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const handlePlay = () => {
    // Pause all other videos
    document.querySelectorAll('video').forEach((vid: HTMLVideoElement) => {
      if (vid !== videoRef.current && !vid.paused) {
        vid.pause();
      }
    });

    setIsPlaying(true); // Set the state to indicate video is playing
  };

  const handlePause = () => {
    setIsPlaying(false); // Set the state to indicate video is paused
  };

  return (
    <div>
      {video.videoLink ? (
        <div className={`m-5 rounded-3xl overflow-hidden  relative shadow-md hover:shadow-lg duration-500 transition-shadow`}>
        
          <video 
            poster={`${process.env.NEXT_PUBLIC_ASSETS_URL}${video.poster}`}
            ref={videoRef}
            className={`rounded-3xl cursor-pointer ${isPlaying ? 'drop-shadow-lg' : 'drop-shadow-none'} transition-all duration-500`}
            width={1920}
            height={1080}
            controls
            preload="auto"
            onPlay={handlePlay} // Call handlePlay when video starts playing
            onPause={handlePause} // Call handlePause when video is paused
          >
            <source src={video.videoLink} type="video/mp4" />
          </video>
          <div className="flex items-center justify-around">
            <Image
              className="aspect-square object-contain my-2 mix-blend-multiply"
              src={`${process.env.NEXT_PUBLIC_ASSETS_URL}${video.companyLogo}`}
              alt=""
              width={100}
              height={100}
            />

            <div className="text-right">
              <h2 className="font-xl font-bold">{video.name}</h2>
              <h3 className="text-sm">{video.designation}</h3>
            </div>
          </div>
          <div className={` absolute -z-20 top-0 left-0 w-full h-full ${isPlaying ? 'bg-dipalo' : 'bg-white'} transition-colors duration-500`}></div>
        </div>
      ) : (
        <div className="skeleton w-full h-full"></div>
      )}
    </div>
  );
};

export default VideoCard;
