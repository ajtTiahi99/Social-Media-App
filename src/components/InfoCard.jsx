import React, { useState } from 'react';
import './InfoCard.css';
import {UilPen} from '@iconscout/react-unicons';
import ProfileModal from './ProfileModal/ProfileModal';

const InfoCard = () => {

    const [modalOpened,setModalOpened] = useState(false);
  return (
    <div className="InfoCard">
        <div className="infoHead">
            <h4>Your Info</h4>
            <UilPen width='2rem' height='1.2rem' cursor='pointer' onClick={()=>setModalOpened(true)}/>
            <ProfileModal modalOpened={modalOpened} setModalOpened={setModalOpened}/>
        </div>
        <div className="info">
            <span>
                <b>Status </b>
            </span>
            <span>In Relationship</span>
        </div>
        <div className="info">
            <span>
                <b>Lives in </b>
            </span>
            <span>Mumbai</span>
        </div>
        <div className="info">
            <span>
                <b>Works in </b>
            </span>
            <span>Infosys</span>
        </div>
        <button className="button logout-btn">Logout</button>
    </div>

  )
}

export default InfoCard