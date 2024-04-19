'use client';
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { Thumb } from './EmblaCarouselThumbsButton';
import { TFounderVideo } from '@/components/types';
import PaddingContainer from '@/components/Layout/PaddingContainer';

type PropType = {
  founderVideos: TFounderVideo[];
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const options: EmblaOptionsType = {};
  const { founderVideos } = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  });
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
      // Play the clicked video
      if (videoRefs.current[index]) {
        videoRefs.current[index]?.play();
      }
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
    // Pause all videos
    videoRefs.current.forEach((video) => {
      if (video) {
        video.pause();
      }
    });
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();
    emblaMainApi.on('select', onSelect);
    emblaMainApi.on('reInit', onSelect);
  }, [emblaMainApi, onSelect]);

  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (video && video.paused) {
        video.play();
      }
    });
  }, []);

  return (
    <div className="max-w-4xl mx-auto space-y-5 my-10">
      <div className="overflow-hidden" ref={emblaMainRef}>
        <div className="backface-hidden flex touch-pan-y">
          {founderVideos.map((video, index) => (
            <div className="flex-none flex-shrink-0 w-full" key={video.id}>
              <div className="p-5">
                {video.videoLink ? (
                  <video
                    className=" rounded-3xl overflow-hidden shadow-lg"
                    width={1920}
                    height={1080}
                    controls
                    autoPlay
                    preload="auto"
                    ref={(el) => {
                      videoRefs.current[index] = el;
                    }}
                  >
                    <source src={video.videoLink} type="video/mp4" />
                    {/* <track
                    src="/path/to/captions.vtt"
                    kind="subtitles"
                    srcLang="en"
                    label="English"
                  /> 
                   Your browser does not support the video tag. */}
                  </video>
                ) : (
                  <div className="skeleton w-full h-full"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="overflow-hidden" ref={emblaThumbsRef}>
          <div className="flex flex-row  md:gap-4 gap-2 md:px-10 pb-10 px-5">
            {founderVideos.map((video, i) => (
              <Thumb
                key={i}
                onClick={() => onThumbClick(i)}
                selected={i === selectedIndex}
                companyLogo={video.companyLogo}
                companyName={video.companyName}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
