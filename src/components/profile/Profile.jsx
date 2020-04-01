import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './myPosts/myPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './myPosts/myPosts_container';


const Profile = (props) => {
  
  
    return (
      <div>
        <ProfileInfo/>
        <MyPostsContainer
          store = {props.store}  />
      </div>
    ) 
}
export default Profile