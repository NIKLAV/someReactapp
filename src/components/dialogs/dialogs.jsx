import React from 'react';
import classes from './dialogs.module.css';
import DialogItem from './dialogitem/dialogitem';
import Message from './message/message';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs_reducer';



const Dialogs = (props) => {
    let state = props.dialogsPage;
    
    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let newMessageBody = state.newMessageBody

    let onNewMessageChange = (e) => {
      let body =  e.target.value;
      props.updateNewMessageBody(body);
      //props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    let dialogsElements = state.dialogsData.map(dialog => 
        <DialogItem name={dialog.name} id={dialog.id} />)

    let messagesElements = state.messagesData.map(message => 
    <Message message={message.message}/>)
    
    return (
    <div className={classes.dialogs}>
        <div>
            <ul className={classes.dialogs__items}>
                {dialogsElements}
            </ul>
        </div>
        <div className={classes.messages}>
            <ul>
                {messagesElements}
            </ul>
            <div>
                <textarea value={newMessageBody} 
                          placeholder='GO ibatbIcya'
                          onChange={onNewMessageChange}>
                          

                </textarea>
            </div>
            <div>
                <button onClick={onSendMessageClick}>Отправить</button>
            </div>
        </div>
    </div> 
    )
}

export default Dialogs;