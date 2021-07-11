import s from './ProfileInfo.module.css';
import React, {useState} from 'react';
import userPhoto from '../../../assets/images/user.png';
import StatusWithUseState from "./StatusWithUseState";


const ProfileInfo = React.memo(({profile: {contacts, photos, fullName, aboutMe}, ...props}) => {
    const [onMouseEnter, setOnMouseEnter] = useState(null)

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }

    return (
        <div>
            <div className={s.avaAndDiscription}>
                <div onMouseEnter={() => setOnMouseEnter(true)} onMouseLeave={() => setOnMouseEnter(false)} className={s.photoBlock} >
                    <img className={s.ava} src={photos.large || userPhoto}/>
                    {props.isOwner ? <div className={onMouseEnter? s.mouseEnter : s.mouseLeave}><input  type={'file'} onChange={(event) => onMainPhotoSelected(event)}
                                            placeholder={'new photo'}/></div> : null}
                </div>
                <div className={s.discription}>
                    <div className={s.nameAndStatus}>
                        <div className={s.name}>{fullName}</div>
                        <StatusWithUseState status={props.status} updateStatus={props.updateStatus}/>
                        <div className={s.status}>{aboutMe}</div>
                    </div>
                    <div className={s.contacts}> Contacts:
                        {!contacts.facebook ? null : <div>Facebook: {contacts.facebook}</div>}
                        {!contacts.github ? null : <div>Github: {contacts.github}</div>}
                        {!contacts.instagram ? null : <div>Instagram: {contacts.instagram}</div>}
                        {!contacts.mainLink ? null : <div>MainLink: {contacts.mainLink}</div>}
                        {!contacts.twitter ? null : <div>Twitter: {contacts.twitter}</div>}
                        {!contacts.vk ? null : <div>vk: {contacts.vk}</div>}
                        {!contacts.website ? null : <div>Website: {contacts.website}</div>}
                        {!contacts.youtube ? null : <div>Youtube: {contacts.youtube}</div>}
                    </div>
                </div>
            </div>
        </div>
    )
});
export default ProfileInfo;
