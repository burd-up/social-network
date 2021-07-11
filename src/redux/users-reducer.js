import {usersAPI} from "../api/api";
import React from 'react'
import {updateObjectInArray} from "../components/utils/updateObjectInArray";

const FOLLOWING = 'users/FOLLOWING';
const UNFOLLOWING = 'users/UNFOLLOWING';
const SET_USERS = 'users/SET_USERS';
const CHANGE_CURRENT_PAGE = 'users/CHANGE_CURRENT_PAGE';
const CHANGE_TOTAL_USER_COUNT = 'users/CHANGE_TOTAL_USER_COUNT';
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'users/FOLLOW_TOGGLE_IS_FETCHING';

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOWING:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
            }
        case UNFOLLOWING:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
            }
        case SET_USERS:
            return {...state, users: [...action.users]}
        case CHANGE_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case CHANGE_TOTAL_USER_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: state.followingInProgress.some(id => id == action.userId) ?
                    state.followingInProgress.filter(id => id != action.userId)
                    : [...state.followingInProgress, action.userId]
            }
        default:
            return state;
    }
};
//Thunks is hear!
export const requestUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        let data = await usersAPI.getUsers(currentPage, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(changeTotalUserCount(data.totalCount));
        dispatch(changeCurrentPage(currentPage));
    }
}

const followUnfollowFlow = async (dispatch , userId, apiMethod, action) => {
        dispatch(toggleFollowingProgress(userId));
        let resultCode = await apiMethod(userId);
        if (resultCode === 0) {
            dispatch(action(userId));
            dispatch(toggleFollowingProgress(userId));
        }
}

export const follow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.follow, following)
    }
}

export const unfollow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, usersAPI.unfollow, unfollowing)
    }
}

export const following = (userId) => ({type: FOLLOWING, userId: userId});
export const unfollowing = (userId) => ({type: UNFOLLOWING, userId: userId});
export const setUsers = (users) => ({type: SET_USERS, users: users});
export const changeCurrentPage = (currentPage) => ({type: CHANGE_CURRENT_PAGE, currentPage: currentPage});
export const changeTotalUserCount = (totalUsersCount) => ({
    type: CHANGE_TOTAL_USER_COUNT,
    totalUsersCount: totalUsersCount
});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching: isFetching})
export const toggleFollowingProgress = (userId) => ({type: TOGGLE_FOLLOWING_PROGRESS, userId})

export default usersReducer;

