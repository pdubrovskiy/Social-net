import { stopSubmit } from "redux-form";
import { AuthAPI } from "../api/api";

const SET_USERS_DATA = 'social-network/auth/SET-USERS-DATA';

let initialState = {
    userID: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USERS_DATA:
            return {
                ...state,
                ...action.data,
            }
        default:
            return state;
    }
}


export const setAuthUserData = (userID, email, login, isAuth) => {
    return { type: SET_USERS_DATA, data: { userID, email, login, isAuth } }
}

export const getAuthUserData = () => async (dispatch) => {
    let response = await AuthAPI.authMe()
    if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const loginUser = (responseData) => async (dispatch) => {

    let response = await AuthAPI.login(responseData.login, responseData.password, responseData.rememberMe = false)
        if (response.data.resultCode === 0) {
            alert('Вы успешно вошли');
            dispatch(getAuthUserData());
        } else {
            let message = response.data.messages.length ? response.data.messages[0] : "Some Error";
            dispatch(stopSubmit('login', { _error: message }));
        }
}

export const loginOutUser = (responseData) => async (dispatch) => {
    let response = await AuthAPI.logout()
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
}

export default authReducer;
