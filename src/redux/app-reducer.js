import {auth} from "./header-reducer";

const SET_INITIALIZED = 'SET_INITIALIZED';

const initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            };
        default:
            return state;
    }
};

export const initializedSuccess = () =>  (dispatch) => {
        dispatch(auth()).then(()=>{
            dispatch(setInitialized())
        })
}

export const setInitialized = () => ({type: SET_INITIALIZED});

export default appReducer;

