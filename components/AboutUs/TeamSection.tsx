import React from 'react'
import PaddingContainer from '../Layout/PaddingContainer'
import MainTeamCard from './MainTeamCard'
import { mainTeam } from './const'



const TeamSection = () => {
  return (
    <PaddingContainer className=' my-20 grid grid-cols-4 gap-10 '>
        {/* Titles  */}
        <div className=' col-span-2 flex flex-col justify-center gap-5'> 
        <div className="text-dipalo text-5xl font-bold  leading-[84.44px] underline underline-offset-8 decoration-dipalo">THE TEAMS</div>
        <div className="text-black text-5xl font-bold ">We Help To Achieve<br/>Your Business Goal</div>
        <div className="w-[592px] h-[78px] text-zinc-900 text-2xl font-normal  leading-[37px]">Collectively, we represent a level of experience in product development and manufacturing generally not found in venture capital.</div>
        </div>

        {/* Main Team  */}
  {
    mainTeam.map((user, i) => <MainTeamCard key={i}  image={user.image} name={user.name} linkedinLink={user.linkedinLink} designation={user.designation} bio={user.bio} />)
  }
    </PaddingContainer>
  )
}

export default TeamSection