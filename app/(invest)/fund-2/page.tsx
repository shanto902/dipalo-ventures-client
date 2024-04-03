import Header from '@/components/common/Header'
import React from 'react'
import image from '@/public/assets/headers/fund2.jpg'
import Fund2Thesis from '@/components/Fund2/Fund2Thesis'
import FocusAreas from '@/components/Fund2/FocusAreas'
const Fund2Page = () => {
  return (
      <><Header title="Dipalo Heed ClimateTech Fund II" image={image} breadcrumb='Invest'  />
      <Fund2Thesis/>
      <FocusAreas /></>
  )
}

export default Fund2Page