'use client';
import React, { useRef, useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

const FounderVideo = () => {
  const playerWrapperRef = useRef(null);
  const [autoplay, setAutoplay] = useState(false);
  const [muted, setMuted] = useState(true);
  const [showButton, setShowButton] = useState(false);
  const [buttonOpacity, setButtonOpacity] = useState(0);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // Trigger when at least 50% of the player is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setAutoplay(true); // Set autoplay to true when the player becomes visible
        }
      });
    }, options);

    const playerWrapperElement = playerWrapperRef.current; // Access the DOM element
    if (playerWrapperElement) {
      observer.observe(playerWrapperElement); // Pass the DOM element to observe
    }

    return () => {
      if (playerWrapperElement) {
        observer.unobserve(playerWrapperElement);
      }
    };
  }, []);

  const handleToggleMute = () => {
    setMuted(!muted);
    setShowButton(false);
  };

  const handleProgress = (state: { playedSeconds: any }) => {
    const playedSeconds = state.playedSeconds;
    if (playedSeconds >= 10 && playedSeconds <= 11 && !showButton) {
      setShowButton(true);
      fadeInButton();
    }
  };

  const fadeInButton = () => {
    let opacity = 0;
    const interval = setInterval(() => {
      opacity += 0.1;
      setButtonOpacity(opacity);
      if (opacity >= 1) clearInterval(interval);
    }, 100);
  };

  return (
    <div className="flex w-full relative justify-center items-center py-10 flex-col gap-1 overflow-hidden">
      <div className="text-center text-dipalo underline underline-offset-[10px] text-4xl font-bold">
        Founder Introduction Video
      </div>
      <div ref={playerWrapperRef}>
        <ReactPlayer
          url={'https://www.youtube.com/embed/IqbFkaLaII0'}
          playing={autoplay}
          muted={muted}
          onProgress={handleProgress}
          width="1200px"
          height="60vh"
        />
      </div>
      {showButton && (
        <div className={`absolute bottom-32 opacity-${buttonOpacity}`}>
          <button
            className="btn btn-outline btn-ghost text-white"
            onClick={handleToggleMute}
          >
            Click To Unmute
            <label className="swap">
              {muted ? (
                <svg
                  className="swap-off fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M3,9H7L12,4V20L7,15H3V9M16.59,12L14,9.41L15.41,8L18,10.59L20.59,8L22,9.41L19.41,12L22,14.59L20.59,16L18,13.41L15.41,16L14,14.59L16.59,12Z" />
                </svg>
              ) : (
                <svg
                  className="swap-on fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z" />
                </svg>
              )}
            </label>
          </button>
        </div>
      )}
    </div>
  );
};

export default FounderVideo;
