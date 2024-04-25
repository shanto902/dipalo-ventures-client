import React, { useState, useEffect } from 'react';

const Events = () => {
  const [loading, setLoading] = useState(true);
  const [iframeWidth, setIframeWidth] = useState('80vw');
  const [iframeHeight, setIframeHeight] = useState('45vh');

  const handleLoad = () => {
    setLoading(false);
  };

  useEffect(() => {
    const handleResize = () => {
      // Calculate width and height dynamically based on screen size
      const newWidth = window.innerWidth * 0.8; // 80% of window width
      const newHeight = window.innerHeight * 0.45; // 45% of window height

      setIframeWidth(`${newWidth}px`);
      setIframeHeight(`${newHeight}px`);
    };

    // Initial calculation on component mount
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='flex justify-center w-full my-5'>
      {loading && <div className={`skeleton w-[100vw] h-[50vh] flex justify-center items-center !rounded-none -mr-5'`}></div>}
      <iframe
        className='mx-auto bg-transparent'
        src="https://lu.ma/embed/calendar/cal-4Nn6DwhSkvxOKFi/events?lt=light"
        width={iframeWidth}
        height={iframeHeight}
        frameBorder={0}
        aria-hidden="true"
        tabIndex={0}
        onLoad={handleLoad}
        allowFullScreen
        style={{ display: loading ? 'none' : 'block' }}
      ></iframe>
    </div>
  );
};

export default Events;
