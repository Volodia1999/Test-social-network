const ADD_MESSAGE = 'ADD_MESSAGE';

export const addMessageActionCreator = (newMessageText) => (
    {
        type: ADD_MESSAGE,
        newMessageText
    }
);
