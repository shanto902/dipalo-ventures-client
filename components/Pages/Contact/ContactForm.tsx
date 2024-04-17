import React from 'react';

const ContactForm = () => {
  return (
    <div className="w-[1920px] h-[894.44px] relative bg-white">
      <div className="w-[650px] h-[674.44px] left-[310px] top-[100px] absolute">
        <div className="w-[355.90px] h-[84.44px] left-[35px] top-0 absolute text-neutral-800 text-5xl font-bold  leading-[84.44px]">
          Contact Us.
        </div>
        <div className="w-[497.28px] h-[103px] left-[35px] top-[64px] absolute text-zinc-900 text-opacity-75 text-lg font-normal  leading-[30px]">
          Learn more about our investments and residency program.
        </div>
        <div className="w-[580px] h-[62.50px] left-[35px] top-[182.43px] absolute rounded-[5px] border-2 border-black border-opacity-10">
          <div className="w-[536px] h-[17px] left-[22px] top-[23.57px] absolute">
            <div className="left-0 top-[2px] absolute text-neutral-500 text-[15px] font-normal  tracking-tight">
              Your Name
            </div>
          </div>
        </div>
        <div className="w-[580px] h-[62.50px] left-[35px] top-[252.43px] absolute rounded-[5px] border-2 border-black border-opacity-10">
          <div className="w-[536px] h-[17px] left-[22px] top-[23.57px] absolute">
            <div className="left-0 top-[2px] absolute text-neutral-500 text-[15px] font-normal  tracking-tight">
              Your Email
            </div>
          </div>
        </div>
        <div className="w-[580px] h-[62.50px] left-[35px] top-[322.43px] absolute rounded-[5px] border-2 border-black border-opacity-10">
          <div className="w-[536px] h-[17px] left-[22px] top-[23.57px] absolute">
            <div className="left-0 top-[2px] absolute text-neutral-500 text-[15px] font-normal  tracking-tight">
              Phone Number
            </div>
          </div>
        </div>
        <div className="w-[580px] h-[62.50px] left-[35px] top-[392.43px] absolute rounded-[5px] border-2 border-black border-opacity-10">
          <div className="w-[536px] h-[17px] left-[22px] top-[23.57px] absolute">
            <div className="left-0 top-[2px] absolute text-neutral-500 text-[15px] font-normal  tracking-tight">
              Subject
            </div>
          </div>
        </div>
        <div className="w-[580px] h-[132.50px] left-[35px] top-[462.43px] absolute rounded-[5px] border-2 border-black border-opacity-10" />
        <div className="w-[207.70px] h-[52px] left-[35px] top-[602.43px] absolute bg-amber-500 rounded-md border-2 border-amber-500">
          <div className="w-[123.90px] h-[17px] left-[42px] top-[17px] absolute text-center text-white text-base font-normal  uppercase tracking-widest">
            Submit Now
          </div>
        </div>
      </div>
      <img
        className="w-[580px] h-[612.63px] left-[995px] top-[120px] absolute rounded-[5px] shadow object-cover"
        src="/assets/2.jpeg"
      />
    </div>
  );
};

export default ContactForm;
