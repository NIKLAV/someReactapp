import React from 'react';
import classes from './dialogs.module.css';
import DialogItem from './dialogitem/dialogitem';
import Message from './message/message';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs_reducer';
import Dialogs from './dialogs';



const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;
    
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (body) => {
      
      props.store.dispatch(updateNewMessageBodyCreator(body))
    }
    return (
        <Dialogs updateNewMessageBody={onNewMessageChange}
                 sendMessage={onSendMessageClick}
                 dialogsPage={state}/>
    )
}

export default DialogsContainer;