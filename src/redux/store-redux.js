import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import usersReducer from "./users-reducer";
import headerReducer from "./header-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app-reducer";
import todoReducer from "./todo-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: dialogsReducer,
    usersPage: usersReducer,
    header: headerReducer,
    form: formReducer,
    app: appReducer,
    todoo: todoReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.store = store;

export default store;