import React from 'react';
import logo from './logo.svg';
import './App.css';

import MainMenubar from './components/MainMenubar'
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './components/Login';

function App() {
  return (
    <div>
      <BrowserRouter>
        <MainMenubar />
        <div className="container">
          <Route exact path="/" render={ () => <div>Main Page</div> } />
          <Route exact path="/login" component={Login} />
          <Route path="/about" render={ () => <div>About</div> } />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
