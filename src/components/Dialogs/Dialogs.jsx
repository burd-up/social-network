import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem'
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";

let MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component="textarea" name="messageText" type="text" placeholder="message"/>
            <button>send</button>
        </form>
    )
}

MessageForm = reduxForm({form: "messageForm"})(MessageForm)

const Dialogs = (props) => {

    const onSubmit = (formData) => {
        props.addMessage(formData.messageText)
    }

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
                    <MessageForm onSubmit={onSubmit}/>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;