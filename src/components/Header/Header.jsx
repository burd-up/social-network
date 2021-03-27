import React from 'react';
import s from './Header.module.css';

function Header(props) {
    setInterval(props.changeTime, 1000);
    return (
        <header className={s.header}>
            <img src="../../logo.svg"/>
            <div className={s.time}>{props.header.time}</div>
            <div className={s.login}>{props.header.isAuth ? props.header.login : "login"}</div>
        </header>
    )
};
export default Header;