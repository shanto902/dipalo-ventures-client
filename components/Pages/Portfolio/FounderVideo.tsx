import React from 'react';
import EmblaCarousel from './EmblaCarousel';

import { TFounderVideo } from '@/components/types';
import CustomTitle from '@/components/common/CustomTitle';
import AnimatedDiv from '@/components/common/AnimatedDiv';
import VideoCard from './VideoCard';
import PaddingContainer from '@/components/Layout/PaddingContainer';
import FounderVideoSlider from './FounderVideoSlider';

const FounderVideo = ({
  founderVideos,
}: {
  founderVideos: TFounderVideo[];
}) => {
  return (
    <PaddingContainer className='mb-5'>
      <CustomTitle className=" mb-5">
      Founder Testimonials
      </CustomTitle>
      {/* <EmblaCarousel founderVideos={founderVideos} /> */}
      <section>
<FounderVideoSlider founderVideos={founderVideos} />
</section>
      {/* <section className=' grid md:grid-cols-2 grid-cols-1 gap-5'>
        {founderVideos.map((video, i) => (
          <AnimatedDiv key={video.id} id={i}>
            <VideoCard video={video}/>
         
          </AnimatedDiv>
        ))}
      </section> */}
    </PaddingContainer>
  );
};
export default FounderVideo;
