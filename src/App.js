import './App.css';
import { Route, Routes } from 'react-router-dom';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/Login';
import React from 'react';
import { connect } from 'react-redux';
import {initializeApp} from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import Navbar from './components/Navbar/Navbar';

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if(!this.props.initialized) return <Preloader />
    
    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/dialogs/*' element={<DialogsContainer />} />
            <Route path='/profile/:userId?' element={<ProfileContainer />} />
            <Route path='/users' element={<UsersContainer />} />
            <Route path='/login' element={<LoginContainer />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
});

export default connect(mapStateToProps, {initializeApp})(App);
