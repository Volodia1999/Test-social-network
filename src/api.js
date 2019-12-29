import * as axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "ebd1ca42-14fd-4d10-bafa-1eaa608ba0f3",
    }
});

export const UserAPI = {
    getAllUser(currentPage, countUsers) {
        return instance.get(`users?page=${currentPage}&count=${countUsers}`);
    },

    changeUserPage(page, countUsers) {
        return instance.get(`users?page=${page}&count=${countUsers}`);
    },

    follow(userId) {
        return instance.post(`follow/${userId}`);
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`);
    }
};

export const ProfileAPI = {
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`);
    },

    getStatusUser(userId) {
        return instance.get(`profile/status/${userId}`);
    },

    updateStatusUser(status) {
        return instance.put(`profile/status`, {status: status});
    },

    updateAvatarProfile(file) {
        const formData = new FormData();
        formData.append('image', file);
        return instance.put(`profile/photo`, formData)
    }
};

export const AuthAPI = {
    getCaptcha() {
        return instance.get(`security/get-captcha-url`);
    },

    getAuth() {
        return instance.get(`auth/me`);
    },

    login(email, password, rememberMe = false, captchaUrl) {
        return instance.post(`auth/login`, {
            email,
            password,
            rememberMe,
            captchaUrl
        })
    },

    logout() {
        return instance.delete(`auth/login`);
    }
};
