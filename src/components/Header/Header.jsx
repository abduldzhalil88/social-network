import React from "react";
import s from './Header.module.css';
import logo from '../../icon/logo.png';

function Header() {
    return (
        <header className={s.header}>
            <a href="#"><img src={logo} alt="" className={s.header__logo} /></a>
            <div className={s.header__wrapper}>

            </div>
        </header>
    )
}

export default Header;