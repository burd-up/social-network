import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import {Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import ProfileConteiner from "./components/Profile/ProfileContainer";
import Login from "./components/Login/Login";
import {Component} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializedSuccess} from "./redux/app-reducer";
import Preloader from "./components/Preloader/Preloader";
import ToDoListContainer from "./components/ToDoList/ToDoListContainer";


class App extends Component {

    componentDidMount = () => {
        //authorization
        this.props.initializedSuccess();
    }

    render() {
        if (this.props.initialized === false) {
            return <Preloader/>
        }
        return (
                <div className="app-wrapper">
                    <HeaderContainer store={this.props.store}/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Route path='/dialogs' render={() => <DialogsContainer store={this.props.store}/>}/>
                        <Route path='/profile/:userId?' render={() => <ProfileConteiner store={this.props.store}/>}/>
                        <Route path='/users' render={() => <UsersContainer store={this.props.store}/>}/>
                        <Route path='/login' render={() => <Login store={this.props.store}/>}/>
                        <Route path='/todo' render={() => <ToDoListContainer store={this.props.store}/>}/>
                        <Route path='/news' component={News}/>
                        <Route path='/settings' component={Settings}/>
                        <Route path='/music' component={Music}/>
                    </div>
                </div>
        );
    }
}


let mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}

export default compose(
    //withRouter,
    connect(mapStateToProps, {initializedSuccess}))(App);
