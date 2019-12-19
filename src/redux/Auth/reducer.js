const SET_AUTH_USER = 'SET_AUTH_USER';
const LOGIN_PENDING = 'LOGIN_PENDING';
const LOG_OUT_PENDING = 'LOG_OUT_PENDING';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';

const initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    isPendingLogin: false,
    isPendingLogOut: false,
    captchaUrl: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER: {
            return {
                ...state,
                ...action.payload
            }
        }

        case GET_CAPTCHA_URL_SUCCESS: {
            return {
                ...state,
                captchaUrl: action.payload,
            }
        }

        case LOGIN_PENDING: {
            return {
                ...state,
                isPendingLogin: action.payload

            }
        }

        case LOG_OUT_PENDING: {
            return {
                ...state,
                isPendingLogOut: action.payload

            }
        }

        default:
            return state;
    }
};

export default authReducer;
