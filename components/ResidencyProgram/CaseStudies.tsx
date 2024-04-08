'use client'
import React from 'react'
import PaddingContainer from '../Layout/PaddingContainer'
import CaseStudyTab from './CaseStudyTab'


const CaseStudies = () => {
  return (
    <div className=''>
       <PaddingContainer>
       <h2 className="text-center text-black text-2xl font-bold underline underline-offset-8 decoration-dipalo">CASE STUDIES</h2>
        <p className="text-zinc-900 text-center my-10 text-lg font-semibold  leading-[30px]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
       </PaddingContainer>

       <CaseStudyTab/>
    </div>
  )
}

export default CaseStudies