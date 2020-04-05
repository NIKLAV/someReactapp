import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile_reducer';
import MyPosts from './myPosts';
import { connect } from 'react-redux';




/* const MyPostsContainer = (props) => {
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
 */


const mapStateToProps = (state) => {
    return {
      posts: state.profilePage.postData,
      newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
        dispatch(updateNewPostTextActionCreator(text));
    },
    addPost: () => dispatch(addPostActionCreator())
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;