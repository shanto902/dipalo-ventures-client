import React from "react";
import Header from "@/components/common/Header";
import image from '@/public/assets/headers/contact-us.jpg'
import ContactInfo from "@/components/Contact/ContactInfo";
import FAQ from "@/components/Contact/FAQ";
import ContactForm from "@/components/Contact/ContactForm";
const ContactPage = () => {
  return (
    <>
      <Header
        title="Connect With Us"
        image={image}
        breadcrumb="Contact"
      />
      <ContactInfo />
      <FAQ />
      <ContactForm />
    </>
  );
};

export default ContactPage;
