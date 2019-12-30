import React from 'react';
import Settings from "../../components/Settings/Settings";
import {connect} from "react-redux";
import {updateProfilePhoto, updateUserStatus} from "../../redux/ProfilePage/actions";

const SettingsContainer = (props) => {
    return (
        <Settings
            status={props.status}
            updateUserStatus={props.updateUserStatus}
            updateProfilePhoto={props.updateProfilePhoto}
            loading={props.loading}
        />
    )
};

const mapStateToProps = (state) => (
    {
        status: state.profilePage.status,
        loading: state.profilePage.loading
    }
);

export default connect(mapStateToProps, {updateUserStatus, updateProfilePhoto})(SettingsContainer);
