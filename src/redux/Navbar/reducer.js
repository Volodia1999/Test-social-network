const initialState = {
        menu_profile: [
            {id: 1, name_menu: 'Profile', url: '/profile'},
            {id: 2, name_menu: 'Messages', url: '/dialog'},
            {id: 3, name_menu: 'News', url: '/news'},
            {id: 4, name_menu: 'Music', url: '/music'},
            {id: 5, name_menu: 'Settings', url: '/settings'},
            {id: 6, name_menu: 'Find users', url: '/users', paddingt: 'lineheight'},
            {id: 7, name_menu: 'Search', url: '/search', paddingt: 'lineheight'},
        ]
};

const navbarReducer = (state = initialState) => {
    return state;
};

export default navbarReducer;
