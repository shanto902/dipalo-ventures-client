import Header from '@/components/common/Header'
import React from 'react'
import image from '@/public/assets/headers/residency-program.jpg'
import Process from '@/components/ResidencyProgram/Process'
import CaseStudies from '@/components/ResidencyProgram/CaseStudies'
const ResidencyProgramPage = () => {
  return (
   <>
    <Header title="Residency Program" image={image} breadcrumb='Learn' />
    <Process />
    <CaseStudies />
    </>
  )
}

export default ResidencyProgramPage;