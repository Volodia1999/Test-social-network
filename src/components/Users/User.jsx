import React from 'react';
import {Spinner} from "reactstrap";
import './Users.css';
import {NavLink} from "react-router-dom";

const User = ({user, ...props}) => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-3 col-md-5 col-sm-12 text-center'>
                    <NavLink to={`/profile/${user.id}`}>
                        <img
                            src={user.photos.small !== null ? user.photos.small : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVYnu5cNG2KWiidMc4PAhznQZDgmYGvtSxYtwfz8rPEatAl9wtJQ&s'}
                            width={150} height={150} className='rounded-circle'
                            alt=''/>
                    </NavLink>
                    <p>
                        {user.followed
                            ? <button
                                className='btn btn-danger btn-sm mt-2 col-5'
                                onClick={() => props.unfollow(user.id)}>
                                {props.followingInProgress.some((id) => id === user.id)
                                    ? <Spinner size='sm' color='white'/>
                                    : 'Unfollow'
                                }
                            </button>
                            : <button disabled={props.followingInProgress.some((id) => id === user.id)}
                                      className='btn btn-danger btn-sm mt-2 col-4'
                                      onClick={() => props.follow(user.id)}>Follow</button>
                        }
                    </p>
                </div>
                <div className='mt-4 info-card col-lg-8 col-md-7 text-md-left text-sm-center'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-9 font-italic'>
                                <p>{user.name}</p>
                                <p className='word-wrap'>{user.status !== null ? user.status : 'No status yet'}</p>
                            </div>
                            <div className='col-md-3'>
                                <p>Lviv</p>
                                <p>Ukraine</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default User;
