import React from 'react';
import {Container, Spinner} from "reactstrap";
import './Users.css';
import {NavLink} from "react-router-dom";

const Users = (props) => {
    let pageCount = Math.ceil(props.totalUsers / props.countUsers);
    let pages = [];

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    return (
        <Container className='bg-light w-100 text-center'>
            <p className='font-weight-bold'>Find your friends</p>
            {
                props.users.map((user) => (
                    <div className='container' key={user.id}>
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
                                            className='btn btn-danger btn-sm mt-2 col-4'
                                            onClick={() => props.unfollow(user.id)}>
                                            {props.followingInProgress.some((id) => id === user.id)
                                                ? <Spinner size='sm' color='white'/>
                                                : <span>Unfollow</span>
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
                ))
            }
            {pages.map((page) => {
                return <span
                    className={props.currentPage === page ? 'cursor-pointer font-weight-bold mr-2' : 'mr-2 cursor-pointer'}
                    onClick={(e) => {
                        props.changePage(page)
                    }}>
                    {props.currentPage === page && props.isLoading ? <Spinner size='sm' /> : <span>{page}</span> }
                </span>

            })}
        </Container>
    )
};

export default Users;