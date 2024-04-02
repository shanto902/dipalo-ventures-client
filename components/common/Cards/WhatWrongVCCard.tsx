import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const WhatWrongVCCard = ({image, logo, title}:{image:string, logo: string, title:string}) => {
  return (
<div
  style={{ backgroundImage: `url('${image}')`, backgroundSize: "cover",  backgroundPosition: "center"  }}
  className="p-5 shadow-lg rounded relative  transition-transform transform hover:scale-105 duration-500 px-10 py-20"
>
<div className="z-[-10] absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/50 to-black/50 rounded-md" />
  <div className="z-10 flex flex-col items-center gap-10 justify-center  h-full ">
   
      <Image src={logo} width={150} height={150} alt={title}  />
      <p className="text-white text-xl font-bold leading-9 text-center ">
        {title}
      </p>
 
  </div>


</div>

  )
}

export default WhatWrongVCCard