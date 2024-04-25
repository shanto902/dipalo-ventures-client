import { TPartner } from '@/components/types'
import Image from 'next/image'
import React from 'react'

const PartnerCard = ({partner}:{partner:TPartner}) => {
  return (
   <a href={partner.websiteLink} target='_blank'>
     <div className=' group bg-white m-3 p-3 rounded-2xl transition-all duration-500 shadow-none hover:shadow-inner'> <Image  className=' aspect-[4/3] object-contain  mix-blend-multiply'  src={`${process.env.NEXT_PUBLIC_ASSETS_URL}${partner.logo}`} alt={partner.companyName} height={200} width={200}/> 
    <h3 className='group-hover:underline decoration-dipalo no-underline transition-all duration-500 underline-offset-4 -mt-3 text-center lg:text-lg font-semibold'>{partner.companyName}</h3>
     </div>
   </a>
  )
}

export default PartnerCard