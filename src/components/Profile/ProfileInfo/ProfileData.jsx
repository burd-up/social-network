import s from './ProfileInfo.module.css';
import React from 'react';
import StatusWithUseState from "./StatusWithUseState";


const Contact = (props) => {
    return(
        <div>{props.contactTitle} : {props.contactValue}</div>
    )
}

const ProfileData = ({profile: {contacts, fullName, aboutMe, lookingForAJob, lookingForAJobDescription}, ...props}) => {

    return (
                <div className={s.discription}>
                    <div className={s.nameAndStatus}>
                        <div className={s.name}><div>{fullName}</div>
                            {props.showProfileChangeForm? <button onClick={() => props.falseChangeForm()}>close form</button>
                                : <button onClick={() => props.trueChangeForm()}>change</button>}
                        </div>
                        <StatusWithUseState status={props.status} updateStatus={props.updateStatus}/>
                        <div className={s.status}> <span className={s.titleOfContacts}>looking for a job :</span>  {lookingForAJob? "yes":"no"}</div>
                        <div className={s.status}> <span className={s.titleOfContacts}>about me :</span>  {aboutMe}</div>
                        <div className={s.status}> <span className={s.titleOfContacts}>my professional skills :</span>  {lookingForAJobDescription}</div>
                    </div>
                    <div className={s.contacts}>
                        <div className={s.titleOfContacts}>Contacts:</div>
                        {Object.keys(contacts).map(key => {return <Contact contactTitle={key} contactValue={contacts[key]}/>})}

                    </div>

                </div>
    )
};
export default ProfileData;
