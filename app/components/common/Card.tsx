import Link from "next/link";
import React from "react";

const Card = ({
  img,
  heading,
  subheading,
  link,
}: {
  img: string;
  heading: string;
  subheading: string;
  link: string;
}) => {
  const divStyle: React.CSSProperties = {
    backgroundImage: `url('${img}')`,
    backgroundSize: "cover",
    position: "relative",
  };

  const overlayStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust opacity as needed
    borderRadius: "inherit", // To match the rounded corners of the main div
  };

  return (
    <div
      style={divStyle}
      className="min-h-[400px] m-5 p-5 rounded-md grid grid-rows-2"
    >
      <div className="place-items-center text-white" style={{ zIndex: 1 }}>
        <p className="text-amber-500 leading-8 text-xl mt-56">{heading}</p>
        <p>{subheading}</p>
      </div>

      <div style={overlayStyle} />

      <Link
        href={link}
        className="place-self-end w-full uppercase text-center btn btn-outline z-20 text-white"
      >
        See More
      </Link>
    </div>
  );
};

export default Card;
