import React from 'react';
import PaddingContainer from '../Layout/PaddingContainer';
import TeamBioDialog from '../common/Dialog/TeamBioDialog';
import CustomTitle from '../common/CustomTitle';
import AnimatedPara from '../common/AnimatedPara';
import AnimatedDiv from '../common/AnimatedDiv';
import { TResidencyAdvisor, TTeam } from '../types';


const TeamSection = ( {members} :{ members: TTeam[]}) => {
  return (
    <PaddingContainer className=" my-20 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 md:gap-10 gap-y-10 ">
      {/* Titles  */}
      <AnimatedDiv
        id={1}
        animationStyle="left"
        className=" col-span-2 flex flex-col justify-center gap-5 "
      >
        <CustomTitle className=" text-left">THE TEAMS</CustomTitle>
        <AnimatedPara className="text-black text-3xl font-bold ">
          We Help To Achieve
          <br />
          Your Business <span className=" text-dipalo">Goal</span>
        </AnimatedPara>
        <AnimatedPara>
          Collectively, we represent a level of experience in product
          development and manufacturing generally not found in venture capital.
        </AnimatedPara>
      </AnimatedDiv>

      {/* Main Team  */}
      {members.map((user, i) => (
        <AnimatedDiv id={i} key={i} className="rounded-3xl shadow-md ">
          <TeamBioDialog
            priorInvestments={user.priorInvestments}
            key={i}
            photo={user.photo}
            name={user.name}
            linkedinLink={user.linkedinLink}
            designation={user.designation}
            bio={user.bio} serialNo={user.serialNo}          />
        </AnimatedDiv>
      ))}
    </PaddingContainer>
  );
};

export default TeamSection;
