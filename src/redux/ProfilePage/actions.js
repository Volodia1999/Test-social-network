import * as axios from "axios";

const ADD_POST = 'ADD_POST';
const SET_PROFILE_USERS = 'SET_PROFILE_USERS';
const SET_USERS_STATUS = 'SET_USERS_STATUS';
const PROFILE_SUCCESS = 'PROFILE_SUCCESS';

export const addPost = (newPostText) => (
    {
        type: ADD_POST,
        newPostText
    }
);

export const profileSuccess = (loading) => ({
    type: PROFILE_SUCCESS,
    payload: loading
});

export const setProfileUsers = (profile) => (
    {
        type: SET_PROFILE_USERS,
        payload: profile
    }
);

export const getStatus = (status) => (
    {
        type: SET_USERS_STATUS,
        payload: status
    }
);

export const getProfileUsers = (userId) => {
    return async (dispatch) => {
        dispatch(profileSuccess(true));
        const response = await axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`, {
            withCredentials: true,
        });
        dispatch(setProfileUsers(response.data));
        dispatch(profileSuccess(false));
    }
};

export const getUserStatus = (userId) => {
    return async (dispatch) => {
        dispatch(profileSuccess(true));
        const response = await axios.get(`https://social-network.samuraijs.com/api/1.0/profile/status/${userId}`, {
            withCredentials: true,
        });
        dispatch(getStatus(response.data));
        dispatch(profileSuccess(false));
    }
};

export const updateUserStatus = (status) => {
    return async (dispatch) => {
        const response = await axios.put(`https://social-network.samuraijs.com/api/1.0/profile/status`, {status: status}, {
            withCredentials: true,
            headers: {
                "API-KEY": "ebd1ca42-14fd-4d10-bafa-1eaa608ba0f3",
            }
        });
        if (response.data.resultCode === 0) {
            dispatch(getStatus(status));
        }
    }
};

