import { Suspense } from 'react';
import Header from '@/components/common/Header';
import image from '@/public/assets/headers/learn.jpeg';
import TopSection from '@/components/Pages/Portfolio/TopSection';
import PortfolioSection from '@/components/Pages/Portfolio/PortfolioSection';
import FounderVideo from '@/components/Pages/Portfolio/FounderVideo';
import getAllFounderVideos from '@/helpers/getAllFounderVideos';
import getAllCompanies from '@/helpers/getAllCompanies';
import { getMetadata } from '@/components/utils/generateMetadata';

export const metadata = getMetadata({
  title: 'Our Portfolio | Dipalo Ventures',
  description:
    'Our first fund specialized in advancing built technologies at the intersection of digital and physical. We sought to foster innovative solutions that integrate seamlessly into our built world to promote sustainability and resilience.',
});
const PortfolioPage = async () => {
  const founderVideos = await getAllFounderVideos();
  const companies = await getAllCompanies();

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
    </div>
  );
};

export default PortfolioPage;
