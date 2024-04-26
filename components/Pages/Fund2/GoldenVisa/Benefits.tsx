import CustomTitle from '@/components/common/CustomTitle'
import PaddingContainer from '@/components/Layout/PaddingContainer'
import { TBenefit } from '@/components/types'
import Image from 'next/image'
import React from 'react'

const Benefits = ({benefits} : { benefits:TBenefit[]}) => {
  return (
    <PaddingContainer className='my-5'>
        <CustomTitle className='py-5'>BENEFITS OF GOLDEN VISA</CustomTitle>
        {
            benefits.map((benefit)=> <div key={benefit.id}> 
            
           <div className=' flex flex-row justify-start gap-5 items-center my-5' >
           <Image   priority  src={`${process.env.NEXT_PUBLIC_ASSETS_URL}${benefit.icon}` } alt={benefit.categoryTitle} width={32} height={32} />
           <h2 className=' text-2xl font-semibold '>{benefit.categoryTitle}</h2>
           </div>
           <div className='space-y-2'>
           { 
            benefit?.items.map((item,i)=> <div className=' bg-amber-100 hover:bg-amber-200  rounded-3xl p-5' key={i}>{item.text}</div>)
            }
           </div>
            </div>)
        }
    </PaddingContainer>
  )
}

export default Benefits