/** @format */
"use client";
import { useState, useRef, useEffect, forwardRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { navItems } from "./NavItems";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";

const ForwardedMobileNav = forwardRef(MobileNav);

const Navbar = () => {
  const [isSideMenuOpen, setSideMenu] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const currentPath = usePathname();
  // For sidebar close on clicking outside of sidebar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setSideMenu(false);
      }
    };

    if (isSideMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isSideMenuOpen]);

  const openSideMenu = () => {
    setSideMenu(true);
  };

  const closeSideMenu = () => {
    setSideMenu(false);
  };

  return (
    <nav className="absolute w-full">
      <div className="relative z-30 flex justify-between w-full px-4 py-5 mx-auto text-sm lg:mt-12 max-w-7xl">
        <section className="flex items-center gap-10">
          <Link href={"/"}>
            {" "}
            <Image src="/logo.svg" alt="logo" width={100} height={100} />
          </Link>
          {isSideMenuOpen && (
            <ForwardedMobileNav
              closeSideMenu={closeSideMenu}
              ref={sidebarRef}
            />
          )}
        </section>

        <section className="items-center hidden gap-8 md:flex">
          <div className="items-center hidden gap-4 transition-all md:flex">
            {navItems.map((d, i) => (
              <div key={i} className="relative px-2 py-3 transition-all group">
                <span className={`flex items-center gap-2 text-lg font-semibold cursor-pointer  group-hover:underline decoration-dipalo  underline-offset-[15px] ${ currentPath === d.link ? 'text-dipalo' : 'text-white'}`}>
                  <Link href={d.link ?? "#"}>{d.label}</Link>
                  {d.children && (
                    <IoIosArrowDown className="transition-all rotate-180 group-hover:rotate-0" />
                  )}
                </span>

                {d.children && (
                  <div className="absolute right-0 flex-col hidden w-auto gap-1 py-3 font-semibold text-black transition-all bg-white rounded-lg shadow-md top-10 group-hover:flex">
                    {d.children.map((ch, i) => (
                      <li
                        key={i}
                        className={`flex items-start py-1 pl-2 pr-3 text-base cursor-pointer hover:underline  hover:text-dipalo underline-offset-4 whitespace-nowrap ${ currentPath === ch.link ? 'text-dipalo' : 'text-black'} `}
                      >
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

        <FiMenu
          onClick={openSideMenu}
          className="text-4xl text-white cursor-pointer md:hidden"
        />
      </div>
    </nav>
  );
};

export default Navbar;
