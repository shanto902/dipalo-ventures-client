/** @format */
"use client";
import { useState, useRef, useEffect, forwardRef  } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { navItems } from "./NavItems";
import { TNavItem } from "./types";





const ForwardedMobileNav = forwardRef(MobileNav);
export default function Navbar() {
  const [isSideMenuOpen, setSideMenu] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setSideMenu(false);
      }
    }

    if (isSideMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isSideMenuOpen]);

  function openSideMenu() {
    setSideMenu(true);
  }

  function closeSideMenu() {
    setSideMenu(false);
  }

  return (
    <nav className="absolute w-full">
      <div className="relative z-30 flex justify-between w-full px-4 py-5 mx-auto text-sm lg:mt-12 max-w-7xl">
        <section className="flex items-center gap-10">
        <Link href={'/'}>  <Image src="/logo.svg" alt="logo" width={100} height={100} /></Link>
          {isSideMenuOpen && <ForwardedMobileNav closeSideMenu={closeSideMenu} ref={sidebarRef} />}
        </section>

        <section className="items-center hidden gap-8 md:flex">
          <div className="items-center hidden gap-4 transition-all md:flex">
            {navItems.map((d, i) => (
              <div key={i} className="relative px-2 py-3 transition-all group">
                <span className="flex items-center gap-2 text-lg font-semibold text-white cursor-pointer text-neutral-400 group-hover:underline decoration-dipalo underline-offset-8">
                  <Link href={d.link ?? "#"}>
                    {d.label}
                  </Link>
                  {d.children && (
                    <IoIosArrowDown className="transition-all rotate-180 group-hover:rotate-0" />
                  )}
                </span>

                {d.children && (
                  <div className="absolute right-0 flex-col hidden w-auto gap-1 py-3 font-semibold text-black transition-all bg-white rounded-lg shadow-md top-10 group-hover:flex">
                    {d.children.map((ch, i) => (
                      <li key={i} className="flex items-start py-1 pl-2 pr-3 text-base cursor-pointer hover:underline text-neutral-400 hover:text-dipalo underline-offset-4 whitespace-nowrap ">
                        {ch.iconImage && (
                          <Image src={ch.iconImage} alt="item-icon" width={20} height={20} />
                        )}
                        <Link className="w-full" href={ch.link ? ch.link : "#"}>
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

        <FiMenu onClick={openSideMenu} className="text-4xl text-white cursor-pointer md:hidden" />
      </div>
    </nav>
  );
}

function MobileNav({ closeSideMenu }: { closeSideMenu: () => void }, ref: React.Ref<HTMLDivElement>) {
  return (
    <div className="fixed top-0 left-0 flex justify-end w-full h-full min-h-screen bg-black/60 md:hidden">
      <div className="h-full w-[65%] bg-white px-4 py-4" ref={ref} >
        <section className="flex justify-end">
          <AiOutlineClose onClick={closeSideMenu} className="text-4xl text-black cursor-pointer text-wh" />
        </section>
        <div className="flex flex-col gap-2 text-base font-semibold text-black transition-all" >
          {navItems.map((d, i) => (
            <SingleNavItem key={i} label={d.label} iconImage={d.iconImage} link={d.link}>
              {d.children}
            </SingleNavItem>
          ))}
        </div>
      </div>
    </div>
  );
}



function SingleNavItem({ label, iconImage, link, children }: TNavItem) {
  const [isItemOpen, setItem] = useState(false);

  function toggleItem() {
    return setItem(!isItemOpen);
  }

  return (
    <Link onClick={toggleItem} href={link ?? "#"} className="relative px-2 py-3 transition-all hover:text-dipalo">
      <p className="flex items-center gap-2 cursor-pointer text-neutral-400 group-hover:text-black">
        <span>{label}</span>
        {children && (
          <IoIosArrowDown className={`text-xs transition-all ${isItemOpen && "rotate-180"}`} />
        )}
      </p>

      {isItemOpen && children && (
        <div className="flex flex-col w-auto gap-1 py-3 transition-all bg-white rounded-lg">
          {children.map((ch, i) => (
            <Link key={i} href={ch.link ?? "#"} className="flex items-center py-1 pl-6 pr-8 text-black cursor-pointer text-neutral-400 hover:text-dipalo">
    
              <span className="pl-12 ">{ch.label}</span>
            </Link>
          ))}
        </div>
      )}
    </Link>
  );
}
