'use client'
import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";

const Video = ({ video }: { video: string }) => {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    setPlaying(true);

    return () => {
      setPlaying(false);
    };
  }, []);

  return (
    <div suppressHydrationWarning className=" rounded-xl overflow-hidden flex justify-center items-center">
      <ReactPlayer
        playing={playing}
        width="100%"
        height="40dvh" 
        controls
        config={{ file: { forceHLS: true } }}
        url={`https://youtu.be/${video}`}
      />
    </div>
  );
};

export default Video;
