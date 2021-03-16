import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem'
import Message from "./Message/Message";

const Dialogs = (props) => {

    let reff = React.createRef();
    let onAddMessage = () => {
        props.addMessage();
    };

    let onChangeText = () => {
        let text = reff.current.value;
        props.changeMessageText(text);
    };

    let dialogs = props.messagePage.dialogData.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>);

    let messages = props.messagePage.messageData.map(message => <Message key={message.id} message={message.message}/>);
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_item}>
                {dialogs}
            </div>
            <div className={s.messages}>
                {messages}
                <div>
                <textarea ref={reff}
                          onChange={onChangeText}
                          value={props.messagePage.newMessageText}></textarea>
                <button onClick={onAddMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;