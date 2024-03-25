import React from "react";

const customButton = ({
  link,
  className,
}: {
  link: string;
  className: string;
}) => {
  return (
    <button
      className={` absolute bottom-8 left-1/2 transform -translate-x-1/2 uppercase text-center border rounded border-white border-opacity-30 py-2 px-8 hover:border-dipalo z-20 text-white transition-all duration-500 ${className}`}
    >
      {link}
    </button>
  );
};

export default customButton;
