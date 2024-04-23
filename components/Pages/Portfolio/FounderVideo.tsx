import React from 'react';
import EmblaCarousel from './EmblaCarousel';

import { TFounderVideo } from '@/components/types';
import CustomTitle from '@/components/common/CustomTitle';
import AnimatedDiv from '@/components/common/AnimatedDiv';
import VideoCard from './VideoCard';
import PaddingContainer from '@/components/Layout/PaddingContainer';

const FounderVideo = ({
  founderVideos,
}: {
  founderVideos: TFounderVideo[];
}) => {
  return (
    <PaddingContainer className='my-10'>
      <CustomTitle className=" my-10">
        Founder Introduction Videos
      </CustomTitle>
      {/* <EmblaCarousel founderVideos={founderVideos} /> */}

      <section className=' grid md:grid-cols-2 grid-cols-1 gap-5'>
        {founderVideos.map((video, i) => (
          <AnimatedDiv key={video.id} id={i}>
            <VideoCard video={video}/>
          </AnimatedDiv>
        ))}
      </section>
    </PaddingContainer>
  );
};

export default FounderVideo;
