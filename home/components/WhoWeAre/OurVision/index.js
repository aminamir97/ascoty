import React from 'react'
import MatchMediaWrapper from '../../navBar/HOC'
import OurVisionDesktop from './OurVisionDesktop'
import OurVisionMobile from './OurVisionMobile'

function OurVision() {
  return (
    <MatchMediaWrapper mobileContent={<OurVisionMobile />} desktopContent={<OurVisionDesktop />}/>
  )
}

export default OurVision