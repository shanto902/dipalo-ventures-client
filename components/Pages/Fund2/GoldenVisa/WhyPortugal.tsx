import AnimatedPara from '@/components/common/AnimatedPara'
import CustomTitle from '@/components/common/CustomTitle'
import PaddingContainer from '@/components/Layout/PaddingContainer'
import React from 'react'

const WhyPortugal = ({title}:{title:string}) => {
  return (
    <PaddingContainer>    <CustomTitle className='my-10' > Why Portugal? </CustomTitle>
    <AnimatedPara className=' text-center' >
  {
   title
  }
</AnimatedPara></PaddingContainer>
  )
}

export default WhyPortugal