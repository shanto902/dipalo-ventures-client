'use client'
import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";

const Video = ({ video }: { video: string }) => {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    // Play the video when the component mounts
    setPlaying(true);

    // Pause the video when the component unmounts
    return () => {
      setPlaying(false);
    };
  }, []);

  return (
    <div suppressHydrationWarning className=" rounded-xl overflow-hidden flex justify-center items-center">
      <ReactPlayer
        playing={playing}
        fluid
        controls
        config={{ file: { forceHLS: true } }}
        url={`https://youtu.be/${video}`}
      />
    </div>
  );
};

export default Video;
