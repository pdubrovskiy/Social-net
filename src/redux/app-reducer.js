import { getAuthUserData } from "./auth-reducer";

const SET_INITIALIZED_SUCCESS = 'social-network/app/SET-INITIALIZED-SUCCESS';

let initialState = {
    initialized: false,
}

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state;
    }
}

export const initializedSuccess = () => ({type: SET_INITIALIZED_SUCCESS});

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess());
        }
    );
}


export default appReducer;