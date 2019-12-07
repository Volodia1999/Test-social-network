import * as axios from "axios";

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

export const getUsers = (currentPage, countUsers) => {
    return async (dispatch) => {
        dispatch(setIsLoading(true));
        const response = await axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${countUsers}`, {
            withCredentials: true
        });
        dispatch(setIsLoading(false));
        dispatch(setUsers(response.data.items));
        dispatch(setTotalUsers(response.data.totalCount));

    }
};

export const changePageUsers = (page, countUsers) => {
    return async (dispatch) => {
        dispatch(setCurrentPage(page));
        dispatch(setIsLoading(true));
        const response = await axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${countUsers}`, {
            withCredentials: true
        });
        dispatch(setIsLoading(false));
        dispatch(setUsers(response.data.items));
    }
};

export const follow = (userId) => {
    return async (dispatch) => {
        dispatch(setFollowing(true, userId));
        const response = await axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {}, {
            withCredentials: true,
            headers: {
                "API-KEY": "ebd1ca42-14fd-4d10-bafa-1eaa608ba0f3",
            }
        });
        if (response.data.resultCode === 0) {
            dispatch(followSuccess(userId));
        }
        dispatch(setFollowing(false, userId));

    }
};

export const unfollow = (userId) => {
    return async (dispatch) => {
        dispatch(setFollowing(true, userId));
        const response = await axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {
            withCredentials: true,
            headers: {
                "API-KEY": "ebd1ca42-14fd-4d10-bafa-1eaa608ba0f3",
            }
        });
        if (response.data.resultCode === 0) {
            dispatch(unfollowSuccess(userId));
        }
        dispatch(setFollowing(false, userId));

    }
};
