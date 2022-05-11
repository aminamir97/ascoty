import React from 'react';
import MatchMediaWrapper from '../../navBar/HOC';
import OurMissionDesktop from './OurMisionDesktop';
import OurMissionMobile from './OurMissionMobile';


function OurMission() {
  return (
    <MatchMediaWrapper mobileContent={<OurMissionMobile />} desktopContent={<OurMissionDesktop />}/>
  )
}

export default OurMission