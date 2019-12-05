import {getAuthUser} from "../Auth/actions";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

export const initializedSuccess = () => (
    {
        type: INITIALIZED_SUCCESS,
    }
);

export const initializeApp = () => {
    return (dispatch) => {
        let promise = dispatch(getAuthUser());

        Promise.all([promise])
            .then(() => {
                dispatch(initializedSuccess())
            })
    }
};
