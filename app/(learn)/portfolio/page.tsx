import React from "react";
import Header from "@/components/common/Header";
import image from "@/public/assets/headers/learn.jpeg";
import TopSection from "@/components/Portfolio/TopSection";
import PortfolioSection from "@/components/Portfolio/PortfolioSection";
const PortfolioPage = () => {
  return (
    <>
      <Header title="Portfolio" image={image} breadcrumb="Learn" />
      <TopSection />
      <PortfolioSection />
    </>
  );
};

export default PortfolioPage;
