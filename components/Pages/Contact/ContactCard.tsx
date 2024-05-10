import { ReactNode } from 'react';
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa6';
import parse from 'html-react-parser';
const ContactCard = ({
  mainText,
  subText,
  children,
  isSocial,
}: {
  mainText: string;
  subText?: string;
  children: ReactNode;
  isSocial?: boolean;
}) => {
  return (
    <div className="lg:w-96 md:w-80 w-72 h-60 relative group">
      <div className="w-full  h-full left-0 top-8 absolute bg-white rounded-[10px] border shadow group-hover:shadow-lg transition-all duration-500 border-gray-200 flex flex-col items-baseline">
        <div className=" absolute top-10 mx-5">
          <h3 className=" mb-3 lg:text-xl font-bold text-base text-left">
            {mainText}
          </h3>
          <div className=" text-base font-semibold  ">
            {isSocial ? (
              <div className=" flex gap-5  text-4xl text-black">
                {' '}
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/dipaloventures/"
                >
                  <FaLinkedin className="hover:text-dipalo cursor-pointer transition-colors duration-300" />{' '}
                </a>
                <a target="_blank" href="https://twitter.com/DipaloVentures">
                  <FaTwitter className="hover:text-dipalo cursor-pointer transition-colors duration-300" />
                </a>{' '}
                <a
                  target="_blank"
                  href="https://www.instagram.com/dipaloventures/"
                >
                  {' '}
                  <FaInstagram className="hover:text-dipalo cursor-pointer transition-colors duration-300" />
                </a>{' '}
                <a
                  target="_blank"
                  href="https://www.youtube.com/@dipaloventures9243"
                >
                  <FaYoutube className="hover:text-dipalo cursor-pointer transition-colors duration-300" />
                </a>{' '}
              </div>
            ) : (
              <div className="rich-text">{parse(subText as string)}</div>
            )}
          </div>
        </div>
      </div>
      <div
        className="size-16 group-hover:text-white group-hover:bg-dipalo group-hover:drop-shadow transition-all duration-500 drop-shadow-none
       left-10 -top-3 flex justify-center items-center absolute bg-white rounded-full border border-gray-200"
      >
        {children}
      </div>
    </div>
  );
};

export default ContactCard;
