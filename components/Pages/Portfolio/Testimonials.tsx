import CustomTitle from '@/components/common/CustomTitle';
import PaddingContainer from '@/components/Layout/PaddingContainer';
import { TTestimonial } from '@/components/types';
import React from 'react';

const Testimonials = ({ testimonials }: { testimonials: TTestimonial[] }) => {
  return (
    <PaddingContainer className=' my-20'>
      <CustomTitle>Testimonials</CustomTitle>
    </PaddingContainer>
  );
};

export default Testimonials;
