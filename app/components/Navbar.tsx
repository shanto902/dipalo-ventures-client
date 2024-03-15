"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import PaddingContainer from "./Layout/PaddingContainer";

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
    <PaddingContainer>
      <nav>
        <div className="navbar mt-14 z-30 bg-transparent">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
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
            <Image src="/logo.svg" alt="Logo" width={133} height={51} />
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {navLinks.map((link) => {
                return (
                  <li key={link.id} className=" text-lg font-medium">
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
        </div>
      </nav>
    </PaddingContainer>
  );
};

export default Navbar;
