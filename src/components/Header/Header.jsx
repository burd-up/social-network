import React from 'react';
import s from './Header.module.css';

function Header(props) {
    /*setInterval(props.changeTime, 1000);*/
    return (
        <header className={s.header}>
            <img src="../../logo.svg"/>
            <div >{/*{props.header.time}*/}</div>
            <div className={s.login}>{props.header.isAuth
                ? <div>{props.header.login} <button onClick={props.logout}>logout</button></div>
                : "login"}</div>
        </header>
    )
};
export default Header;