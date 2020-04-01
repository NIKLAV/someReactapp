import React from 'react';
import classes from './myPosts.module.css';
import Post from './Post/Post'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile_reducer';




const MyPosts = (props) => {
        
      let postElements = props.posts.map(post => <Post 
        message={post.message} 
        likesCount={post.likesCount}/>);

      const newPostElement = React.createRef();

      const onAddPost = () => {
        props.addPost();
        //props.dispatch( addPostActionCreator());
      }
      

      const onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
        //props.dispatch(updateNewPostTextActionCreator(text));
      }
  return (
    <div className={classes.posts}>
        <div className={classes.posts__block}>
           <div> 
             <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
           </div>
            <button onClick={onAddPost}>Add posts</button>
            <button>Remove</button>
        </div>
        {postElements}
    </div>
    )
}

export default MyPosts;