import * as axios from "axios";
import { stopSubmit } from 'redux-form'

const SET_AUTH_USER = 'SET_AUTH_USER';
const LOGIN_PENDING = 'LOGIN_PENDING';

export const loginPending = (pending) => (
    {
        type: LOGIN_PENDING,
        payload: pending
    }
);

export const setAuthUser = (userId, login, email, isAuth) => (
    {
        type: SET_AUTH_USER,
        payload: {userId, login, email, isAuth}
    }
);

export const getAuthUser = () => {
    return (dispatch) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then((response) => {
                if (response.data.resultCode === 0) {
                    const {id, login, email} = response.data.data;
                    dispatch(setAuthUser(id, login, email, true));
                }
            })
    }
};

export const login = (email, password, rememberMe = false) => {
    return (dispatch) => {
        dispatch(loginPending(true));
        return axios.post(`https://social-network.samuraijs.com/api/1.0/auth/login`, {email, password, rememberMe}, {
            withCredentials: true
        })
            .then((response) => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuthUser());
                    dispatch(loginPending(false));
                } else {
                    let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Server error';
                    dispatch(stopSubmit('login', {_error: message}));
                    dispatch(loginPending(false));
                }
            })
    }
};

export const logout = () => {
    return (dispatch) => {
        axios.delete(`https://social-network.samuraijs.com/api/1.0/auth/login`, {
            withCredentials: true,
            headers: {
                "API-KEY": "ebd1ca42-14fd-4d10-bafa-1eaa608ba0f3",
            }
        })
            .then((response) => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUser(null, null, null, false));
                }
            })
    }
};

