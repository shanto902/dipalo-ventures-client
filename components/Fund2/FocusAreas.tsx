import React from 'react'
import PaddingContainer from '../Layout/PaddingContainer'
import { focusAreas } from './const'
import FocusAreaCard from '../common/Cards/FocusAreaCard'

const FocusAreas = () => {
  return (
    <PaddingContainer className=' py-10'>
        <h2 className="text-dipalo text-6xl font-bold  underline underline-offset-[15px] text-center pb-10">FOCUS AREAS</h2>
        <p className=" text-center text-black text-lg font-medium ">The Dipalo Heed ClimateTech fund invests in enabling architecture and scalable products with which we can save the planet. We target emerging technologies in sectors that address key market needs where our product expertise is a differentiator. </p>

        <div className=' grid grid-cols-2 py-10'>
            {
                focusAreas.map((area, index)=> <FocusAreaCard key={index} listText={area.listText} logo={area.logo} title={area.title}/>)
            }
        </div>
    </PaddingContainer>
  )
}

export default FocusAreas