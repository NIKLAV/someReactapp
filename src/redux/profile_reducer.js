
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  postData: [
    {id: 1, message: 'its GIGI', likesCount: 12},
    {id: 2, message: '1rst mapa', likesCount: 57}
],
  newPostText: 'ibatbIcya',
}

 const  profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: 
            const newPost = {
                id: 3,
                message: state.newPostText,
                likesCount: 0
        };
            state.postData.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
            default: return state;  
    } 
}

export const  addPostActionCreator = () => {
    return {
      type: ADD_POST
    }
  }
  
  export const  updateNewPostTextActionCreator = (text) => {
    return {
      type:  UPDATE_NEW_POST_TEXT, 
      newText: text
    }
  }
export default profileReducer;

