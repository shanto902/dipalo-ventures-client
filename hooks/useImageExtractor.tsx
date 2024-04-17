'use client'
import React, { useEffect } from 'react';
import ReactHtmlParser from 'html-react-parser';

const useImageExtractor = ({ htmlContent }: { htmlContent: string }) => {
  useEffect(() => {
    extractFirstImageSrc(htmlContent);
  }, [htmlContent]);

  const extractFirstImageSrc = (content: string) => {
    const parsedHtml = ReactHtmlParser(content) as React.ReactElement[];
    const images = parsedHtml.filter((element: React.ReactElement) => element.type === 'img');
    if (images.length > 0) {
      const firstImageSrc = images[0].props.src;
      console.log("Source of the first image:", firstImageSrc);
    } else {
      console.log("No image found.");
    }
  };

  return null;
};

export default useImageExtractor;
