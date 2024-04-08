'use client'
import React from 'react'
import PaddingContainer from '../Layout/PaddingContainer'
import CaseStudyTab from './CaseStudyTab'
import CustomTitle from '../common/CustomTitle'


const CaseStudies = () => {
  return (
    <div className=' my-10'>
       <PaddingContainer >
       <CustomTitle>CASE STUDIES</CustomTitle>
        <p className=" text-zinc-900 text-center mb-14 mt-5 text-lg font-semibold">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
       </PaddingContainer>

       <CaseStudyTab/>
    </div>
  )
}

export default CaseStudies