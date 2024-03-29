import Image from "next/image";
import React from "react";

const MainTeamCard = ({
  image,
  name,
  designation,
  bio,
  linkedinLink,
}: {
  image: string;
  name: string;
  designation: string;
  bio?: string;
  linkedinLink?: string;
}) => {
  return (
    <div className="relative w-full h-full">
      <div className="relative w-full h-full">
        <Image
          className="object-cover"
          src={image}
          alt={name}
          height={500}
          width={400}
        />
        <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-70">
          <div className="absolute bottom-0 left-0 w-full text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
            <h3 className="text-white">{name}</h3>
            <h4 className="text-gray-400">{designation}</h4>
            {bio && <p className="text-gray-300">{bio}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainTeamCard;
