import React from 'react';
import Header from '@/components/common/Header';
import image from '@/public/assets/headers/contact-us.jpg';
import ContactInfo from '@/components/Pages/Contact/ContactInfo';
import FAQ from '@/components/Pages/Contact/FAQ';
import ContactForm from '@/components/Pages/Contact/ContactForm';
import GoogleMap from '@/components/Pages/Contact/GoogleMap';
const ContactPage = () => {
  return (
    <>
      <Header title="Connect With Us" image={image} breadcrumb="Contact" />
      <ContactInfo />
      <FAQ />
      <ContactForm />
      <GoogleMap />
    </>
  );
};

export default ContactPage;
