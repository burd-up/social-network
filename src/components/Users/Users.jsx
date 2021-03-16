import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.png';

class Users extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {
        return this.props.users.map(u => <div key={u.id} className={s.aboutUser}>
            <div className={s.userFollow}>
                <div>
                    <img className={s.userPhoto} src={u.photos.small !== null ? u.photos.small : userPhoto} />
                </div>
                <div>
                    {u.followed ? <button className={s.follow} onClick={() => {this.props.unFollow(u.id)}}>Unfollow</button>
                        : <button className={s.follow} onClick={() => {this.props.follow(u.id)}}>Follow</button>}
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
        </div>
            )}
    }

export default Users;