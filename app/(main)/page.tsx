import LookingFor from '@/components/Pages/Home/LookingFor';
import Main from '@/components/Pages/Home/Main';
import Methodology from '@/components/Pages/Home/Methodology';
import Overview from '@/components/Pages/Home/Overview';
import PortfolioLogsMarquee from '@/components/Pages/Home/PortfolioLogsMarquee';
import Thesis from '@/components/Pages/Home/Thesis';
import WhatsWrongWithVC from '@/components/Pages/Home/WhatsWrongWithVC';
import WhatWeDo from '@/components/Pages/Home/WhatWeDo';
import getAllCompanies from '@/helpers/getAllCompanies';

const HomePage = async () => {
  const companies = await getAllCompanies()
  return (
    <>
      <Main />
      <WhatWeDo />
      <Thesis />
      <Overview />
      <Methodology />
      <WhatsWrongWithVC />
      <LookingFor />
      <PortfolioLogsMarquee companies={companies}/>
    </>
  );
};

export default HomePage;
