import React from 'react';
import PaddingContainer from '../Layout/PaddingContainer';
import ResidencyAdvisorsCard from './ResidencyAdvisorsCard';
import { mainTeam } from './const';

const ResidencyAdvisor = () => {
  return (
    <div className=" bg-orange-50 pt-10 pb-20">
      {' '}
      <div className="text-amber-500 text-5xl font-bold text-center leading-[84.44px]">
        RESIDENCY ADVISORS
      </div>
      <div className=" grid grid-cols-4 gap-10 max-w-5xl mx-auto">
        {mainTeam.map((user, i) => (
          <ResidencyAdvisorsCard
            key={i}
            image={user.image}
            name={user.name}
            linkedinLink={user.linkedinLink}
            designation={user.designation}
          />
        ))}
      </div>{' '}
    </div>
  );
};

export default ResidencyAdvisor;
