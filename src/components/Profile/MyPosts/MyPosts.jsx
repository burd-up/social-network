import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post';

function MyPosts(props) {

    let reff = React.createRef();
    let onAdd = () => {
        props.addPost();
    };

    let onChangePostText = () => {
        let text = reff.current.value;
        props.changePostText(text);
    };

    let posts = props.postData.map((post => <Post key={post.id} message={post.post} likesCount={post.likesCount}/>));
    return (
        <div className={s.posts}>
            <div className={s.textForm}>
                <textarea ref={reff}
                          onChange={onChangePostText}
                          value={props.newPostText}/>
                <button onClick={onAdd}>add post</button>
            </div>
            {posts}
        </div>
    )
};
export default MyPosts;