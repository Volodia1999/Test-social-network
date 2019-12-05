import profileReducer from "./ProfilePage/reducer";
import dialogReducer from "./DialogsPage/reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', count_like: 0},
                {id: 2, message: 'Hey, whats new?', count_like: 100},
                {id: 3, message: 'What do you think about myself?', count_like: 34},
            ],
            newPostText: 'Hey are you Volodia?',
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name_author: 'Volodia', message: 'What is the weather now?', url: '/dialog/1'},
                {id: 2, name_author: 'Petro', message: 'What is your name?', url: '/dialog/2'},
                {id: 3, name_author: 'Oleh', message: 'What is your favorite football player?', url: '/dialog/3'},
            ],
            newMessageText: 'Hello, Volodia',
        },
        menu_profile: [
            {id: 1, name_menu: 'Profile', url: '/profile'},
            {id: 2, name_menu: 'Messages', url: '/dialog'},
            {id: 3, name_menu: 'News', url: '/news'},
            {id: 4, name_menu: 'Music', url: '/music'},
            {id: 5, name_menu: 'Settings', url: '/settings'},
        ],
    },
    _newRender() {
        console.log('State changed');
    },

    subscribe(observer) {
        this._newRender = observer;
    },
    getState() {
        return this._state;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
        this._newRender(this._state);
    },
};

export default store;
