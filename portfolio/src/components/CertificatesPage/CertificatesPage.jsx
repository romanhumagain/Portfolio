import React from 'react'
import CertificateCarousel from './CertificateCarousel'
import SectionHeading from '../common/SectionHeading'

const CertificatesPage = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center h-full min-h-screen'>
        <div className='w-full max-w-6xl rounded-lg '>
          <SectionHeading title={"Certificates"} />
          <div>
            <CertificateCarousel />
          </div>
        </div>
      </div>
    </>
  )
}

export default CertificatesPage