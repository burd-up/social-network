import React from 'react';
import s from './DialogsItem.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog}>
            <img className={s.img} src='https://i.pinimg.com/originals/83/d4/90/83d490841c3e00560d89c7dd26406093.jpg'/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
};

export default DialogItem;