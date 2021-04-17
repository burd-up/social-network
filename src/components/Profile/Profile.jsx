import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../Preloader/Preloader";

function Profile(props) {
    if (props.profilePage.profile === null || undefined) {
        return <Preloader/>
    }
    return (

        <div>
            <ProfileInfo profile={props.profilePage.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer store={props.store}/>
        </div>
    )
};
export default Profile;