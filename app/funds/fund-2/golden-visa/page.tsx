import Header from '@/components/common/Header';
import React from 'react';
import image from '@/public/assets/headers/golden-visa.jpg';
import getAllBenefits from '@/helpers/getAllBenefits';
import Benefits from '@/components/Pages/Fund2/GoldenVisa/Benefits';
import getGoldenVisaPage from '@/helpers/getGoldenVisaPage';
import CustomTitle from '@/components/common/CustomTitle';
import AnimatedPara from '@/components/common/AnimatedPara';
import WhyPortugal from '@/components/Pages/Fund2/GoldenVisa/WhyPortugal';
import Investment from '@/components/Pages/Fund2/GoldenVisa/Investment';
import Timeline from '@/components/Pages/Fund2/GoldenVisa/Timeline';

const page = async () => {
  const benefits = await getAllBenefits();
  const goldenVisaPage = await getGoldenVisaPage();
  return (
    <>
      <Header
        title="Portuguese Golden Visa"
        breadcrumb="Fund-2"
        image={image}
      />
      <WhyPortugal title={goldenVisaPage.whyPortugal} />

      <Investment
        text={goldenVisaPage.investment}
        animationLink={goldenVisaPage.fundRouteAnimation}
      />
      <Benefits benefits={benefits} />
      <Timeline />
    </>
  );
};

export default page;
