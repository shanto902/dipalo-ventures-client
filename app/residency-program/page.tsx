import Header from '@/components/common/Header';
import React from 'react';
import image from '@/public/assets/headers/residency-program.jpg';
import Process from '@/components/Pages/ResidencyProgram/Process';
import CaseStudies from '@/components/Pages/ResidencyProgram/CaseStudies';
import Residency from '@/components/Pages/ResidencyProgram/Residency';
import ResidencyAdvisory from '@/components/Pages/ResidencyProgram/ResidencyAdvisory';
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
