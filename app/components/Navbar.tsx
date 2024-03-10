"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "Learn", path: "/learn" },
  { id: 3, name: "Invest", path: "/invest" },
  { id: 4, name: "Insights", path: "/insights" },
  { id: 5, name: "Contact", path: "/contact" },
];
const Navbar = () => {
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;
  return (
    <nav className="absolute flex justify-center items-center gap-[768px] left-0 right-0 my-14">
      <div>
        {" "}
        <Image src="/logo.svg" alt="Logo" width={133} height={51} />{" "}
      </div>
      <div className=" flex gap-12">
        <ul className=" flex gap-x-12 text-2xl font-medium leading-7 ">
          {navLinks.map((link) => {
            return (
              <li key={link.id}>
                <Link
                  href={link.path}
                  className={
                    isActive(link.path) ? "text-amber-400" : "text-white"
                  }
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
