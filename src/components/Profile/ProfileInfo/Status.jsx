import s from './ProfileInfo.module.css';
import userPhoto from '../../../assets/images/user.png';
import {Status} from "./Status";

function ProfileInfo(props) {
    return (
        <div>
            <div className={s.avaAndDiscription}>
                <img className={s.ava} src={!props.profile.photos.large ? userPhoto : props.profile.photos.large }/>
                <div className={s.discription}>
                    <div className={s.nameAndStatus}>
                        <div className={s.name}>{props.profile.fullName}</div>
                        <Status/>
                        <div className={s.status}>{props.profile.aboutMe}</div>
                    </div>
                    <div className={s.contacts}> Contacts:
                    {!props.profile.contacts.facebook ? null : <div>Facebook: {props.profile.contacts.facebook}</div>}
                    {!props.profile.contacts.github ? null : <div>Github: {props.profile.contacts.github}</div>}
                    {!props.profile.contacts.instagram ? null : <div>Instagram: {props.profile.contacts.instagram}</div>}
                    {!props.profile.contacts.mainLink ? null : <div>MainLink: {props.profile.contacts.mainLink}</div>}
                    {!props.profile.contacts.twitter ? null : <div>Twitter: {props.profile.contacts.twitter}</div>}
                    {!props.profile.contacts.vk ? null : <div>vk: {props.profile.contacts.vk}</div>}
                    {!props.profile.contacts.website ? null : <div>Website: {props.profile.contacts.website}</div>}
                    {!props.profile.contacts.youtube ? null : <div>Youtube: {props.profile.contacts.youtube}</div>}
                    </div>
                </div>
            </div>
        </div>
    )
};
export default ProfileInfo;
