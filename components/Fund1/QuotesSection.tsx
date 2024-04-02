import React from 'react'
import PaddingContainer from '../Layout/PaddingContainer'

const QuotesSection = () => {
  return (
    <div className="w-full sm:h-[400px] lg:h-[370px]  h-[400px] relative bg-quotes bg-center bg-fixed bg-cover">
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>

    <div className="absolute inset-0 flex-col items-start justify-center mx-auto text-white max-w-7xl lg:flex">
      <PaddingContainer>
      <p className=" text-white text-3xl font-semibold leading-10">“There’s a tremendous amount of craftsmanship in between a great idea and a great product.”</p>
      <div className="text-white text-xl font-light text-right leading-10">- Steve Jobs, 1997</div>
      </PaddingContainer>
    </div>
  </div>
  )
}

export default QuotesSection