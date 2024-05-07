import PaddingContainer from '@/components/Layout/PaddingContainer';
import dynamic from 'next/dynamic';
import React from 'react';
const LottieAnimation = dynamic(
  () => import('@/components/common/LottieAnimation'),
  {
    ssr: false
  }
);
import animationData from '@/components/LottieFiles/contact-us.json';
const ContactForm = () => {
  return (
   <PaddingContainer>
    <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
    <LottieAnimation className='' animationData={animationData} />
    </div>
    <div className="card shrink-0 w-full max-w-[50%]">
      <form className="card-body">
        <div className="form-control">  
          <input type="text" placeholder="Your Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <input type="email" placeholder="Your Email" className="input input-bordered" required />
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
          <input type="text" placeholder="Subject" className="input input-bordered" required />
        </div>
        <div className="form-control">  
        <textarea className="textarea textarea-bordered" placeholder="Your Comment"></textarea>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-dipalo text-white hover:text-dipalo hover:bg-black">Submit Now</button>
        </div>
      </form>
    </div>
  </div>
</div>
   </PaddingContainer>
  );
};

export default ContactForm;
