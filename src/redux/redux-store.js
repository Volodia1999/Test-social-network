import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./ProfilePage/reducer";
import dialogReducer from "./DialogsPage/reducer";
import navbarReducer from "./Navbar/reducer";
import usersReducer from "./Users/reducer";
import authReducer from "./Auth/reducer";
import thinkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import appReducer from "./App/reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    sidebar: navbarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
});

const store = createStore(reducers, applyMiddleware(thinkMiddleware));

window.store = store;

export default store;

