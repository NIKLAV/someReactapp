import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Dialogs from './components/dialogs/dialogs';
import { Route, BrowserRouter } from 'react-router-dom';
import DialogsContainer from './components/dialogs/dialogs_container';



const App = (props) => {
  
  return (
  <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app__wrapper__content">
        <Route path='/dialogs' 
          render={() => <DialogsContainer store={props.store}/>}/>
        <Route path='/profile' 
          render={() => <Profile 
          store={props.store} />}/>
      </div>
    </div>
  </BrowserRouter>
    
  );
}


export default App;
