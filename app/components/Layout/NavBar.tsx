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
      <div className="mx-auto flex lg:mt-12 w-full max-w-7xl justify-between px-4 py-5 text-sm relative z-30">
        <section className="flex items-center gap-10">
          <Image src="/logo.svg" alt="logo" width={100} height={100} />
          {isSideMenuOpen && <ForwardedMobileNav closeSideMenu={closeSideMenu} ref={sidebarRef} />}
        </section>

        <section className="hidden md:flex items-center gap-8">
          <div className="hidden md:flex items-center gap-4 transition-all">
            {navItems.map((d, i) => (
              <div key={i} className="relative group px-2 py-3 transition-all">
                <span className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:underline decoration-dipalo underline-offset-8 font-semibold text-white text-lg">
                  <Link href={d.link ?? "#"}>
                    {d.label}
                  </Link>
                  {d.children && (
                    <IoIosArrowDown className="rotate-180 transition-all group-hover:rotate-0" />
                  )}
                </span>

                {d.children && (
                  <div className="absolute right-0 top-10 hidden w-auto flex-col gap-1 font-semibold rounded-lg bg-white text-black py-3 shadow-md transition-all group-hover:flex">
                    {d.children.map((ch, i) => (
                      <li key={i} className="flex cursor-pointer items-start hover:underline py-1 pl-2 pr-3 text-base text-neutral-400 hover:text-dipalo underline-offset-4 whitespace-nowrap ">
                        {ch.iconImage && (
                          <Image src={ch.iconImage} alt="item-icon" width={20} height={20} />
                        )}
                        <Link href={ch.link ? ch.link : "#"}>
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

        <FiMenu onClick={openSideMenu} className="cursor-pointer text-4xl md:hidden text-white" />
      </div>
    </nav>
  );
}

function MobileNav({ closeSideMenu }: { closeSideMenu: () => void }, ref: React.Ref<HTMLDivElement>) {
  return (
    <div className="fixed left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/60 md:hidden">
      <div className="h-full w-[65%] bg-white px-4 py-4" ref={ref} >
        <section className="flex justify-end">
          <AiOutlineClose onClick={closeSideMenu} className="cursor-pointer text-4xl text-wh text-black" />
        </section>
        <div className="flex flex-col text-base font-semibold text-black gap-2 transition-all" >
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
    <Link onClick={toggleItem} href={link ?? "#"} className="relative hover:text-dipalo px-2 py-3 transition-all">
      <p className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-black">
        <span>{label}</span>
        {children && (
          <IoIosArrowDown className={`text-xs transition-all ${isItemOpen && "rotate-180"}`} />
        )}
      </p>

      {isItemOpen && children && (
        <div className="w-auto flex-col gap-1 rounded-lg bg-white py-3 transition-all flex">
          {children.map((ch, i) => (
            <Link key={i} href={ch.link ?? "#"} className="flex cursor-pointer text-black items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-dipalo">
    
              <span className=" pl-12">{ch.label}</span>
            </Link>
          ))}
        </div>
      )}
    </Link>
  );
}
