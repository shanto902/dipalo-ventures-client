import Header from '@/components/common/Header'
import React from 'react'
import image from '@/public/assets/headers/golden-visa.jpg'
import getAllBenefits from '@/helpers/getAllBenefits'
import Benefits from '@/components/Pages/Fund2/GoldenVisa/Benefits'
const page = async () => {

  const benefits = await getAllBenefits()
  return (
    <>
    <Header title='Portuguese Golden Visa' breadcrumb='Fund-2' image={image}/>


    <Benefits benefits={benefits}/>
    </>
  )
}

export default page