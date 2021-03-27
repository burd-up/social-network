import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/user.png';
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {usersAPI} from "../../api/api";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = props.currentPage > 1 ? props.currentPage - 1 : props.currentPage; i <= props.currentPage + 6; i++) {
        pages.push(i);
    }

    return <div>
        <div className={s.numbersPage}>
            {pages.map((number) => {
                return <span className={(number === props.currentPage) ? s.currentNumberPage : s.ordinaryNumberPage}
                             onClick={() => {
                                 props.onPageChange(number)
                             }}>{number}</span>
            })}
        </div>
        {props.users.map(u => <div key={u.id} className={s.aboutUser}>
            <div className={s.userFollow}>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <img className={s.userPhoto} src={u.photos.small !== null ? u.photos.small : userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {u.followed ?
                        <button disabled={props.followingInProgress.some(id => id == u.id)} className={s.follow}
                                onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>
                        : <button disabled={props.followingInProgress.some(id => id == u.id)} className={s.follow}
                                  onClick={() => {
                                      props.follow(u.id)
                                  }}>Follow</button>}
                </div>
            </div>
            <div className={s.userName}>
                <div className={s.name}>{u.name}</div>
                <div className={s.status}>{u.status}</div>
            </div>
            <div className={s.location}>
                <div className={s.country}>{"u.location.country"}</div>
                <div className={s.city}>{"u.location.city"}</div>
            </div>
        </div>)
        } </div>
};

export default Users;