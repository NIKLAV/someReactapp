import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile_reducer';
import MyPosts from './myPosts';
import StoreContext from '../../../storeContext';




const MyPostsContainer = (props) => {
        return (
          <StoreContext.Consumer> 
            {(store) => {
              let state = store.getState();
      
      const addPost = () => {
        
        store.dispatch(addPostActionCreator());
      }

      const onPostChange = (text) => {
        
        store.dispatch(updateNewPostTextActionCreator(text));
      }
  return ( 
      
        <MyPosts updateNewPostText={onPostChange} 
            addPost={addPost} 
            posts={state.profilePage.postData}
            newPostText={state.profilePage.newPostText}/>)
        }
      }
      </StoreContext.Consumer>        
    )
}


export default MyPostsContainer;