import s from './ProfileInfo.module.css';
import React from 'react';
import {Field, reduxForm} from "redux-form";
import FormControl from "../../common/FormControls/FormControl";
import {maxLength, required} from "../../utils/validators";

const maxLength30 = maxLength(30);

const ChangeProfileForm = ({handleSubmit/*, error*/}) => {
    return (
        <form onSubmit={handleSubmit} className={s.reduxForm}>
            <Field component={FormControl} element={"input"} name="fullName" type="text"
                   validate={[required, maxLength30]}/>
            <Field component={FormControl} element={"input"} name="rememberMe" type="checkbox"/>

            <Field component={FormControl} element={"input"} name="fullName" type="text"
                   validate={[required, maxLength30]}/>
            {/*<div className={s.summaryError}>{error}</div>*/}
            <button>Login</button>
        </form>
    )
}

const ChangeProfileFormReduxForm = reduxForm({form: 'changeProfile'})(ChangeProfileForm);

const ProfileChangeForm = (props) => {

    const onSubmit = (formData) => {

    }

    return (
        <div className={props.showProfileChangeForm ? s.changeForm : s.form}>
            <div className={s.titleBlock}>
                <div>Form</div>
                <button className={s.x} onClick={() => props.setShowProfileChangeForm()}>x</button>
            </div>
            <ChangeProfileFormReduxForm onSubmit={onSubmit}/>


            {/*<div className={s.nameAndStatus}>
                        <div className={s.name}>{fullName}</div>
                        <StatusWithUseState status={props.status} updateStatus={props.updateStatus}/>
                        <div className={s.status}>{aboutMe}</div>
                    </div>
                    <div className={s.contacts}> Contacts:
                        {Object.keys(contacts).map(key => {return <Contact contactTitle={key} contactValue={contacts[key]}/>})}
                    </div>*/}
        </div>
    )
};
export default ProfileChangeForm;
