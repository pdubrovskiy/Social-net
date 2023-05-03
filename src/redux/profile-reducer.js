import { ProfileAPI, UsersAPI } from "../api/api";

const ADD_POST = 'social-network/profile/ADD-POST';
const SET_USER_PROFILE = 'social-network/profile/SET-USER-PROFILsE';
const SET_USER_STATUS = 'social-network/profile/SET-USER-STATUS';

let initialState = {
    profile: null,
    posts: [
        { id: 1, message: 'Hi, how are you ?', likesCount: 12 },
        { id: 2, message: 'I love you', likesCount: 23 },
        { id: 3, message: 'Congratulation!', likesCount: 56 },
    ],
    status: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.posts.length + 1,
                message: action.postMessage,
                likesCount: 0,
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                postDraft: ''
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        case SET_USER_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }

        default:
            return state;
    }
}

export const addPost = (text) => {
    return {
        type: ADD_POST,
        postMessage: text
    };
}

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}

export const setUserStatus = (status) => {
    return {
        type: SET_USER_STATUS,
        status
    }
}

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await UsersAPI.getProfile(userId)
            dispatch(setUserProfile(response.data));
}

export const getUserStatus = (status) => async (dispatch) => {
    let response = await ProfileAPI.getStatus(status)
        dispatch(setUserStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await ProfileAPI.updateStatus(status)
        if(response.data.resultCode === 0){
        dispatch(setUserStatus(status));
        }
}

export default profileReducer;