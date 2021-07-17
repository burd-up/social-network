import {headerAPI, securityApi} from "../api/api";
import {stopSubmit} from "redux-form";

const CHANGE_TIME = 'header/CHANGE_TIME';
const AUTH = 'header/AUTH';
const GET_CAPTCHA_URL = 'header/GET_CAPTCHA_URL';

const initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    /*    time: new Date().toLocaleTimeString()*/
    captchaUrl: null,
};

const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        /*        case CHANGE_TIME:
                    return {
                        ...state,
                        time: new Date().toLocaleTimeString()
                    };*/
        case AUTH:
            return {
                ...state,
                ...action.data
            }
        case GET_CAPTCHA_URL:
            return {
                ...state,
                captchaUrl: action.url
            }
        default:
            return state;
    }
};

export const auth = () => (dispatch) => {
    return headerAPI.auth().then(data => {
        if (data.resultCode === 0) {
            let {id, login, email} = data.data;
            dispatch(setUserAuthData(id, login, email, true));
        }
    })
}

export const getCaptchaUrl = () => (dispatch) => {
    return securityApi.getCaptchaUrl().then(url => {
        dispatch(getCaptchaUrlSuccess(url));
    })
}

export const login = (email, password, rememberMe = false, captcha = null) => {
    return (dispatch) => {
        headerAPI.login(email, password, rememberMe, captcha).then(data => {
            if (data.resultCode === 0) {
                dispatch(auth())
            } else {
                if (data.resultCode === 10) {
                    dispatch(getCaptchaUrl())
                }
                let err = data.messages.length > 0 ? data.messages[0] : "Some error"
                dispatch(stopSubmit("login", {_error: err}))
            }
        })
    }
}
export const logout = () => {
    return (dispatch) => {
        headerAPI.logout().then(data => {
            if (data.resultCode === 0) {
                dispatch(setUserAuthData(null, null, null, false));
            }
        })
    }
}


export const changeTime = () => ({type: CHANGE_TIME});
export const setUserAuthData = (userId, login, email, isAuth) => ({type: AUTH, data: {userId, login, email, isAuth}})
export const getCaptchaUrlSuccess = (url) => ({type: GET_CAPTCHA_URL, url})

export default headerReducer;

