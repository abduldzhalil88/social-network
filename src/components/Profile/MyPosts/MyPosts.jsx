import React from "react";
import s from './MyPosts.module.css';
import Posts from "./Post/Posts";

function MyPosts() {
    return (
        <div className={s['profile__post-body']}>
            <div className={s['profile__new-post']}>
                my post
                <Posts message='Hi! This is my post.' count='5' />
                <Posts message='How are you?' count='10' />
                <Posts count='15' />
            </div>

        </div>
    )
}

export default MyPosts;