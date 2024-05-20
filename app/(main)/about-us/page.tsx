import image from '@/public/assets/headers/about-us.jpg';
import HeaderAboutUs from '@/components/Pages/AboutUs/HeaderAboutUs';
import TeamSection from '@/components/Pages/AboutUs/TeamSection';
import ResidencyAdvisor from '@/components/Pages/AboutUs/ResidencyAdvisor';
import { TResidencyAdvisor, TTeam } from '@/components/types';
import getAllTeamMembers from '@/helpers/getAllTeamMembers';
import getAllResidencyAdvisors from '@/helpers/getAllResidencyAdvisors';
import { getMetadata } from '@/components/utils/generateMetadata';

export const metadata = getMetadata({
  title: 'The Teams | Dipalo Ventures',
  description:
    'We Help To Achieve, Your Business Goal. Collectively, we represent a level of experience in product development and manufacturing generally not found in venture capital.',
});
const AboutUSPage = async () => {
  const members = await getAllTeamMembers();
  const residencyAdvisors = await getAllResidencyAdvisors();

  return (
    <>
      <HeaderAboutUs image={image} />
      <TeamSection members={members as unknown as TTeam[]} />
      <ResidencyAdvisor
        residencyAdvisors={residencyAdvisors as TResidencyAdvisor[]}
      />
    </>
  );
};

export default AboutUSPage;
