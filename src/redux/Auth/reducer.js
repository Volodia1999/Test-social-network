const SET_AUTH_USER = 'SET_AUTH_USER';
const LOGIN_PENDING = 'LOGIN_PENDING';

const initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    isPendingLogin: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER: {
            return {
                ...state,
                ...action.payload
            }
        }

        case LOGIN_PENDING: {
            return {
                ...state,
                isPendingLogin: action.payload

            }
        }

        default:
            return state;
    }
};

export default authReducer;