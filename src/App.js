import React from "react";
import './App.css';
import logo from './icon/logo.png';

function App() {
    return (
        <div className="app-wrapper">
            <header className="header">
                <a href="#"><img src={logo} alt="" className="header__logo" /></a>
                <div className="header__wrapper">

                </div>
            </header>
            <nav className="nav">
                <ul className="nav__list">
                    <li><a href="#" className="nav__link">Профиль</a></li>
                    <li><a href="#" className="nav__link">Сообщения</a></li>
                    <li><a href="#" className="nav__link">Новости</a></li>
                    <li><a href="#" className="nav__link">Настройки</a></li>
                </ul>
            </nav>
            <div className="content"></div>
        </div>
    );
}

export default App;
