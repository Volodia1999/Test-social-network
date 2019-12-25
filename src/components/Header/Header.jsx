import React from 'react';
import './Header.css';
import {NavLink} from "react-router-dom";
import {Spinner} from "reactstrap";

export const Header = (props) => (
    <div className='bg-success header d-flex'>
        <img
            src='https://cdn3.iconfinder.com/data/icons/picons-social/57/56-apple-512.png'
            alt='logo'
            width={80}/>
        <div className='name-header'>Social network</div>
        <div className='text-right login align-self-center mr-2'>
            {props.auth.isAuth
                ? <div>
                    <NavLink to='/profile' className='font-weight-normal'>{props.auth.login}</NavLink>
                    <button className='bg-transparent border-0 font-weight-bold' onClick={props.logout}>
                        {props.isPendingLogOut ? <Spinner color='white' size='sm'/> : 'Log out'}
                    </button>
                </div>
                : <NavLink to='/login'>Login</NavLink>}
        </div>
    </div>
);
