import React from 'react'
import EmblaCarousel from './EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'

import { TFounderVideo } from '@/components/types'
import CustomTitle from '@/components/common/CustomTitle'


const FounderVideo = ({founderVideos}: {founderVideos : TFounderVideo[]}) => {
const options: EmblaOptionsType = {}
  return (
    <div>
      <CustomTitle className=' my-10'> Founder Introduction Videos </CustomTitle>
      <EmblaCarousel founderVideos={founderVideos} />
    </div>
  )
}

export default FounderVideo