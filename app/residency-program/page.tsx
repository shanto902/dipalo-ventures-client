import Header from '@/components/common/Header';
import React from 'react';
import image from '@/public/assets/headers/residency-program.jpg';
import Process from '@/components/Pages/ResidencyProgram/Process';
import CaseStudies from '@/components/Pages/ResidencyProgram/CaseStudies';
import Residency from '@/components/Pages/ResidencyProgram/Residency';
import getAllCaseStudies from '@/helpers/getAllCaseStudies';
import Partners from '@/components/Pages/ResidencyProgram/Partners';
import getAllPartners from '@/helpers/getAllPartners';
const ResidencyProgramPage = async () => {  
  const caseStudies = await getAllCaseStudies();
  const partners = await getAllPartners()
  return (
    <>
      <Header title="Residency Program" image={image} breadcrumb="Residency" />
      <Process />
      <Residency />
      <CaseStudies caseStudies={caseStudies}  />
      <Partners partners = {partners} />
    </>
  );
};

export default ResidencyProgramPage;
