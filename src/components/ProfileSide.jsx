import React from 'react';
import FollowersCards from './FollowersCards/FollowersCard';
import LogoSearch from './LogoSearch';
import ProfileCard from './ProfileCard';
import './ProfileSide.css';


const ProfileSide = () => {
  return (
    <div className="ProfileSide">
        <LogoSearch/>
        <ProfileCard/>
        <FollowersCards/>
    </div>

  )
}

export default ProfileSide