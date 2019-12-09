import React from "react";
import {
    follow,
    unfollow,
    getUsers,
    changePageUsers
} from "../../redux/Users/actions";
import {connect} from "react-redux";
import Users from "../../components/Users/Users";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.countUsers);
    }

    changePage = (page) => {
        this.props.changePageUsers(page, this.props.countUsers);
    };

    render() {
        const {totalUsers, countUsers, users, currentPage, follow, unfollow, followingInProgress, isLoading} = this.props;
        return <Users
                totalUsers={totalUsers}
                countUsers={countUsers}
                users={users}
                currentPage={currentPage}
                follow={follow}
                unfollow={unfollow}
                followingInProgress={followingInProgress}
                isLoading={isLoading}
                changePage={this.changePage}
            />
    }
}

const mapStateToProps = (state) => (
    {
        users: state.usersPage.users,
        countUsers: state.usersPage.countUsers,
        totalUsers: state.usersPage.totalUsers,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading,
        followingInProgress: state.usersPage.followingInProgress
    }
);

/*const mapDispatchToProps = (dispatch) => (
    {
        follow: (userId) => {
            dispatch(followAC(userId))
        },

        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },

        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },

        setTotalCount: (totalCount) => {
            dispatch(setTotalUsersAC(totalCount));
        },

        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage));
        },

        setIsLoading: (loading) => {
            dispatch(isLoadingAC(loading));
        }
    }
);*/

export default connect(mapStateToProps, {
    follow, unfollow, getUsers, changePageUsers
})(UsersContainer);
