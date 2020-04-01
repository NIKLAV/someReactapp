import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Dialogs from './components/dialogs/dialogs';
import { Route, BrowserRouter } from 'react-router-dom';



const App = (props) => {
  
  return (
  <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app__wrapper__content">
        <Route path='/dialogs' 
          render={() => <Dialogs store={props.store}/>}/>
        <Route path='/profile' 
          render={() => <Profile 
          state={props.state.profilePage} dispatch={props.dispatch} store={props.store} />}/>
      </div>
    </div>
  </BrowserRouter>
    
  );
}


export default App;
