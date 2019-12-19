import React from 'react';
import {
    addPost,
    getProfileUsers, getStatus,
    getUserStatus, updateProfilePhoto,
    updateUserStatus,
} from "../../redux/ProfilePage/actions";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {ProfilePageWithHooks} from "../../components/ProfilePage/ProfilePageWithHooks";

class ProfilePageContainer extends React.PureComponent {
    state = {
        currentUrl: null,
    };

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

    //TODO this, need refactor
    componentDidUpdate(prevProps, prevState) {
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = this.props.loggedUser;

            if (!userId) {
                this.props.history.push('/login');
            }
        }

        if (prevState.currentUrl !== userId) {
            this.setState({
                currentUrl: userId,
            });

            this.props.getProfileUsers(userId);
            this.props.getUserStatus(userId);
        }
    }

    render() {
        return (
            <ProfilePageWithHooks {...this.props}
                                  isOwner={!this.props.match.params.userId}
                                  addPost={this.props.addPost}
                                  getStatus={this.props.getStatus}
                                  updateUserStatus={this.props.updateUserStatus}
                                  updateProfilePhoto={this.props.updateProfilePhoto}
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
        updateProfilePhoto
    }))(ProfilePageContainer);
