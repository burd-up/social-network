import {headerAPI} from "../api/api";

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
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
};

export const auth = () => {
    return (dispatch) => {
        headerAPI.auth().then(data => {
            if (data.resultCode === 0) {
                let {userId, login, email} = data.data;
                dispatch(setUserAuthData(userId, login, email));
            }
        })
    }
}

export const changeTime = () => ({type: CHANGE_TIME});
export const setUserAuthData = (userId, login, email) => ({type: AUTH, data: {userId, login, email}})

export default headerReducer;

