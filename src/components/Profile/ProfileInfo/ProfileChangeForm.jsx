import s from './ProfileInfo.module.css';
import React from 'react';
import {Field, reduxForm} from "redux-form";
import FormControl from "../../common/FormControls/FormControl";
import {maxLength, required} from "../../utils/validators";

const maxLength30 = maxLength(30);

const ChangeProfileForm = ({handleSubmit,contacts}) => {
    return (
        <form onSubmit={handleSubmit} className={s.reduxForm}>
            <div>full name</div>
            <div className={s.formBlock}>
            <Field component={FormControl} element={"input"} name="fullName" type="text" placeholder={'fullName'}/>
            <div className={s.checkBocks}><Field component={"input"} name="lookingForAJob" type="checkbox" />looking for a job</div>
            </div>
            <div>about me</div>
            <Field component={FormControl} element={"textarea"} name="aboutMe" type="text" placeholder={'my professional skills'}/>
            <div >my professional skills</div>
            <Field component={FormControl} element={"textarea"} name="lookingForAJobDescription" type="text" placeholder={'my professional skills'}/>
            <div >Contacts:</div>
            <div className={s.reduxFormContacts}>
                {Object.keys(contacts).map(key => {return <Field key={key} component={FormControl} element={"input"} name={"contacts."+key} type="text" placeholder={key}/>})}
            </div>
            {/*<div className={s.summaryError}>{error}</div>*/}
            <button type={'submit'} >Change profile</button>
        </form>
    )
}

const ChangeProfileFormReduxForm = reduxForm({form: 'changeProfileData'})(ChangeProfileForm);

const ProfileChangeForm = (props) => {

    const onSubmit = (formData) => {
        console.log(formData)
        props.setShowProfileChangeForm()
        props.changeProfileData(formData);
    }

    return (
        <div className={props.showProfileChangeForm ? s.changeForm : s.form}>
            <div className={s.titleBlock}>
                <div>Profile change form</div>
                <button className={s.x} onClick={() => props.setShowProfileChangeForm()}>x</button>
            </div>
            <ChangeProfileFormReduxForm initialValues={props.profile} onSubmit={onSubmit} setShowProfileChangeForm={() => props.setShowProfileChangeForm()} contacts={props.contacts}/>
        </div>
    )
};
export default ProfileChangeForm;
