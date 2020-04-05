const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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

const  dialogsReducer = (state = initialState, action) => {
    
  
  


  
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
          return {
            ...state,
            newMessageBody: action.body,
        };
            
        case SEND_MESSAGE:
          let body = state.newMessageBody;
          return {
            ...state,
            newMessageBody: '',
            messagesData: [...state.messagesData, {id: 6, message: body }] 
        };
            
        default: return state;
    }
}

export const sendMessageCreator = () => {
    return {
      type: SEND_MESSAGE
    }
  }
  export const updateNewMessageBodyCreator = (text) => {
    return {
      type: UPDATE_NEW_MESSAGE_BODY,
      body: text
    }
  }
export default dialogsReducer;


