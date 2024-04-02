import LookingFor from "@/components/Home/LookingFor";
import Main from "@/components/Home/Main";
import Methodology from "@/components/Home/Methodology";
import Overview from "@/components/Home/Overview";
import Thesis from "@/components/Home/Thesis";
import WhatsWrongWithVC from "@/components/Home/WhatsWrongWithVC";
import WhatWeDo from "@/components/Home/WhatWeDo";

const HomePage = () => {
  return (
    <>
      <Main />
      <WhatWeDo />
      <Thesis />
      <Overview />
      <WhatsWrongWithVC/>
      <Methodology />
      <LookingFor />
    </>
  );
};

export default HomePage;
