import * as axios from "axios";
import {stopSubmit} from 'redux-form'

const SET_AUTH_USER = 'SET_AUTH_USER';
const LOGIN_PENDING = 'LOGIN_PENDING';
const LOG_OUT_PENDING = 'LOG_OUT_PENDING';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';

const getSuccessCaptchaUrl = (captchaUrl) => (
    {
        type: GET_CAPTCHA_URL_SUCCESS,
        captchaUrl
    }
);

export const loginPending = (pending) => (
    {
        type: LOGIN_PENDING,
        payload: pending
    }
);

export const logoutPending = (pending) => (
    {
        type: LOG_OUT_PENDING,
        payload: pending
    }
);

export const setAuthUser = (userId, login, email, isAuth) => (
    {
        type: SET_AUTH_USER,
        payload: {userId, login, email, isAuth}
    }
);

const getCaptchaUrl = () => async (dispatch) => {
    const response = await axios.get(`https://social-network.samuraijs.com/api/1.0/security/get-captcha-url`, {
        withCredentials: true
    });

    const captchaUrl = response.data.url;
    dispatch(getSuccessCaptchaUrl(captchaUrl));
};

export const getAuthUser = () => {
    return async (dispatch) => {
        const response = await axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        });
        if (response.data.resultCode === 0) {
            const {id, login, email} = response.data.data;
            dispatch(setAuthUser(id, login, email, true));
        }
    }
};

export const login = (email, password, rememberMe = false, captchaUrl) => (
     async (dispatch) => {
         dispatch(loginPending(true));
         const response = await axios.post(`https://social-network.samuraijs.com/api/1.0/auth/login`, {
             email,
             password,
             rememberMe,
             captchaUrl
         }, {
             withCredentials: true,
             headers: {
                 "API-KEY": "ebd1ca42-14fd-4d10-bafa-1eaa608ba0f3",
             }
         });
         if (response.data.resultCode === 0) {
             dispatch(getAuthUser());
             dispatch(loginPending(false));
         } else {
             if (response.data.resultCode === 10) {
                 dispatch(getCaptchaUrl());
             }
             let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Server error';
             dispatch(stopSubmit('login', {_error: message}));
             dispatch(loginPending(false));
         }
     }
);


export const logout = () => {
    return async (dispatch) => {
        dispatch(logoutPending(true));
        const response = await axios.delete(`https://social-network.samuraijs.com/api/1.0/auth/login`, {
            withCredentials: true,
            headers: {
                "API-KEY": "ebd1ca42-14fd-4d10-bafa-1eaa608ba0f3",
            }
        });
        if (response.data.resultCode === 0) {
            dispatch(setAuthUser(null, null, null, false));
            dispatch(logoutPending(false));
        }
    }
};

