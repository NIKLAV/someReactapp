import React from 'react';
import classes from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
      <div>
        <div>
          <img src="https://www.takefoto.ru/userfiles/image/Dlya%20Novostey/04.06.2015/travel_photo/travel_photo_0.jpg" alt=""/>
        </div>
        <div className={classes.ava}>
            ava + description
        </div>
      </div>
    )
}

export default ProfileInfo