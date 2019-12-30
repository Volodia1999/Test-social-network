import {ProfileAPI} from "../../api";

const ADD_POST = 'ADD_POST';
const SET_PROFILE_USERS = 'SET_PROFILE_USERS';
const SET_USERS_STATUS = 'SET_USERS_STATUS';
const PROFILE_SUCCESS = 'PROFILE_SUCCESS';
const UPDATE_PHOTO_SUCCESS = 'UPDATE_PHOTO_SUCCESS';

export const addPost = (newPostText) => (
    {
        type: ADD_POST,
        newPostText
    }
);

export const loadingSuccess = (loading) => ({
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

export const updatePhoto = (profilePhoto) => (
    {
        type: UPDATE_PHOTO_SUCCESS,
        payload: profilePhoto
    }
);

export const getProfileUsers = (userId) => async (dispatch) => {
    dispatch(loadingSuccess(true));
    const response = await ProfileAPI.getUserProfile(userId);
    dispatch(setProfileUsers(response.data));
    dispatch(loadingSuccess(false));
};

export const getUserStatus = (userId) => async (dispatch) => {
    dispatch(loadingSuccess(true));
    const response = await ProfileAPI.getStatusUser(userId);
    dispatch(getStatus(response.data));
    dispatch(loadingSuccess(false));
};


export const updateUserStatus = (status) => async (dispatch) => {
    dispatch(loadingSuccess(true));
    const response = await ProfileAPI.updateStatusUser(status);
    if (response.data.resultCode === 0) {
        dispatch(getStatus(status));
        dispatch(loadingSuccess(false));
    }

};


export const updateProfilePhoto = (file) => async (dispatch) => {
    dispatch(loadingSuccess(true));
    const response = await ProfileAPI.updateAvatarProfile(file);
    if (response.data.resultCode === 0) {
        dispatch(updatePhoto(response.data.data.photos));
        dispatch(loadingSuccess(false));
    }
};

