import React from 'react';
import {Field, reduxForm} from "redux-form";
import FormControl from "../common/FormControls/FormControl";
import {maxLength, required} from "../utils/validators";
import {login} from "../../redux/header-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import s from './Login.module.css'

const maxLength30 = maxLength(30);

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit} className={s.form}>
            <div>
                <Field component={FormControl} element={"input"} name="email" type="text" placeholder="Email"
                       validate={[required, maxLength30]}/>
            </div>
            <div>
                <Field component={FormControl} element={"input"} name="password" type="password" placeholder="Password"
                       validate={[required]}/>
            </div>
            <div className={s.rememberMe}>
                <Field component={FormControl} element={"input"} name="rememberMe" type="checkbox"/>
                <div>remember me</div>
            </div>
            <div className={s.summaryError}>{error}</div>
            <button className={s.button}>Login</button>
        </form>
    )
}

const LoginFormReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
       props.login(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (<div >
            <h1 className={s.title}>LOGIN</h1>
            <LoginFormReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

let mapStateToProps = (state) => ({
    isAuth: state.header.isAuth
})

export default connect(mapStateToProps, {login})(Login);