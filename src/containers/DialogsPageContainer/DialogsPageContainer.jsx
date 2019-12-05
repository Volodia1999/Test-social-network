import {addMessageActionCreator} from "../../redux/DialogsPage/actions";
import {Dialogs} from "../../components/Dialogs/Dialogs";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default compose(
    withRouter)(DialogsContainer);
