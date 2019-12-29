import {UserAPI} from "../../api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const TOTAL_USERS = 'TOTAL_USERS';
const CURRENT_PAGE = 'CURRENT_PAGE';
const IS_LOADING = 'IS_LOADING';
const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS';

export const followSuccess = (userId) => (
    {
        type: FOLLOW,
        payload: userId,
    }
);

export const unfollowSuccess = (userId) => (
    {
        type: UNFOLLOW,
        payload: userId,
    }
);

export const setUsers = (users) => (
    {
        type: SET_USERS,
        payload: users,
    }
);

export const setTotalUsers = (totalCount) => (
    {
        type: TOTAL_USERS,
        payload: totalCount,
    }
);

export const setCurrentPage = (currentPage) => (
    {
        type: CURRENT_PAGE,
        payload: currentPage,
    }
);

export const setIsLoading = (loading) => (
    {
        type: IS_LOADING,
        payload: loading,
    }
);

export const setFollowing = (following, userId) => (
    {
        type: FOLLOWING_IN_PROGRESS,
        following, userId
    }
);

export const getUsers = (currentPage, countUsers) => async (dispatch) => {
    dispatch(setIsLoading(true));
    const response = await UserAPI.getAllUser(currentPage, countUsers);
    dispatch(setIsLoading(false));
    dispatch(setUsers(response.data.items));
    dispatch(setTotalUsers(response.data.totalCount));
};

export const changePageUsers = (page, countUsers) => async (dispatch) => {
    dispatch(setCurrentPage(page));
    dispatch(setIsLoading(true));
    const response = await UserAPI.changeUserPage(page, countUsers);
    dispatch(setIsLoading(false));
    dispatch(setUsers(response.data.items));
};

export const follow = (userId) => async (dispatch) => {
    dispatch(setFollowing(true, userId));
    const response = await UserAPI.follow(userId);
    if (response.data.resultCode === 0) {
        dispatch(followSuccess(userId));
    }
    dispatch(setFollowing(false, userId));
};


export const unfollow = (userId) => async (dispatch) => {
    dispatch(setFollowing(true, userId));
    const response = await UserAPI.unfollow(userId);
    if (response.data.resultCode === 0) {
        dispatch(unfollowSuccess(userId));
    }
    dispatch(setFollowing(false, userId));
};

