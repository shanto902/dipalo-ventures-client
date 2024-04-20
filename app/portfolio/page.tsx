import React from 'react';
import Header from '@/components/common/Header';
import image from '@/public/assets/headers/learn.jpeg';
import TopSection from '@/components/Pages/Portfolio/TopSection';
import PortfolioSection from '@/components/Pages/Portfolio/PortfolioSection';
import FounderVideo from '@/components/Pages/Portfolio/FounderVideo';
import getAllFounderVideos from '@/helpers/getAllFounderVideos';
import getAllCompanies from '@/helpers/getAllCompanies';
const PortfolioPage = async() => { 
  const founderVideos = await getAllFounderVideos()
  const companies = await getAllCompanies()

  return (
    <div>
      <Header title="Our Portfolio" image={image} breadcrumb="Our Portfolio" />
      <TopSection />
      <FounderVideo founderVideos={founderVideos} />
      <PortfolioSection companies={companies} />
    </div>
  );
};

export default PortfolioPage;
