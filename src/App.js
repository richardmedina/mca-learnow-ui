import React from 'react';
import logo from './logo.svg';
import './App.css';

import MainMenubar from './components/MainMenubar'
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './components/Login';
import {
  AppContextProvider,
  AppContext
} from './context';

import Api from './libs/Api'

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
          <MainMenubar />
          <div className="container">
            <Route exact path="/" render={ () => <div>Main Page</div> } />
            <Route exact path="/login" component={Login} />
            <Route path="/about" render={ () => <div>About</div> } />
          </div>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
