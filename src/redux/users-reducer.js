import { UsersAPI } from "../api/api";

const TOGGLE_FOLLOW = 'social-network/users/TOGGLE-FOLLOW';
const SET_USERS = 'social-network/users/SET-USERS';
const SET_CURRENT_PAGE = 'social-network/users/SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'social-network/users/SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'social-network/users/TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'social-network/users/TOGGLE-IS-FOLLOWING-PROGRESS';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map(i => {
                    if (i.id === action.userId) return { ...i, followed: i.followed ? false : true }
                    return i;
                })
            }
        case SET_USERS:
            return { ...state, users: action.users }
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage };
        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.totalCount };
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching };
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : [...state.followingInProgress.filter(id => id !== action.userId)]
            }
        default:
            return state;
    }
}

export const toggleFollow = (userId) => ({ type: TOGGLE_FOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, currentPage: page });
export const setTotalUsersCount = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, totalCount: totalCount });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching: isFetching });
export const toggleIsFollowing = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId: userId });

export const requestUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        let response = await UsersAPI.getUsers(currentPage, pageSize)
            dispatch(setUsers(response.items));
            dispatch(setTotalUsersCount(response.totalCount));
            dispatch(toggleIsFetching(false));
    }
}

export const follow = (id) => {
    return async (dispatch) => {
        dispatch(toggleIsFollowing(true, id));
        let response = await UsersAPI.follow(id)
        if (response === 0) {
            dispatch(toggleFollow(id));
            dispatch(toggleIsFollowing(false, id));
        }
    }
}

export const unfollow = (id) => {
    return async (dispatch) => {
        dispatch(toggleIsFollowing(true, id));
        let response = await UsersAPI.unfollow(id)
        if (response === 0) {
            dispatch(toggleFollow(id));
            dispatch(toggleIsFollowing(false, id));
        }
    }
}

export default usersReducer;

