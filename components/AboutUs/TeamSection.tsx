import React from 'react'
import PaddingContainer from '../Layout/PaddingContainer'
import MainTeamCard from './MainTeamCard'

const TeamSection = () => {
  return (
    <PaddingContainer className=' my-5 grid grid-cols-4 gap-10 '>
        {/* Titles  */}
        <div className=' col-span-2 flex flex-col justify-center gap-5'> 
        <div className="text-dipalo text-5xl font-bold  leading-[84.44px] underline underline-offset-8 decoration-dipalo">THE TEAMS</div>
        <div className="text-black text-5xl font-bold ">We Help To Achieve<br/>Your Business Goal</div>
        <div className="w-[592px] h-[78px] text-zinc-900 text-2xl font-normal  leading-[37px]">Collectively, we represent a level of experience in product development and manufacturing generally not found in venture capital.</div>
        </div>

        {/* Main Team  */}
        <MainTeamCard image={'/assets/about-us/rafiq.png'} name='RAFIQ AHMED' designation='Managing Partner' bio='Lauren is a Managing Partner at Dipalo Ventures. She works to raise and effectively deploy the fund’s capital into top-flight companies. She sources high-quality startups, assists with the Dipalo Ventures Residency, and performs due diligence to ensure a high-quality portfolio.

Lauren has over 20 years of startup investment, capacity building, and mentorship. She is an active LP, serial entrepreneur, and angel investor. Her focus areas include energy, innovative materials, IT, Fintech, and B2C fields. Previously, Lauren screened thousands of high-growth technology companies in her role as the Founding Managing Director of the Cleantech Group and Executive Director at Accelerate Michigan. She is also an active board member of the Michigan Department of Treasury’s Board of Financial Authority.

Lauren received her MA and Ph.D. from Northwestern University and her BA from the University of Michigan.'  />
  <MainTeamCard image={'/assets/about-us/rafiq.png'} name='RAFIQ AHMED' designation='Managing Partner' bio='<p>Lauren is a Managing Partner at Dipalo Ventures. She works to raise and effectively deploy the fund’s capital into top-flight companies. She sources high-quality startups, assists with the Dipalo Ventures Residency, and performs due diligence to ensure a high-quality portfolio.
Lauren has over 20 years of startup investment, capacity building, and mentorship. She is an active LP, serial entrepreneur, and angel investor. Her focus areas include energy, innovative materials, IT, Fintech, and B2C fields. Previously, Lauren screened thousands of high-growth technology companies in her role as the Founding Managing Director of the Cleantech Group and Executive Director at Accelerate Michigan. She is also an active board member of the Michigan Department of Treasury’s Board of Financial Authority.

Lauren received her MA and Ph.D. from Northwestern University and her BA from the University of Michigan.</p>'  />
  <MainTeamCard image={'/assets/about-us/rafiq.png'} name='RAFIQ AHMED' designation='Managing Partner' bio='Lauren is a Managing Partner at Dipalo Ventures. She works to raise and effectively deploy the fund’s capital into top-flight companies. She sources high-quality startups, assists with the Dipalo Ventures Residency, and performs due diligence to ensure a high-quality portfolio.

Lauren has over 20 years of startup investment, capacity building, and mentorship. She is an active LP, serial entrepreneur, and angel investor. Her focus areas include energy, innovative materials, IT, Fintech, and B2C fields. Previously, Lauren screened thousands of high-growth technology companies in her role as the Founding Managing Director of the Cleantech Group and Executive Director at Accelerate Michigan. She is also an active board member of the Michigan Department of Treasury’s Board of Financial Authority.

Lauren received her MA and Ph.D. from Northwestern University and her BA from the University of Michigan.'  />
  <MainTeamCard image={'/assets/about-us/rafiq.png'} name='RAFIQ AHMED' designation='Managing Partner' bio='Lauren is a Managing Partner at Dipalo Ventures. She works to raise and effectively deploy the fund’s capital into top-flight companies. She sources high-quality startups, assists with the Dipalo Ventures Residency, and performs due diligence to ensure a high-quality portfolio.

Lauren has over 20 years of startup investment, capacity building, and mentorship. She is an active LP, serial entrepreneur, and angel investor. Her focus areas include energy, innovative materials, IT, Fintech, and B2C fields. Previously, Lauren screened thousands of high-growth technology companies in her role as the Founding Managing Director of the Cleantech Group and Executive Director at Accelerate Michigan. She is also an active board member of the Michigan Department of Treasury’s Board of Financial Authority.

Lauren received her MA and Ph.D. from Northwestern University and her BA from the University of Michigan.'  />
  <MainTeamCard image={'/assets/about-us/rafiq.png'} name='RAFIQ AHMED' designation='Managing Partner' bio='Lauren is a Managing Partner at Dipalo Ventures. She works to raise and effectively deploy the fund’s capital into top-flight companies. She sources high-quality startups, assists with the Dipalo Ventures Residency, and performs due diligence to ensure a high-quality portfolio.

Lauren has over 20 years of startup investment, capacity building, and mentorship. She is an active LP, serial entrepreneur, and angel investor. Her focus areas include energy, innovative materials, IT, Fintech, and B2C fields. Previously, Lauren screened thousands of high-growth technology companies in her role as the Founding Managing Director of the Cleantech Group and Executive Director at Accelerate Michigan. She is also an active board member of the Michigan Department of Treasury’s Board of Financial Authority.

Lauren received her MA and Ph.D. from Northwestern University and her BA from the University of Michigan.'  />
  <MainTeamCard image={'/assets/about-us/rafiq.png'} name='RAFIQ AHMED' designation='Managing Partner' bio='Lauren is a Managing Partner at Dipalo Ventures. She works to raise and effectively deploy the fund’s capital into top-flight companies. She sources high-quality startups, assists with the Dipalo Ventures Residency, and performs due diligence to ensure a high-quality portfolio.

Lauren has over 20 years of startup investment, capacity building, and mentorship. She is an active LP, serial entrepreneur, and angel investor. Her focus areas include energy, innovative materials, IT, Fintech, and B2C fields. Previously, Lauren screened thousands of high-growth technology companies in her role as the Founding Managing Director of the Cleantech Group and Executive Director at Accelerate Michigan. She is also an active board member of the Michigan Department of Treasury’s Board of Financial Authority.

Lauren received her MA and Ph.D. from Northwestern University and her BA from the University of Michigan.'  />
    </PaddingContainer>
  )
}

export default TeamSection