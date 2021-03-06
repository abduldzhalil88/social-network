import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import image from '../../images/bg_image_kaitag.jpg';


function Profile() {
    return (
        <div className={s.profile__wrapper}>
            <div className={s.profile__image}>
                <img src={image} alt="" className={s.profile__bgimage} />
            </div>
            <div className={s['profile__ava-desc']}>ava+desc</div>
            <MyPosts />
        </div>
    )
}

export default Profile;