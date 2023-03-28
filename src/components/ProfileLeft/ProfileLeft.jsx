import React from 'react';
import '../ProfileSide.css';
import LogoSearch from '../LogoSearch';
import FollowersCard from '../FollowersCards/FollowersCard';
import InfoCard from '../InfoCard';

const ProfileLeft = () => {
  return (
    <div className="ProfileSide">
        <LogoSearch/>
        <InfoCard/>
        <FollowersCard/>
    </div>
  )
}

export default ProfileLeft