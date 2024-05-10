import Header from '@/components/common/Header';
import image from '@/public/assets/headers/fund2.jpg';
import Fund2Thesis from '@/components/Pages/Fund2/Fund2Thesis';
import FocusAreas from '@/components/Pages/Fund2/FocusAreas';
import Partnership from '@/components/Pages/Fund2/Partnership';
import FundTerms from '@/components/Pages/Fund2/FundTerms';
import GoldenVisa from '@/components/Pages/Fund2/GoldenVisa';
const Fund2Page = () => {
  return (
    <>
      <Header
        title="Dipalo Heed ClimateTech Fund II"
        image={image}
        breadcrumb="Funds"
      />
      <Fund2Thesis />
      <FocusAreas />
      <Partnership />
      <FundTerms />
      <GoldenVisa />
    </>
  );
};

export default Fund2Page;
