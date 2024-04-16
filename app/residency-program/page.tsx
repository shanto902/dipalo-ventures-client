import Header from '@/components/common/Header';
import React from 'react';
import image from '@/public/assets/headers/residency-program.jpg';
import Process from '@/components/ResidencyProgram/Process';
import CaseStudies from '@/components/ResidencyProgram/CaseStudies';
import Residency from '@/components/ResidencyProgram/Residency';
import ResidencyAdvisory from '@/components/ResidencyProgram/ResidencyAdvisory';
import getAllCaseStudies from '@/helpers/getAllCaseStudies';
const ResidencyProgramPage = async () => {  
  const caseStudies = await getAllCaseStudies();
  return (
    <>
      <Header title="Residency Program" image={image} breadcrumb="Residency" />
      <Process />
      <Residency />
      <CaseStudies caseStudies={caseStudies}  />
      <ResidencyAdvisory />
    </>
  );
};

export default ResidencyProgramPage;
