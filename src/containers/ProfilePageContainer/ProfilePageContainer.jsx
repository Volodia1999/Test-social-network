import React from 'react';
import {
    addPost,
    getProfileUsers, getStatus,
    getUserStatus,
    updateUserStatus,
} from "../../redux/ProfilePage/actions";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {ProfilePageWithHooks} from "../../components/ProfilePage/ProfilePageWithHooks";

class ProfilePageContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = this.props.loggedUser;

            if (!userId) {
                this.props.history.push('/login');
            }
        }
        this.props.getProfileUsers(userId);
        this.props.getUserStatus(userId);
    }

    render() {
        return (
            <ProfilePageWithHooks {...this.props}
                         addPost={this.props.addPost}
                         getStatus={this.props.getStatus}
                         updateUserStatus={this.props.updateUserStatus}
            />
        )
    }
}

const mapStateToProps = (state) => (
    {
        profilePage: state.profilePage,
        isAuth: state.auth.isAuth,
        loggedUser: state.auth.userId,
        loading: state.profilePage.loading
    }
);

/*
const mapDispatchToProps = (dispatch) => (
    {
        updateNewPost: (current_value) => {
            let action = updateNewPostChangeActionCreator(current_value);
            dispatch(action);
        },

        addPostProfile: () => {
            dispatch(addPostActionCreator());
        },
    }
);
*/

export default compose(
    withRouter,
    connect(mapStateToProps, {
        addPost,
        getStatus,
        getProfileUsers,
        getUserStatus,
        updateUserStatus,
    }))(ProfilePageContainer);
