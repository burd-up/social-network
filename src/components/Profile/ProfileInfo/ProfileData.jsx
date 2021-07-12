import s from './ProfileInfo.module.css';
import React from 'react';
import StatusWithUseState from "./StatusWithUseState";


const Contact = (props) => {
    return(
        <div>{props.contactTitle} : {props.contactValue}</div>
        /*   contacts.key? <div>{key} : {contacts[key]}</div> : null*/
    )
}

const ProfileData = ({profile: {contacts, fullName, aboutMe}, ...props}) => {

    return (
                <div className={s.discription}>
                    <div className={s.nameAndStatus}>
                        <div className={s.name}>{fullName}</div>
                        <StatusWithUseState status={props.status} updateStatus={props.updateStatus}/>
                        <div className={s.status}>{aboutMe}</div>
                    </div>
                    <div className={s.contacts}> Contacts:
                        {Object.keys(contacts).map(key => {return <Contact contactTitle={key} contactValue={contacts[key]}/>})}
                        {props.showProfileChangeForm? <button onClick={() => props.falseChangeForm()}>close form</button>
                            : <button onClick={() => props.trueChangeForm()}>change</button>}
                    </div>

                </div>
    )
};
export default ProfileData;
