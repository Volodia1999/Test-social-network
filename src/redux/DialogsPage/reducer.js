const ADD_MESSAGE = 'ADD_MESSAGE';

const initialState = {
    dialogs: [
        {id: 1, name_author: 'Volodia', url: '/dialog/1'},
        {id: 2, name_author: 'Petro', url: '/dialog/2'},
        {id: 3, name_author: 'Oleh', url: '/dialog/3'},
    ],
    messages: [
        {id: 1, message: 'What is the weather now?', urlDialog: '1'},
        {id: 2, message: 'What is your name?', urlDialog: '2'},
        {id: 3, message: 'What is your favorite football player?', urlDialog: '3'},
        {id: 4, message: 'Today', urlDialog: '2'},
        {id: 5, message: 'Yesterday', urlDialog: '1'},
    ],
};

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            const newMessage = {
                id: 6,
                message: action.newMessageText,
                urlDialog: '3',
            };
            return {
                ...state,
                messages: [...state.messages, newMessage],
            }
        }

        default:
            return state;
    }
};

export default dialogReducer;
