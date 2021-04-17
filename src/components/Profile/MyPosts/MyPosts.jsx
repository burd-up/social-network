import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post';
import {Field, reduxForm} from "redux-form";
import FormControl from "../../common/FormControls/FormControl";
import {maxLength, required} from "../../utils/validators";

const maxLength30 = maxLength(30);

let PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.textForm}>
            <Field component={FormControl} element={'textarea'} name="newPostText" type="text" placeholder="new post"
            validate={[maxLength30]}/>
            <button>Send</button>
        </form>
    )
}

PostForm = reduxForm({form:"postForm"})(PostForm);

function MyPosts(props) {

    function onSubmit (formData) {
        props.addPost(formData.newPostText)
    }

    let posts = props.postData.map((post => <Post key={post.id} message={post.post} likesCount={post.likesCount}/>));

    return (
        <div className={s.posts}>
            <PostForm onSubmit={onSubmit}/>
            {posts}
        </div>
    )
};

export default MyPosts;

