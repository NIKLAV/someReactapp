import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import ProfileContainer from './components/profile/ProfileContainer';
import { Route, BrowserRouter } from 'react-router-dom';
import DialogsContainer from './components/dialogs/dialogs_container';
import UsersContainer from './components/Users/usersContainer'


const App = (props) => {
  
  return (
  <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app__wrapper__content">
        <Route path='/dialogs' 
          render={() => <DialogsContainer />}/>
        <Route path='/profile/:userId?' 
          render={() => <ProfileContainer 
           />}/>

        <Route path='/users' 
          render={() => <UsersContainer 
           />}/>
      </div>
    </div>
  </BrowserRouter>
    
  );
}


export default App;
