import React from 'react';
import classes from './dialogs.module.css';
import DialogItem from './dialogitem/dialogitem';
import Message from './message/message';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs_reducer';
import Dialogs from './dialogs';


import {connect} from "react-redux";

/* const DialogsContainer = (props) => {
    
    return (
        <StoreContext.Consumer> 
            {(store) => {
                let state = store.getState().dialogsPage;
    
    let onSendMessageClick = () => {
        store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (body) => {
      
      store.dispatch(updateNewMessageBodyCreator(body))
    }
            return <Dialogs updateNewMessageBody={onNewMessageChange}
                 sendMessage={onSendMessageClick}
                 dialogsPage={state}/>
                }
            }
        </StoreContext.Consumer>       
    )
} */


const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs)

export default DialogsContainer;