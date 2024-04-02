import React from 'react'
import { ProcessSVG } from '../SVG/ProcessSVG'
import { TProcessData } from '@/components/ResidencyProgram/types'

const ProcessCard = ({image, id, text,}:TProcessData) => {
  return (
    <div
    style={{ backgroundImage: `url('${image}')`, backgroundSize: "cover",  backgroundPosition: "center"  }}
    className=" shadow-lg rounded relative  transition-transform transform hover:scale-105 duration-500 p-10"
  >
  <div className="z-[-10] absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/80 to-black/80 rounded-sm" />
    <div className="z-10 flex flex-col items-center gap-10 justify-center  h-full  ">
     
    <div className=" flex flex-col items-center gap-4 my-10 transition"   >
        <ProcessSVG id={id} />
        <h3 className="text-center text-xl mt-16 font-semibold text-white  transition-colors duration-300">{text}</h3>
      </div>
   
    </div>
  
  
  </div>
  )
}

export default ProcessCard