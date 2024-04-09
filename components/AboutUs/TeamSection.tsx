import React from "react";
import PaddingContainer from "../Layout/PaddingContainer";
import { mainTeam } from "./const";
import TeamBioDialog from "../common/Dialog/TeamBioDialog";
import CustomTitle from "../common/CustomTitle";
import AnimatedPara from "../common/AnimatedPara";

const TeamSection = () => {
  return (
    <PaddingContainer className=" my-20 grid grid-cols-4 gap-10 ">
      {/* Titles  */}
      <div className=" col-span-2 flex flex-col justify-center gap-5">
        <CustomTitle className=" text-left">
          THE TEAMS
        </CustomTitle>
        <AnimatedPara className="text-black text-3xl font-bold ">
          We Help To Achieve
          <br />
          Your Business <span className=" text-dipalo">Goal</span>
        </AnimatedPara>
        <AnimatedPara>
          Collectively, we represent a level of experience in product
          development and manufacturing generally not found in venture capital.
        </AnimatedPara>
      </div>

      {/* Main Team  */}
      {mainTeam.map((user, i) => (
        <TeamBioDialog
          priorInvestments={user.priorInvestments}
          key={i}
          id={i}
          image={user.image}
          name={user.name}
          linkedinLink={user.linkedinLink}
          designation={user.designation}
          bio={user.bio}
        />
      ))}
    </PaddingContainer>
  );
};

export default TeamSection;
