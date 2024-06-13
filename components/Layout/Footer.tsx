import PaddingContainer from './PaddingContainer';
import Image from 'next/image';
import Link from 'next/link';

import {
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTwitter,
  FaMediumM,
} from 'react-icons/fa';
import NewsLetter from '../common/NewsLetter';

const Footer = () => {
  type TSocialIcons = {
    icon: JSX.Element;
    link: string;
  };
  const socialIcons: TSocialIcons[] = [
    {
      icon: <FaLinkedin />,
      link: 'https://www.linkedin.com/company/dipaloventures/',
    },
    {
      icon: <FaInstagram />,
      link: 'https://www.instagram.com/dipaloventures/',
    },
    {
      icon: <FaYoutube />,
      link: 'https://www.youtube.com/@dipaloventures',
    },
    {
      icon: <FaTwitter />,
      link: 'https://twitter.com/DipaloVentures',
    },
    {
      icon: <FaMediumM />,
      link: 'https://medium.com/@dipaloventures',
    },
  ];
  const quickLinks = [
    {
      text: 'ClimateTech Investors',
      link: '/funds/fund-1',
    },
    {
      text: 'Residency Program',
      link: '/residency-program',
    },
    {
      text: 'Golden Visa Opportunity',
      link: '/funds/fund-2/golden-visa',
    },
  ];
  return (
    <div className=" bg-zinc-900">
      <PaddingContainer className=" pt-12 pb-6">
        <Image src="/logo.svg" alt="Logo" width={133} height={51} />
        <div className=" grid lg:grid-cols-4 grid-cols-1  mt-10 mb-5 ">
          <section>
            <p className=" text-white  text-xl py-5">Quick Links</p>
            <ol className=" text-white text-base font-normal leading-7 list-none">
              {quickLinks.map(({ link, text }, i) => (
                <li key={i}>
                  <Link href={link}>
                    <span className="hover-underline-animation hover:text-dipalo cursor-pointer">
                      {text}
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </section>

          <section className="  text-white text-base font-normal leading-7">
            <h3 className=" text-white  text-xl py-5">Say Hello</h3>
            <ul className=" list-none">
              <li>
                <a href="mailto:info@dipaloventures.com">
                  <span className="hover-underline-animation hover:text-dipalo cursor-pointer">
                    info@dipaloventures.com
                  </span>
                </a>
              </li>

              <li>
                {' '}
                <a href="mailto: deals@dipaloventures.com">
                  <span className="hover-underline-animation hover:text-dipalo cursor-pointer">
                    deals@dipaloventures.com
                  </span>
                </a>
              </li>
              <li className=" inline-flex gap-3 my-2">
                {socialIcons.map((icon, i) => (
                  <a
                    className=" hover:text-dipalo duration-500 transition-all"
                    key={i}
                    target="_blank"
                    href={icon.link}
                  >
                    {icon.icon}
                  </a>
                ))}
              </li>
            </ul>
          </section>
          <div className=" text-white text-base font-normal leading-7">
            <p className=" text-white  text-xl py-5">Find us in</p>
            <a
              className="hover-underline-animation hover:text-dipalo"
              target="_blank"
              href="https://www.google.com/maps/place/1623+W+Fulton+St+%23237,+Chicago,+IL+60612,+USA/@41.8867035,-87.6702241,17z/data=!3m1!4b1!4m5!3m4!1s0x880e2d5531f03633:0x733891b95b9b87df!8m2!3d41.8866995!4d-87.6676492?entry=ttu"
            >
              {' '}
              1623 W Fulton St, Suite 237 <br /> Chicago, IL 60612
            </a>
          </div>

          <div className="">
            <p className=" text-white  text-4xl font-bold pt-5 pb-3">
              Get in touch!
            </p>

            <p className="text-white">Subscribe to our newsletter</p>

            <NewsLetter />
          </div>
        </div>

        <div className=" opacity-75 text-white text-sm font-normal leading-[30px]">
          Copyright © 2024 Dipalo Ventures. All Rights Reserved.
        </div>
      </PaddingContainer>
    </div>
  );
};

export default Footer;
