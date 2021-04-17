import {headerAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const CHANGE_TIME = 'CHANGE_TIME';
const AUTH = 'AUTH';

const initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    time: new Date().toLocaleTimeString()
};

const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_TIME:
            return {
                ...state,
                time: new Date().toLocaleTimeString()
            };
        case AUTH:
            return {
                ...state,
                ...action.data
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
export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        headerAPI.login(email, password, rememberMe).then(data => {
            if (data.resultCode === 0) {
                dispatch(auth())
            } else {
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

export default headerReducer;

