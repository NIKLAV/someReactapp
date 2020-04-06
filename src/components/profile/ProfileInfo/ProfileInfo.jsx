import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/preloader';


const ProfileInfo = (props) => {
    if(!props.profile) {
      return <Preloader/>
    }

    return (
      <div>
        <div>
          <img src="https://www.takefoto.ru/userfiles/image/Dlya%20Novostey/04.06.2015/travel_photo/travel_photo_0.jpg" alt=""/>
        </div>
        <div className={classes.ava}>
            <img src={props.profile.photos.large}/>
            <p>ava + description</p>
        </div>
      </div>
    )
}

export default ProfileInfo