import React from "react";
import s from './Posts.module.css';
import logo from '../../../../icon/logo.png';


function Posts() {
    return (
        <div className={s['profile__posts-list']}>
            <div className={s['profile__post-item']}>
                <img src={logo} alt="" className={s['profile__post-ava']} />
                post1
            </div>
        </div>
    )
}

export default Posts;