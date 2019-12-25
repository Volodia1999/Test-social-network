import React from 'react';
import './App.css';
import {Route, Switch, withRouter} from "react-router-dom";
import NavbarProfileContainer from "./containers/NavbarContainer/NavbarContainer";
import {connect} from "react-redux";
import AuthContainer from "./containers/AuthContainer/AuthContainer";
import {initializeApp} from "./redux/App/actions";
import {Spinner} from "reactstrap";
import {compose} from "redux";
import ProfilePageContainer from "./containers/ProfilePageContainer/ProfilePageContainer";
import DialogsContainer from "./containers/DialogsPageContainer/DialogsPageContainer";
import UsersContainer from "./containers/UsersContainer/UsersContainer";
import Login from "./components/Login/Login";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
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
                    <Switch>
                        <Route path='/profile/:userId?' render={() => <ProfilePageContainer/>}/>
                        <Route path='/dialog' render={() => <DialogsContainer/>}/>
                        <Route exact path='/users' render={() => <UsersContainer/>}/>
                        <Route exact path='/login' render={() => <Login/>}/>
                        <Route exact path='/music' render={() => <Music/>}/>
                        <Route exact path='/news' render={() => <div className='text-center w-100'><h1>This will be news!</h1></div>}/>
                        <Route exact path='/settings' render={() => <Settings/>}/>
                        <Route exact path='/search' render={() => <Search/>}/>
                        <Route path='/' render={() => <div>Error 404</div>}/>
                    </Switch>
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
