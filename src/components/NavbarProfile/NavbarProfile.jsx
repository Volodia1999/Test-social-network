import React from 'react';
import './NavbarProfile.css';
import {NavLink} from "react-router-dom";

export const NavbarProfile = (props) => {
    return (
        <div className='bg-warning point-menu col-md-2 col-4 mt-1 mr-1'>
            <ul className='list pl-0 ml-3'>
                {props.sidebar.menu_profile.map((menu) => (
                <li key={menu.id}>
                    <NavLink
                        to={menu.url}
                        activeClassName='active'
                        className='color_url'>{menu.name_menu}</NavLink>
                </li>
            ))}
            </ul>
        </div>
    );
};
