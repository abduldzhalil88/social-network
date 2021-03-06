import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";


function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Navbar />
                <div className="app-wrapper-content">
                    <Route path='/profile' component={Profile}></Route>
                    <Route path='/dialogs' component={Dialogs}></Route>
                    <Route path='/news' component={News}></Route>
                    <Route path='/settings' component={Settings}></Route>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
