import Header from '@/components/common/Header';
import image from '@/public/assets/headers/golden-visa.jpg';
import getAllBenefits from '@/helpers/getAllBenefits';
import Benefits from '@/components/Pages/Fund2/GoldenVisa/Benefits';
import getGoldenVisaPage from '@/helpers/getGoldenVisaPage';
import WhyPortugal from '@/components/Pages/Fund2/GoldenVisa/WhyPortugal';
import Investment from '@/components/Pages/Fund2/GoldenVisa/Investment';
import FundRoute from '@/components/Pages/Fund2/GoldenVisa/FundRoute';
import Process from '@/components/Pages/Fund2/GoldenVisa/Process';
import FAQ from '@/components/Pages/Fund2/GoldenVisa/FAQ';
import Video from '@/components/Pages/Fund2/GoldenVisa/Video';
import { getMetadata } from '@/components/utils/generateMetadata';

export const metadata = getMetadata({
  title: 'Portuguese Golden Visa | Dipalo Ventures',
  description:
    'Portugal is one of the most competitive countries for obtaining a Golden Visa, with a simple program that grants investors easy access to all countries in the Schengen Zone, an advantageous tax program, and a straightforward path to citizenship.',
});

const GoldenVisaPage = async () => {
  const benefits = await getAllBenefits();
  const goldenVisaPage = await getGoldenVisaPage();
  console.log(goldenVisaPage);
  return (
    <>
      <Header
        title="Portuguese Golden Visa"
        breadcrumb="Fund-2"
        image={image}
      />
      <WhyPortugal title={goldenVisaPage.whyPortugal} />

      <Investment
        text={goldenVisaPage.investment}
        animationLink={goldenVisaPage.investmentAnimation}
      />
      <Benefits benefits={benefits} />
      <FundRoute
        text={goldenVisaPage.whyTakeTheFundRoute}
        animationLink={goldenVisaPage.fundRouteAnimation}
      />
      <Process />
      <FAQ />
      <Video />
    </>
  );
};

export default GoldenVisaPage;
