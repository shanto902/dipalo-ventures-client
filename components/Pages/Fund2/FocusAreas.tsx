import PaddingContainer from '../../Layout/PaddingContainer';
import FocusAreaCard from './FocusAreaCard';
import CustomTitle from '@/components/common/CustomTitle';
import AnimatedPara from '@/components/common/AnimatedPara';
import AnimatedDiv from '@/components/common/AnimatedDiv';
import { TFocusArea } from '@/components/types';

const FocusAreas = ({ focusAreas }: { focusAreas: TFocusArea[] }) => {
  return (
    <PaddingContainer className=" py-10">
      <CustomTitle className=" pb-5">FOCUS AREAS</CustomTitle>
      <AnimatedPara className=" text-center ">
        The Dipalo Heed ClimateTech fund invests in enabling architecture and
        scalable products with which we can save the planet. We target emerging
        technologies in sectors that address key market needs where our product
        expertise is a differentiator. 
      </AnimatedPara>

      <div className=" grid grid-cols-2 py-5 lg:gap-x-28 gap-x-5 lg:gap-y-14 gap-y-5">
        {focusAreas.map((area, index) => (
          <AnimatedDiv className="overflow-visible" key={index} id={index}>
            <FocusAreaCard
              lists={area.lists}
              image={area.image}
              title={area.title}
            />
          </AnimatedDiv>
        ))}
      </div>
    </PaddingContainer>
  );
};

export default FocusAreas;
