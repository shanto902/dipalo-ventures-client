import React from 'react';
import ResidencyAdvisorsCard from './ResidencyAdvisorsCard';
import { mainTeam } from './const';
import { TResidencyAdvisor } from '../common/types';
import PaddingContainer from '../Layout/PaddingContainer';
import CustomTitle from '../common/CustomTitle';

const ResidencyAdvisor = ({residencyAdvisors}: {residencyAdvisors:TResidencyAdvisor[]}) => {
  return (
    <PaddingContainer className=" pb-20">
      <CustomTitle className='mb-10' >
      Residency Advisors
      </CustomTitle>
      <div className=" grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1  md:mx-5 mx-16 place-content-center gap-10 ">
        {residencyAdvisors.map((user, i) => (
          <ResidencyAdvisorsCard
            key={i}
            image={user.photo}
            name={user.name}
            companyName={user.companyName}
            linkedinLink={user.linkedinLink}
            designation={user.designation}
          />
        ))}
      </div>{' '}
    </PaddingContainer>
  );
};

export default ResidencyAdvisor;
