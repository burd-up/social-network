import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import {NavLink} from "react-router-dom";

let User = ( {user, followingInProgress, unfollow, follow}) => {
    return (
        <div key={user.id} className={s.aboutUser}>
            <div className={s.userFollow}>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img className={s.userPhoto} src={user.photos.small !== null ? user.photos.small : userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {user.followed ?
                        <button disabled={followingInProgress.some(id => id == user.id)} className={s.follow}
                                onClick={() => {
                                    unfollow(user.id)
                                }}>Unfollow</button>
                        : <button disabled={followingInProgress.some(id => id == user.id)} className={s.follow}
                                  onClick={() => {
                                      follow(user.id)
                                  }}>Follow</button>}
                </div>
            </div>
            <div className={s.userName}>
                <div className={s.name}>{user.name}</div>
                <div className={s.status}>{user.status}</div>
            </div>
            <div className={s.location}>
                <div className={s.country}>{"user.location.country"}</div>
                <div className={s.city}>{"user.location.city"}</div>
            </div>
        </div>
    )
};

export default User;