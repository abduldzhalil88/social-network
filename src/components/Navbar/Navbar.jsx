import React from "react";
import s from './Navbar.module.css';

function Navbar() {
    return (
        <nav className={s.nav}>
            <ul className={s.nav__list}>
                <li><a href="/profile" className={s.nav__link}>Профиль</a></li>
                <li><a href="/dialogs" className={s.nav__link}>Сообщения</a></li>
                <li><a href="/news" className={s.nav__link}>Новости</a></li>
                <li><a href="/settings" className={s.nav__link}>Настройки</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;