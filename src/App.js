import React from 'react';
import './App.css';
import {Route, withRouter} from "react-router-dom";
import ProfilePageContainer from "./containers/ProfilePageContainer/ProfilePageContainer";
import DialogsContainer from "./containers/DialogsPageContainer/DialogsPageContainer";
import NavbarProfileContainer from "./containers/NavbarContainer/NavbarContainer";
import {connect} from "react-redux";
import UsersContainer from "./containers/UsersContainer/UsersContainer";
import AuthContainer from "./containers/AuthContainer/AuthContainer";
import Login from "./components/Login/Login";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {initializeApp} from "./redux/App/actions";
import {Spinner} from "reactstrap";
import {compose} from "redux";
import Search from "./components/Search/Search";

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Spinner/>
        }
        return (
            <div className='mx-5'>
                <AuthContainer/>
                <div className='d-flex'>
                    <NavbarProfileContainer/>
                    <Route path='/profile/:userId?' render={() => <ProfilePageContainer/>}/>
                    <Route path='/dialog' render={() => <DialogsContainer/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/search' render={() => <Search/>}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initializedSuccess
});

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
