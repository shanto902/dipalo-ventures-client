import Header from "@/components/common/Header";
import React from "react";
import image from "@/public/assets/headers/about-us.jpg";
import HeaderAboutUs from "@/components/AboutUs/HeaderAboutUs";
import TeamSection from "@/components/AboutUs/TeamSection";

const AboutUSPage = () => {
  return (
    <>
      <HeaderAboutUs image={image} />
      <TeamSection />
    </>
  );
};

export default AboutUSPage;
