import Header from '@/components/common/Header';
import React from 'react';
import image from '@/public/assets/headers/golden-visa.jpg';
import getAllBenefits from '@/helpers/getAllBenefits';
import Benefits from '@/components/Pages/Fund2/GoldenVisa/Benefits';
import getGoldenVisaPage from '@/helpers/getGoldenVisaPage';
import WhyPortugal from '@/components/Pages/Fund2/GoldenVisa/WhyPortugal';
import Investment from '@/components/Pages/Fund2/GoldenVisa/Investment';
import FundRoute from '@/components/Pages/Fund2/GoldenVisa/FundRoute';
import Process from '@/components/Pages/Fund2/GoldenVisa/Process';

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
        animationLink={goldenVisaPage.investmentAnimation}
      />
      <Benefits benefits={benefits} />
      <FundRoute  text={goldenVisaPage.whyTakeTheFundRoute}
        animationLink={goldenVisaPage.fundRouteAnimation}/>
     <Process />
    </>
  );
};

export default page;
