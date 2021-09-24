import React from "react";
import s from './Posts.module.css';
import logo from '../../../../icon/logo.png';


function Posts(props) {
    return (
        <div className={s['profile__posts-list']}>
            <div className={s['profile__post-item']}>
                <img src={logo} alt="" className={s['profile__post-ava']} />
                {props.message}
                <div><span>Like {props.count}</span></div>
            </div>
        </div>
    )
}

export default Posts;