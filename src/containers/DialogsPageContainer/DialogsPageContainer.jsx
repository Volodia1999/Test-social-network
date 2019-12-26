import React from 'react';
import {addMessageActionCreator} from "../../redux/DialogsPage/actions";
import {Dialogs} from "../../components/Dialogs/Dialogs";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class DialogsContainer extends React.PureComponent {
    render() {
        const dialogId = this.props.match.params.dialogId;
        return (
            <Dialogs dialogsPage={this.props.dialogsPage} dialogId={dialogId} addMessageDialog={this.props.addMessageDialog}/>
        )
    }
}

const mapStateToProps = (state) => (
    {
        dialogsPage: state.dialogsPage,
    }
);

const mapDispatchToProps = (dispatch) => (
    {
        addMessageDialog: (newMessage) => {
            dispatch(addMessageActionCreator(newMessage));
        }
    }
);



export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps))(DialogsContainer);
