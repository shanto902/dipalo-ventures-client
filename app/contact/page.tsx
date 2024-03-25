import React from "react";
import Header from "@/components/common/Header";
import image from '@/public/assets/headers/contact-us.jpg'
const ContactPage = () => {
  return (
    <>
      <Header
        title="Connect With Us"
        image={image}
        breadcrumb="Contact"
      />
    </>
  );
};

export default ContactPage;
