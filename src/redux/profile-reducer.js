import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const CHANGE_POST_TEXT = 'CHANGE-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

const initialState = {
    postData: [
        {id: 1, post: 'hi, how are you?', likesCount: 1},
        {id: 2, post: 'i`me fine?', likesCount: 34},
        {id: 3, post: 'Yo Yo YO?', likesCount: 5}
    ],
    newPostText: '',
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                post: state.newPostText,
                likesCount: 0,
            };
            return {...state,
                postData: [...state.postData, newPost],
                newPostText: ''
            };
        case CHANGE_POST_TEXT:
            return {...state,
                newPostText: action.newText
            };
        case SET_USER_PROFILE:
            return {...state,
                profile: action.profile
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

export const addPostActionCreator = () => ({type: ADD_POST});
export const changePostTextActionCreator = (text) => ({type: CHANGE_POST_TEXT, newText: text});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile:profile});

export default profileReducer;

