import React from 'react';
import {connect} from "react-redux";
import {Header} from "../../components/Header/Header";
import {getAuthUser, logout} from "../../redux/Auth/actions";

class AuthContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUser();
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

const mapStateToProps = (state) => (
    {
        auth: state.auth,
        loggedUserId: state.auth.userId
    }
);

export default connect(mapStateToProps, {getAuthUser, logout})(AuthContainer);