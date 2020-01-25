import React from 'react';
import logo from './logo.svg';
import './App.css';

import MainMenubar from './components/MainMenubar'
import { BrowserRouter } from 'react-router-dom';
import store from './store'

import { Provider } from 'react-redux'
import View from './components/View';

function App() {
  return (
    <Provider store={ store }>
      <BrowserRouter>
        <MainMenubar />
        <div className="container">
          <View />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
