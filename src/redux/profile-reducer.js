import {profileAPI} from "../api/api";

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const DELETE_POST = 'profile/DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS';

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
        case DELETE_POST:
            return {
                ...state,
                postData: {...state.postData.filter(el => el.id !== action.postId)}
            }
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            };
        default:
            return state;
    }
};

export const getProfile = (userId) => {
    return async (dispatch) => {
        let data = await profileAPI.getProfile(userId);
        dispatch(setUserProfile(data));
    }
}
export const getStatus = (userId) => {
    return async (dispatch) => {
        let data = await profileAPI.getStatus(userId);
        dispatch(setStatus(data));
    }
}
export const updateStatus = (status) => {
    return async (dispatch) => {
        let response = await profileAPI.updateStatus(status);
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    }
}
export const savePhoto = (file) => async (dispatch) => {
        let response = await profileAPI.savePhoto(file);

        if (response.data.resultCode === 0) {
            dispatch(savePhotoSuccess(response.data.data.photos));
    }
}
export const changeProfileData = (profile) => async (dispatch, getState) => {
    const userId = getState().header.userId;
    let response = await profileAPI.changeProfile(profile);

    if (response.data.resultCode === 0) {
        dispatch(getProfile(userId));
    }
}

export const addPost = (postText) => ({type: ADD_POST, postText: postText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile: profile});
export const setStatus = (status) => ({type: SET_STATUS, status: status});
export const deletePost = (postId) => ({type: DELETE_POST, postId: postId});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});

export default profileReducer;

