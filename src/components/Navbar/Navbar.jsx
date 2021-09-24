import React from "react";
import s from './Navbar.module.css';

function Navbar() {
    return (
        <nav className={s.nav}>
            <ul className={s.nav__list}>
                <li><a href="#" className={s.nav__link}>Профиль</a></li>
                <li><a href="#" className={s.nav__link}>Сообщения</a></li>
                <li><a href="#" className={s.nav__link}>Новости</a></li>
                <li><a href="#" className={s.nav__link}>Настройки</a></li>
                <li><a href="#" className={s.nav__link}>Объявления</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;