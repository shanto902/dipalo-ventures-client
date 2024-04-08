import Header from '@/components/common/Header'
import React from 'react'
import image from '@/public/assets/headers/residency-program.jpg'
import Process from '@/components/ResidencyProgram/Process'
import CaseStudies from '@/components/ResidencyProgram/CaseStudies'
import Residency from '@/components/ResidencyProgram/Residency'
const ResidencyProgramPage = () => {
  return (
   <>
    <Header title="Residency Program" image={image} breadcrumb='Residency' />
    <Process />
    <Residency/>
    <CaseStudies />
    </>
  )
}

export default ResidencyProgramPage;