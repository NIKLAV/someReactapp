import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
  
  const store = {
     _state: {
        profilePage: {
              postData: [
                  {id: 1, message: 'its GIGI', likesCount: 12},
                  {id: 2, message: '1rst mapa', likesCount: 57}
              ],
              newPostText: 'ibatbIcya',
        },
        dialogsPage: {
              messagesData: [
                  {id: 1, message: 'zdorovenbko'},
                  {id: 2, message: 'sdfgweg'},
                  {id: 3, message: '23423'},
                  {id: 4, message: 'LYATUJUR'},
                  {id: 5, message: 'NIHAO'},
                  {id: 6, message: 'ZDOROVO'}
                ],
                dialogsData: [
                  {id: 1, name: 'TIMMY'},
                  {id: 2, name: 'LILLY'},
                  {id: 3, name: 'JAMES'},
                  {id: 4, name: 'PIS'},
                  {id: 5, name: 'KIR'},
                  {id: 6, name: 'MIR'}
              ],
              newMessageBody: ''
      }
     
},
    getState() {
        return this._state;
},
    _callsubscriber () {       
},
    subscribe (observer) {
        this._callsubscriber = observer;
},

    dispatch(action) {
      this._state.profilePage = profileReducer(this._state.profilePage, action);
      this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
      this._callsubscriber(this._state);  
    }
  }

export default store;