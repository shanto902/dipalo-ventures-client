import Header from '@/components/common/Header'
import React from 'react'
import image from '@/public/assets/headers/fund1.jpg'
import ThesisSection from '@/components/Fund1/ThesisSection'
import QuotesSection from '@/components/Fund1/QuotesSection'
const Fund1Page = () => {
  return (
    <><Header title="Dipalo Ventures Fund I" image={image} subtitle='(Dipalo Ventures Fund I is now closed)' breadcrumb='Learn' />
    <ThesisSection />
    <QuotesSection />
    </>
  )
}

export default Fund1Page