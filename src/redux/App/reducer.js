const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

const initialState = {
    initializedSuccess: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initializedSuccess: true
            }
        }

        default:
            return state;
    }
};

export default appReducer;