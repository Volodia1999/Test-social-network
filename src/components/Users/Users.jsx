import React from 'react';
import {Container} from "reactstrap";
import './Users.css';
import Paginator from "../Paginator/Paginator";
import User from "./User";

const Users = (props) => {
    return (
        <Container className='bg-light w-100 text-center'>
            <p className='font-weight-bold'>Find your friends</p>
                {
                    props.users.map((user) => <User
                            user={user}
                            followingInProgress={props.followingInProgress}
                            follow={props.follow}
                            unfollow={props.unfollow}
                            key={user.id}
                        />
                    )}
            <Paginator
                totalUsers={props.totalUsers}
                countUsers={props.countUsers}
                currentPage={props.currentPage}
                changePage={props.changePage}
                isLoading={props.isLoading}
            />
        </Container>
    )
};

export default Users;
