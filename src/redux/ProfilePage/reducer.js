const ADD_POST = 'ADD_POST';
const SET_PROFILE_USERS = 'SET_PROFILE_USERS';
const SET_USERS_STATUS = 'SET_USERS_STATUS';
const PROFILE_SUCCESS = 'PROFILE_SUCCESS';

const initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', count_like: 0},
        {id: 2, message: 'Hey, whats new?', count_like: 100},
        {id: 3, message: 'What do you think about myself?', count_like: 34},
    ],
    profile: null,
    status: '',
    loading: false
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: 4,
                message: action.newPostText,
                count_like: 3
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        }

        case PROFILE_SUCCESS: {
            return {
                ...state,
                loading: action.payload
            }
        }

        case SET_PROFILE_USERS: {
            return {
                ...state,
            profile: action.payload
            }
        }

        case SET_USERS_STATUS: {
            return {
                ...state,
            status: action.payload
            }
        }

        default:
            return state;
    }
};

export default profileReducer;