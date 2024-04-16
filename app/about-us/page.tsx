import Header from '@/components/common/Header';
import React from 'react';
import image from '@/public/assets/headers/about-us.jpg';
import HeaderAboutUs from '@/components/AboutUs/HeaderAboutUs';
import TeamSection from '@/components/AboutUs/TeamSection';
import ResidencyAdvisor from '@/components/AboutUs/ResidencyAdvisor';
import { TResidencyAdvisor, TTeam } from '@/components/common/types';
import getAllTeamMembers from '@/helpers/getAllTeamMembers';
import getAllResidencyAdvisors from '@/helpers/getAllResidencyAdvisors';

const AboutUSPage = async () => {
const members = await getAllTeamMembers();
const residencyAdvisors = await getAllResidencyAdvisors()

  return (
    <>
      <HeaderAboutUs image={image} />
      <TeamSection  members = {members as unknown as TTeam[]} />
      <ResidencyAdvisor residencyAdvisors={residencyAdvisors as TResidencyAdvisor[]}/>
    </>
  );
};

export default AboutUSPage;
