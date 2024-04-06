"use client";
import { useState, useRef, useEffect, forwardRef, SetStateAction } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { navItems } from "./NavItems";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const ForwardedMobileNav = forwardRef(MobileNav);

const Navbar = () => {
  const [isSideMenuOpen, setSideMenu] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null); // State to track open submenu
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

  const handleSubmenuOpen = (index: SetStateAction<null> | number) => {
    setOpenSubmenu(index as SetStateAction<null>);
  };

  const handleSubmenuClose = (e: any) => {
    const newTarget = e.relatedTarget || e.toElement;
    if (!newTarget || !e.currentTarget.contains(newTarget)) {
      setOpenSubmenu(null);
    }
  };

  return (
    <nav className="absolute w-full">
      <div className="relative z-30 flex justify-between w-full px-4 py-5 mx-auto text-sm lg:mt-12 max-w-7xl">
        <section className="flex items-center gap-10">
          <Link href={"/"} className="pl-4">
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
                <span
                  className={` text-lg font-semibold cursor-pointer hover-underline-animation ${
                    currentPath === d.link ? "text-dipalo" : "text-white"
                  }`}
                >
                  <Link
                    className=" inline-flex items-center gap-2"
                    href={d.link ?? "#"}
                  >
                    {d.label}{" "}
                    {d.children && (
                      <IoIosArrowDown className="transition-all rotate-180 group-hover:rotate-0" />
                    )}
                  </Link>
                </span>

                {d.children && (
                  <div className="absolute right-0 flex-col hidden w-auto gap-1 py-3 font-semibold text-black transition-all bg-white rounded-lg shadow-md top-10 group-hover:flex">
                    {d.children.map((ch, j) => (
                      <div key={j} className="relative">
                        <li
                          onMouseEnter={() =>
                            ch.children && handleSubmenuOpen(i)
                          }
                          onMouseLeave={(e) => handleSubmenuClose(e)}
                          className={`flex items-start py-1 pl-2 pr-3 text-base cursor-pointer hover:text-dipalo  hover-underline-animation whitespace-nowrap ${
                            currentPath === ch.link
                              ? "text-dipalo"
                              : "text-black"
                          }`}
                        >
                          <Link
                            className="w-full  inline-flex gap-2 items-center group"
                            href={ch.link ? ch.link : "#"}
                          >
                            {ch.label}
                            {ch.children && (
                              <IoIosArrowDown
                                className={`transition-all -rotate-90 ${
                                  openSubmenu === i
                                    ? "group-hover:rotate-90"
                                    : ""
                                }`}
                              />
                            )}
                          </Link>
                        </li>

                        {ch.children && (
                          <div
                            onMouseEnter={() => handleSubmenuOpen(i)}
                            onMouseLeave={(e) => handleSubmenuClose(e)}
                            className={`absolute left-full top-0 pl-3 flex-col hidden w-auto gap-1 font-semibold text-black transition-all bg-white rounded-lg shadow-md ${
                              openSubmenu === i ? "group-hover:flex" : ""
                            }`}
                          >
                            {ch.children.map((subCh, k) => (
                              <li
                                key={k}
                                className={`flex items-start py-2 my-2 pr-4 text-base cursor-pointer hover:text-dipalo  hover-underline-animation  underline-offset-4 whitespace-nowrap ${
                                  currentPath === subCh.link
                                    ? "text-dipalo"
                                    : "text-black"
                                }`}
                              >
                                <Link
                                  className="w-full"
                                  href={subCh.link ? subCh.link : "#"}
                                >
                                  {subCh.label}
                                </Link>
                              </li>
                            ))}
                          </div>
                        )}
                      </div>
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
