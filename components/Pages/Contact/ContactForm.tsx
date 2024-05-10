'use client';
import PaddingContainer from '@/components/Layout/PaddingContainer';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import animationData from '@/components/LottieFiles/contact-us2.json';
const LottieAnimation = dynamic(
  () => import('@/components/common/LottieAnimation'),
  {
    ssr: false,
  }
);

const ContactForm = () => {
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
            <form className="card-body space-y-2">
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Your Phone No"
                  className="input input-bordered"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  title="Phone number format: xxx-xxx-xxxx"
                  required
                />
              </div>

              <div className="form-control">
                <input
                  type="text"
                  placeholder="Subject"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <textarea
                  className="textarea textarea-bordered"
                  placeholder="Your Comment"
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-dipalo text-white w-32 mx-auto hover:text-dipalo hover:bg-black">
                  Submit Now
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
