import React from 'react';
import s from './Header.module.css';

function Header() {
    return (
        <header className={s.header}>
            <img src="../../logo.svg" />
        </header>
    )
};
export default Header;