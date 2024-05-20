import Header from '@/components/common/Header';
import image from '@/public/assets/headers/residency-program.jpg';
import Process from '@/components/Pages/ResidencyProgram/Process';
import CaseStudies from '@/components/Pages/ResidencyProgram/CaseStudies';
import Residency from '@/components/Pages/ResidencyProgram/Residency';
import getAllCaseStudies from '@/helpers/getAllCaseStudies';
import Partners from '@/components/Pages/ResidencyProgram/Partners';
import getAllPartners from '@/helpers/getAllPartners';
import { getMetadata } from '@/components/utils/generateMetadata';

export const metadata = getMetadata({
  title: 'Residency Program | Dipalo Ventures',
  description:
    'The Dipalo Ventures Residency is our technical diligence program identifying product design and engineering gaps. We conduct the technical diligence prior to the initial investment.',
});

const ResidencyProgramPage = async () => {
  const caseStudies = await getAllCaseStudies();
  const partners = await getAllPartners();
  return (
    <>
      <Header title="Residency Program" image={image} breadcrumb="Residency" />
      <Process />
      <Residency />
      <CaseStudies caseStudies={caseStudies} />
      <Partners partners={partners} />
    </>
  );
};

export default ResidencyProgramPage;
