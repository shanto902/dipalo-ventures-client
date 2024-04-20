import { useState } from 'react';
import { motion, AnimatePresence, MotionConfig } from 'framer-motion';
import { navItems } from './NavItems';
import Link from 'next/link';
import { IoIosArrowDown } from 'react-icons/io';
import Image from 'next/image';
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
export default function Navbar() {
  const [mobileNav, setMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <header className="fixed lg:hidden top-0 right-0 p-6 bg-black/30 rounded-bl-2xl">
      <nav className="container mx-auto">
        <motion.button
          initial="hide"
          animate={mobileNav ? 'show' : 'hide'}
          onClick={toggleMobileNav}
          className="flex flex-col space-y-1 relative z-10"
        >
          <motion.span
            variants={{
              hide: {
                rotate: 0,
              },
              show: {
                rotate: 45,
                y: 5,
              },
            }}
            className="w-6 bg-white h-px block"
          ></motion.span>
          <motion.span
            variants={{
              hide: {
                opacity: 1,
              },
              show: {
                opacity: 0,
              },
            }}
            className="w-6 bg-white h-px block"
          ></motion.span>
          <motion.span
            variants={{
              hide: {
                rotate: 0,
              },
              show: {
                rotate: -45,
                y: -5,
              },
            }}
            className="w-6 bg-white h-px block"
          ></motion.span>
        </motion.button>
        <AnimatePresence>
          {mobileNav && (
            <MotionConfig
              transition={{
                type: 'spring',
                bounce: 0.1,
              }}
            >
              <motion.div
                key="mobile-nav"
                variants={{
                  hide: {
                    x: '-100%',
                    transition: {
                      type: 'spring',
                      bounce: 0.1,
                      when: 'afterChildren',
                      staggerChildren: 0.25,
                    },
                  },
                  show: {
                    x: '0%',
                    transition: {
                      type: 'spring',
                      bounce: 0.1,
                      when: 'beforeChildren',
                      staggerChildren: 0.25,
                    },
                  },
                }}
                initial="hide"
                animate="show"
                exit="hide"
                className="fixed inset-0 bg-dipalo p-6 flex flex-col justify-center space-y-10 lg:hidden"
              >
                <motion.ul
                  variants={{
                    hide: {
                      y: '25%',
                      opacity: 0,
                    },
                    show: {
                      y: '0%',
                      opacity: 1,
                    },
                  }}
                  className="list-none space-y-6 "
                >
                  {navItems.map((d, i) => (
                    <li
                      onClick={toggleMobileNav}
                      className="text-white text-lg font-bold drop-shadow-xl hover:underline underline-offset-4"
                      key={i}
                    >
                      {' '}
                      <Link
                        className=" inline-flex items-center gap-2"
                        href={d.link ?? '#'}
                      >
                        {d.label}{' '}
                      </Link>
                      <ul className=" list-disc ml-10">
                        {d.children &&
                          d.children.map((ch, j) => (
                            <li className="hover:underline underline-offset-4" key={j}>
                              <Link
                                className=" inline-flex items-center gap-2"
                                href={ch.link ?? '#'}
                              >
                                {ch.label}
                              </Link>

                              <ul className="ml-10 list-disc">
                                {ch.children &&
                                  ch.children.map((sub, i) => (
                                    <li className='hover:underline underline-offset-4' key={i}>
                                      {' '}
                                      <Link
                                        className=" inline-flex items-center gap-2"
                                        href={sub.link ?? '#'}
                                      >
                                        {' '}
                                        {sub.label}{' '}
                                      </Link>
                                    </li>
                                  ))}
                              </ul>
                            </li>
                          ))}
                      </ul>
                    </li>
                  ))}
                </motion.ul>
                <motion.div
                  variants={{
                    hide: {
                      y: '25%',
                      opacity: 0,
                    },
                    show: {
                      y: '0%',
                      opacity: 1,
                    },
                  }}
                  className="w-full h-px bg-white/30"
                ></motion.div>
                <motion.ul
                  variants={{
                    hide: {
                      y: '25%',
                      opacity: 0,
                    },
                    show: {
                      y: '0%',
                      opacity: 1,
                    },
                  }}
                  className="list-none flex justify-center gap-x-4"
                >
                  <li>
                   <FaLinkedin  size={32} className='text-white  backdrop-blur-md'/>
                  </li>
                  <li>
                  <FaFacebookSquare size={32} className='text-white  backdrop-blur-md'/>
                  </li>
                  <li>
                  <FaInstagramSquare size={32} className='text-white  backdrop-blur-md'/>
                  </li>
                </motion.ul>
                <motion.div
                  variants={{
                    hide: {
                      y: '25%',
                      opacity: 0,
                    },
                    show: {
                      y: '0%',
                      opacity: 1,
                    },
                  }}
                  className=" text-center backdrop-blur-md text-white text-xs font-normal"
                >
                  Copyright © 2024 Dipalo Ventures. All Rights Reserved.
                </motion.div>
              </motion.div>
            </MotionConfig>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
