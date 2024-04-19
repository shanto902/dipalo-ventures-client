import React from 'react'
import EmblaCarousel from './EmblaCarousel'

import { TFounderVideo } from '@/components/types'
import CustomTitle from '@/components/common/CustomTitle'


const FounderVideo = ({founderVideos}: {founderVideos : TFounderVideo[]}) => {
  return (
    <div>
      <CustomTitle className=' my-10'> Founder Introduction Videos </CustomTitle>
      <EmblaCarousel founderVideos={founderVideos} />
    </div>
  )
}

export default FounderVideo