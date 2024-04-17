import React from 'react';
import Header from '@/components/common/Header';
import image from '@/public/assets/headers/learn.jpeg';
import TopSection from '@/components/Pages/Portfolio/TopSection';
import PortfolioSection from '@/components/Pages/Portfolio/PortfolioSection';
import FounderVideo from '@/components/Pages/Portfolio/FounderVideo';
import getAllFounderVideos from '@/helpers/getAllFounderVideos';
const PortfolioPage = async() => { 
  const founderVideos = await getAllFounderVideos()
 
  return (
    <div>
      <Header title="Portfolio" image={image} breadcrumb="Learn" />
      <TopSection />
      <PortfolioSection />
      <FounderVideo founderVideos={founderVideos} />
    </div>
  );
};

export default PortfolioPage;
