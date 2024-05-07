import PaddingContainer from '@/components/Layout/PaddingContainer'
import React from 'react'

const Video = () => {
  return (
    <PaddingContainer className='flex justify-center my-10'><iframe width="640" height="480" src="https://www.youtube.com/embed/pNturKGoJVo?si=siA3OkqbZJSNC-VD" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></PaddingContainer>
  )
}

export default Video