import React, { Suspense } from 'react';
import Header from '@/components/common/Header';
import image from '@/public/assets/headers/learn.jpeg';
import TopSection from '@/components/Pages/Portfolio/TopSection';
import PortfolioSection from '@/components/Pages/Portfolio/PortfolioSection';
import FounderVideo from '@/components/Pages/Portfolio/FounderVideo';
import getAllFounderVideos from '@/helpers/getAllFounderVideos';
import getAllCompanies from '@/helpers/getAllCompanies';
import getAllTestimonials from '@/helpers/getAllTestimonials';
import Testimonials from '@/components/Pages/Portfolio/Testimonials';

const PortfolioPage = async () => {
  const founderVideos = await getAllFounderVideos();
  const companies = await getAllCompanies();
  const testimonials = await getAllTestimonials();

  return (
    <div>
      <Header title="Our Portfolio" image={image} breadcrumb="Our Portfolio" />
      <TopSection />
      <Suspense>
        <FounderVideo founderVideos={founderVideos} />
      </Suspense>
      <Suspense>
        <PortfolioSection companies={companies} />
      </Suspense>
      <Suspense>
        <Testimonials testimonials={testimonials} />
      </Suspense>
    </div>
  );
};

export default PortfolioPage;
