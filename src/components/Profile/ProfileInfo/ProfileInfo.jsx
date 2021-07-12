import s from './ProfileInfo.module.css';
import React, {useState} from 'react';
import MainPhoto from "./MainPhoto";
import ProfileData from "./ProfileData";
import ProfileChangeForm from "./ProfileChangeForm";


const ProfileInfo = React.memo(({profile, ...props}) => {

    const [showProfileChangeForm, setShowProfileChangeForm] = useState(false);

    return (
            <div className={s.avaAndDiscription}>
                <MainPhoto savePhoto={props.savePhoto} isOwner={props.isOwner} photos={profile.photos}/>
                <ProfileData profile={profile} updateStatus={props.updateStatus}
                             showProfileChangeForm={showProfileChangeForm}
                             trueChangeForm={() => setShowProfileChangeForm(true)}
                             falseChangeForm={() => setShowProfileChangeForm(false)}
                             status={props.status}/>
                {showProfileChangeForm && <ProfileChangeForm showProfileChangeForm={showProfileChangeForm}
                                                             setShowProfileChangeForm={() => setShowProfileChangeForm(false)}/>}
            </div>
    )
});
export default ProfileInfo;
