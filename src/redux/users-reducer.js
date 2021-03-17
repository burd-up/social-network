const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE';
const CHANGE_TOTAL_USER_COUNT = 'CHANGE_TOTAL_USER_COUNT';

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
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
        default:
            return state;
    }
};

export const followActionCreator = (userId) => ({type: FOLLOW, userId: userId});
export const unfollowActionCreator = (userId) => ({type: UNFOLLOW, userId: userId});
export const setUsersActionCreator = (users) => ({type: SET_USERS, users: users});
export const changeCurrentPageActionCreator = (currentPage) => ({type: CHANGE_CURRENT_PAGE, currentPage: currentPage});
export const changeTotalUserCountActionCreator = (totalUsersCount) => ({type: CHANGE_TOTAL_USER_COUNT, totalUsersCount: totalUsersCount});

export default usersReducer;

