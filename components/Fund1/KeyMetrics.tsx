import React from 'react'
import PaddingContainer from '../Layout/PaddingContainer'
import { keyMetrics } from './const'
import KeyMetricsCard from '../common/Cards/KeyMetricsCard'

const KeyMetrics = () => {
  return (
    <div className="w-full h-[600px] relative bg-investments bg-center bg-fixed bg-cover">
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>

    <div className="absolute inset-0 flex-col items-start justify-center mx-auto text-white max-w-7xl lg:flex">
      <PaddingContainer>
     <h2 className=' text-center text-5xl
font-bold text-dipalo underline underline-offset-[15px] decoration-dipalo '>KEY METRICS</h2>

 <div className=' grid grid-cols-3 mt-20 gap-10'> 
{
  keyMetrics.map((key)=> <KeyMetricsCard key={key.id} text={key.text} value={key.value} id={key.id} />)
}
 </div>
      </PaddingContainer>
    </div>
  </div>
  )
}

export default KeyMetrics