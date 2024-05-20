import Header from '@/components/common/Header';
import image from '@/public/assets/headers/fund2.jpg';
import Fund2Thesis from '@/components/Pages/Fund2/Fund2Thesis';
import FocusAreas from '@/components/Pages/Fund2/FocusAreas';
import Partnership from '@/components/Pages/Fund2/Partnership';
import FundTerms from '@/components/Pages/Fund2/FundTerms';
import GoldenVisa from '@/components/Pages/Fund2/GoldenVisa';
import getAllFocusAreas from '@/helpers/getAllFocusAreas';
import { getMetadata } from '@/components/utils/generateMetadata';

export const metadata = getMetadata({
  title: 'Heed ClimateTech Fund II | Dipalo Ventures',
  description:
    'Hard Tech Innovation for Climate Change: Engineering for a Greener World',
});

const Fund2Page = async () => {
  const focusAreas = await getAllFocusAreas();
  return (
    <>
      <Header
        title="Dipalo Heed ClimateTech Fund II"
        image={image}
        breadcrumb="Funds"
      />
      <Fund2Thesis />
      <FocusAreas focusAreas={focusAreas} />
      <Partnership />
      <FundTerms />
      <GoldenVisa />
    </>
  );
};

export default Fund2Page;
