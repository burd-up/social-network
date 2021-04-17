import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

const initialState = {
    postData: [
        {id: 1, post: 'hi, how are you?', likesCount: 1},
        {id: 2, post: 'i`me fine?', likesCount: 34},
        {id: 3, post: 'Yo Yo YO?', likesCount: 5}
    ],
    profile: null,
    status: null,
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                post: action.postText,
                likesCount: 0,
            };
            return {
                ...state,
                postData: [newPost, ...state.postData],
                newPostText: ''
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        default:
            return state;
    }
};

export const getProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then(data => {
            dispatch(setUserProfile(data));
        });
    }
}
export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(data => {
            dispatch(setStatus(data));
        });
    }
}
export const updateStatus = (status) => {
    return (dispatch) => {
        debugger
        profileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        });
    }
}

export const addPost = (postText) => ({type: ADD_POST, postText: postText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile: profile});
export const setStatus = (status) => ({type: SET_STATUS, status: status});

export default profileReducer;

