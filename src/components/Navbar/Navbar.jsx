import React from "react";
import s from './Navbar.module.css';
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className={s.nav}>
            <ul className={s.nav__list}>
                <li><NavLink activeClassName={s.active} to="/dialogs" className={s.nav__link}>Сообщения</NavLink></li>
                <li><NavLink activeClassName={s.active} to="/profile" className={s.nav__link}>Профиль</NavLink></li>
                <li><NavLink activeClassName={s.active} to="/news" className={s.nav__link}>Новости</NavLink></li>
                <li><NavLink activeClassName={s.active} to="/settings" className={s.nav__link}>Настройки</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar;