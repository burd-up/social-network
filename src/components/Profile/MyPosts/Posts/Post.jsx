import React from 'react';
import s from './Post.module.css';

function Post(props) {
    return (
        <div className={s.post}>
            <div className={s.one}>
                <img src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-512.png"/>
                <div><span>likes {props.likesCount}</span></div>
            </div>
            <div className={s.postText}>
                {props.message}
            </div>
        </div>
    )
};
export default Post;