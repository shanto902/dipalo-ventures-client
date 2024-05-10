import { TFounderVideo } from '@/components/types';
import CustomTitle from '@/components/common/CustomTitle';
import PaddingContainer from '@/components/Layout/PaddingContainer';
import FounderVideoSlider from './FounderVideoSlider';

import 'swiper/css';
import 'swiper/css/pagination';

const FounderVideo = ({
  founderVideos,
}: {
  founderVideos: TFounderVideo[];
}) => {
  return (
    <PaddingContainer className="mb-5">
      <CustomTitle className=" my-5">Founder Testimonials</CustomTitle>
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
