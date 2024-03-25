import Header from '@/components/common/Header'
import React from 'react'
import image from '@/public/assets/headers/residency-program.jpg'
const page = () => {
  return (
    <Header title="Residency Program" image={image} breadcrumb='Learn' />
  )
}

export default page