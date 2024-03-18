/** @format */
"use client";

import Image from "next/image";
import { useState } from "react";

import logo from "@/public/logo.svg";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useAutoAnimate } from "@formkit/auto-animate/react";

type TNavItem = {
  label: string;
  link?: string;
  children?: TNavItem[];
  iconImage?: string;
};

const navItems: TNavItem[] = [
    {
        label: "Home",
        link: "/"
      },
  {
    
    label: "Learn",
    children: [
      {
        label: "Portfolio",
        link: "/portfolio",

      },
      {
        label: "Dipalo Ventures Fund I",
        link: "/fund-1",

      },
      {
        label: "Residency Program",
        link: "/residency-program",

      },
      {
        label: "About Us",
        link: "/about-us",

      }
    
    ]
  },
  {
    label: "Invest",
    link: "/invest"
  },
  {
    label: "Contact",
    link: "/contact"
  }
];

export default function Navbar() {
  const [animationParent] = useAutoAnimate();
  const [isSideMenuOpen, setSideMenu] = useState(false);
  function openSideMenu() {
    setSideMenu(true);
  }
  function closeSideMenu() {
    setSideMenu(false);
  }

  return (
   <nav className=" absolute w-full">
     <div className=" mx-auto flex mt-12 w-full max-w-7xl justify-between px-4 py-5 text-sm relative z-30">
      {/* left side  */}
      <section ref={animationParent} className="flex items-center gap-10">
        {/* logo */}
        <Image src={logo} alt=" logo" />
        {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}
     
      </section>

      {/* right side data */}
      <section className=" hidden md:flex   items-center gap-8 ">
      <div className="hidden md:flex items-center gap-4 transition-all">
          {navItems.map((d, i) => (
            <div
              key={i}
             
              className="relative group  px-2 py-3 transition-all "
            >
              <span className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:underline decoration-dipalo underline-offset-8 text-white text-lg ">
                <Link  href={d.link ?? "#"}>{d.label}</Link>
                {d.children && (
                  <IoIosArrowDown className=" rotate-180  transition-all group-hover:rotate-0" />
                )}
              </span>

              {/* dropdown */}
              {d.children && (
                <div className="absolute   right-0   top-10 hidden w-auto  flex-col gap-1   rounded-lg bg-black text-white py-3 shadow-md  transition-all group-hover:flex ">
                  {d.children.map((ch, i) => (
                    <li
          
                      key={i}
                      className=" flex cursor-pointer items-start hover:underline py-1 pl-2 pr-3 text-base  text-neutral-400 hover:text-dipalo underline-offset-4  "
                    >
                      {/* image */}
                      {ch.iconImage && (
                        <Image src={ch.iconImage} alt="item-icon" />
                      )}
                      {/* item */}
                      <Link href={ch.link ? ch.link : "#"} className="whitespace-nowrap   pl-3 ">
                        {ch.label}
                      </Link>
                    </li>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <FiMenu
        onClick={openSideMenu}
        className="cursor-pointer text-4xl md:hidden text-white"
      />
    </div>
   </nav>
  );
}

function MobileNav({ closeSideMenu }: { closeSideMenu: () => void }) {
  return (
    <div className="fixed left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/60 md:hidden">
      <div className=" h-full w-[65%] bg-black px-4 py-4">
        <section className="flex justify-end">
          <AiOutlineClose
            onClick={closeSideMenu}
            className="cursor-pointer text-4xl text-wh text-white"
          />
        </section>
        <div className=" flex flex-col text-base text-white  gap-2 transition-all">
          {navItems.map((d, i) => (
            <SingleNavItem
              key={i}
              label={d.label}
              iconImage={d.iconImage}
              link={d.link}
            >
              {d.children}
            </SingleNavItem>
          ))}
        </div>

      </div>
    </div>
  );
}

function SingleNavItem(d: TNavItem) {
  const [animationParent] = useAutoAnimate();
  const [isItemOpen, setItem] = useState(false);

  function toggleItem() {
    return setItem(!isItemOpen);
  }

  return (
    <Link
      ref={animationParent}
      onClick={toggleItem}
      href={d.link ?? "#"}
      className="relative   px-2 py-3 transition-all "
    >
      <p className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-black ">
        <span>{d.label}</span>
        {d.children && (
          // rotate-180
          <IoIosArrowDown
            className={`text-xs transition-all  ${isItemOpen && " rotate-180"}`}
          />
        )}
      </p>

      {/* dropdown */}
      {isItemOpen && d.children && (
        <div className="  w-auto  flex-col gap-1   rounded-lg bg-black py-3   transition-all flex ">
          {d.children.map((ch, i) => (
            <Link
              key={i}
              href={ch.link ?? "#"}
              className=" flex cursor-pointer text-white items-center  py-1 pl-6 pr-8  text-neutral-400 hover:text-dipalo  "
            >
              {/* image */}
              {ch.iconImage && <Image src={ch.iconImage} alt="item-icon" />}
              {/* item */}
              <span className="whitespace-nowrap   pl-3 ">{ch.label}</span>
            </Link>
          ))}
        </div>
      )}
    </Link>
  );
}