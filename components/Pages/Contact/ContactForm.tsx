'use client';
import PaddingContainer from '@/components/Layout/PaddingContainer';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import animationData from '@/components/LottieFiles/contact-us2.json';
import { FormEvent, useState } from 'react';
import directus from '@/lib/directus';
import { createItem } from '@directus/sdk';
import Swal from 'sweetalert2';
const LottieAnimation = dynamic(
  () => import('@/components/common/LottieAnimation'),
  {
    ssr: false,
  }
);
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNo: '',
    subject: '',
    comment: '',
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phoneNo', formData.phoneNo);
      formDataToSend.append('subject', formData.subject);
      formDataToSend.append('comment', formData.comment);

      // Log form information
      console.log('Form submitted with the following information:');
      formDataToSend.forEach((value, key) => {
        console.log(key, value);
      });

      const response = await directus.request(createItem('contacts', formData));
      console.log('Response from Directus:', response);
    } catch (error) {
      console.error('Error occurred:', error);
      Swal.fire({
        title: 'Error!',
        text: 'Something Went wrong',
        icon: 'error',
        confirmButtonText: 'Close',
      });
    }
    Swal.fire({
      text: 'Form submitted successfully',
      icon: 'success',
      confirmButtonText: 'Close',
    });
    (e.target as HTMLFormElement).reset();
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
        duration: 0.5,
      },
    },
  };

  const item = {
    hidden: { x: -40 },
    show: { x: 0, transition: { duration: 0.5 } },
  };
  return (
    <PaddingContainer>
      <div className="my-10">
        <div className="flex flex-col md:flex-row">
          <div className="text-center flex-1 self-end   lg:text-left ">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <motion.h2 variants={item} className="text-4xl font-bold my-2">
                Contact Us.
              </motion.h2>
              <motion.p variants={item}>
                Learn more about our investments and residency program.
              </motion.p>
            </motion.div>
            <LottieAnimation className="" animationData={animationData} />
          </div>
          <div className="card flex-1 w-full">
            <form onSubmit={handleSubmit} className="card-body space-y-2">
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Your Name"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Your Phone No"
                  className="input input-bordered"
                  onChange={(e) =>
                    setFormData({ ...formData, phoneNo: e.target.value })
                  }
                  required
                />
              </div>

              <div className="form-control">
                <input
                  type="text"
                  placeholder="Subject"
                  className="input input-bordered"
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  required
                />
              </div>
              <div className="form-control">
                <textarea
                  className="textarea textarea-bordered"
                  placeholder="Your Comment"
                  onChange={(e) =>
                    setFormData({ ...formData, comment: e.target.value })
                  }
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-dipalo text-white w-32 mx-auto hover:text-dipalo hover:bg-black">
                  Submit to Express Yourself
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </PaddingContainer>
  );
};

export default ContactForm;
