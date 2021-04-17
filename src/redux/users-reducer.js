import {usersAPI} from "../api/api";

const FOLLOWING = 'FOLLOWING';
const UNFOLLOWING = 'UNFOLLOWING';
const SET_USERS = 'SET_USERS';
const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE';
const CHANGE_TOTAL_USER_COUNT = 'CHANGE_TOTAL_USER_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'FOLLOW_TOGGLE_IS_FETCHING';

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
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOWING:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
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
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(changeTotalUserCount(data.totalCount));
            dispatch(changeCurrentPage(currentPage));
        })
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(userId));
        usersAPI.follow(userId).then(resultCode => {
            if (resultCode == 0) {
                dispatch(following(userId));
                dispatch(toggleFollowingProgress(userId));
            }
        })
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(userId));
        usersAPI.unfollow(userId).then(resultCode => {
            if (resultCode == 0) {
                dispatch(unfollowing(userId));
                dispatch(toggleFollowingProgress(userId));
            }
        });
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

