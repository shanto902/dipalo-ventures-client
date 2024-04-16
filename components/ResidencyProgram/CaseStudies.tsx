'use client';
import React from 'react';
import PaddingContainer from '../Layout/PaddingContainer';
import CaseStudyTab from './CaseStudyTab';
import CustomTitle from '../common/CustomTitle';
import { TCaseStudy } from '../common/types';

const CaseStudies = ({caseStudies} : { caseStudies:TCaseStudy[]}) => {
  return (
    <div className=" my-10">
      <PaddingContainer>
        <CustomTitle>CASE STUDIES</CustomTitle>
        <p className=" text-zinc-900 text-center mb-14 mt-5 md:text-lg text-base font-semibold">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
        </p>
      </PaddingContainer>

      <CaseStudyTab  caseStudies={caseStudies} />
    </div>
  );
};

export default CaseStudies;
