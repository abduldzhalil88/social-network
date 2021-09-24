import React from "react";
import s from './MyPosts.module.css';
import Posts from "./Post/Posts";

function MyPosts() {
    return (
        <div className={s['profile__post-body']}>
            <div className={s['profile__new-post']}>
                my post
               <Posts />
               <Posts />
               <Posts />
            </div>

        </div>
    )
}

export default MyPosts;