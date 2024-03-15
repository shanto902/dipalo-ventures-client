import LookingFor from "./components/Home/LookingFor";
import Main from "./components/Home/Main";
import Methodology from "./components/Home/Methodology";
import Overview from "./components/Home/Overview";
import Thesis from "./components/Home/Thesis";
import WhatWeDo from "./components/Home/WhatWeDo";

const Home = () => {
  return (
    <>
      <Main />
      <WhatWeDo />
      <Thesis />
      <Overview />
      <Methodology />
      <LookingFor />
    </>
  );
};

export default Home;
