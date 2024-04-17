import Header from '@/components/common/Header';
import React from 'react';
import image from '@/public/assets/headers/fund1.jpg';
import ThesisSection from '@/components/Pages/Fund1/ThesisSection';
import QuotesSection from '@/components/Pages/Fund1/QuotesSection';
import KeyMetrics from '@/components/Pages/Fund1/KeyMetrics';
import Investments from '@/components/Pages/Fund1/Investments';

const Fund1Page = () => {
  return (
    <>
      <Header
        title="Dipalo Ventures Fund I"
        image={image}
        subtitle="(Dipalo Ventures Fund I is now closed)"
        breadcrumb="Funds"
      />
      <ThesisSection />
      <QuotesSection />
      <KeyMetrics />
      <Investments />
    </>
  );
};

export default Fund1Page;
