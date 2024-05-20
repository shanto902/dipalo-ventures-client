import Header from '@/components/common/Header';
import image from '@/public/assets/headers/fund1.jpg';
import ThesisSection from '@/components/Pages/Fund1/ThesisSection';
import QuotesSection from '@/components/Pages/Fund1/QuotesSection';
import KeyMetrics from '@/components/Pages/Fund1/KeyMetrics';
import Investments from '@/components/Pages/Fund1/Investments';
import { getMetadata } from '@/components/utils/generateMetadata';
export const metadata = getMetadata({
  title: 'Fund I | Dipalo Ventures',
  description:
    'Building on our deep expertise in product development, we launched our first fund in early 2022. Our investment strategy centered around the idea that we live in a physical world where our experiences are increasingly interconnected with the digital world. As innovative, amazing new products and services are being introduced in this space, venture capital needs to invest in this next wave of opportunity.',
});
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
