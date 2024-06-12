import Header from '@/components/common/Header';
import image from '@/public/assets/headers/contact-us.jpg';
import ContactInfo from '@/components/Pages/Contact/ContactInfo';
import FAQ from '@/components/Pages/Contact/FAQ';
import ContactForm from '@/components/Pages/Contact/ContactForm';
import GoogleMap from '@/components/Pages/Contact/GoogleMap';
import { getMetadata } from '@/components/utils/generateMetadata';
import PaddingContainer from '@/components/Layout/PaddingContainer';

export const metadata = getMetadata({
  title: 'Connect With Us | Dipalo Ventures',
  description: '1623 W Fulton St, Suite 237 Chicago, IL 60612',
});
const ContactPage = () => {
  return (
    <>
      <Header title="Connect With Us" image={image} breadcrumb="Contact" />
      <ContactForm />
      <FAQ />
      <PaddingContainer className=" my-20 gap-5 place-items-center grid lg:grid-cols-3 md:grid-cols-2 place-content-center">
        <ContactInfo />
        <GoogleMap />
      </PaddingContainer>
    </>
  );
};

export default ContactPage;
