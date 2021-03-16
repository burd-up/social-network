import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import {combineReducers, createStore} from "redux";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: dialogsReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);

export default store;