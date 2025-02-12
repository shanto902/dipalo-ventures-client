import { Suspense } from 'react';
import ResidencyAdvisorsCard from './ResidencyAdvisorsCard';
import { TResidencyAdvisor } from '../../types';
import PaddingContainer from '../../Layout/PaddingContainer';
import CustomTitle from '../../common/CustomTitle';
import AnimatedDiv from '@/components/common/AnimatedDiv';

const ResidencyAdvisor = ({
  residencyAdvisors,
}: {
  residencyAdvisors: TResidencyAdvisor[];
}) => {
  return (
    <PaddingContainer className=" pb-20">
      <CustomTitle className="mb-10">Residency Advisors</CustomTitle>
      <div className=" grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1  md:mx-5 mx-16 place-content-center gap-10 ">
        <Suspense>
          {residencyAdvisors.map((user, i) => (
            <AnimatedDiv
              key={i}
              id={i}
              delay={0.1}
              className="overflow-visible"
            >
              <ResidencyAdvisorsCard
                image={user.photo}
                name={user.name}
                companyName={user.companyName}
                linkedinLink={user.linkedinLink}
                designation={user.designation}
              />
            </AnimatedDiv>
          ))}
        </Suspense>
      </div>{' '}
    </PaddingContainer>
  );
};

export default ResidencyAdvisor;
