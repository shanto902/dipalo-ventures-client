import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { TNavItem } from "./types";
import { useState } from "react";

const SingleNavItem = ({ label, link, children }: TNavItem) => {
  const [isItemOpen, setItem] = useState(false);

  const toggleItem = () => {
    return setItem(!isItemOpen);
  };

  return (
    <Link
      onClick={toggleItem}
      href={link ?? "#"}
      className="relative px-2 py-3 transition-all hover:text-dipalo"
    >
      <p className="flex items-center gap-2 cursor-pointer text-neutral-400 group-hover:text-black">
        <span>{label}</span>
        {children && (
          <IoIosArrowDown
            className={`text-xs transition-all ${isItemOpen && "rotate-180"}`}
          />
        )}
      </p>

      {isItemOpen && children && (
        <div className="flex flex-col w-auto gap-1 py-3 transition-all bg-white rounded-lg">
          {children.map((ch, i) => (
            <Link
              key={i}
              href={ch.link ?? "#"}
              className="flex items-center py-1 pl-6 pr-8 text-black cursor-pointer hover:text-dipalo"
            >
              <span className="pl-12 ">{ch.label}</span>
            </Link>
          ))}
        </div>
      )}
    </Link>
  );
};

export default SingleNavItem;
