const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const TOTAL_USERS = 'TOTAL_USERS';
const CURRENT_PAGE = 'CURRENT_PAGE';
const IS_LOADING = 'IS_LOADING';
const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS';

const initialState = {
    users: [],
    countUsers: 100,
    totalUsers: 0,
    currentPage: 1,
    isLoading: false,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.payload) {
                        return {
                            ...user,
                            followed: true,
                        }
                    }
                    return user;
                })
            }
        }

        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.payload) {
                        return {
                            ...user,
                            followed: false,
                        }
                    }
                    return user;
                })
            }
        }

        case SET_USERS: {
            return {
                ...state,
                users: action.payload,
            }
        }

        case TOTAL_USERS: {
            return {
                ...state,
                totalUsers: action.payload,
            }
        }

        case CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.payload,
            }
        }

        case IS_LOADING: {
            return {
                ...state,
                isLoading: action.payload,
            }
        }

        case FOLLOWING_IN_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.following
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter((id) => id !== action.userId)
            }
        }

        default: {
            return state;
        }
    }
};

export default usersReducer;