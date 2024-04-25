import React from 'react';
import PaddingContainer from '../../Layout/PaddingContainer';
import CustomTitle from '../../common/CustomTitle';
import { TPartner } from '@/components/types';
import PartnerCard from './PartnerCard';
import AnimatedDiv from '@/components/common/AnimatedDiv';

const Partners = ({ partners }: { partners: TPartner[] }) => {
  return (
    <PaddingContainer className="py-5">
      <CustomTitle>Partners</CustomTitle>
     <section className=' md:grid flex flex-wrap justify-center gap-5 grid-cols-3 place-items-center my-10'>
     {partners.map((partner,i) => (
        <AnimatedDiv id={i} key={partner.id}>
          <PartnerCard partner={partner} />
        </AnimatedDiv>
      ))}
     </section>
    </PaddingContainer>
  );
};

export default Partners;
